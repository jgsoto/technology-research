import { z } from "zod";

export const profileSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  bio: z
    .string()
    .max(200, "Bio cannot exceed 200 characters")
    .optional(),

  website: z
    .string()
    .url("Invalid URL")
    .optional()
    .or(z.literal("")),
});

export type ProfileData = z.infer<typeof profileSchema>;
