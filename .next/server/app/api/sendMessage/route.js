"use strict";
(() => {
var exports = {};
exports.id = 1277;
exports.ids = [1277];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 19733:
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

// NAMESPACE OBJECT: ./src/app/api/sendMessage/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
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
;// CONCATENATED MODULE: ./src/models/message.js

const { Schema } = (external_mongoose_default());
const messageSchema = new Schema({
    name: String,
    email: String,
    message: String
});
const Message = (external_mongoose_default()).models.Message || external_mongoose_default().model("Message", messageSchema);
/* harmony default export */ const models_message = (Message);

// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/sendMessage/route.js




const nodemailer = __webpack_require__(4098);
const smtpTransport = __webpack_require__(76144);
async function POST(req, res) {
    const { name, email, message } = await req.json();
    try {
        await (0,mongodb/* default */.Z)();
        await models_message.create({
            name,
            email,
            message
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
    const mess = {
        from: process.env.GMAIL_EMAIL_ADDRESS,
        to: [
            email,
            process.env.GMAIL_EMAIL_ADDRESS
        ],
        subject: `you have received a message from ${name}`,
        text: `<html><p>${message}</p>from ${email}</html>`,
        html: `<html><p>${message}</p>from ${email}</html>`
    };
    let transporter = nodemailer.createTransport(smtpTransport({
        host: "smtp.gmail.com",
        name: "Example",
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: "phunguyen12111998@gmail.com",
            pass: "lhxeqazhutcfxcrf"
        }
    }));
    try {
        const res = await transporter.sendMail(mess);
    // return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
    }
    return next_response/* default */.Z.json({
        msg: [
            "Message sent successfully"
        ],
        success: true
    });
}
async function GET() {
    try {
        await (0,mongodb/* default */.Z)();
        const messages = await models_message.find({});
        return next_response/* default */.Z.json({
            messages
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

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FsendMessage%2Froute&name=app%2Fapi%2FsendMessage%2Froute&pagePath=private-next-app-dir%2Fapi%2FsendMessage%2Froute.js&appDir=G%3A%5Cvercel%5Clpc_landingpage%5Csrc%5Capp&appPaths=%2Fapi%2FsendMessage%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/sendMessage/route","pathname":"/api/sendMessage","filename":"route","bundlePath":"app/api/sendMessage/route"},"resolvedPagePath":"G:\\vercel\\lpc_landingpage\\src\\app\\api\\sendMessage\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/sendMessage/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [2564,2778,3757], () => (__webpack_exec__(19733)));
module.exports = __webpack_exports__;

})();