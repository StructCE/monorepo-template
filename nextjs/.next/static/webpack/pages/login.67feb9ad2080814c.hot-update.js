"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/LoginPage.module.css */ \"./src/styles/LoginPage.module.css\");\n/* harmony import */ var _styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction LoginPage() {\n    _s();\n    [email, setEmail] = use;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().page),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().login_div),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: ()=>{},\n                    action: \"\",\n                    className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().h1),\n                            children: \"Entrar\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().input_span),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                                    type: \"email\",\n                                    placeholder: \"Email ou Telefone\"\n                                }, void 0, false, {\n                                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                                    type: \"password\",\n                                    placeholder: \"Senha\"\n                                }, void 0, false, {\n                                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().options),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            children: \"Esqueci minha senha\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/register\",\n                                            children: \" N\\xe3o tenho cadastro\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                            children: \"Entrar\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().google_button),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"\", {\n                            callbackUrl: \"/\"\n                        }),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n                            src: \"/images/icons/google.png\",\n                            alt: \"google \"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        \"Continuar com o google\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1Y7QUFDRDtBQUV6QixTQUFTRzs7SUFDdEIsQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHQztJQUNuQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVdULDBFQUFXO2tCQUN6Qiw0RUFBQ1E7WUFBSUMsV0FBV1QsK0VBQWdCOzs4QkFDOUIsOERBQUNZO29CQUFLQyxVQUFVLEtBQU87b0JBQUdDLFFBQU87b0JBQUdMLFdBQVdULDBFQUFXOztzQ0FDMUQsOERBQUNlOzRCQUFHTixXQUFXVCx3RUFBUztzQ0FBRTs7Ozs7O3NDQUN4Qiw4REFBQ2dCOzRCQUFLUCxXQUFXVCxnRkFBaUI7OzhDQUNoQyw4REFBQ2tCO29DQUNDVCxXQUFXVCwyRUFBWTtvQ0FDdkJtQixNQUFLO29DQUNMQyxhQUFZOzs7Ozs7OENBRWQsOERBQUNGO29DQUNDVCxXQUFXVCwyRUFBWTtvQ0FDdkJtQixNQUFLO29DQUNMQyxhQUFZOzs7Ozs7OENBRWQsOERBQUNKO29DQUFLUCxXQUFXVCw2RUFBYzs7c0RBQzdCLDhEQUFDc0I7NENBQUVDLE1BQUs7c0RBQUk7Ozs7OztzREFDWiw4REFBQ0Q7NENBQUVDLE1BQUs7c0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHeEIsOERBQUNDOzRCQUFPTCxNQUFLOzRCQUFTVixXQUFXVCw0RUFBYTtzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQUlsRCw4REFBQ3dCO29CQUNDZixXQUFXVCxtRkFBb0I7b0JBQy9CMEIsU0FBUyxJQUFNekIsdURBQU1BLENBQUUsSUFBRzs0QkFBRTBCLGFBQWM7d0JBQUc7O3NDQUU3Qyw4REFBQ0M7NEJBQ0NuQixXQUFXVCwwRUFBVzs0QkFDdEI4QixLQUFJOzRCQUNKQyxLQUFJOzs7Ozs7d0JBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBM0N3QjVCOztRQUVQRCxrREFBU0E7OztLQUZGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4udHN4PzExZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvTG9naW5QYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XG4gIFtlbWFpbCxzZXRFbWFpbF0gPSB1c2VcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fZGl2fT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eygpID0+IHt9fSBhY3Rpb249XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmgxfT5FbnRyYXI8L2gxPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X3NwYW59PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIG91IFRlbGVmb25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuaGFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbnN9PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkVzcXVlY2kgbWluaGEgc2VuaGE8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvcmVnaXN0ZXJcIj4gTsOjbyB0ZW5obyBjYWRhc3RybzwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgIEVudHJhclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5nb29nbGVfYnV0dG9ufVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25JbihgYCwgeyBjYWxsYmFja1VybDogYC9gIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaWNvbnMvZ29vZ2xlLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJnb29nbGVcbiAgICAgICAgXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIENvbnRpbnVhciBjb20gbyBnb29nbGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzaWduSW4iLCJ1c2VSb3V0ZXIiLCJMb2dpblBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlIiwicm91dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicGFnZSIsImxvZ2luX2RpdiIsImZvcm0iLCJvblN1Ym1pdCIsImFjdGlvbiIsImgxIiwic3BhbiIsImlucHV0X3NwYW4iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9wdGlvbnMiLCJhIiwiaHJlZiIsImJ1dHRvbiIsImdvb2dsZV9idXR0b24iLCJvbkNsaWNrIiwiY2FsbGJhY2tVcmwiLCJpbWciLCJpY29uIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n"));

/***/ })

});