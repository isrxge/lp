"use strict";
(() => {
var exports = {};
exports.id = 9024;
exports.ids = [9024];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 96545:
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

// NAMESPACE OBJECT: ./src/app/api/getall/new/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
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
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/app/api/getall/new/route.js




async function GET() {
    try {
        await (0,mongodb/* default */.Z)();
        let news = await models_new/* default */.Z.find({});
        return next_response/* default */.Z.json({
            news
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
                msg: [
                    "Unable to send message."
                ]
            });
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fgetall%2Fnew%2Froute&name=app%2Fapi%2Fgetall%2Fnew%2Froute&pagePath=private-next-app-dir%2Fapi%2Fgetall%2Fnew%2Froute.js&appDir=G%3A%5Cvercel%5Clpc_landingpage%5Csrc%5Capp&appPaths=%2Fapi%2Fgetall%2Fnew%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/getall/new/route","pathname":"/api/getall/new","filename":"route","bundlePath":"app/api/getall/new/route"},"resolvedPagePath":"G:\\vercel\\lpc_landingpage\\src\\app\\api\\getall\\new\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/getall/new/route"

    

/***/ }),

/***/ 92161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectDB = async ()=>{
    try {
        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 0) {
            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);
            console.log("db connected");
        }
    } catch (error) {
        console.log(error);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);


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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2564,2778], () => (__webpack_exec__(96545)));
module.exports = __webpack_exports__;

})();