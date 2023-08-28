exports.id = 6717;
exports.ids = [6717];
exports.modules = {

/***/ 36047:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 97076:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 47583));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34171));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50230));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50633));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 63182));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 31920))

/***/ }),

/***/ 68763:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93769))

/***/ }),

/***/ 93769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/config/config.json
var config = __webpack_require__(82503);
;// CONCATENATED MODULE: ./src/config/theme.json
const theme_namespaceObject = JSON.parse('{"R":{"k":{"T$":"Heebo:wght@400;600","BD":"Inter:wght@500;700"}}}');
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/config/menu.json
const menu_namespaceObject = JSON.parse('{"main":[{"name":"Trang chủ","link":"/"},{"name":"Giải pháp","link":"/Solution","hasChildren":true,"children":[]},{"name":"Dịch vụ","link":"/Service","hasChildren":true,"children":[]},{"name":"Tin tức","link":"/blog"},{"name":"Liên hệ","link":"/contact"},{"name":"Về Liên Phát","link":"/about"}],"footer":{"name":"Menu","children":[{"name":"Trang chủ","link":"/"},{"name":"Về Liên Phát","link":"/about"},{"name":"Tin tức","link":"/blog"},{"name":"Dịch vụ","link":"/Service"},{"name":"Giải pháp","link":"/Solution"}]}}');
;// CONCATENATED MODULE: ./src/config/menuEn.json
const menuEn_namespaceObject = JSON.parse('{"main":[{"name":"Home","link":"/"},{"name":"Solutions","link":"/Solution","hasChildren":true,"children":[]},{"name":"Services","link":"/Service","hasChildren":true,"children":[]},{"name":"News","link":"/blog"},{"name":"Contact Us","link":"/contact"},{"name":"About Us","link":"/about"}],"footer":{"name":"Menu","children":[{"name":"Home","link":"/"},{"name":"About Us","link":"/about"},{"name":"News","link":"/blog"},{"name":"Services","link":"/Service"},{"name":"Solutions","link":"/Solution"}]}}');
// EXTERNAL MODULE: ./src/feature/changeLanguage/changeLanguageSlice.tsx
var changeLanguageSlice = __webpack_require__(48465);
// EXTERNAL MODULE: ./src/lib/loadData.ts
var loadData = __webpack_require__(33455);
// EXTERNAL MODULE: ./src/lib/utils/textConverter.ts
var textConverter = __webpack_require__(47184);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
;// CONCATENATED MODULE: ./src/layouts/partials/Footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const Footer = ({ src })=>{
    const { copyright } = config.params;
    const curlanguage = (0,lib.useSelector)((rootState)=>(0,changeLanguageSlice/* language */.dK)(rootState));
    const { footer } = curlanguage.changeLanguage.value == "en" ? menuEn_namespaceObject : menu_namespaceObject;
    const [companyLinks, setCompanyLinks] = (0,react_.useState)({});
    (0,react_.useEffect)(()=>{
        // declare the data fetching function
        async function fetchNew() {
            if (Object.keys(companyLinks).length == 0) {
                const companyCheck = await (0,loadData/* loadContact */.s)();
                setCompanyLinks(companyCheck.contact[0]);
            }
        }
        // call the function
        fetchNew()// make sure to catch any error
        .catch(console.error);
    }, [
        companyLinks
    ]);
    return Object.keys(companyLinks).length == 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-theme-light dark:bg-darkmode-theme-light",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row items-center py-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-fit max-w-screen-xl content-end",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-6 gap-1 px-4 py-6 lg:py-8 md:grid-cols-6 content-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "text-gray-500 dark:text-gray-400 font-medium",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            className: "navbar-brand inline-block max-w-xs",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                width: "300",
                                                height: "150",
                                                src: "/images/logo.png",
                                                alt: ""
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                                            children: footer.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "text-gray-500 dark:text-gray-400 font-medium grid grid-cols-2 gap-1 max-w-fit",
                                            children: footer.children.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `${item.link}`,
                                                        className: " hover:underline",
                                                        children: item.name
                                                    })
                                                }, item.link))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white max-w-fit",
                                            children: curlanguage.changeLanguage.value == "en" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: "Contact"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: "Li\xean hệ"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "text-gray-500 dark:text-gray-400 font-medium grid grid-cols-2 gap-1 max-w-fit ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "mb-4 flex ",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            className: "h-5 w-5 text-black",
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: "2",
                                                            stroke: "currentColor",
                                                            fill: "none",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    stroke: "none",
                                                                    d: "M0 0h24v24H0z"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                            className: "text-gray-500 dark:text-gray-400 font-medium",
                                                            children: companyLinks.phoneNumber.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    className: "mb-4",
                                                                    children: item
                                                                }, item))
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "mb-4 flex ",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            className: "h-5 w-5 text-black",
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: "2",
                                                            stroke: "currentColor",
                                                            fill: "none",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    stroke: "none",
                                                                    d: "M0 0h24v24H0z"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                    x: "3",
                                                                    y: "5",
                                                                    width: "18",
                                                                    height: "14",
                                                                    rx: "2"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                                    points: "3 7 12 13 21 7"
                                                                })
                                                            ]
                                                        }),
                                                        companyLinks.email
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-span-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "text-gray-500 dark:text-gray-400 font-medium",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                                                children: curlanguage.changeLanguage.value == "en" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: "Address"
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: "Địa chỉ"
                                                })
                                            }),
                                            companyLinks.socialAccount.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mb-4  ",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: `${item}`,
                                                        className: " hover:underline flex",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                className: "h-5 w-5 text-black",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                strokeWidth: "2",
                                                                stroke: "currentColor",
                                                                fill: "none",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        stroke: "none",
                                                                        d: "M0 0h24v24H0z"
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                                                                    })
                                                                ]
                                                            }),
                                                            "LienPhat Technology Company"
                                                        ]
                                                    })
                                                }, item)),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "mb-4 flex ",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        className: "h-10 w-10 text-black",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: companyLinks.addressLink,
                                                        className: " hover:underline",
                                                        target: "_blank",
                                                        children: curlanguage.changeLanguage.value == "en" ? companyLinks.addressEn : companyLinks.address
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t border-border py-7 dark:border-darkmode-border",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container text-center text-light dark:text-darkmode-light",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        dangerouslySetInnerHTML: (0,textConverter/* markdownify */.gI)(copyright)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const partials_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(71072);
;// CONCATENATED MODULE: ./src/layouts/components/Logo.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Logo = ({ src })=>{
    // destructuring items from config object
    const { logo, logo_darkmode, logo_width, logo_height, logo_text, title } = config.site;
    const { theme, resolvedTheme } = (0,dist/* useTheme */.F)();
    const [mounted, setMounted] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>setMounted(true), []);
    const resolvedLogo = mounted && (theme === "dark" || resolvedTheme === "dark") ? logo_darkmode : logo;
    const logoPath = src ? src : resolvedLogo;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        className: "navbar-brand inline-block",
        children: logoPath ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            width: logo_width.replace("px", "") * 4,
            height: logo_height.replace("px", "") * 4,
            src: logoPath,
            alt: title,
            priority: true,
            style: {
                height: logo_height.replace("px", "") + "px",
                width: logo_width.replace("px", "") + "px"
            }
        }) : logo_text ? logo_text : title
    });
};
/* harmony default export */ const components_Logo = (Logo);

// EXTERNAL MODULE: ./node_modules/flag-icons/css/flag-icons.min.css
var flag_icons_min = __webpack_require__(16599);
// EXTERNAL MODULE: ./src/styles/flag.scss
var flag = __webpack_require__(52485);
;// CONCATENATED MODULE: ./src/layouts/components/ThemeSwitcher.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const ThemeSwitcher = ({ className })=>{
    const { theme_switcher } = config.settings;
    const [mounted, setMounted] = (0,react_.useState)(false);
    const { theme, resolvedTheme } = (0,dist/* useTheme */.F)();
    (0,react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    const curlanguage = (0,lib.useSelector)((rootState)=>(0,changeLanguageSlice/* language */.dK)(rootState));
    const dispatch = (0,lib.useDispatch)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: theme_switcher && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `theme-switcher ${className}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    id: "theme-switcher",
                    type: "checkbox",
                    defaultChecked: mounted && (theme === "dark" || resolvedTheme === "dark"),
                    onClick: ()=>dispatch((0,changeLanguageSlice/* changeLanguage */.D0)())
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    htmlFor: "theme-switcher",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "theme switcher"
                        }),
                        curlanguage.changeLanguage.value == "en" ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "flag-icon-rounded fi fi-us"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: " flag-icon-rounded fi fi-vn"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_ThemeSwitcher = (ThemeSwitcher);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.js
var io5 = __webpack_require__(79573);
;// CONCATENATED MODULE: ./src/lib/utils/use-scroll.ts

function useScroll(threshold) {
    const [scrolled, setScrolled] = (0,react_.useState)(false);
    const onScroll = (0,react_.useCallback)(()=>{
        setScrolled(window.pageYOffset > threshold);
    }, [
        threshold
    ]);
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, [
        onScroll
    ]);
    return scrolled;
}

// EXTERNAL MODULE: ./src/feature/data/productSlice.tsx
var productSlice = __webpack_require__(5026);
;// CONCATENATED MODULE: ./src/layouts/partials/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 















//  child navigation link interface
const Header = ()=>{
    const dispatch = (0,lib.useDispatch)();
    // distructuring the main menu from menu object
    const curlanguage = (0,lib.useSelector)((rootState)=>(0,changeLanguageSlice/* language */.dK)(rootState));
    const { main } = curlanguage.changeLanguage.value == "en" ? menuEn_namespaceObject : menu_namespaceObject;
    const productInfo = (0,lib.useSelector)((rootState)=>(0,productSlice/* product */.O7)(rootState));
    const pathname = (0,navigation.usePathname)();
    let servicesMenu = [];
    const scrolled = useScroll(50);
    (0,react_.useEffect)(()=>{
        window.scrollTo(0, 0);
        // declare the data fetching function
        const fetchProduct = async ()=>{
            if (productInfo.productData.value.product.length == 0) {
                const productCheck = await (0,loadData/* loadProduct */.LX)();
                dispatch((0,productSlice/* companyProduct */.GB)(productCheck));
                servicesMenu = productCheck.products.filter((item)=>item.type == "Service");
                main[1].children = productCheck.products.filter((item)=>item.type == "Solution");
                main[2].children = servicesMenu[0].content;
            } else {
                main[1].children = productInfo.productData.value.product.filter((item)=>item.type == "Solution");
                main[2].children = productInfo.productData.value.product.filter((item)=>item.type == "Service")[0].content;
            }
        };
        fetchProduct().catch(console.error);
    // call the function
    // make sure to catch any error
    }, [
        main,
        pathname
    ]);
    const { navigation_button, settings } = config;
    // get current path
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `fixed top-0 w-full flex justify-center ${scrolled ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl" : "bg-white/0"} z-30 transition-all`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "navbar container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "order-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    id: "nav-toggle",
                    type: "checkbox",
                    className: "hidden"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    id: "show-button",
                    htmlFor: "nav-toggle",
                    className: "order-3 flex cursor-pointer items-center text-dark dark:text-white lg:order-1 lg:hidden",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "h-6 fill-current",
                        viewBox: "0 0 20 20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu Open"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    id: "hide-button",
                    htmlFor: "nav-toggle",
                    className: "order-3 hidden cursor-pointer items-center text-dark dark:text-white lg:order-1",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "h-6 fill-current",
                        viewBox: "0 0 20 20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu Close"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                points: "11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2",
                                transform: "rotate(45 10 10)"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    id: "nav-menu",
                    className: "navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8",
                    children: [
                        main.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx((react_default()).Fragment, {
                                children: menu.hasChildren ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item nav-dropdown group relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            className: `nav-link inline-flex items-center ${menu.children?.map(({ url })=>url).includes(pathname) || menu.children?.map(({ url })=>`${url}/`).includes(pathname) ? "active" : ""}`,
                                            href: menu.link,
                                            children: [
                                                menu.name,
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    className: "h-4 w-4 fill-current",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100",
                                            children: menu.children?.map((child, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "nav-dropdown-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `/${child.type ? "Solution" : "Service"}/${child._id}`,
                                                        className: `nav-dropdown-link block ${(pathname === `${child._id}/` || pathname === child._id) && "active"}`,
                                                        children: curlanguage.changeLanguage.value == "en" ? child.titleEn : child.title
                                                    })
                                                }, `children-${i}`))
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: menu.link,
                                        className: `nav-link block ${(pathname === `${menu.link}/` || pathname === menu.link) && "active"}`,
                                        children: menu.name
                                    })
                                })
                            }, `menu-${i}`)),
                        navigation_button.enable && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mt-4 inline-block lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "btn btn-outline-primary btn-sm",
                                href: navigation_button.link,
                                children: navigation_button.label
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "order-1 ml-auto flex items-center md:order-2 lg:ml-0",
                    children: [
                        settings.search && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white",
                            href: `/search`,
                            "aria-label": "search",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoSearch */.eaK, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitcher, {
                            className: "mr-5"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const partials_Header = (Header);

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
;// CONCATENATED MODULE: ./src/feature/search/searchSlice.tsx

const initialState = {
    value: []
};
const searchNews = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "search",
    initialState,
    reducers: {
        search: (state)=>{
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        }
    }
});
// Action creators are generated for each case reducer function
const { search } = searchNews.actions;
const searchResult = (state)=>state;
/* harmony default export */ const searchSlice = (searchNews.reducer);

// EXTERNAL MODULE: ./src/feature/data/companySlice.tsx
var companySlice = __webpack_require__(87039);
// EXTERNAL MODULE: ./src/feature/data/customerSlice.tsx
var customerSlice = __webpack_require__(81624);
// EXTERNAL MODULE: ./src/feature/data/newSlice.tsx
var newSlice = __webpack_require__(67953);
// EXTERNAL MODULE: ./src/feature/data/partnerSlice.tsx
var partnerSlice = __webpack_require__(98447);
// EXTERNAL MODULE: ./src/feature/login/loginSlice.tsx
var loginSlice = __webpack_require__(15371);
;// CONCATENATED MODULE: ./src/store/store.tsx









const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        changeLanguage: changeLanguageSlice/* default */.ZP,
        searchNews: searchSlice,
        companyData: companySlice/* default */.ZP,
        user: loginSlice/* default */.ZP,
        customerData: customerSlice/* default */.ZP,
        newData: newSlice/* default */.ZP,
        partnerData: partnerSlice/* default */.ZP,
        productData: productSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(5274);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(74284);
;// CONCATENATED MODULE: ./src/app/provider.js
/* __next_internal_client_entry_do_not_use__ AuthProvider auto */ 

const AuthProvider = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react.SessionProvider, {
        children: children
    });
};

;// CONCATENATED MODULE: ./src/layouts/components/scrollToTopButton.tsx
/* __next_internal_client_entry_do_not_use__ default,classNames auto */ 

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = (0,react_.useState)(false);
    const toggleVisibility = ()=>{
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", toggleVisibility);
        return ()=>{
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fixed bottom-2 right-2",
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            type: "button",
            onClick: scrollToTop,
            className: classNames(isVisible ? "opacity-100" : "opacity-0", "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"),
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white"
            })
        })
    });
}
const classNames = (...classes)=>{
    return classes.filter(Boolean).join(" ");
};

;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










function RootLayout({ children }) {
    // import google font css
    const pf = theme_namespaceObject.R.k.T$;
    const sf = theme_namespaceObject.R.k.BD;
    const pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        suppressHydrationWarning: true,
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: config/* site.favicon */.site.yb
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-name",
                        content: "nextplate"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#000000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        media: "(prefers-color-scheme: light)",
                        content: "#fff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        media: "(prefers-color-scheme: dark)",
                        content: "#000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCLgzxMVWNCYs0IjGBx2LGjaCTT2i9zxPo&libraries=places`,
                        defer: true,
                        async: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: `https://fonts.googleapis.com/css2?family=${pf}${sf ? "&family=" + sf : ""}&display=swap`,
                        rel: "stylesheet preconnect"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                suppressHydrationWarning: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTopButton, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
                        store: store,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AuthProvider, {
                            children: [
                                pathname !== "/admin" && /*#__PURE__*/ jsx_runtime_.jsx(partials_Header, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                    children: children
                                }),
                                pathname !== "/admin" && /*#__PURE__*/ jsx_runtime_.jsx(partials_Footer, {})
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 48465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D0: () => (/* binding */ changeLanguage),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dK: () => (/* binding */ language)
/* harmony export */ });
/* unused harmony export changeLanguge */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    value: "vn"
};
const changeLanguge = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "language",
    initialState,
    reducers: {
        changeLanguage: (state)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            if (state.value == "vn") {
                state.value = "en";
            } else {
                state.value = "vn";
            }
        }
    }
});
// Action creators are generated for each case reducer function
const { changeLanguage } = changeLanguge.actions;
const language = (state)=>state;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeLanguge.reducer);


/***/ }),

/***/ 87039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S9: () => (/* binding */ company),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fX: () => (/* binding */ companyData)
/* harmony export */ });
/* unused harmony export searchCompany */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    value: {}
};
const searchCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState,
    reducers: {
        companyData: (state, payload)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = payload.payload.company[0];
            window.localStorage.setItem("companyInfo", JSON.stringify([]));
        }
    }
});
// Action creators are generated for each case reducer function
const { companyData } = searchCompany.actions;
const company = (state)=>state;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchCompany.reducer);


/***/ }),

/***/ 81624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A5: () => (/* binding */ customerData),
/* harmony export */   Lx: () => (/* binding */ customer),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports searchCustomer, fetchPosts */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    value: {
        customerList: []
    }
};
const searchCustomer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState,
    reducers: {
        customerData: (state, payload)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value.customerList = payload.payload.customer;
            window.localStorage.setItem("customerList", JSON.stringify([]));
        }
    }
});
const fetchPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("posts/fetchPosts", async ()=>{
// const response = await client.get('/fakeApi/posts')
// return response.data
});
// Action creators are generated for each case reducer function
const { customerData } = searchCustomer.actions;
const customer = (state)=>state;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchCustomer.reducer);


/***/ }),

/***/ 67953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dq: () => (/* binding */ companyNew),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   r: () => (/* binding */ news)
/* harmony export */ });
/* unused harmony export searchNew */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    value: {
        companyNews: []
    }
};
const searchNew = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState,
    reducers: {
        companyNew: (state, payload)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value.companyNews = payload.payload.news;
            window.localStorage.setItem("newList", JSON.stringify([]));
        }
    }
});
// Action creators are generated for each case reducer function
const { companyNew } = searchNew.actions;
const news = (state)=>state;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchNew.reducer);


/***/ }),

/***/ 98447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   k: () => (/* binding */ partner),
/* harmony export */   rI: () => (/* binding */ companyPartner)
/* harmony export */ });
/* unused harmony export searchPartner */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    value: {
        partnerList: []
    }
};
const searchPartner = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState,
    reducers: {
        companyPartner: (state, payload)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value.partnerList = payload.payload.partner;
            window.localStorage.setItem("partnerList", JSON.stringify([]));
        }
    }
});
// Action creators are generated for each case reducer function
const { companyPartner } = searchPartner.actions;
const partner = (state)=>state;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchPartner.reducer);


/***/ }),

/***/ 5026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GB: () => (/* binding */ companyProduct),
/* harmony export */   O7: () => (/* binding */ product),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export searchProduct */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    value: {
        product: []
    }
};
const searchProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState,
    reducers: {
        companyProduct: (state, payload)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value.product = payload.payload.products;
            window.localStorage.setItem("productList", JSON.stringify([]));
        }
    }
});
// Action creators are generated for each case reducer function
const { companyProduct } = searchProduct.actions;
const product = (state)=>state;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchProduct.reducer);


/***/ }),

/***/ 15371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   n$: () => (/* binding */ userLogin)
/* harmony export */ });
/* unused harmony export user */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState: {
        userInfo: {}
    },
    reducers: {
        userLogin: (state, action)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.userInfo = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { userLogin } = userSlice.actions;
const user = (state)=>state;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ }),

/***/ 47583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable jsx-a11y/alt-text */ /* __next_internal_client_entry_do_not_use__ default auto */ 



const ImageFallback = (props)=>{
    const { src, fallback, ...rest } = props;
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(src);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setImgSrc(src);
    }, [
        src
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...rest,
        src: imgSrc,
        onError: ()=>{
            setImgSrc(fallback);
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFallback);


/***/ }),

/***/ 31920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82503);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47184);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const SeoMeta = ({ title, meta_title, image, description, canonical, noindex })=>{
    const { meta_image, meta_author, meta_description } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.metadata;
    const { base_url } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site;
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
            }),
            canonical && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: canonical,
                itemProp: "url"
            }),
            noindex && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "noindex,nofollow"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "author",
                content: meta_author
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `${base_url}/${pathname.replace("/", "")}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: `${base_url}${image ? image : meta_image}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: `${base_url}${image ? image : meta_image}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeoMeta);


/***/ }),

/***/ 34171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const Accordion = ({ title, children, className })=>{
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `accordion ${show && "active"} ${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "accordion-header",
                onClick: ()=>setShow(!show),
                children: [
                    title,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: "accordion-icon",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 512 512",
                        xmlSpace: "preserve",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "currentColor",
                            d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "accordion-content",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ }),

/***/ 50230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function Tab({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "tab-content-panel",
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);


/***/ }),

/***/ 50633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Tabs({ children }) {
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    //select tabItems
    const tabItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const [defaultFocus, setDefaultFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (defaultFocus) {
            //@ts-ignore
            tabItemsRef.current[active].focus();
        } else {
            setDefaultFocus(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        active
    ]);
    //change tab item on click
    const handleKeyDown = (event, index)=>{
        if (event.key === "Enter" || event.key === " ") {
            setActive(index);
        } else if (event.key === "ArrowRight") {
            setActive((active + 1) % children.length);
        } else if (event.key === "ArrowLeft") {
            setActive((active - 1 + children.length) % children.length);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tab",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "tab-nav",
                role: "tablist",
                children: children.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: `tab-nav-item ${index === active && "active"}`,
                        role: "tab",
                        tabIndex: index === active ? 0 : -1,
                        onClick: ()=>setActive(index),
                        onKeyDown: (e)=>handleKeyDown(e, index),
                        //@ts-ignore
                        ref: (ref)=>tabItemsRef.current[index] = ref,
                        children: item.props.name
                    }, index))
            }),
            children.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `tab-content ${index === active ? "block" : "hidden"}`,
                    children: data.props.children
                }, index))
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);


/***/ }),

/***/ 63182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57807);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3426);
/* harmony import */ var react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Youtube = ({ id, title, ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1___default()), {
        wrapperClass: "yt-lite rounded-lg",
        id: id,
        title: title,
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Youtube);


/***/ }),

/***/ 33455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hs: () => (/* binding */ loadNews),
/* harmony export */   LX: () => (/* binding */ loadProduct),
/* harmony export */   TJ: () => (/* binding */ loadViaId),
/* harmony export */   hD: () => (/* binding */ loadPartner),
/* harmony export */   hT: () => (/* binding */ loadBanner),
/* harmony export */   i$: () => (/* binding */ loadMessage),
/* harmony export */   pm: () => (/* binding */ loadCompanyInfo),
/* harmony export */   s: () => (/* binding */ loadContact),
/* harmony export */   v9: () => (/* binding */ loadCustomer)
/* harmony export */ });
/* unused harmony export loadUsers */
async function loadNews(role) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const posts = await loadNews()
    let url = "api/new";
    if (role == "admin") {
        url = "api/getall/new";
    }
    const res = await fetch(url);
    const news = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return news;
}
async function loadViaId(id, schema) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const posts = await loadNews()
    const data = {
        _id: id,
        schema: schema
    };
    const res = await fetch("api/findById", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        }),
        body: JSON.stringify(data)
    });
    const datas = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return datas;
}
async function loadUsers() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const posts = await loadNews()
    const res = await fetch("api/user");
    const users = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return users;
}
async function loadCompanyInfo() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const posts = await loadNews()
    const res = await fetch("api/company");
    const info = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return info;
}
async function loadCustomer() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const posts = await loadNews()
    const res = await fetch("api/customer");
    const customers = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return customers;
}
async function loadPartner() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const posts = await loadNews()
    const res = await fetch("api/partner");
    const partners = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return partners;
}
async function loadMessage() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const posts = await loadNews()
    const res = await fetch("api/sendMessage");
    const messages = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return messages;
}
async function loadProduct() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const posts = await loadNews()
    const res = await fetch("api/product");
    const products = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return products;
}
async function loadBanner() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const posts = await loadNews()
    const res = await fetch("api/banner");
    const banners = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return banners;
}
async function loadContact() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const posts = await loadNews()
    const res = await fetch("api/contact");
    const contacts = await res.json();
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return contacts;
}


/***/ }),

/***/ 47184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OI: () => (/* binding */ humanize),
/* harmony export */   ab: () => (/* binding */ plainify),
/* harmony export */   gI: () => (/* binding */ markdownify),
/* harmony export */   lV: () => (/* binding */ slugify)
/* harmony export */ });
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48362);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69079);


marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.use({
    mangle: false,
    headerIds: false
});
// slugify
const slugify = (content)=>{
    return (0,github_slugger__WEBPACK_IMPORTED_MODULE_0__/* .slug */ .o)(content);
};
// markdownify
const markdownify = (content, div)=>{
    return {
        __html: div ? marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.parse(content) : marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.parseInline(content)
    };
};
// humanize
const humanize = (content)=>{
    return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
        return m.toUpperCase();
    });
};
// plainify
const plainify = (content)=>{
    const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, "");
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    const stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
};
// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities)=>{
    let entityList = {
        "&nbsp;": " ",
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&#39;": "'"
    };
    let htmlWithoutEntities = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity)=>{
        return entityList[entity];
    });
    return htmlWithoutEntities;
};


/***/ }),

/***/ 74053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`G:\vercel\lpc_landingpage\src\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 18275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_ImageFallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43069);
/* harmony import */ var _helpers_MDXContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80102);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17222);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15915);
/* harmony import */ var _partials_SeoMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36490);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_MDXContent__WEBPACK_IMPORTED_MODULE_2__]);
_helpers_MDXContent__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const NotFound = async ()=>{
    const data = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_3__/* .getListPage */ .d)("pages/404.md");
    const { image, title } = data.frontmatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_SeoMeta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                title: "Page Not Found",
                image: "/images/404.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section-sm",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center sm:col-10 md:col-8 lg:col-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_helpers_ImageFallback__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                    className: "mb-8 w-full",
                                    src: image,
                                    alt: "page not found",
                                    height: 320,
                                    width: 630
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "h2 mb-4",
                                    dangerouslySetInnerHTML: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .markdownify */ .gI)(title)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "content",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_helpers_MDXContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        content: data.content
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    href: "/",
                                    className: "btn btn-primary mt-8",
                                    children: "Back To Home"
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`G:\vercel\lpc_landingpage\src\layouts\helpers\ImageFallback.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 80102:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shortcodes_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43492);
/* harmony import */ var next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14916);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26521);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__]);
next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const MDXContent = ({ content })=>{
    const mdxOptions = {
        remarkPlugins: [
            remark_gfm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__.MDXRemote, {
            source: content,
            components: _shortcodes_all__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            options: {
                mdxOptions
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`G:\vercel\lpc_landingpage\src\layouts\partials\SeoMeta.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 43492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ shortcodes_all)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Accordion.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`G:\vercel\lpc_landingpage\src\layouts\shortcodes\Accordion.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Accordion = (__default__);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Button.tsx


const Button = ({ label, link, style, rel })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: link,
        target: "_blank",
        rel: `noopener noreferrer ${rel ? rel === "follow" ? "" : rel : "nofollow"}`,
        className: `btn mb-4 me-4 ${style === "outline" ? "btn-outline-primary" : "btn-primary"} border-primary no-underline hover:text-white`,
        children: label
    });
};
/* harmony default export */ const shortcodes_Button = (Button);

// EXTERNAL MODULE: ./src/lib/utils/textConverter.ts
var textConverter = __webpack_require__(15915);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Notice.tsx



function Notice({ type, children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `notice ${type}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "notice-head",
                children: [
                    type === "tip" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2.4C6.69807 2.4 2.4 6.69807 2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4ZM15.9515 7.55147L9.6 13.9029L8.04853 12.3515C7.5799 11.8828 6.8201 11.8828 6.35147 12.3515C5.88284 12.8201 5.88284 13.5799 6.35147 14.0485L8.75147 16.4485C9.2201 16.9172 9.9799 16.9172 10.4485 16.4485L17.6485 9.24853C18.1172 8.7799 18.1172 8.0201 17.6485 7.55147C17.1799 7.08284 16.4201 7.08284 15.9515 7.55147Z",
                            fill: "currentColor"
                        })
                    }) : type === "info" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 18 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M9.16109 0.993016C9.97971 1.03952 10.6611 1.42989 11.0721 2.22339L17.7981 15.8014C18.4502 17.1739 17.4403 19.0208 15.7832 19.0474H2.23859C0.730337 19.0234 -0.507163 17.3108 0.231587 15.7864L7.08321 2.20877C7.21146 1.96502 7.26996 1.89452 7.38059 1.76664C7.82534 1.25102 8.31171 0.975016 9.16109 0.993016ZM9.05046 2.49189C8.79284 2.50464 8.55696 2.64902 8.42834 2.87327C6.06134 7.36539 3.77946 11.9036 1.56546 16.4734C1.36071 16.9328 1.71209 17.5223 2.22621 17.547C6.74871 17.6201 11.2731 17.6201 15.7956 17.547C16.2925 17.523 16.666 16.953 16.459 16.4783C14.2866 11.9093 12.0471 7.37102 9.72171 2.87814C9.58446 2.63402 9.38309 2.48739 9.05046 2.49189Z",
                                fill: "currentColor"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M9.61323 13.2153H8.35773L8.21973 7.04688H9.75723L9.61323 13.2153ZM8.17773 15.1015C8.17773 14.8731 8.25161 14.6841 8.39973 14.5338C8.54823 14.3838 8.75036 14.3084 9.00648 14.3084C9.26298 14.3084 9.46511 14.3838 9.61323 14.5338C9.76136 14.6841 9.83561 14.8731 9.83561 15.1015C9.83561 15.3216 9.76323 15.5057 9.61923 15.6539C9.47486 15.802 9.27086 15.8762 9.00648 15.8762C8.74211 15.8762 8.53811 15.802 8.39373 15.6539C8.24973 15.5057 8.17773 15.3216 8.17773 15.1015Z",
                                fill: "currentColor"
                            })
                        ]
                    }) : type === "warning" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10 0C15.522 0 20 4.478 20 10C20 15.522 15.522 20 10 20C4.478 20 0 15.522 0 10C0 4.478 4.478 0 10 0ZM10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C14.411 18 18 14.411 18 10C18 5.589 14.411 2 10 2ZM12.293 6.293L13.707 7.707L11.414 10L13.707 12.293L12.293 13.707L10 11.414L7.707 13.707L6.293 12.293L8.586 10L6.293 7.707L7.707 6.293L10 8.586L12.293 6.293Z",
                            fill: "currentColor"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "my-0 ml-1.5",
                        children: (0,textConverter/* humanize */.OI)(type)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "notice-body",
                children: children
            })
        ]
    });
}
/* harmony default export */ const shortcodes_Notice = (Notice);

;// CONCATENATED MODULE: ./src/layouts/shortcodes/Tab.tsx

const Tab_proxy = (0,module_proxy.createProxy)(String.raw`G:\vercel\lpc_landingpage\src\layouts\shortcodes\Tab.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Tab_esModule, $$typeof: Tab_$$typeof } = Tab_proxy;
const Tab_default_ = Tab_proxy.default;


/* harmony default export */ const Tab = (Tab_default_);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Tabs.tsx

const Tabs_proxy = (0,module_proxy.createProxy)(String.raw`G:\vercel\lpc_landingpage\src\layouts\shortcodes\Tabs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Tabs_esModule, $$typeof: Tabs_$$typeof } = Tabs_proxy;
const Tabs_default_ = Tabs_proxy.default;


/* harmony default export */ const Tabs = (Tabs_default_);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Video.tsx

function Video({ title, width = 500, height = "auto", src, ...rest }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
        className: "overflow-hidden rounded-lg",
        width: width,
        height: height,
        controls: true,
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                src: src.match(/^http/) ? src : `/videos/${src}`,
                type: "video/mp4"
            }),
            title
        ]
    });
}
/* harmony default export */ const shortcodes_Video = (Video);

;// CONCATENATED MODULE: ./src/layouts/shortcodes/Youtube.tsx

const Youtube_proxy = (0,module_proxy.createProxy)(String.raw`G:\vercel\lpc_landingpage\src\layouts\shortcodes\Youtube.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Youtube_esModule, $$typeof: Youtube_$$typeof } = Youtube_proxy;
const Youtube_default_ = Youtube_proxy.default;


/* harmony default export */ const Youtube = (Youtube_default_);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/all.tsx







const shortcodes = {
    Button: shortcodes_Button,
    Accordion: Accordion,
    Video: shortcodes_Video,
    Tab: Tab,
    Tabs: Tabs,
    Notice: shortcodes_Notice,
    Youtube: Youtube
};
/* harmony default export */ const shortcodes_all = (shortcodes);


/***/ }),

/***/ 17222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ getListPage),
/* harmony export */   i: () => (/* binding */ getSinglePage)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71417);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64980);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);




const contentPath = "src/content";
// Helper function to read file content
const readFile = (filePath)=>{
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, "utf-8");
};
// Helper function to parse frontmatter
const parseFrontmatter = (frontmatter)=>{
    const frontmatterString = JSON.stringify(frontmatter);
    return JSON.parse(frontmatterString);
};
// get list page data, ex: _index.md
const getListPage = (filePath)=>{
    const pageDataPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(contentPath, filePath);
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(pageDataPath)) {
        (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.notFound)();
    }
    const pageData = readFile(pageDataPath);
    const { content, data: frontmatter } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(pageData);
    return {
        frontmatter: parseFrontmatter(frontmatter),
        content
    };
};
// get all single pages, ex: blog/post.md
const getSinglePage = (folder)=>{
    const folderPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(contentPath, folder);
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(folderPath) || !fs__WEBPACK_IMPORTED_MODULE_0___default().lstatSync(folderPath).isDirectory()) {
        (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.notFound)();
    }
    const filesPath = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(folderPath);
    const sanitizeFiles = filesPath.filter((file)=>file.endsWith(".md"));
    const filterSingleFiles = sanitizeFiles.filter((file)=>file.match(/^(?!_)/));
    const singlePages = filterSingleFiles.map((filename)=>{
        const slug = filename.replace(".md", "");
        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(folderPath, filename);
        const pageData = readFile(filePath);
        const { content, data: frontmatter } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(pageData);
        const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;
        return {
            frontmatter: parseFrontmatter(frontmatter),
            slug: url,
            content
        };
    });
    const publishedPages = singlePages.filter((page)=>!page.frontmatter.draft && page);
    const filterByDate = publishedPages.filter((page)=>new Date(page.frontmatter.date || new Date()) <= new Date());
    return filterByDate;
};


/***/ }),

/***/ 15915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OI: () => (/* binding */ humanize),
/* harmony export */   gI: () => (/* binding */ markdownify),
/* harmony export */   lV: () => (/* binding */ slugify)
/* harmony export */ });
/* unused harmony export plainify */
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22348);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79553);


marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.use({
    mangle: false,
    headerIds: false
});
// slugify
const slugify = (content)=>{
    return (0,github_slugger__WEBPACK_IMPORTED_MODULE_0__/* .slug */ .o)(content);
};
// markdownify
const markdownify = (content, div)=>{
    return {
        __html: div ? marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.parse(content) : marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.parseInline(content)
    };
};
// humanize
const humanize = (content)=>{
    return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
        return m.toUpperCase();
    });
};
// plainify
const plainify = (content)=>{
    const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, "");
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    const stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
};
// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities)=>{
    let entityList = {
        "&nbsp;": " ",
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&#39;": "'"
    };
    let htmlWithoutEntities = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity)=>{
        return entityList[entity];
    });
    return htmlWithoutEntities;
};


/***/ }),

/***/ 52485:
/***/ (() => {



/***/ }),

/***/ 5274:
/***/ (() => {



/***/ }),

/***/ 82503:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"site":{"title":"LPC","base_url":"https://nextplate.netlify.app","yb":"/images/favicon.png","logo":"/images/logo.png","logo_darkmode":"/images/logo.png","logo_width":"143","logo_height":"70","logo_text":"LPC"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"params":{"copyright":"Copyright © 2023 Lien Phat Technology Corporation. All Rights Reserved."},"navigation_button":{"enable":true,"label":"Đăng nhập","labelEn":"Login","link":"/login"},"metadata":{"meta_author":"LPC","meta_image":"/images/og-image.png","meta_description":"Welcome to LPC"}}');

/***/ })

};
;