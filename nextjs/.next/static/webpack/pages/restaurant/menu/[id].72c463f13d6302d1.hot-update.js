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

/***/ "./src/components/ShowProduct.tsx":
/*!****************************************!*\
  !*** ./src/components/ShowProduct.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/ShowProduct.module.css */ \"./src/styles/ShowProduct.module.css\");\n/* harmony import */ var _styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ShowProduct(param) {\n    let { product } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().nome),\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().descricao),\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().ingredientes),\n                        children: product.ingredients\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().preco),\n                children: [\n                    \"R$ \",\n                    product.price + \",00\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().action),\n                onClick: ()=>{\n                    if (confirm(\"Adicionar produto ao carrinho?\")) {\n                        postCartProdut(props);\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/icons/cart.png\",\n                    alt: \"add_to_cart\",\n                    className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().action_icon)\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = ShowProduct;\nvar _c;\n$RefreshReg$(_c, \"ShowProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaG93UHJvZHVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBRXRDLFNBQVNDLFlBQVksS0FNbkM7UUFObUMsRUFBQ0MsT0FBTyxFQU0zQyxHQU5tQztJQU9sQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV0osNEVBQVc7OzBCQUV6Qiw4REFBQ0c7Z0JBQUlDLFdBQVdKLDRFQUFXOztrQ0FDekIsOERBQUNPO3dCQUFHSCxXQUFXSiw0RUFBVztrQ0FBR0UsUUFBUU8sSUFBSTs7Ozs7O2tDQUN6Qyw4REFBQ0M7d0JBQUVOLFdBQVdKLGlGQUFnQjtrQ0FBR0UsUUFBUVUsV0FBVzs7Ozs7O2tDQUNwRCw4REFBQ0Y7d0JBQUVOLFdBQVdKLG9GQUFtQjtrQ0FBR0UsUUFBUVksV0FBVzs7Ozs7Ozs7Ozs7OzBCQUt6RCw4REFBQ0M7Z0JBQUdYLFdBQVdKLDZFQUFZOztvQkFBRTtvQkFBSUUsUUFBUWUsS0FBSyxHQUFHOzs7Ozs7OzBCQUNqRCw4REFBQ0M7Z0JBQ0NkLFdBQVdKLDhFQUFhO2dCQUN4Qm9CLFNBQVM7b0JBQ1AsSUFBSUMsUUFBUSxtQ0FBbUM7d0JBQzdDQyxlQUFlQztvQkFDakI7Z0JBQ0Y7MEJBRUEsNEVBQUNDO29CQUNDQyxLQUFJO29CQUNKQyxLQUFJO29CQUNKdEIsV0FBV0osbUZBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QztLQW5Dd0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Nob3dQcm9kdWN0LnRzeD8xNzkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1Nob3dQcm9kdWN0Lm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd1Byb2R1Y3Qoe3Byb2R1Y3R9OiBcbiAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGluZ3JlZGllbnRzOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIHsvKiA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubm9tZX0+e3Byb2R1Y3QubmFtZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmljYW99Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5ncmVkaWVudGVzfT57cHJvZHVjdC5pbmdyZWRpZW50c308L3A+XG4gICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbmdyZWRpZW50ZXN9PlxuICAgICAgICAgIHtBcnJheS5mcm9tKHByb2R1Y3QuaW5ncmVkaWVudHMpLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgPC9wPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnByZWNvfT5SJCB7cHJvZHVjdC5wcmljZSArIFwiLDAwXCJ9PC9oMj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKGNvbmZpcm0oXCJBZGljaW9uYXIgcHJvZHV0byBhbyBjYXJyaW5obz9cIikpIHtcbiAgICAgICAgICAgIHBvc3RDYXJ0UHJvZHV0KHByb3BzKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaWNvbnMvY2FydC5wbmdcIlxuICAgICAgICAgIGFsdD1cImFkZF90b19jYXJ0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25faWNvbn1cbiAgICAgICAgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlNob3dQcm9kdWN0IiwicHJvZHVjdCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbmZvIiwiaDEiLCJub21lIiwibmFtZSIsInAiLCJkZXNjcmljYW8iLCJkZXNjcmlwdGlvbiIsImluZ3JlZGllbnRlcyIsImluZ3JlZGllbnRzIiwiaDIiLCJwcmVjbyIsInByaWNlIiwiYnV0dG9uIiwiYWN0aW9uIiwib25DbGljayIsImNvbmZpcm0iLCJwb3N0Q2FydFByb2R1dCIsInByb3BzIiwiaW1nIiwic3JjIiwiYWx0IiwiYWN0aW9uX2ljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ShowProduct.tsx\n"));

/***/ })

});