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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MenuPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction MenuPage(param) {\n    let { restaurantMenu } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            console.log(restaurantMenu.categories),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: restaurantMenu.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Restaurante: \",\n                            router.query.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: restaurantMenu.categories.map((categoria)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: categoria.products.map((produto)=>{\n                            {\n                                produto.name;\n                            }\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: produto.name,\n                                description: produto.description,\n                                ingredients: produto.ingredients,\n                                price: produto.price\n                            }, void 0, false, {\n                                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MenuPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MenuPage;\nvar _c;\n$RefreshReg$(_c, \"MenuPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9tZW51L1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3QztBQUdIOztBQWdCdEIsU0FBU0UsU0FBUyxLQUV3QjtRQUZ4QixFQUMvQkMsY0FBYyxFQUN5QyxHQUZ4Qjs7SUFHL0IsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCLHFCQUNFOztZQUNHSyxRQUFRQyxHQUFHLENBQUNILGVBQWVJLFVBQVU7MEJBQ3RDLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUFJUCxlQUFlUSxJQUFJOzs7Ozs7a0NBQ3hCLDhEQUFDRDs7NEJBQUc7NEJBQWNOLE9BQU9RLEtBQUssQ0FBQ0MsRUFBRTs7Ozs7Ozs7Ozs7OzswQkFFbkMsOERBQUNMOzBCQUNFTCxlQUFlSSxVQUFVLENBQUNPLEdBQUcsQ0FBQyxDQUFDQztvQkFDOUIscUJBQ0UsOERBQUNQO2tDQUNFTyxVQUFVQyxRQUFRLENBQUNGLEdBQUcsQ0FBQyxDQUFDRzs0QkFDdkI7Z0NBQUNBLFFBQVFOLElBQUk7NEJBQUE7MENBQ2IsOERBQUNWLHdEQUFJQTtnQ0FDSFUsTUFBTU0sUUFBUU4sSUFBSTtnQ0FDbEJPLGFBQWFELFFBQVFDLFdBQVc7Z0NBQ2hDQyxhQUFhRixRQUFRRSxXQUFXO2dDQUNoQ0MsT0FBT0gsUUFBUUcsS0FBSzs7Ozs7O3dCQUV4Qjs7Ozs7O2dCQUdOOzs7Ozs7OztBQUlSO0dBL0J3QmxCOztRQUdQRixrREFBU0E7OztLQUhGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9tZW51L1tpZF0udHN4PzUwNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBNZW51LCBDYXRlZ29yeSwgUHJvZHVjdCwgcHJpc21hIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3ByaXNtYS9wcmlzbWFcIjtcbmltcG9ydCBTaG93TWVudSBmcm9tIFwiQC9jb21wb25lbnRzL1Nob3dNZW51XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmRcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPHtcbiAgcmVzdGF1cmFudE1lbnU6IGFueTtcbn0+ID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgbWVudUlkID0gY29udGV4dC5xdWVyeS5pZDtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcmVzdGF1cmFudC9tZW51LyR7bWVudUlkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIH1cbiAgKTtcbiAgY29uc3QgcmVzdGF1cmFudE1lbnUgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4geyBwcm9wczogeyByZXN0YXVyYW50TWVudSB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51UGFnZSh7XG4gIHJlc3RhdXJhbnRNZW51LFxufTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjb25zb2xlLmxvZyhyZXN0YXVyYW50TWVudS5jYXRlZ29yaWVzKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICA8aDE+e3Jlc3RhdXJhbnRNZW51Lm5hbWV9PC9oMT5cbiAgICAgICAgPGgxPlJlc3RhdXJhbnRlOiB7cm91dGVyLnF1ZXJ5LmlkfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtyZXN0YXVyYW50TWVudS5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcmlhOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2NhdGVnb3JpYS5wcm9kdWN0cy5tYXAoKHByb2R1dG86IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHtwcm9kdXRvLm5hbWV9XG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb2R1dG8ubmFtZX1cbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdXRvLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgaW5ncmVkaWVudHM9e3Byb2R1dG8uaW5ncmVkaWVudHN9XG4gICAgICAgICAgICAgICAgICBwcmljZT17cHJvZHV0by5wcmljZX1cbiAgICAgICAgICAgICAgICAvPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNhcmQiLCJNZW51UGFnZSIsInJlc3RhdXJhbnRNZW51Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3JpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiLCJxdWVyeSIsImlkIiwibWFwIiwiY2F0ZWdvcmlhIiwicHJvZHVjdHMiLCJwcm9kdXRvIiwiZGVzY3JpcHRpb24iLCJpbmdyZWRpZW50cyIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/restaurant/menu/[id].tsx\n"));

/***/ })

});