export type IUser = {
  name: string;
  email: string;
  password: string;
};

export type IUserFilter = {
  [key: string]: any;
  name?: string;
  email?: string;
  password?: string;
};
