"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/restaurant/menu/[id]",{

/***/ "./src/components/NavbarRestaurant.tsx":
/*!*********************************************!*\
  !*** ./src/components/NavbarRestaurant.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavbarRestaurant; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/NavbarRestaurant.module.css */ \"./src/styles/NavbarRestaurant.module.css\");\n/* harmony import */ var _styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavbarLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavbarLogin */ \"./src/components/NavbarLogin.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction NavbarRestaurant(props) {\n    _s();\n    if (!props.restaurant) return null;\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4___default().ul_l),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4___default().li),\n                        children: \"Card\\xe1pio\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4___default().li),\n                        children: \"Unidades\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: (_styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4___default().img_logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: props.restaurant.name.toLowerCase().replaceAll(\" \", \"_\"),\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4___default().ul_r),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4___default().li),\n                        children: \"Contato\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_NavbarRestaurant_module_css__WEBPACK_IMPORTED_MODULE_4___default().li),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavbarLogin__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(NavbarRestaurant, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavbarRestaurant;\nvar _c;\n$RefreshReg$(_c, \"NavbarRestaurant\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXJSZXN0YXVyYW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFLYjtBQUNMO0FBQ0E7QUFFekIsU0FBU0ksaUJBQWlCQyxLQUV4Qzs7SUFDQyxJQUFJLENBQUNBLE1BQU1DLFVBQVUsRUFBRSxPQUFPO0lBRTlCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdQLDJEQUFVQTtJQUNwQyxNQUFNUSxTQUFTUCxzREFBU0E7SUFFeEIscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVdYLG1GQUFhOzswQkFDM0IsOERBQUNhO2dCQUFHRixXQUFXWCxpRkFBVzs7a0NBQ3hCLDhEQUFDZTt3QkFBR0osV0FBV1gsK0VBQVM7a0NBQUU7Ozs7OztrQ0FDMUIsOERBQUNlO3dCQUFHSixXQUFXWCwrRUFBUztrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUU1Qiw4REFBQ2dCO2dCQUFFTCxXQUFXWCxxRkFBZTswQkFFM0IsNEVBQUNrQjtvQkFDQ0MsS0FBS2QsTUFBTUMsVUFBVSxDQUFDYyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsVUFBVSxDQUFDLEtBQUs7b0JBQ3pEQyxLQUFJOzs7Ozs7Ozs7OzswQkFHUiw4REFBQ1Y7Z0JBQUdGLFdBQVdYLGlGQUFXOztrQ0FDeEIsOERBQUNlO3dCQUFHSixXQUFXWCwrRUFBUztrQ0FBRTs7Ozs7O2tDQUUxQiw4REFBQ2U7d0JBQUdKLFdBQVdYLCtFQUFTO2tDQUN0Qiw0RUFBQ0csb0RBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RCO0dBbEN3QkM7O1FBS0lILHVEQUFVQTtRQUNyQkMsa0RBQVNBOzs7S0FORkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyUmVzdGF1cmFudC50c3g/NmUwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL05hdmJhclJlc3RhdXJhbnQubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgbG9naW4gZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2xvZ2luLWNhcmRhcGlvLnBuZ1wiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2xvZ29fc3VzaGlzcGFjZS5wbmdcIjtcbmltcG9ydCB7IFJlc3RhdXJhbnQgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5hdmJhckxvZ2luIGZyb20gXCIuL05hdmJhckxvZ2luXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhclJlc3RhdXJhbnQocHJvcHM6IHtcbiAgcmVzdGF1cmFudDogUmVzdGF1cmFudCB8IHVuZGVmaW5lZDtcbn0pIHtcbiAgaWYgKCFwcm9wcy5yZXN0YXVyYW50KSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudWxfbH0+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saX0+Q2FyZMOhcGlvPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpfT5VbmlkYWRlczwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX2xvZ299PlxuICAgICAgICB7LyogPEltYWdlIHNyYz17bG9nb30gaGVpZ2h0PXsxMTB9IGFsdD1cIlwiPjwvSW1hZ2U+ICovfVxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtwcm9wcy5yZXN0YXVyYW50Lm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKFwiIFwiLCBcIl9cIil9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy51bF9yfT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpfT5Db250YXRvPC9saT5cbiAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saX0+Q2FycmluaG88L2xpPiAqL31cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpfT5cbiAgICAgICAgICA8TmF2YmFyTG9naW4gLz5cbiAgICAgICAgPC9saT5cblxuICAgICAgICB7LyogPGEgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX2xvZ2lufT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dpbn0gaGVpZ2h0PXszNX0gYWx0PVwiXCI+PC9JbWFnZT5cbiAgICAgICAgPC9hPiAqL31cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIk5hdmJhckxvZ2luIiwiTmF2YmFyUmVzdGF1cmFudCIsInByb3BzIiwicmVzdGF1cmFudCIsImRhdGEiLCJzZXNzaW9uIiwicm91dGVyIiwibmF2IiwiY2xhc3NOYW1lIiwibmF2YmFyIiwidWwiLCJ1bF9sIiwibGkiLCJhIiwiaW1nX2xvZ28iLCJpbWciLCJzcmMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlQWxsIiwiYWx0IiwidWxfciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavbarRestaurant.tsx\n"));

/***/ })

});