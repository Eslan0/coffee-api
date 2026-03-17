import { Context } from "koa";
import { Request, Response } from "express";
import multer from "multer";
import { uploadToCloudinary } from "../services/uploadService";
import ProductService from "../services/productService";

const storage = multer.memoryStorage(); // Manter a foto na RAM temporariamente
const upload = multer({ storage, limits: { files: 4 } });

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description } = req.body;
    const files = req.files as Express.Multer.File[];

    // Enviar todas as imagens para o Cloudinary em paralelo
    const uploadPromises = files.map((file) => uploadToCloudinary(file.buffer));
    const imageUrls = await Promise.all(uploadPromises);

    return res.status(201).json({
      message: "Produto criado!",
      images: imageUrls, // URLs prontas do Cloudinary
    });
  } catch (error) {
    return res.status(500).json({ error: "Erro no upload" });
  }
};

export class ProductController {
  async create(ctx: Context) {
    try {
      // O Multer coloca os arquivos aqui:
      const files = ctx.files as any[]; // Ou use o tipo Multer.File[]

      // Os campos de texto (nome, preço) ficam aqui:
      const { name, price } = ctx.request.body;

      if (!files || files.length === 0) {
        ctx.status = 400;
        ctx.body = { error: "Envie fotos!" };
        return;
      }

      // Chame seu Service aqui passando os files...
      ctx.body = { message: "Recebido!", count: files.length };
      const { name, price } = req.body;

      // em Express
      // O multer coloca os arquivos em req.files
      const files = req.files as Express.Multer.File[];

      if (!files || files.length === 0) {
        return res.status(400).json({ error: "Envie pelo menos uma foto." });
      }

      const productService = new productService();
      const product = await productService.execute({ name, price, files });

      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: "Erro interno ao criar produto." });
    }
  }
}

export default new ProductController();
