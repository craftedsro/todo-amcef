"use strict";
exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 7080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O3": () => (/* binding */ FormDataSchema),
/* harmony export */   "zX": () => (/* binding */ ItemObjectSchema)
/* harmony export */ });
/* unused harmony exports NullSchema, VoidSchema, UndefinedSchema, BooleanSchema, StringSchema, NumberSchema, NumberUnionSchema, ArrayNumbersSchema, DateSchema, DateStringUnionSchema, DoneFilterOptionsSchema, FunctionWithEnumVoidSchema, FunctionWithStringVoidSchema, BaseObjectSchema, ItemObjectExtendedSchema, CategoryObjectSchema, CategoryObjectExtendedSchema, CategoryObjectWithBaseSchema, CategoriesObjectWithBaseSchema, CategoryObjectWithBaseUnionSchema, CategoryObjectWithBaseUnionStringSchema, CategoriesObjectWithBaseUnionSchema, TodoObjectSchema, TodoObjectWithDateSchema, TodoObjectWithBaseSchema, TodoObjectWithBaseDateSchema, TodosObjectWithBaseDateSchema, TodoObjectWithBaseUnionSchema, TodosObjectWithBaseSchema, TodosObjectWithBaseUnionSchema, TodosObjectWithBaseDateUnionSchema, FunctionWithTodoObjectVoidSchema, TitlePropsSchema, FilterPropsSchema, SearchPropsSchema, LoadingPropsSchema, CountDownPropsSchema, SeoHeadPropsSchema, TodoTablePropsSchema, TodoCardPropsSchema, CategoryCardPropsSchema, CategoryFormObjectSchema, FunctionWithCategoryFormSchema, CategoryFormPropsSchema, CategoryFormAddSchema, CategoryFormEditSchema, CategoryFormDataUnionSchema, FunctionCategoryFormWithDataVoidSchema, TodoFormAddSchema, TodoFormEditSchema, FunctionTodoFormWithDataVoidSchema, TodoFormPropsSchema, TodoFormSubmitHandlerSchema, TodoObjectDateSchema, TodoEditFormSchema, FunctionOnSubmitEditFormSchema, TodoEditFormPropsSchema, ArgsSchema, PropsSchema */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7946);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _enums__WEBPACK_IMPORTED_MODULE_1__]);
([zod__WEBPACK_IMPORTED_MODULE_0__, _enums__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const NullSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["null"]();
const VoidSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["void"]();
const UndefinedSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].undefined();
const BooleanSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].boolean();
const StringSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].string();
const NumberSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].number();
const NumberUnionSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].union([
    NumberSchema,
    UndefinedSchema
]);
const ArrayNumbersSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].array(NumberSchema);
const DateSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].date();
const DateStringUnionSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].union([
    DateSchema.min(new Date(), {
        message: "Please select a date and time."
    }),
    StringSchema
]);
const DoneFilterOptionsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].array(zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    value: _enums__WEBPACK_IMPORTED_MODULE_1__/* .FilterDoneEnumSchema */ .H,
    label: StringSchema
}));
const FunctionWithEnumVoidSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["function"]().args(_enums__WEBPACK_IMPORTED_MODULE_1__/* .FilterDoneEnumSchema */ .H).returns(VoidSchema);
const FunctionWithStringVoidSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["function"]().args(StringSchema).returns(VoidSchema);
/*Base Types*/ const BaseObjectSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    id: StringSchema,
    createdAt: DateSchema
});
const ItemObjectSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    title: StringSchema.min(1, {
        message: "Please enter title."
    }),
    description: StringSchema.optional()
});
const ItemObjectExtendedSchema = ItemObjectSchema.merge(BaseObjectSchema);
/*Category Types*/ const CategoryObjectSchema = ItemObjectSchema.extend({
    todoItems: zod__WEBPACK_IMPORTED_MODULE_0__["default"].array(NumberSchema)
});
const CategoryObjectExtendedSchema = ItemObjectExtendedSchema.extend({
    todoItems: zod__WEBPACK_IMPORTED_MODULE_0__["default"].array(NumberSchema)
});
const CategoryObjectWithBaseSchema = CategoryObjectSchema.merge(BaseObjectSchema);
const CategoriesObjectWithBaseSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].array(CategoryObjectWithBaseSchema);
const CategoryObjectWithBaseUnionSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].union([
    CategoryObjectWithBaseSchema,
    UndefinedSchema
]);
const CategoryObjectWithBaseUnionStringSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].union([
    CategoryObjectWithBaseSchema,
    StringSchema
]);
const CategoriesObjectWithBaseUnionSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].union([
    CategoriesObjectWithBaseSchema,
    UndefinedSchema
]);
/*Todo Types*/ const TodoObjectSchema = ItemObjectSchema.extend({
    deadline: StringSchema.transform((date)=>new Date(date)),
    done: BooleanSchema
});
const TodoObjectWithDateSchema = ItemObjectSchema.extend({
    deadline: DateSchema,
    done: BooleanSchema
});
const TodoObjectWithBaseSchema = TodoObjectSchema.merge(BaseObjectSchema);
const TodoObjectWithBaseDateSchema = TodoObjectWithDateSchema.merge(BaseObjectSchema);
const TodosObjectWithBaseDateSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].array(TodoObjectWithBaseDateSchema);
const TodoObjectWithBaseUnionSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].union([
    TodoObjectWithBaseSchema,
    UndefinedSchema
]);
const TodosObjectWithBaseSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].array(TodoObjectWithBaseSchema);
const TodosObjectWithBaseUnionSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].union([
    TodosObjectWithBaseSchema,
    UndefinedSchema
]);
const TodosObjectWithBaseDateUnionSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].union([
    TodosObjectWithBaseDateSchema,
    UndefinedSchema
]);
const FunctionWithTodoObjectVoidSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["function"]().args(TodoObjectWithBaseDateSchema).returns(VoidSchema);
/*Title*/ const TitlePropsSchema = ItemObjectSchema.extend({
    id: StringSchema.optional()
});
/*Filter*/ const FilterPropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    onChange: FunctionWithEnumVoidSchema
});
/*Search*/ const SearchPropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    onChange: FunctionWithStringVoidSchema
});
/*Loading*/ const LoadingPropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    title: StringSchema,
    type: _enums__WEBPACK_IMPORTED_MODULE_1__/* .TypeOfNotifyEnumSchema */ .k
});
/*CountDown*/ const CountDownPropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    deadline: DateSchema,
    className: StringSchema.optional()
});
/*SeoHead*/ const SeoHeadPropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    siteTitle: StringSchema,
    siteDescription: StringSchema,
    favicon: StringSchema.optional()
});
/*TodoTable*/ const TodoTablePropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    todoItems: ArrayNumbersSchema,
    onDelete: FunctionWithTodoObjectVoidSchema
});
/*TodoCard*/ const TodoCardPropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    todo: TodoObjectWithBaseDateSchema,
    onDelete: FunctionWithStringVoidSchema,
    onDone: FunctionWithTodoObjectVoidSchema
});
const CategoryCardPropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    id: StringSchema,
    title: StringSchema,
    description: StringSchema.optional(),
    onDelete: FunctionWithStringVoidSchema
});
/*Category Form*/ const CategoryFormObjectSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    category: ItemObjectSchema
});
const FunctionWithCategoryFormSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["function"]().args(ItemObjectSchema).returns(VoidSchema);
const CategoryFormPropsSchema = ItemObjectSchema.extend({
    onSubmit: FunctionWithCategoryFormSchema
});
const CategoryFormAddSchema = ItemObjectSchema.extend({
    todoItems: zod__WEBPACK_IMPORTED_MODULE_0__["default"].array(NumberSchema).optional()
});
const CategoryFormEditSchema = CategoryFormAddSchema.merge(BaseObjectSchema);
const CategoryFormDataUnionSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].union([
    CategoryFormAddSchema,
    CategoryFormEditSchema
]);
const FunctionCategoryFormWithDataVoidSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["function"]().args(CategoryFormDataUnionSchema).returns(VoidSchema);
/*To do Form*/ const TodoFormAddSchema = TodoObjectSchema.extend({
    selectedCategory: CategoryObjectWithBaseUnionStringSchema
});
const TodoFormEditSchema = TodoFormAddSchema.merge(BaseObjectSchema);
const FunctionTodoFormWithDataVoidSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["function"]().args(TodoFormAddSchema).returns(VoidSchema);
const TodoFormPropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    id: StringSchema.optional(),
    title: StringSchema.optional(),
    description: StringSchema.optional(),
    deadline: DateSchema.optional(),
    done: BooleanSchema.optional(),
    categories: CategoriesObjectWithBaseUnionSchema,
    onSubmit: FunctionTodoFormWithDataVoidSchema
});
const TodoFormSubmitHandlerSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    title: StringSchema,
    description: StringSchema.optional(),
    deadline: DateSchema,
    done: BooleanSchema,
    selectedCategory: CategoriesObjectWithBaseUnionSchema
});
const TodoObjectDateSchema = ItemObjectSchema.extend({
    deadline: DateSchema,
    done: BooleanSchema
});
const TodoEditFormSchema = TodoObjectDateSchema.extend({
    selectedCategory: CategoryObjectWithBaseUnionStringSchema
});
const FunctionOnSubmitEditFormSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["function"]().args(TodoEditFormSchema).returns(VoidSchema);
const TodoEditFormPropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    id: StringSchema.optional(),
    title: StringSchema.optional(),
    description: StringSchema.optional(),
    deadline: DateSchema.optional(),
    done: BooleanSchema.optional(),
    categories: CategoriesObjectWithBaseSchema,
    onSubmit: FunctionOnSubmitEditFormSchema
});
const FormDataSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    title: zod__WEBPACK_IMPORTED_MODULE_0__["default"].string().min(1, {
        message: "Minimum length is 1."
    }),
    description: zod__WEBPACK_IMPORTED_MODULE_0__["default"].string().optional(),
    deadline: zod__WEBPACK_IMPORTED_MODULE_0__["default"].string(),
    done: zod__WEBPACK_IMPORTED_MODULE_0__["default"].boolean(),
    selectedCategory: zod__WEBPACK_IMPORTED_MODULE_0__["default"].string()
});
const ArgsSchema = TodoObjectDateSchema.extend({
    selectedCategory: CategoryObjectWithBaseSchema,
    categories: CategoriesObjectWithBaseUnionSchema
});
const PropsSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"].object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__["default"].string().optional(),
    title: zod__WEBPACK_IMPORTED_MODULE_0__["default"].string().optional(),
    description: zod__WEBPACK_IMPORTED_MODULE_0__["default"].string().optional(),
    deadline: zod__WEBPACK_IMPORTED_MODULE_0__["default"].date().optional(),
    done: zod__WEBPACK_IMPORTED_MODULE_0__["default"].boolean().optional(),
    onSubmit: zod__WEBPACK_IMPORTED_MODULE_0__["default"]["function"]().args(ArgsSchema).returns(zod__WEBPACK_IMPORTED_MODULE_0__["default"]["void"]())
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ FilterDoneEnumSchema),
/* harmony export */   "k": () => (/* binding */ TypeOfNotifyEnumSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const FilterDoneEnumSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["enum"]([
    "default",
    "done",
    "notDone"
]);
const TypeOfNotifyEnumSchema = zod__WEBPACK_IMPORTED_MODULE_0__["default"]["enum"]([
    "info",
    "error",
    "success",
    "warning"
]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;