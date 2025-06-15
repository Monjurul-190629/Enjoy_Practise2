import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Name should be at least 3 characters"),
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password should be at least 6 characters"),
  phone: z.string()
    .min(10, "Minimum 10 numbers needed")
    .regex(/^\+?\d{10,15}$/, "Invalid phone number format"),

  image: z
    .any()
    .refine((file: File) => file instanceof File, "Invalid file")
    .refine((file: File) => file.size <= 2 * 1024 * 1024, "Image must be ≤ 2MB")
    .refine(
      (file: File) =>
        ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Only .jpg, .png, or .webp files are allowed"
    ),
});

export type userSchema = z.infer<typeof userSchema>;
