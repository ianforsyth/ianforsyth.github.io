"use strict";
exports.id = 186;
exports.ids = [186];
exports.modules = {

/***/ 402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CenteredLayout = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-w-lg p-4 m-auto",
        children: children
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CenteredLayout);


/***/ }),

/***/ 697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H1": () => (/* binding */ H1),
/* harmony export */   "H2": () => (/* binding */ H2),
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "P": () => (/* binding */ P),
/* harmony export */   "UL": () => (/* binding */ UL)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const SPACING = '6';
const H1 = ({ children , className  })=>{
    const style = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`first:mt-0 mt-${SPACING} font-lato font-semibold text-2xl uppercase tracking-wider`, className);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: style,
        children: children
    }));
};
const H2 = ({ children , className  })=>{
    const style = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`first:mt-0 mt-${SPACING} -mb-${SPACING} font-lato font-semibold text-lg uppercase tracking-wider`, className);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: style,
        children: children
    }));
};
const A = ({ children , className , ...props })=>{
    const style = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`text-primary hover:text-primaryHover`, className);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: style,
        ...props,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
            " ",
            children
        ]
    }));
};
const P = ({ children , className , ...props })=>{
    const style = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`first:mt-0 mt-${SPACING}`, className);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: style,
        ...props,
        children: children
    }));
};
const UL = ({ children , className , ...props })=>{
    const style = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`first:mt-0 mt-${SPACING} list-disc ml-${SPACING}`, className);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: style,
        ...props,
        children: children
    }));
};


/***/ })

};
;