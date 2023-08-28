"use strict";
(() => {
var exports = {};
exports.id = 2470;
exports.ids = [2470];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 83122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/findById/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/lib/mongodb.js
var mongodb = __webpack_require__(92161);
// EXTERNAL MODULE: ./src/models/new.js
var models_new = __webpack_require__(41267);
// EXTERNAL MODULE: ./src/models/company.js
var company = __webpack_require__(68613);
// EXTERNAL MODULE: ./src/models/customer.js
var customer = __webpack_require__(82632);
// EXTERNAL MODULE: ./src/models/partner.js
var partner = __webpack_require__(83556);
// EXTERNAL MODULE: ./src/models/product.js
var product = __webpack_require__(50028);
// EXTERNAL MODULE: ./src/models/user.js
var user = __webpack_require__(38178);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/app/api/findById/route.js









async function POST(req) {
    const { _id, schema } = await req.json();
    try {
        await (0,mongodb/* default */.Z)();
        let data;
        if (schema == "New") {
            data = await models_new/* default */.Z.findOne({
                _id: _id
            });
        } else if (data == "Product") {
            data = await product/* default */.Z.findOne({
                _id: _id
            });
        }
        return next_response/* default */.Z.json({
            data
        });
    } catch (error) {
        if (error instanceof (external_mongoose_default()).Error.ValidationError) {
            let errorList = [];
            for(let e in error.errors){
                errorList.push(error.errors[e].message);
            }
            return next_response/* default */.Z.json({
                msg: errorList
            });
        } else {
            return next_response/* default */.Z.json({
                msg: error
            });
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FfindById%2Froute&name=app%2Fapi%2FfindById%2Froute&pagePath=private-next-app-dir%2Fapi%2FfindById%2Froute.js&appDir=G%3A%5Cvercel%5Clpc_landingpage%5Csrc%5Capp&appPaths=%2Fapi%2FfindById%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/findById/route","pathname":"/api/findById","filename":"route","bundlePath":"app/api/findById/route"},"resolvedPagePath":"G:\\vercel\\lpc_landingpage\\src\\app\\api\\findById\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/findById/route"

    

/***/ }),

/***/ 82632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const customerSchema = new Schema({
    src: String,
    type: String,
    name: String
});
const Customer = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Customer || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Customer", customerSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customer);


/***/ }),

/***/ 41267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const newSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    id: String,
    title: String,
    titleEn: String,
    meta_title: String,
    description: String,
    date: String,
    image: String,
    categories: [
        String
    ],
    tags: [
        String
    ],
    draft: Boolean,
    content: String,
    contentEn: String
});
const New = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).New || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("New", newSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (New);


/***/ }),

/***/ 83556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const partnerSchema = new Schema({
    src: String,
    type: String,
    name: String
});
const Partner = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Partner || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Partner", partnerSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partner);


/***/ }),

/***/ 50028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
// Schema for description inside product content
// Schema for content inside product
const ProductContentSchema = new Schema({
    id: String,
    title: String,
    content: String,
    titleEn: String,
    contentEn: String,
    imgSrc: String,
    descriptionEn: String,
    description: String
});
// Schema for product
const ProductSchema = new Schema({
    title: String,
    titleEn: String,
    type: String,
    description1: String,
    description2: String,
    descriptionEn1: String,
    descriptionEn2: String,
    image: String,
    pros: [
        String
    ],
    prosEn: [
        String
    ],
    content: [
        ProductContentSchema
    ]
});
// Kiểm tra trùng tên model "Product", nếu đã tồn tại thì sử dụng lại, ngược lại tạo mới
const Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Product", ProductSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);


/***/ }),

/***/ 38178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const contactSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    email: {
        type: String,
        required: [
            true,
            "Email is required."
        ],
        match: [
            /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
            "Invalid email address"
        ]
    },
    password: {
        type: String,
        required: [
            true,
            "Message is required."
        ]
    }
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", contactSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2564,2778,9295], () => (__webpack_exec__(83122)));
module.exports = __webpack_exports__;

})();