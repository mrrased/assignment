import { z } from "zod";

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Title is required",
    }),
    email: z.string({
      required_error: "Author is required",
    }),
    password: z.string({
      required_error: "Genre is required",
    }),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
