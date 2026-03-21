import Product from "../models/Product";

class ProductService {
  // Busca todos os produtos
  async getAll() {
    const products = await Product.find();
    return products;
  }

  // Busca um produto pelo ID
  async getById(id: string) {
    const product = await Product.findById(id);
    return product;
  }

  // Cria um novo produto
  async create(data: any) {
    // Aqui entrariam validações extras, ex: verificar se o SKU já existe
    const product = await Product.create(data);
    return product;
  }

  // Atualiza um produto existente
  async update(id: string, data: any) {
    const product = await Product.findByIdAndUpdate(id, data, { new: true });
    return product;
  }

  // Exclui um produto existente
  async delete(id: string) {
    const product = await Product.findByIdAndDelete(id);
    return product;
  }
}

export default new ProductService();
