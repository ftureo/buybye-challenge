import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import fs from "fs-extra";

import { User } from "../models/User";
import { Photo } from "../models/Photo";
import { IRegisterUser } from "../interfaces/authInterfaces";
import { convertToCPF } from "../utils/utils";
import {
    encryptPass,
    comparePass,
    createAccessToken,
} from "../utils/protect-data";
import { uploadImageToCloudinary } from "../utils/cloudinary";
import { sequelizeConnection } from "../db/database";

const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();

    res.status(200).json(users);
};

const signUp = async (req: Request, res: Response): Promise<void> => {
    const {
        name,
        cpf,
        dateOfBirth,
        phoneNumber,
        state,
        city,
        email,
        password,
    } = req.body as IRegisterUser;

    const photo = req.files?.photo;

    try {
        const userExists = await User.findOne({
            where: {
                email,
            },
        });

        if (userExists) {
            res.status(409).json({ error: "User already exists" });
        }
        const hashedPassword = await encryptPass(password);

        const user = await User.create({
            name,
            cpf: convertToCPF(cpf),
            dateOfBirth,
            phoneNumber,
            state,
            city,
            email,
            password: hashedPassword,
        });

        let image;
        // Link photo to user
        if (photo) {
            if (photo && (photo as UploadedFile).size > 150 * 1024) {
                res.status(400).json({ error: "File size is too big" });
            }

            const resultUploadedPhoto = await uploadImageToCloudinary(
                (photo as UploadedFile).tempFilePath
            );

            image = {
                urlPhoto: resultUploadedPhoto.url,
                userId: user.get("id"), // Access the 'id' property of the user model
                publicUrl: resultUploadedPhoto.public_id,
            };

            // Create photo and update user with photo
            await User.update(
                {
                    photo: image?.urlPhoto,
                },
                {
                    where: {
                        id: user.get("id"),
                    },
                }
            );

            await Photo.create({
                urlPhoto: image?.urlPhoto,
                userId: image?.userId,
                publicUrl: image?.publicUrl,
            });
        }

        // Delete photo from temp folder
        await fs.remove((photo as UploadedFile).tempFilePath);

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
};

const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    console.log({ email, password })

    if (!email || !password) {
        res.status(400).json({ error: "Email and password are required" });
    }

    const userExists = await User.findOne({
        where: {
            email,
        },
    });

    console.log({ userExists });
    //Not founded
    if (!userExists) {
        res.status(404).json({
            error: "User not found. Please, create an account in our services",
        });
    }

    const hasMatch =
        userExists &&
        (await comparePass(password, userExists.get("password") as string));

    // Unauthorized
    if (!hasMatch) {
        res.status(401).json({ error: "Incorrect password" });
    }

    const accessToken =
        userExists && (await createAccessToken(userExists.get("id") as string));

    accessToken && res.status(200).json({ accessToken });
};

const signOut = async (req: Request, res: Response) => {};

const confirmEmail = async (req: Request, res: Response) => {
    const { email } = req.body;

    const user = await User.findOne({
        where: {
            email,
        },
    });

    if (!user) {
        res.status(404).json({
            error: "User not found. We couldn't confirm the account",
        });
    }

    await User.update(
        {
            active: true,
        },
        {
            where: {
                email,
            },
        }
    );

    res.status(200).json({ message: "Email confirmed" });
};

const deleteUsers = async function (req: Request, res: Response) {
    // Delete all users

    await User.destroy({
        where: {},
    });

    // Re-add foreign key constraints
    await sequelizeConnection.query("SET FOREIGN_KEY_CHECKS = 1");

    res.status(200).json({ message: "All users deleted" });
};

// // TODO: BUILD
// const forgotPassword = async (req: Request, res: Response) => {};

export { signUp, signIn, signOut, confirmEmail, getUsers, deleteUsers };
