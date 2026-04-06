import categoryService from "../services/category.service";

class CategoryController {
  // get /categories/:slug/products - Listar produtos de uma categoria específica
  async getCategory() {
    const categories = await categoryService.getCategory();
    return categories;
  }
}

export default new CategoryController();
