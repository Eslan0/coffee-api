import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier"; // útil para enviar buffers sem salvar arquivo temporário

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "seu_cloud_name",
  api_key: process.env.CLOUDINARY_API_KEY || "sua_api_key",
  api_secret: process.env.CLOUDINARY_API_SECRET || "seu_api_secret",
});

export const uploadToCloudinary = (fileBuffer: Buffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream({ folder: "produtos" }, (error, result) => {
      if (result) resolve(result.secure_url);
      else reject(error);
    });
    // Transforma o buffer em stream e envia para o Cloudinary
    streamifier.createReadStream(fileBuffer).pipe(uploadStream);
  });
};
