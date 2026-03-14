import User from "../models/User";

class userService {
  // Cria um novo usuário
  async create(userData: any) {
    const user = await User.create(userData);
    return user;
  }

  // Busca um usuário pelo ID
  async getById(id: string) {
    const user = await User.findById(id);
    return user;
  }

  // Atualiza um usuário existente
  async update(id: string, userData: any) {
    const user = await User.findByIdAndUpdate(id, userData, { new: true });
    return user;
  }
}

export default new userService();
