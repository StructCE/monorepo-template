"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/LoginGoogle.tsx":
/*!****************************************!*\
  !*** ./src/components/LoginGoogle.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SigninButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Navbar.module.css */ \"./src/styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction dropDown() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"dropdown\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    class: \"dropbtn\",\n                    children: \"Dropdown\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"dropdown-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: \"Sair\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: \"Perfil\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\nfunction SigninButton() {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    if (session && session.user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon_div),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    onClick: ()=>{\n                        dropDown();\n                    },\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().user_icon),\n                    src: String(session.user.image),\n                    alt: String(session.user.name)\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropdown_item),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Sair\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropdown_item),\n                    onClick: ()=>{\n                        router.push(\"/user/profile\");\n                    },\n                    children: \"Perfil\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>{\n            router.push(\"/login\");\n        },\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n        children: \"Entrar\"\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(SigninButton, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SigninButton;\nvar _c;\n$RefreshReg$(_c, \"SigninButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbkdvb2dsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUNvQztBQUNkO0FBQ1I7QUFFeEMsU0FBU0s7SUFDUCxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsT0FBTTs7OEJBQ1QsOERBQUNDO29CQUFPRCxPQUFNOzhCQUFVOzs7Ozs7OEJBQ3hCLDhEQUFDRDtvQkFBSUMsT0FBTTs7c0NBQ1QsOERBQUNFOzRCQUFFQyxNQUFLO3NDQUFJOzs7Ozs7c0NBQ1osOERBQUNEOzRCQUFFQyxNQUFLO3NDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdYLDJEQUFVQTtJQUNwQyxNQUFNWSxTQUFTVixzREFBU0E7SUFFeEIsSUFBSVMsV0FBV0EsUUFBUUUsSUFBSSxFQUFFO1FBQzNCLHFCQUNFLDhEQUFDVDtZQUFJVSxXQUFXYiwyRUFBZTs7OEJBQzdCLDhEQUFDZTtvQkFDQ0MsU0FBUzt3QkFDUGQ7b0JBQ0Y7b0JBQ0FXLFdBQVdiLDRFQUFnQjtvQkFDM0JrQixLQUFLQyxPQUFPVCxRQUFRRSxJQUFJLENBQUNRLEtBQUs7b0JBQzlCQyxLQUFLRixPQUFPVCxRQUFRRSxJQUFJLENBQUNVLElBQUk7Ozs7Ozs4QkFHL0IsOERBQUNqQjtvQkFBT1EsV0FBV2IsZ0ZBQW9CO29CQUFFZ0IsU0FBUyxJQUFNbEIsd0RBQU9BOzhCQUFJOzs7Ozs7OEJBR25FLDhEQUFDTztvQkFDQ1EsV0FBV2IsZ0ZBQW9CO29CQUMvQmdCLFNBQVM7d0JBQ1BMLE9BQU9hLElBQUksQ0FBRTtvQkFDZjs4QkFDRDs7Ozs7Ozs7Ozs7O0lBS1A7SUFDQSxxQkFDRSw4REFBQ25CO1FBQ0NXLFNBQVM7WUFDUEwsT0FBT2EsSUFBSSxDQUFFO1FBQ2Y7UUFDQVgsV0FBV2IseUVBQWE7a0JBQ3pCOzs7Ozs7QUFPTDtHQTNDd0JROztRQUNJVCx1REFBVUE7UUFDckJFLGtEQUFTQTs7O0tBRkZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ2luR29vZ2xlLnRzeD9jYzM0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvTmF2YmFyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBkcm9wRG93bigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkcm9wYnRuXCI+RHJvcGRvd248L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlNhaXI8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5QZXJmaWw8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25pbkJ1dHRvbigpIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGlmIChzZXNzaW9uICYmIHNlc3Npb24udXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25fZGl2fT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGRyb3BEb3duKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2ljb259XG4gICAgICAgICAgc3JjPXtTdHJpbmcoc2Vzc2lvbi51c2VyLmltYWdlKX1cbiAgICAgICAgICBhbHQ9e1N0cmluZyhzZXNzaW9uLnVzZXIubmFtZSl9XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiBUT0RPOiBkcm9wZG93biBjb20gXCJzYWlyXCIgZSBcInBlcmZpbFwiICovfVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX2l0ZW19IG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+XG4gICAgICAgICAgU2FpclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX2l0ZW19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyL3Byb2ZpbGVgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUGVyZmlsXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goYC9sb2dpbmApO1xuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICA+XG4gICAgICBFbnRyYXJcbiAgICA8L2J1dHRvbj5cbiAgICAvLyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgIC8vICAgRW50cmFyXG4gICAgLy8gPC9idXR0b24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInN0eWxlcyIsInVzZVJvdXRlciIsImRyb3BEb3duIiwiZGl2IiwiY2xhc3MiLCJidXR0b24iLCJhIiwiaHJlZiIsIlNpZ25pbkJ1dHRvbiIsImRhdGEiLCJzZXNzaW9uIiwicm91dGVyIiwidXNlciIsImNsYXNzTmFtZSIsImljb25fZGl2IiwiaW1nIiwib25DbGljayIsInVzZXJfaWNvbiIsInNyYyIsIlN0cmluZyIsImltYWdlIiwiYWx0IiwibmFtZSIsImRyb3Bkb3duX2l0ZW0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/LoginGoogle.tsx\n"));

/***/ })

});