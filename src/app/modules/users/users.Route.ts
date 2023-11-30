import express from "express";
import { UserController } from "./users.Controller";
import validateRequest from "../../../middlewares/validateRequest";
import { UserValidation } from "./users.Validation";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

router.get("/", UserController.getAllUsers);

router.get("/:id", UserController.getSingleUser);

router.patch(
  "/:id",
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
);

router.delete("/:id", UserController.deleteUser);

export const UserRoutes = router;
