import { z } from "zod";

export const CreateNotify = z.object({
    subject: z.string().min(1, "Subject can't be empty"),
    body: z.string().min(1, "Body can't be empty"),
  });