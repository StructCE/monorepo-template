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

/***/ "./src/pages/restaurant/menu/[id].tsx":
/*!********************************************!*\
  !*** ./src/pages/restaurant/menu/[id].tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MenuPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ShowProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ShowProduct */ \"./src/components/ShowProduct.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction MenuPage(param) {\n    let { restaurantMenu } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: restaurantMenu.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Restaurante: \",\n                            router.query.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: restaurantMenu.categories.map((categoria)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: categoria.name\n                            }, void 0, false, {\n                                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this),\n                            categoria.products.map((produto)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShowProduct__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            name: produto.name,\n                                            description: produto.description,\n                                            ingredients: produto.ingredients,\n                                            price: produto.price\n                                        }, void 0, false, {\n                                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 21\n                                        }, this),\n                                        \";\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 19\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(MenuPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MenuPage;\nvar _c;\n$RefreshReg$(_c, \"MenuPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9tZW51L1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3QztBQUVXOztBQWdCcEMsU0FBU0UsU0FBUyxLQUV3QjtRQUZ4QixFQUMvQkMsY0FBYyxFQUN5QyxHQUZ4Qjs7SUFHL0IsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCLHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUlKLGVBQWVLLElBQUk7Ozs7OztrQ0FDeEIsOERBQUNEOzs0QkFBRzs0QkFBY0gsT0FBT0ssS0FBSyxDQUFDQyxFQUFFOzs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ0w7MEJBQ0VGLGVBQWVRLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO29CQUM5QixxQkFDRSw4REFBQ1I7OzBDQUNDLDhEQUFDUzswQ0FBSUQsVUFBVUwsSUFBSTs7Ozs7OzRCQUNsQkssVUFBVUUsUUFBUSxDQUFDSCxHQUFHLENBQUMsQ0FBQ0k7Z0NBQ3ZCLHFCQUNFLDhEQUFDWDs7c0RBQ0MsOERBQUNKLCtEQUFXQTs0Q0FDVk8sTUFBTVEsUUFBUVIsSUFBSTs0Q0FDbEJTLGFBQWFELFFBQVFDLFdBQVc7NENBQ2hDQyxhQUFhRixRQUFRRSxXQUFXOzRDQUNoQ0MsT0FBT0gsUUFBUUcsS0FBSzs7Ozs7O3dDQUNwQjs7Ozs7Ozs0QkFJUjs7Ozs7OztnQkFHTjs7Ozs7Ozs7Ozs7O0FBSVI7R0FuQ3dCakI7O1FBR1BGLGtEQUFTQTs7O0tBSEZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXN0YXVyYW50L21lbnUvW2lkXS50c3g/NTA0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IE1lbnUsIENhdGVnb3J5LCBQcm9kdWN0LCBwcmlzbWEgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcHJpc21hL3ByaXNtYVwiO1xuaW1wb3J0IFNob3dQcm9kdWN0IGZyb20gXCJAL2NvbXBvbmVudHMvU2hvd1Byb2R1Y3RcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPHtcbiAgcmVzdGF1cmFudE1lbnU6IGFueTtcbn0+ID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgbWVudUlkID0gY29udGV4dC5xdWVyeS5pZDtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcmVzdGF1cmFudC9tZW51LyR7bWVudUlkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgcmVzdGF1cmFudE1lbnUgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4geyBwcm9wczogeyByZXN0YXVyYW50TWVudSB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51UGFnZSh7XG4gIHJlc3RhdXJhbnRNZW51LFxufTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICA8aDE+e3Jlc3RhdXJhbnRNZW51Lm5hbWV9PC9oMT5cbiAgICAgICAgPGgxPlJlc3RhdXJhbnRlOiB7cm91dGVyLnF1ZXJ5LmlkfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtyZXN0YXVyYW50TWVudS5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcmlhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyPntjYXRlZ29yaWEubmFtZX08L2gyPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmlhLnByb2R1Y3RzLm1hcCgocHJvZHV0bzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTaG93UHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb2R1dG8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHV0by5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50cz17cHJvZHV0by5pbmdyZWRpZW50c31cbiAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJvZHV0by5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlNob3dQcm9kdWN0IiwiTWVudVBhZ2UiLCJyZXN0YXVyYW50TWVudSIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsInF1ZXJ5IiwiaWQiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcmlhIiwiaDIiLCJwcm9kdWN0cyIsInByb2R1dG8iLCJkZXNjcmlwdGlvbiIsImluZ3JlZGllbnRzIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/restaurant/menu/[id].tsx\n"));

/***/ })

});