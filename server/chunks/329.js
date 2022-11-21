"use strict";
exports.id = 329;
exports.ids = [329];
exports.modules = {

/***/ 3329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1656);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7080);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9752);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4579);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__, _types__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _api_api__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__, _types__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _api_api__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const TodoForm = ({ id , title , description , deadline , done , onSubmit  })=>{
    const { register , handleSubmit , setValue , getValues , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(_types__WEBPACK_IMPORTED_MODULE_4__/* .FormDataSchema */ .O3)
    });
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { isLoading , isSuccess , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)({
        queryKey: [
            "getCategories"
        ],
        queryFn: ()=>(0,_api_api__WEBPACK_IMPORTED_MODULE_6__/* .getCategories */ .CP)()
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (isSuccess && data && data !== categories) {
            setCategories(data);
            data.map((category)=>{
                if (id && category.todoItems.find((c)=>c.toString() === id)) {
                    setSelectedCategory(category);
                }
            });
        }
    }, [
        isSuccess,
        data,
        setCategories,
        categories,
        id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (title !== getValues("title") && title) {
            setValue("title", title);
        }
        if (description !== getValues("description") && description) {
            setValue("description", description);
        }
        if (deadline?.toString().slice(0, 16) !== getValues("deadline") && deadline) {
            setValue("deadline", deadline.toString().slice(0, 16));
        }
        if (done !== getValues("done") && done) {
            setValue("done", done);
        }
        if (selectedCategory?.id !== getValues("selectedCategory")) {
            if (selectedCategory?.id) {
                setValue("selectedCategory", selectedCategory.id);
            }
        }
    }, [
        title,
        description,
        deadline,
        done,
        setValue,
        getValues,
        selectedCategory,
        categories
    ]);
    const onSubmitHandler = (formData)=>{
        const categoryTmp = categories.find((category)=>category.id === formData.selectedCategory);
        const selectedCategoryTmp = categoryTmp;
        const data = {
            title: formData.title,
            description: formData.description,
            deadline: new Date(formData.deadline),
            done: formData.done,
            selectedCategory: selectedCategoryTmp,
            categories: categories
        };
        onSubmit(data);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit(onSubmitHandler),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-control py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "label",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "label-text",
                            children: "Title"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "Type here",
                        className: "input input-bordered",
                        ...register("title")
                    }),
                    errors.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "alert-warning",
                        children: errors.title.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-control py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "label",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "label-text",
                            children: "Description"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        className: "textarea textarea-bordered h-24",
                        placeholder: "Type here",
                        ...register("description")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-control py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "label",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "label-text",
                            children: "Deadline"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "datetime-local",
                        className: "input input-bordered",
                        placeholder: "Select date and time",
                        ...register("deadline")
                    }),
                    errors.deadline && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "alert-warning",
                        children: errors.deadline.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-control py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "label",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "label-text",
                            children: "Category"
                        })
                    }),
                    isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "Loading..."
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        ...register("selectedCategory"),
                        className: "select select-bordered w-full max-w-xs",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "",
                                children: "Pick Category"
                            }, "none"),
                            categories && categories.map((category)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: category.id,
                                    children: category.title
                                }, category.id);
                            })
                        ]
                    }),
                    errors.selectedCategory && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "alert-warning",
                        children: errors.selectedCategory.message
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-control py-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "label cursor-pointer",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "label-text",
                            children: "Mark as Done"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "checkbox",
                            ...register("done"),
                            className: "toggle"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-control py-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: "btn btn-primary",
                    type: "submit"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;