import z from "zod";
import {
  CategoriesObjectWithBaseUnionSchema,
  CategoryObjectWithBaseSchema,
  TodoObjectDateSchema,
} from "../types";

export const FormDataSchema = z.object({
  title: z.string().min(1, { message: "Minimum length is 1." }),
  description: z.string().optional(),
  deadline: z.string(),
  done: z.boolean(),
  selectedCategory: z.string(),
});
export type FormDataType = z.infer<typeof FormDataSchema>;

export const ArgsSchema = TodoObjectDateSchema.extend({
  selectedCategory: CategoryObjectWithBaseSchema,
  categories: CategoriesObjectWithBaseUnionSchema,
});
export type ArgsType = z.infer<typeof ArgsSchema>;

export const PropsSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  deadline: z.date().optional(),
  done: z.boolean().optional(),
  onSubmit: z.function().args(ArgsSchema).returns(z.void()),
});
export type PropsType = z.infer<typeof PropsSchema>;
