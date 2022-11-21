import z from "zod";
import { FilterDoneEnumSchema, TypeOfNotifyEnumSchema } from "../enums";

export const NullSchema = z.null();
export type NullSchema = z.infer<typeof NullSchema>;

export const VoidSchema = z.void();
export type VoidType = z.infer<typeof VoidSchema>;

export const UndefinedSchema = z.undefined();
export type UndefinedType = z.infer<typeof UndefinedSchema>;

export const BooleanSchema = z.boolean();
export type BooleanType = z.infer<typeof BooleanSchema>;

export const StringSchema = z.string();
export type StringType = z.infer<typeof StringSchema>;

export const NumberSchema = z.number();
export type NumberType = z.infer<typeof NumberSchema>;

export const NumberUnionSchema = z.union([NumberSchema, UndefinedSchema]);
export type NumberUnionType = z.infer<typeof NumberUnionSchema>;

export const ArrayNumbersSchema = z.array(NumberSchema);
export type ArrayNumbersType = z.infer<typeof ArrayNumbersSchema>;

export const DateSchema = z.date();
export type DateType = z.infer<typeof DateSchema>;

export const DateStringUnionSchema = z.union([
  DateSchema.min(new Date(), { message: "Please select a date and time." }),
  StringSchema,
]);
export type DateStringUnionType = z.infer<typeof DateStringUnionSchema>;

export const DoneFilterOptionsSchema = z.array(
  z.object({ value: FilterDoneEnumSchema, label: StringSchema })
);
export type DoneFilterOptionsType = z.infer<typeof DoneFilterOptionsSchema>;

export const FunctionWithEnumVoidSchema = z
  .function()
  .args(FilterDoneEnumSchema)
  .returns(VoidSchema);
export type FunctionWithEnumVoidType = z.infer<
  typeof FunctionWithEnumVoidSchema
>;

export const FunctionWithStringVoidSchema = z
  .function()
  .args(StringSchema)
  .returns(VoidSchema);
export type FunctionWithStringVoidType = z.infer<
  typeof FunctionWithStringVoidSchema
>;

/*Base Types*/
export const BaseObjectSchema = z.object({
  id: StringSchema,
  createdAt: DateSchema,
});
export type BaseObjectType = z.infer<typeof BaseObjectSchema>;

export const ItemObjectSchema = z.object({
  title: StringSchema.min(1, {
    message: "Please enter title.",
  }),
  description: StringSchema.optional(),
});
export type ItemObjectType = z.infer<typeof ItemObjectSchema>;

export const ItemObjectExtendedSchema =
  ItemObjectSchema.merge(BaseObjectSchema);
export type ItemObjectExtendedType = z.infer<typeof ItemObjectExtendedSchema>;

/*Category Types*/
export const CategoryObjectSchema = ItemObjectSchema.extend({
  todoItems: z.array(NumberSchema),
});
export type CategoryObjectType = z.infer<typeof CategoryObjectSchema>;

export const CategoryObjectExtendedSchema = ItemObjectExtendedSchema.extend({
  todoItems: z.array(NumberSchema),
});
export type CategoryObjectExtendedType = z.infer<
  typeof CategoryObjectExtendedSchema
>;

export const CategoryObjectWithBaseSchema =
  CategoryObjectSchema.merge(BaseObjectSchema);
export type CategoryObjectWithBaseType = z.infer<
  typeof CategoryObjectWithBaseSchema
>;

export const CategoriesObjectWithBaseSchema = z.array(
  CategoryObjectWithBaseSchema
);
export type CategoriesObjectWithBaseType = z.infer<
  typeof CategoriesObjectWithBaseSchema
>;

export const CategoryObjectWithBaseUnionSchema = z.union([
  CategoryObjectWithBaseSchema,
  UndefinedSchema,
]);
export type CategoryObjectWithBaseUnionType = z.infer<
  typeof CategoryObjectWithBaseUnionSchema
>;

export const CategoryObjectWithBaseUnionStringSchema = z.union([
  CategoryObjectWithBaseSchema,
  StringSchema,
]);
export type CategoryObjectWithBaseUnionStringType = z.infer<
  typeof CategoryObjectWithBaseUnionStringSchema
>;

export const CategoriesObjectWithBaseUnionSchema = z.union([
  CategoriesObjectWithBaseSchema,
  UndefinedSchema,
]);
export type CategoriesObjectWithBaseUnionType = z.infer<
  typeof CategoriesObjectWithBaseUnionSchema
>;

/*Todo Types*/
export const TodoObjectSchema = ItemObjectSchema.extend({
  deadline: StringSchema.transform((date) => new Date(date)),
  done: BooleanSchema,
});
export type TodoObjectType = z.infer<typeof TodoObjectSchema>;

export const TodoObjectWithDateSchema = ItemObjectSchema.extend({
  deadline: DateSchema,
  done: BooleanSchema,
});
export type TodoObjectWithDateType = z.infer<typeof TodoObjectWithDateSchema>;

export const TodoObjectWithBaseSchema =
  TodoObjectSchema.merge(BaseObjectSchema);
export type TodoObjectWithBaseType = z.infer<typeof TodoObjectWithBaseSchema>;

export const TodoObjectWithBaseDateSchema =
  TodoObjectWithDateSchema.merge(BaseObjectSchema);
export type TodoObjectWithBaseDateType = z.infer<
  typeof TodoObjectWithBaseDateSchema
>;

export const TodosObjectWithBaseDateSchema = z.array(
  TodoObjectWithBaseDateSchema
);
export type TodosObjectWithBaseDateType = z.infer<
  typeof TodosObjectWithBaseDateSchema
>;

export const TodoObjectWithBaseUnionSchema = z.union([
  TodoObjectWithBaseSchema,
  UndefinedSchema,
]);
export type TodoObjectWithBaseUnionType = z.infer<
  typeof TodoObjectWithBaseUnionSchema
>;

export const TodosObjectWithBaseSchema = z.array(TodoObjectWithBaseSchema);
export type TodosObjectWithBaseType = z.infer<typeof TodosObjectWithBaseSchema>;

export const TodosObjectWithBaseUnionSchema = z.union([
  TodosObjectWithBaseSchema,
  UndefinedSchema,
]);
export type TodosObjectWithBaseUnionType = z.infer<
  typeof TodosObjectWithBaseUnionSchema
>;

export const TodosObjectWithBaseDateUnionSchema = z.union([
  TodosObjectWithBaseDateSchema,
  UndefinedSchema,
]);
export type TodosObjectWithBaseDateUnionType = z.infer<
  typeof TodosObjectWithBaseDateUnionSchema
>;

export const FunctionWithTodoObjectVoidSchema = z
  .function()
  .args(TodoObjectWithBaseDateSchema)
  .returns(VoidSchema);
// export type FunctionWithTodoObjectVoidType = z.infer<
//   typeof FunctionWithTodoObjectVoidSchema
// >;

/*Title*/
export const TitlePropsSchema = ItemObjectSchema.extend({
  id: StringSchema.optional(),
});
export type TitlePropsSchema = z.infer<typeof TitlePropsSchema>;

/*Filter*/
export const FilterPropsSchema = z.object({
  onChange: FunctionWithEnumVoidSchema,
});
export type FilterPropsType = z.infer<typeof FilterPropsSchema>;

/*Search*/
export const SearchPropsSchema = z.object({
  onChange: FunctionWithStringVoidSchema,
});
export type SearchPropsType = z.infer<typeof SearchPropsSchema>;

/*Loading*/
export const LoadingPropsSchema = z.object({
  title: StringSchema,
  type: TypeOfNotifyEnumSchema,
});
export type LoadingPropsType = z.infer<typeof LoadingPropsSchema>;

/*CountDown*/
export const CountDownPropsSchema = z.object({
  deadline: DateSchema,
  className: StringSchema.optional(),
});
export type CountDownPropsType = z.infer<typeof CountDownPropsSchema>;

/*SeoHead*/
export const SeoHeadPropsSchema = z.object({
  siteTitle: StringSchema,
  siteDescription: StringSchema,
  favicon: StringSchema.optional(),
});
export type SeoHeadPropsType = z.infer<typeof SeoHeadPropsSchema>;

/*TodoTable*/

export const TodoTablePropsSchema = z.object({
  todoItems: ArrayNumbersSchema,
  onDelete: FunctionWithTodoObjectVoidSchema,
});
export type TodoTablePropsType = z.infer<typeof TodoTablePropsSchema>;

/*TodoCard*/
export const TodoCardPropsSchema = z.object({
  todo: TodoObjectWithBaseDateSchema,
  onDelete: FunctionWithStringVoidSchema,
  onDone: FunctionWithTodoObjectVoidSchema,
});
export type TodoCardPropsType = z.infer<typeof TodoCardPropsSchema>;

export const CategoryCardPropsSchema = z.object({
  id: StringSchema,
  title: StringSchema,
  description: StringSchema.optional(),
  onDelete: FunctionWithStringVoidSchema,
});
export type CategoryCardPropsType = z.infer<typeof CategoryCardPropsSchema>;

/*Category Form*/
// export const CategoryFormObjectSchema = z.object({
//   category: ItemObjectSchema,
// });
//export type CategoryFormObjectType = z.infer<typeof CategoryFormObjectSchema>;

export const FunctionWithCategoryFormSchema = z
  .function()
  .args(ItemObjectSchema)
  .returns(VoidSchema);
// export type FunctionWithCategoryFormType = z.infer<
//   typeof FunctionWithCategoryFormSchema
// >;

export const CategoryFormPropsSchema = ItemObjectSchema.extend({
  onSubmit: FunctionWithCategoryFormSchema,
});
export type CategoryFormPropsType = z.infer<typeof CategoryFormPropsSchema>;

export const CategoryFormAddSchema = ItemObjectSchema.extend({
  todoItems: z.array(NumberSchema).optional(),
});
export type CategoryFormAddType = z.infer<typeof CategoryFormAddSchema>;

// export const CategoryFormEditSchema =
//   CategoryFormAddSchema.merge(BaseObjectSchema);
//export type CategoryFormEditType = z.infer<typeof CategoryFormEditSchema>;

// export const CategoryFormDataUnionSchema = z.union([
//   CategoryFormAddSchema,
//   CategoryFormEditSchema,
// ]);
//export type CategoryFormDataUnionType = z.infer<
//   typeof CategoryFormDataUnionSchema
// >;

// export const FunctionCategoryFormWithDataVoidSchema = z
//   .function()
//   .args(CategoryFormDataUnionSchema)
//   .returns(VoidSchema);
// export type FunctionCategoryFormWithDataVoidType = z.infer<
//   typeof FunctionWithStringVoidSchema
// >;

/*Todo Form*/
// export const TodoFormAddSchema = TodoObjectSchema.extend({
//   selectedCategory: CategoryObjectWithBaseUnionStringSchema,
// });
//export type TodoFormAddType = z.infer<typeof TodoFormAddSchema>;

//export const TodoFormEditSchema = TodoFormAddSchema.merge(BaseObjectSchema);
//export type TodoFormEditType = z.infer<typeof TodoFormEditSchema>;

// export const FunctionTodoFormWithDataVoidSchema = z
//   .function()
//   .args(TodoFormAddSchema)
//   .returns(VoidSchema);
//export type FunctionTodoFormWithDataVoidType = z.infer<typeof FunctionWithStringVoidSchema>;

// export const TodoFormPropsSchema = z.object({
//   id: StringSchema.optional(),
//   title: StringSchema.optional(),
//   description: StringSchema.optional(),
//   deadline: DateSchema.optional(),
//   done: BooleanSchema.optional(),
//   categories: CategoriesObjectWithBaseUnionSchema,
//   onSubmit: FunctionTodoFormWithDataVoidSchema,
// });
//export type TodoFormPropsType = z.infer<typeof TodoFormPropsSchema>;

// export const TodoFormSubmitHandlerSchema = z.object({
//   title: StringSchema,
//   description: StringSchema.optional(),
//   deadline: DateSchema,
//   done: BooleanSchema,
//   selectedCategory: CategoriesObjectWithBaseUnionSchema,
// });
// export type TodoFormSubmitHandlerType = z.infer<
//   typeof TodoFormSubmitHandlerSchema
// >;

export const TodoObjectDateSchema = ItemObjectSchema.extend({
  deadline: DateSchema,
  done: BooleanSchema,
});
//export type TodoObjectDateType = z.infer<typeof TodoObjectDateSchema>;

// export const TodoEditFormSchema = TodoObjectDateSchema.extend({
//   selectedCategory: CategoryObjectWithBaseUnionStringSchema,
// });
//export type TodoEditFormType = z.infer<typeof TodoEditFormSchema>;

// export const FunctionOnSubmitEditFormSchema = z
//   .function()
//   .args(TodoEditFormSchema)
//   .returns(VoidSchema);
// export type FunctionOnSubmitEditFormType = z.infer<
//   typeof FunctionOnSubmitEditFormSchema
// >;

// export const TodoEditFormPropsSchema = z.object({
//   id: StringSchema.optional(),
//   title: StringSchema.optional(),
//   description: StringSchema.optional(),
//   deadline: DateSchema.optional(),
//   done: BooleanSchema.optional(),
//   categories: CategoriesObjectWithBaseSchema,
//   onSubmit: FunctionOnSubmitEditFormSchema,
// });
//export type TodoEditFormPropsType = z.infer<typeof TodoEditFormPropsSchema>;

// export const FormDataSchema = z.object({
//   title: z.string().min(1, { message: "Minimum length is 1." }),
//   description: z.string().optional(),
//   deadline: z.string(),
//   done: z.boolean(),
//   selectedCategory: z.string(),
// });
//export type FormDataType = z.infer<typeof FormDataSchema>;

export const ArgsSchema = TodoObjectDateSchema.extend({
  selectedCategory: CategoryObjectWithBaseSchema,
  categories: CategoriesObjectWithBaseUnionSchema,
});
export type ArgsType = z.infer<typeof ArgsSchema>;

// export const PropsSchema = z.object({
//   id: z.string().optional(),
//   title: z.string().optional(),
//   description: z.string().optional(),
//   deadline: z.date().optional(),
//   done: z.boolean().optional(),
//   onSubmit: z.function().args(ArgsSchema).returns(z.void()),
// });
//export type PropsType = z.infer<typeof PropsSchema>;
