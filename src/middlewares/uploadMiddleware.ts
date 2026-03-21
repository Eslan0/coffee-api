import Multer from "@koa/multer";

// multir configuration
const storage = Multer.memoryStorage();
const upload = Multer({
  storage,
  limits: {
    files: 4, // Maximum number of files
    fileSize: 5 * 1024 * 1024, // 5MB per file
  },
});

// exports only the array execution
export const uploadPhotos = upload.array("photos", 4);
