"use strict";
exports.id = 9295;
exports.ids = [9295];
exports.modules = {

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

/***/ 68613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const companySchema = new Schema({
    companyName: String,
    companyDescription: {
        content: String,
        image: String
    },
    companyDescriptionEn: {
        content: String,
        image: String
    },
    companyCore: {
        content: String,
        image: String
    },
    companyCoreEn: {
        content: String,
        image: String
    },
    companyAddress: {
        address: [
            {
                content: String,
                contentEn: String,
                title: String
            }
        ],
        addressLink: {
            content: String,
            title: String
        }
    },
    companySocialAccount: [
        {
            platform: String,
            link: String
        }
    ],
    companyContact: [
        {
            typeOfContact: String,
            contentOfContact: String
        }
    ],
    companyWebsite: String,
    companyImage: [
        {
            type: String,
            src: String
        }
    ]
});
const Company = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Company || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Company", companySchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Company);


/***/ })

};
;