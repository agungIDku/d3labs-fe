import { z } from "zod";

const homeSchema = z.object({
  username: z.string(),
});

export type HomeSchemaType = z.infer<typeof homeSchema>;

export default homeSchema;
