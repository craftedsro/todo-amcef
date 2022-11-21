"use strict";
exports.id = 739;
exports.ids = [739];
exports.modules = {

/***/ 4579:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CP": () => (/* binding */ getCategories),
/* harmony export */   "LC": () => (/* binding */ getTodos),
/* harmony export */   "aS": () => (/* binding */ deleteTodo),
/* harmony export */   "bm": () => (/* binding */ editTodo),
/* harmony export */   "dC": () => (/* binding */ getTodo),
/* harmony export */   "ht": () => (/* binding */ editCategory),
/* harmony export */   "i8": () => (/* binding */ addCategory),
/* harmony export */   "n3": () => (/* binding */ getCategory),
/* harmony export */   "rk": () => (/* binding */ addTodo),
/* harmony export */   "uu": () => (/* binding */ deleteCategory)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_URL = "https://636ba3e07f47ef51e13633ee.mockapi.io/api/v1/";
const CATEGORY_URL = "category";
const TODO_URL = "todo";
const getCategories = async ()=>{
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(API_URL + CATEGORY_URL);
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
const getCategory = async (id)=>{
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${API_URL}${CATEGORY_URL}/${id}`);
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
const addCategory = async (data)=>{
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${API_URL}${CATEGORY_URL}`, data);
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
const editCategory = async (data)=>{
    const editedData = {
        title: data.title,
        description: data.description,
        todoItems: data.todoItems
    };
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${API_URL}${CATEGORY_URL}/${data.id}`, editedData);
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
const deleteCategory = async (id)=>{
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`${API_URL}${CATEGORY_URL}/${id}`);
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
const getTodos = async ()=>{
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(API_URL + TODO_URL);
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
const getTodo = async (id)=>{
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${API_URL}${TODO_URL}/${id}`);
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
const addTodo = async (data)=>{
    const editedData = {
        title: data.title,
        description: data.description,
        deadline: data.deadline,
        done: data.done
    };
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${API_URL}${TODO_URL}`, editedData);
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
const editTodo = async (data)=>{
    const editedData = {
        createdAt: data.createdAt,
        title: data.title,
        description: data.description,
        deadline: data.deadline,
        done: data.done
    };
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${API_URL}${TODO_URL}/${data.id}`, editedData);
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
const deleteTodo = async (id)=>{
    try {
        const result = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`${API_URL}${TODO_URL}/${id}`);
        return result.data;
    } catch (err) {
        console.log(err);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Notify = ({ title , type  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "m-10",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: `justify-center text-white shadow-lg alert alert-${type}`,
            children: title
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notify);


/***/ })

};
;