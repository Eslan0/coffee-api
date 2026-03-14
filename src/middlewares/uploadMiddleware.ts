import Multer from "@koa/multer";

// Configuração do Multer
const storage = Multer.memoryStorage();
const upload = Multer({
  storage,
  limits: {
    files: 4, // Máximo de arquivos
    fileSize: 5 * 1024 * 1024, // 5MB por arquivo
  },
});

// Exporta apenas a execução do array
export const uploadPhotos = upload.array("photos", 4);
