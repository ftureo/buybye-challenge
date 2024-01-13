import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const encryptPass = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const comparePass = async (
    password: string,
    receivedPassword: string
) => {
    return await bcrypt.compare(password, receivedPassword);
};

const createAccessToken = async (userId: string) => {
    if (!process.env.ACCESS_TOKEN_SECRET)
        throw new Error(
            "Could not find a main access token secret. Please check with the administrator."
        );

    return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "168h"
    });
};


export { encryptPass, comparePass, createAccessToken };