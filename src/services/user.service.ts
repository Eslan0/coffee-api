import User from "../models/user.model";

class UserService {
  // create a new user
  async create(userData: any) {
    const user = await User.create(userData);
    return user;
  }

  // search for a user by id
  async getById(id: string) {
    const user = await User.findById(id);
    return user;
  }

  // update an existing user
  async update(id: string, userData: any) {
    const user = await User.findByIdAndUpdate(id, userData, { new: true });
    return user;
  }

  // deletes an existing user
  async delete(id: string) {
    const user = await User.findByIdAndDelete(id);
    return user;
  }
}

export default new UserService();
