"use strict";
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_PageLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/ui/layout/SeoHead.tsx


const SeoHead = ({ siteTitle , siteDescription , favicon  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: siteTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: siteDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: favicon || "/to-do-list.ico"
            })
        ]
    });
};
/* harmony default export */ const layout_SeoHead = (SeoHead);

;// CONCATENATED MODULE: ./src/components/ui/Title.tsx

const Title = ({ id , title , description  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: id,
        className: "text-center py-10 px-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-3xl font-bold mt-0 mb-6",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-1xl font-bold mb-8",
                children: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "divider"
            })
        ]
    });
};
/* harmony default export */ const ui_Title = (Title);

;// CONCATENATED MODULE: ./src/components/ui/layout/PageLayout.tsx



const PageLayout = ({ siteTitle , siteDescription , type , children  })=>{
    const title = siteTitle || "ToDo";
    const description = siteDescription || "Stop forgetting what to do next use this app.";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_SeoHead, {
                siteTitle: title + " - AMCEF",
                siteDescription: description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "min-h-screen bg-base-200",
                children: [
                    type !== "home" && /*#__PURE__*/ jsx_runtime_.jsx(ui_Title, {
                        title: title,
                        description: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "p-10",
                        children: children
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_PageLayout = (PageLayout);


/***/ })

};
;