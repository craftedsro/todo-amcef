"use strict";
exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 6819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ todo_CountDown)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/helpers/countdown.ts
const getReturnValues = (countDown)=>{
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(countDown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(countDown % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(countDown % (1000 * 60) / 1000);
    return [
        days,
        hours,
        minutes,
        seconds
    ];
};

;// CONCATENATED MODULE: ./src/components/todo/CountDown.tsx



const CountDown = ({ deadline , className  })=>{
    const countDownDate = new Date(deadline).getTime();
    const [countDown, setCountDown] = (0,external_react_.useState)(countDownDate - new Date().getTime());
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        countDownDate
    ]);
    const [days, hours, minutes, seconds] = getReturnValues(countDown);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex gap-5 ${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "countdown font-mono text-2xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                "--value": days
                            },
                            children: days
                        })
                    }),
                    "days"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "countdown font-mono text-2xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                "--value": hours
                            }
                        })
                    }),
                    "hours"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "countdown font-mono text-2xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                "--value": minutes
                            }
                        })
                    }),
                    "min"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "countdown font-mono text-2xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                "--value": seconds
                            }
                        })
                    }),
                    "sec"
                ]
            })
        ]
    });
};
/* harmony default export */ const todo_CountDown = (CountDown);


/***/ })

};
;