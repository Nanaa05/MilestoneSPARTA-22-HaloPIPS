import { z } from "zod";

export const createSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(1, {
    message: "Invalid password",
  }),
  name: z.string().min(1, {
    message: "Invalid",
  }),
  angkatan: z.coerce.number().gte(1, {
    message: "Invalid",
  }),
  kampus: z.string().min(1, {
    message: "Invalid",
  }),
  jurusan: z.string().min(1, {
    message: "Invalid",
  }),
  rate: z.coerce.number().gte(1, {
    message: "Invalid",
  }),
  idline: z.string().min(1, {
    message: "Invalid",
  }),
  jabatan: z.string().min(1, {
    message: "Invalid",
  }),
  role: z.string(),
});

export const loginSchema = z.object({
  id: z.string().min(0, {
    message: "id is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const chatSchema = z.object({
  message: z.string(),
});
