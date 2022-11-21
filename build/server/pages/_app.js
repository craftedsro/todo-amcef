(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_ui_layout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7145);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _src_themes_themeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3720);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_themes_themeContext__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContextProvider */ .z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ui_layout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_BasicLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/ui/layout/Footer.tsx

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer-center p-4 bg-base-300 text-base-content",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Copyright \xa9 2022 - All right reserved"
            })
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/themes/themeContext.tsx + 1 modules
var themeContext = __webpack_require__(3720);
// EXTERNAL MODULE: ./src/themes/index.js
var themes = __webpack_require__(8748);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/ui/layout/Navbar.tsx





const Navbar = ()=>{
    const { setTheme  } = (0,external_react_.useContext)(themeContext/* ThemeContext */.N);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "navbar bg-base-300",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-start",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "dropdown",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            tabIndex: 0,
                            className: "btn btn-ghost btn-circle",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M4 6h16M4 12h16M4 18h7"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            tabIndex: 0,
                            className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Homepage"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    tabIndex: 0,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Categories"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "bg-base-100",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/category",
                                                        children: "All Categories"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/category/add",
                                                        children: "Add Category"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    tabIndex: 1,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Todos"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "bg-base-100",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/todo",
                                                        children: "All Todos"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/todo/add",
                                                        children: "Add Todo"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "btn btn-ghost normal-case text-xl",
                    children: "TODO - AMCEF"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-end",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "dropdown dropdown-end",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            tabIndex: 1,
                            className: "flex flex-row justify-center items-center gap-2 btn btn-ghost",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    width: "18",
                                    height: "18",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    className: "inline-block h-5 w-5 stroke-current md:h-6 md:w-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Themes"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            tabIndex: 1,
                            className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52",
                            children: Object.keys(themes).map((key)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>setTheme(key),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "capitalize",
                                        children: key
                                    })
                                }, key);
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/ui/layout/BasicLayout.tsx



const BasicLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
        ]
    });
};
/* harmony default export */ const layout_BasicLayout = (BasicLayout);


/***/ }),

/***/ 3915:
/***/ ((module) => {

"use strict";

module.exports = {
    primary: "#6419E6",
    secondary: "#D926A9",
    accent: "#1FB2A6",
    neutral: "#191D24",
    "base-100": "#2A303C",
    "base-200": "#232731",
    "base-300": "#1D2129",
    info: "#3ABFF8",
    success: "#36D399",
    warning: "#FBBD23"
};


/***/ }),

/***/ 892:
/***/ ((module) => {

"use strict";

module.exports = {
    primary: "#570df8",
    secondary: "#f000b8",
    accent: "#37cdbe",
    neutral: "#191D24",
    "base-100": "#ffffff",
    "base-200": "#f4f9fd",
    "base-300": "#dce5ff",
    info: "#3ABFF8",
    success: "#36D399",
    warning: "#FBBD23"
};


/***/ }),

/***/ 8748:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const defaultTheme = __webpack_require__(892);
const darkTheme = __webpack_require__(3915);
module.exports = {
    default: defaultTheme,
    dark: darkTheme
};


/***/ }),

/***/ 3720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ ThemeContext),
  "z": () => (/* binding */ ThemeContextProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useCustomEffect.hook.ts

const useCustomEffect =  false ? 0 : external_react_.useEffect;
/* harmony default export */ const useCustomEffect_hook = (useCustomEffect);

;// CONCATENATED MODULE: ./src/themes/themeContext.tsx



const ThemeContext = /*#__PURE__*/ (0,external_react_.createContext)({
    theme: "default",
    setTheme: ()=>{}
});
const ThemeContextProvider = ({ value ="default" , children  })=>{
    const [theme, setTheme] = (0,external_react_.useState)(value);
    useCustomEffect_hook(()=>{
        const storeTheme = localStorage.getItem("theme");
        applyTheme(storeTheme || "default");
    }, []);
    const applyTheme = (theme = "default")=>{
        let newTheme = theme;
        const html = document.getElementsByTagName("html")[0];
        localStorage.setItem("theme", theme);
        html.setAttribute("data-theme", newTheme);
    };
    const handleThemeChange = (theme)=>{
        setTheme(theme);
        applyTheme(theme);
    };
    const val = (0,external_react_.useMemo)(()=>({
            theme,
            setTheme: handleThemeChange
        }), [
        theme,
        handleThemeChange
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemeContext.Provider, {
        value: val,
        children: children
    });
};


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();