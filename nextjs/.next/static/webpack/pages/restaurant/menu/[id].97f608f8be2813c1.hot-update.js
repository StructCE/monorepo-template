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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/ShowProduct.module.css */ \"./src/styles/ShowProduct.module.css\");\n/* harmony import */ var _styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction postCartProdut(id) {\n    const res = fetch();\n}\nfunction ShowProduct(param) {\n    let { product } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().nome),\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().descricao),\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().ingredientes),\n                        children: product.ingredients\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().preco),\n                children: [\n                    \"R$ \",\n                    product.price + \",00\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().action),\n                onClick: ()=>{\n                    if (confirm(\"Adicionar produto ao carrinho?\")) {\n                        postCartProdut(product.id);\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/icons/cart.png\",\n                    alt: \"add_to_cart\",\n                    className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default().action_icon)\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = ShowProduct;\nvar _c;\n$RefreshReg$(_c, \"ShowProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaG93UHJvZHVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBRXJELFNBQVNDLGVBQWVDLEVBQU87SUFDN0IsTUFBTUMsTUFBTUM7QUFDZDtBQUVlLFNBQVNDLFlBQVksS0FBYztRQUFkLEVBQUNDLE9BQU8sRUFBTSxHQUFkO0lBU2xDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXUiw0RUFBVzs7MEJBRXpCLDhEQUFDTztnQkFBSUMsV0FBV1IsNEVBQVc7O2tDQUN6Qiw4REFBQ1c7d0JBQUdILFdBQVdSLDRFQUFXO2tDQUFHTSxRQUFRTyxJQUFJOzs7Ozs7a0NBQ3pDLDhEQUFDQzt3QkFBRU4sV0FBV1IsaUZBQWdCO2tDQUFHTSxRQUFRVSxXQUFXOzs7Ozs7a0NBQ3BELDhEQUFDRjt3QkFBRU4sV0FBV1Isb0ZBQW1CO2tDQUFHTSxRQUFRWSxXQUFXOzs7Ozs7Ozs7Ozs7MEJBS3pELDhEQUFDQztnQkFBR1gsV0FBV1IsNkVBQVk7O29CQUFFO29CQUFJTSxRQUFRZSxLQUFLLEdBQUc7Ozs7Ozs7MEJBQ2pELDhEQUFDQztnQkFDQ2QsV0FBV1IsOEVBQWE7Z0JBQ3hCd0IsU0FBUztvQkFDUCxJQUFJQyxRQUFRLG1DQUFtQzt3QkFDN0N4QixlQUFlSyxRQUFRSixFQUFFO29CQUMzQjtnQkFDRjswQkFFQSw0RUFBQ3dCO29CQUNDQyxLQUFJO29CQUNKQyxLQUFJO29CQUNKcEIsV0FBV1IsbUZBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QztLQXJDd0JLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Nob3dQcm9kdWN0LnRzeD8xNzkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1Nob3dQcm9kdWN0Lm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gcG9zdENhcnRQcm9kdXQoaWQ6IGFueSkge1xuICBjb25zdCByZXMgPSBmZXRjaCgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dQcm9kdWN0KHtwcm9kdWN0fTogYW55XG4gIC8vIHtcbiAgLy8gbmFtZTogc3RyaW5nO1xuICAvLyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvLyBpbmdyZWRpZW50czogc3RyaW5nO1xuICAvLyBwcmljZTogbnVtYmVyO1xuLy8gfVxuKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgey8qIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5ub21lfT57cHJvZHVjdC5uYW1lfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaWNhb30+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbmdyZWRpZW50ZXN9Pntwcm9kdWN0LmluZ3JlZGllbnRzfTwvcD5cbiAgICAgICAgey8qIDxwIGNsYXNzTmFtZT17c3R5bGVzLmluZ3JlZGllbnRlc30+XG4gICAgICAgICAge0FycmF5LmZyb20ocHJvZHVjdC5pbmdyZWRpZW50cykuam9pbihcIiwgXCIpfVxuICAgICAgICA8L3A+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucHJlY299PlIkIHtwcm9kdWN0LnByaWNlICsgXCIsMDBcIn08L2gyPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb259XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoY29uZmlybShcIkFkaWNpb25hciBwcm9kdXRvIGFvIGNhcnJpbmhvP1wiKSkge1xuICAgICAgICAgICAgcG9zdENhcnRQcm9kdXQocHJvZHVjdC5pZCwpXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9pY29ucy9jYXJ0LnBuZ1wiXG4gICAgICAgICAgYWx0PVwiYWRkX3RvX2NhcnRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9pY29ufVxuICAgICAgICAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwicG9zdENhcnRQcm9kdXQiLCJpZCIsInJlcyIsImZldGNoIiwiU2hvd1Byb2R1Y3QiLCJwcm9kdWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImluZm8iLCJoMSIsIm5vbWUiLCJuYW1lIiwicCIsImRlc2NyaWNhbyIsImRlc2NyaXB0aW9uIiwiaW5ncmVkaWVudGVzIiwiaW5ncmVkaWVudHMiLCJoMiIsInByZWNvIiwicHJpY2UiLCJidXR0b24iLCJhY3Rpb24iLCJvbkNsaWNrIiwiY29uZmlybSIsImltZyIsInNyYyIsImFsdCIsImFjdGlvbl9pY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ShowProduct.tsx\n"));

/***/ })

});