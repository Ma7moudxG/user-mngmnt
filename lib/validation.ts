import { z } from "zod";

export const UserFormValidation = z.object({
  email: z.string().email("Invalid email address"),
  password: z
  .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 50 characters"),
});

export const ClientFormValidation = z.object({
  username: z
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(50, "Username must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First Name must be at most 50 characters"),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last Name must be at most 50 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
  thumbnail: z.string(),
  group_name: z.string(),
  brand_name: z.string(),
  duration: z.string(),
  status: z.string().default("status"),
  anonymous: z.boolean().default(false),
  last_activity: z.date(),
  delete_flag: z.date(),
  ref_id: z.string(),
});

export const AssociatedUsersValidation = z.object({
  associatedUser: z.string()
})



export const CreateClientSchema = z.object({
  name: z.string().min(3, "client name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  clientImage: z.custom<File[]>(),
  contact: z.string().min(8, "client contact must be at least 8 characters"),
});

