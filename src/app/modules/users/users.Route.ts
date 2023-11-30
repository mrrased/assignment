import express from "express";
import { UserController } from "./users.Controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);

router.get("/", UserController.getAllUsers);

export const UserRoutes = router;
