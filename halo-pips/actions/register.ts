// "use server";

// import { db } from "@/lib/db";
// import * as z from "zod";
// import { createSchema } from "@/schemas";
// import bcrypt from "bcryptjs";

// export const register = async (values: z.infer<typeof createSchema>) => {
//   const validatedFields = createSchema.safeParse(values);
//   if (!validatedFields.success) {
//     return { error: "Invalid fields" };
//   }
//   const username = values.username;
//   const password = values.password;
//   const name = values.name;
//   const angkatan = values.angkatan;
//   const kampus = values.kampus;
//   const jurusan = values.jurusan;
//   const rate = values.rate;
//   const idline = values.idline;
//   const jabatan = values.jabatan;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const role = values.role;
//   await db.user.create({
//     data: {
//       name,
//       username,
//       password: hashedPassword,
//       angkatan,
//       kampus,
//       jurusan,
//       rate,
//       idline,
//       jabatan,
//       role,
//     },
//   });

//   console.log("success");
// };
