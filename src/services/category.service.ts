import Category from "../models/category.model";

class CategoryService {
  async getCategory() {
    const categories = await Category.find();
    return categories;
  }
}

export default new CategoryService();
