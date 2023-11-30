import { Request, Response } from "express";
import { UserService } from "./users.Service";
import catchAsync from "../../../Shared/catchAsync";
import sendResponse from "../../../Shared/sendResponse";
import { IUser } from "./users.Interface";
import httpStatus from "http-status";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body;
  console.log("check req body", req.body);
  // const result = await UserService.createUser(userData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User created successfully",
    // data: result,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();

  sendResponse<IUser[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Get retrived successfully",
    data: result,
  });
});

export const UserController = {
  getAllUsers,
  createUser,
};
