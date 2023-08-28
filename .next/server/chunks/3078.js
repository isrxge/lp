exports.id = 3078;
exports.ids = [3078];
exports.modules = {

/***/ 53078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NewItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_new_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89286);
/* harmony import */ var _styles_new_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_new_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _feature_changeLanguage_changeLanguageSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48465);
/* harmony import */ var _config_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67969);
/* harmony import */ var _config_dataEn_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95402);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);








function NewItem({ src, title, id, i }) {
    const curlanguage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((rootState)=>(0,_feature_changeLanguage_changeLanguageSlice__WEBPACK_IMPORTED_MODULE_4__/* .language */ .dK)(rootState));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "py-4 parent-newitem",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "shadow-lg group container  rounded-md bg-gray-50 justify-center items-center max-w-sm flex  mx-auto content-div",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "h-5/5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative max-w-xs overflow-hidden bg-cover bg-no-repeat h-3/5 w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                objectFit: "cover",
                                src: src,
                                className: "transition duration-300 ease-in-out group-hover:scale-110 img-newitem w-full",
                                alt: "Louvre"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "py-8 px-4 bg-gray-50  rounded-b-md fd-cl group-hover:opacity-25 new-title",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "block text-lg text-gray-800 font-bold tracking-wide",
                                children: title
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute opacity-0 fd-sh group-hover:opacity-100",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-8 text-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "text-end rounded-lg p-4 bg-gray-50  text-gray-700 font-bold text-lg",
                            href: `/blog/${id}`,
                            children: curlanguage.changeLanguage.value == "en" ? _config_dataEn_json__WEBPACK_IMPORTED_MODULE_6__/* .text2.name */ .EI.u : _config_data_json__WEBPACK_IMPORTED_MODULE_5__/* .text2.name */ .EI.u
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 89286:
/***/ (() => {



/***/ })

};
;