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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MenuPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ShowProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ShowProduct */ \"./src/components/ShowProduct.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction MenuPage(param) {\n    let { restaurantMenu } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(restaurantMenu);\n    if (JSON.stringify(restaurantMenu) === \"{}\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Card\\xe1pio n\\xe3o encontrado\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n    } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarRestaurant, {}, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: restaurantMenu.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Restaurante: \",\n                            router.query.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: restaurantMenu.categories.map((categoria)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: categoria.name\n                            }, void 0, false, {\n                                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, this),\n                            categoria.products.map((produto)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShowProduct__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            product: produto\n                                        }, void 0, false, {\n                                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 23\n                                        }, this),\n                                        \";\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 45,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n        lineNumber: 36,\n        columnNumber: 7\n    }, this);\n}\n_s(MenuPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MenuPage;\nvar _c;\n$RefreshReg$(_c, \"MenuPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9tZW51L1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3QztBQUNXOztBQW1CcEMsU0FBU0UsU0FBUyxLQUV3QjtRQUZ4QixFQUMvQkMsY0FBYyxFQUN5QyxHQUZ4Qjs7SUFHL0IsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCSyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osSUFBSUksS0FBS0MsU0FBUyxDQUFDTCxvQkFBb0IsTUFBTTtRQUMzQyxxQkFDRSw4REFBQ007c0JBQ0MsNEVBQUNDOzBCQUFHOzs7Ozs7Ozs7OztJQUdWLE9BQ0UscUJBQ0UsOERBQUNEOzswQkFDQyw4REFBQ0U7Ozs7OzBCQUNELDhEQUFDRjtnQkFBSUcsV0FBVTs7a0NBQ2IsOERBQUNGO2tDQUFJUCxlQUFlVSxJQUFJOzs7Ozs7a0NBQ3hCLDhEQUFDSDs7NEJBQUc7NEJBQWNOLE9BQU9VLEtBQUssQ0FBQ0MsRUFBRTs7Ozs7Ozs7Ozs7OzswQkFFbkMsOERBQUNOOzBCQUNFTixlQUFlYSxVQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDQztvQkFDOUIscUJBQ0UsOERBQUNUOzswQ0FDQyw4REFBQ1U7MENBQUlELFVBQVVMLElBQUk7Ozs7Ozs0QkFDbEJLLFVBQVVFLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLENBQUNJO2dDQUN2QixxQkFDRSw4REFBQ1o7O3NEQUNDLDhEQUFDUiwrREFBV0E7NENBQUNxQixTQUFTRDs7Ozs7O3dDQUFXOzs7Ozs7OzRCQUd2Qzs7Ozs7OztnQkFHTjs7Ozs7Ozs7Ozs7O0FBSVY7R0F0Q3dCbkI7O1FBR1BGLGtEQUFTQTs7O0tBSEZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXN0YXVyYW50L21lbnUvW2lkXS50c3g/NTA0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBTaG93UHJvZHVjdCBmcm9tIFwiQC9jb21wb25lbnRzL1Nob3dQcm9kdWN0XCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczx7XG4gIHJlc3RhdXJhbnRNZW51OiBhbnk7XG59PiA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IG1lbnVJZCA9IGNvbnRleHQucXVlcnkuaWQ7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Jlc3RhdXJhbnQvbWVudS8ke21lbnVJZH1gLFxuICAgIHsgbWV0aG9kOiBcIkdFVFwiIH1cbiAgKTtcblxuICBsZXQgcmVzdGF1cmFudE1lbnUgPSB7fTtcbiAgaWYgKHJlcy5vaykge1xuICAgIHJlc3RhdXJhbnRNZW51ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgfVxuXG4gIHJldHVybiB7IHByb3BzOiB7IHJlc3RhdXJhbnRNZW51IH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVQYWdlKHtcbiAgcmVzdGF1cmFudE1lbnUsXG59OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz4pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc29sZS5sb2cocmVzdGF1cmFudE1lbnUpO1xuICBpZiAoSlNPTi5zdHJpbmdpZnkocmVzdGF1cmFudE1lbnUpID09PSBcInt9XCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkNhcmTDoXBpbyBuw6NvIGVuY29udHJhZG88L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXJSZXN0YXVyYW50PjwvTmF2YmFyUmVzdGF1cmFudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgPGgxPntyZXN0YXVyYW50TWVudS5uYW1lfTwvaDE+XG4gICAgICAgICAgPGgxPlJlc3RhdXJhbnRlOiB7cm91dGVyLnF1ZXJ5LmlkfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtyZXN0YXVyYW50TWVudS5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcmlhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPntjYXRlZ29yaWEubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWEucHJvZHVjdHMubWFwKChwcm9kdXRvOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFNob3dQcm9kdWN0IHByb2R1Y3Q9e3Byb2R1dG99IC8+O1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlNob3dQcm9kdWN0IiwiTWVudVBhZ2UiLCJyZXN0YXVyYW50TWVudSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiaDEiLCJOYXZiYXJSZXN0YXVyYW50IiwiY2xhc3NOYW1lIiwibmFtZSIsInF1ZXJ5IiwiaWQiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcmlhIiwiaDIiLCJwcm9kdWN0cyIsInByb2R1dG8iLCJwcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/restaurant/menu/[id].tsx\n"));

/***/ })

});