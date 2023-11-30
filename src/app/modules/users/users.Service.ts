import { IUser, IUserFilter } from "./users.Interface";
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

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);

  return result;
};

const updateUser = async (
  id: string,
  payload: Partial<IUserFilter>
): Promise<IUser | null> => {
  const filteredFields: IUserFilter = {};

  for (const key in payload) {
    if (payload[key] !== "") {
      filteredFields[key] = payload[key];
    }
  }

  const result = await User.findOneAndUpdate({ _id: id }, filteredFields, {
    new: true,
  });

  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);

  return result as unknown as IUser | null;
};

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
