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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/LoginPage.module.css */ \"./src/styles/LoginPage.module.css\");\n/* harmony import */ var _styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction LoginPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().page),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().login_div),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: ()=>{},\n                    action: \"\",\n                    className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().h1),\n                            children: \"Entrar\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().input_span),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                                    type: \"email\",\n                                    placeholder: \"Email ou Telefone\"\n                                }, void 0, false, {\n                                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                                    type: \"password\",\n                                    placeholder: \"Senha\"\n                                }, void 0, false, {\n                                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().options),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            children: \"Esqueci minha senha\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/register\",\n                                            children: \" N\\xe3o tenho cadastro\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                            children: \"Entrar\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().google_button),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"\", {\n                            callbackUrl: \"/\"\n                        }),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_LoginPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n                            src: \"/images/icons/google.png\",\n                            alt: \"google \"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        \"Continuar com o google\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/login.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1Y7QUFDRDtBQUV6QixTQUFTRzs7SUFFdEIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXTiwwRUFBVztrQkFDekIsNEVBQUNLO1lBQUlDLFdBQVdOLCtFQUFnQjs7OEJBQzlCLDhEQUFDUztvQkFBS0MsVUFBVSxLQUFPO29CQUFHQyxRQUFPO29CQUFHTCxXQUFXTiwwRUFBVzs7c0NBQzFELDhEQUFDWTs0QkFBR04sV0FBV04sd0VBQVM7c0NBQUU7Ozs7OztzQ0FDeEIsOERBQUNhOzRCQUFLUCxXQUFXTixnRkFBaUI7OzhDQUNoQyw4REFBQ2U7b0NBQ0NULFdBQVdOLDJFQUFZO29DQUN2QmdCLE1BQUs7b0NBQ0xDLGFBQVk7Ozs7Ozs4Q0FFZCw4REFBQ0Y7b0NBQ0NULFdBQVdOLDJFQUFZO29DQUN2QmdCLE1BQUs7b0NBQ0xDLGFBQVk7Ozs7Ozs4Q0FFZCw4REFBQ0o7b0NBQUtQLFdBQVdOLDZFQUFjOztzREFDN0IsOERBQUNtQjs0Q0FBRUMsTUFBSztzREFBSTs7Ozs7O3NEQUNaLDhEQUFDRDs0Q0FBRUMsTUFBSztzREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUd4Qiw4REFBQ0M7NEJBQU9MLE1BQUs7NEJBQVNWLFdBQVdOLDRFQUFhO3NDQUFFOzs7Ozs7Ozs7Ozs7OEJBSWxELDhEQUFDcUI7b0JBQ0NmLFdBQVdOLG1GQUFvQjtvQkFDL0J1QixTQUFTLElBQU10Qix1REFBTUEsQ0FBRSxJQUFHOzRCQUFFdUIsYUFBYzt3QkFBRzs7c0NBRTdDLDhEQUFDQzs0QkFDQ25CLFdBQVdOLDBFQUFXOzRCQUN0QjJCLEtBQUk7NEJBQ0pDLEtBQUk7Ozs7Ozt3QkFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0EzQ3dCekI7O1FBRVBELGtEQUFTQTs7O0tBRkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2dpbi50c3g/MTFlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Mb2dpblBhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcbiAgXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2Rpdn0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoKSA9PiB7fX0gYWN0aW9uPVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oMX0+RW50cmFyPC9oMT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9zcGFufT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBvdSBUZWxlZm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25zfT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Fc3F1ZWNpIG1pbmhhIHNlbmhhPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3JlZ2lzdGVyXCI+IE7Do28gdGVuaG8gY2FkYXN0cm88L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICBFbnRyYXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ29vZ2xlX2J1dHRvbn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oYGAsIHsgY2FsbGJhY2tVcmw6IGAvYCB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ljb25zL2dvb2dsZS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiZ29vZ2xlXG4gICAgICAgIFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICBDb250aW51YXIgY29tIG8gZ29vZ2xlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwic2lnbkluIiwidXNlUm91dGVyIiwiTG9naW5QYWdlIiwicm91dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicGFnZSIsImxvZ2luX2RpdiIsImZvcm0iLCJvblN1Ym1pdCIsImFjdGlvbiIsImgxIiwic3BhbiIsImlucHV0X3NwYW4iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9wdGlvbnMiLCJhIiwiaHJlZiIsImJ1dHRvbiIsImdvb2dsZV9idXR0b24iLCJvbkNsaWNrIiwiY2FsbGJhY2tVcmwiLCJpbWciLCJpY29uIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n"));

/***/ })

});