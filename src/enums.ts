import z from "zod";

export const FilterDoneEnumSchema = z.enum(["default", "done", "notDone"]);
export type FilterDoneEnumType = z.infer<typeof FilterDoneEnumSchema>;

export const TypeOfNotifyEnumSchema = z.enum([
  "info",
  "error",
  "success",
  "warning",
]);
export type TypeOfNotifyEnumType = z.infer<typeof FilterDoneEnumSchema>;
