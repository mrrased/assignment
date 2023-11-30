import { IUser } from "./users.Interface";
import { User } from "./users.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createUser = await User.create(user);
  if (!createUser) {
    throw new Error("Failed to create user");
  }
  return createUser;
};

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find({});
  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
};
