"use strict";
(() => {
var exports = {};
exports.id = 9718;
exports.ids = [9718];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 89721:
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

// NAMESPACE OBJECT: ./src/app/api/banner/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/lib/mongodb.js
var mongodb = __webpack_require__(92161);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/models/banner.js

const { Schema } = (external_mongoose_default());
const bannerSchema = new Schema({
    title: String,
    titleEn: String,
    content: String,
    contentEn: String,
    image: String
});
const Banner = (external_mongoose_default()).models.Banner || external_mongoose_default().model("Banner", bannerSchema);
/* harmony default export */ const models_banner = (Banner);

// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/banner/route.js




async function POST(req) {
    const { title, titleEn, content, contentEn, image } = await req.json();
    try {
        await (0,mongodb/* default */.Z)();
        await models_banner.create({
            title,
            titleEn,
            content,
            contentEn,
            image
        });
        return next_response/* default */.Z.json({
            msg: [
                "Message sent successfully"
            ],
            success: true
        });
    } catch (error) {
        if (error instanceof (external_mongoose_default()).Error.ValidationError) {
            let errorList = [];
            for(let e in error.errors){
                errorList.push(error.errors[e].message);
            }
            // console.log(errorList);
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
async function PUT(req) {
    const { _id, title, titleEn, content, contentEn, image } = await req.json();
    try {
        await (0,mongodb/* default */.Z)();
        await models_banner.findOneAndUpdate({
            _id: _id
        }, {
            title,
            titleEn,
            content,
            contentEn,
            image
        }, {
            new: true
        });
        return next_response/* default */.Z.json({
            msg: [
                "Message sent successfully"
            ],
            success: true
        });
    } catch (error) {
        if (error instanceof (external_mongoose_default()).Error.ValidationError) {
            let errorList = [];
            for(let e in error.errors){
                errorList.push(error.errors[e].message);
            }
            // console.log(errorList);
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
async function GET() {
    try {
        await (0,mongodb/* default */.Z)();
        const banner = await models_banner.find({});
        return next_response/* default */.Z.json({
            banner
        });
    } catch (error) {
        if (error instanceof (external_mongoose_default()).Error.ValidationError) {
            let errorList = [];
            for(let e in error.errors){
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fbanner%2Froute&name=app%2Fapi%2Fbanner%2Froute&pagePath=private-next-app-dir%2Fapi%2Fbanner%2Froute.js&appDir=G%3A%5Cvercel%5Clpc_landingpage%5Csrc%5Capp&appPaths=%2Fapi%2Fbanner%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/banner/route","pathname":"/api/banner","filename":"route","bundlePath":"app/api/banner/route"},"resolvedPagePath":"G:\\vercel\\lpc_landingpage\\src\\app\\api\\banner\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/banner/route"

    

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2564,2778], () => (__webpack_exec__(89721)));
module.exports = __webpack_exports__;

})();