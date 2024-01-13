import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// TODO: ADD CONFIG IN .ENV
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImageToCloudinary = async (filePath: string) => {
    if (!filePath) throw new Error("File path is required");

    // Limit file size to 150KB
    return await cloudinary.uploader.upload(filePath, {
        folder: "buybye-challenge",
        max_bytes: 150 * 1024,
    });
};

export const deleteImageFromCloudinary = async (publicId: string) => {
    return await cloudinary.uploader.destroy(publicId);
};
