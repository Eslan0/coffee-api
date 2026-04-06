import { Context } from "koa";
import multer from "multer";
import { uploadToCloudinary } from "../services/upload.service";
import productService from "../services/product.service";

const storage = multer.memoryStorage(); // Manter a foto na RAM temporariamente
const upload = multer({ storage, limits: { files: 4 } });

export const createProduct = async (ctx: Context) => {
  try {
    const { name, price, description } = ctx.body;
    const files = ctx.files as Express.Multer.File[];

    // Enviar todas as imagens para o Cloudinary em paralelo
    const uploadPromises = files.map((file) => uploadToCloudinary(file.buffer));
    const imageUrls = await Promise.all(uploadPromises);

    return ctx.status(201).json({
      message: "Product created!",
      images: imageUrls, // URLs prontas do Cloudinary
    });
  } catch (error) {
    return ctx.status(500).json({ error: "Upload error" });
  }
};

class ProductController {
  async create(ctx: Context) {
    try {
      // O Multer coloca os arquivos aqui:
      const files = ctx.files as any[]; // Ou use o tipo Multer.File[]

      // Os campos de texto (nome, preço) ficam aqui:
      const { name, price } = ctx.request.body;

      if (!files || files.length === 0) {
        ctx.status = 400;
        ctx.body = { error: "Send photos!" };
        return;
      }

      // Chame seu Service aqui passando os files...
      ctx.body = { message: "Received!", count: files.length };
      const { name, price } = ctx.body;

      // em Express
      // O multer coloca os arquivos em req.files
      const files = ctx.files as Express.Multer.File[];

      if (!files || files.length === 0) {
        return ctx.status(400).json({ error: "Send at least one photo" });
      }

      const productService = new productService();
      const product = await productService.execute({ name, price, files });

      return ctx.status(201).json(product);
    } catch (error) {
      return ctx.status(500).json({ error: "Internal error while creating product" });
    }
  }
}

export default new ProductController();
