"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const login = async (
  values: z.infer<typeof loginSchema>,
  role: string
) => {
  const validatedFields = loginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { id, password } = validatedFields.data;
  console.log("role login: ", role);
  let redirect = "/dashboard-hmif";
  if (role == "TPB") {
    redirect = "/dashboard-tpb";
  }
  try {
    await signIn("credentials", {
      id,
      password,
      role: role,
      redirectTo: redirect,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          console.log({ error: "Invalid Credentials!" });
          return { error: "Invalid Credentials!" };
        default:
          console.log({ error: "Something went wrong!" });
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
