import { Request, Response } from "express";
import multer from "multer";
import { uploadToCloudinary } from "../services/uploadService";

const storage = multer.memoryStorage(); // Mantém a foto na RAM temporariamente
const upload = multer({ storage, limits: { files: 4 } });

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description } = req.body;
    const files = req.files as Express.Multer.File[];

    // 1. Enviar todas as imagens para o Cloudinary em paralelo
    const uploadPromises = files.map((file) => uploadToCloudinary(file.buffer));
    const imageUrls = await Promise.all(uploadPromises);

    // 2. Salvar no Banco de Dados (Exemplo com Prisma ou similar)
    // const newProduct = await db.product.create({
    //   data: { name, price: Number(price), description, images: imageUrls }
    // });

    return res.status(201).json({
      message: "Produto criado!",
      images: imageUrls, // URLs prontas do Cloudinary
    });
  } catch (error) {
    return res.status(500).json({ error: "Erro no upload" });
  }
};

// Na sua rota:
// router.post('/products', upload.array('photos', 4), createProduct);
import { Context } from "koa";

export class ProductController {
  async create(ctx: Context) {
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
  }
}

import ProductService from "../services/productService";

export class ProductController {
  async create(req: Request, res: Response) {
    try {
      const { name, price } = req.body;

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
