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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MenuPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ShowProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ShowProduct */ \"./src/components/ShowProduct.tsx\");\n/* harmony import */ var _components_NavbarRestaurant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/NavbarRestaurant */ \"./src/components/NavbarRestaurant.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSP = true;\nfunction MenuPage(param) {\n    let { restaurantMenu } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (restaurantMenu.id === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Card\\xe1pio n\\xe3o encontrado\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this);\n    } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavbarRestaurant__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                restaurant: restaurantMenu.restaurant\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"menu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: restaurantMenu.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Restaurante: \",\n                            router.query.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: restaurantMenu.categories && restaurantMenu.categories.map((categoria)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: categoria.name\n                            }, void 0, false, {\n                                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                                lineNumber: 49,\n                                columnNumber: 19\n                            }, this),\n                            categoria.products && categoria.products.map((produto)=>{\n                                var _NumberrestaurantMenu_restaurant;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShowProduct__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            product: produto,\n                                            restaurantId: (_NumberrestaurantMenu_restaurant = NumberrestaurantMenu.restaurant) === null || _NumberrestaurantMenu_restaurant === void 0 ? void 0 : _NumberrestaurantMenu_restaurant.id\n                                        }, void 0, false, {\n                                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 27\n                                        }, this),\n                                        \";\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/restaurant/menu/[id].tsx\",\n        lineNumber: 38,\n        columnNumber: 7\n    }, this);\n}\n_s(MenuPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MenuPage;\nvar _c;\n$RefreshReg$(_c, \"MenuPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzdGF1cmFudC9tZW51L1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDVztBQUNVOztBQXFCOUMsU0FBU0csU0FBUyxLQUV3QjtRQUZ4QixFQUMvQkMsY0FBYyxFQUN5QyxHQUZ4Qjs7SUFHL0IsTUFBTUMsU0FBU0wsc0RBQVNBO0lBRXhCLElBQUlJLGVBQWVFLEVBQUUsS0FBSyxHQUFHO1FBQzNCLHFCQUNFLDhEQUFDQztzQkFDQyw0RUFBQ0M7MEJBQUc7Ozs7Ozs7Ozs7O0lBR1YsT0FDRSxxQkFDRSw4REFBQ0Q7OzBCQUNDLDhEQUFDTCxvRUFBZ0JBO2dCQUFDTyxZQUFZTCxlQUFlSyxVQUFVOzs7Ozs7MEJBQ3ZELDhEQUFDRjtnQkFBSUcsV0FBVTs7a0NBQ2IsOERBQUNGO2tDQUFJSixlQUFlTyxJQUFJOzs7Ozs7a0NBQ3hCLDhEQUFDSDs7NEJBQUc7NEJBQWNILE9BQU9PLEtBQUssQ0FBQ04sRUFBRTs7Ozs7Ozs7Ozs7OzswQkFFbkMsOERBQUNDOzBCQUNFSCxlQUFlUyxVQUFVLElBQ3hCVCxlQUFlUyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDQztvQkFDN0IscUJBQ0UsOERBQUNSOzswQ0FDQyw4REFBQ1M7MENBQUlELFVBQVVKLElBQUk7Ozs7Ozs0QkFDbEJJLFVBQVVFLFFBQVEsSUFDakJGLFVBQVVFLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLENBQUNJO29DQUcyQkM7Z0NBRmpELHFCQUNFLDhEQUFDWjs7c0RBQ0MsOERBQUNOLCtEQUFXQTs0Q0FBQ21CLFNBQVNGOzRDQUFTRyxZQUFZLEdBQUVGLG1DQUFBQSxxQkFBcUJWLFVBQVUsY0FBL0JVLHVEQUFBQSxpQ0FBaUNiLEVBQUU7Ozs7Ozt3Q0FBRzs7Ozs7Ozs0QkFHekY7Ozs7Ozs7Z0JBR1I7Ozs7Ozs7Ozs7OztBQUlaO0dBdkN3Qkg7O1FBR1BILGtEQUFTQTs7O0tBSEZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXN0YXVyYW50L21lbnUvW2lkXS50c3g/NTA0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBTaG93UHJvZHVjdCBmcm9tIFwiQC9jb21wb25lbnRzL1Nob3dQcm9kdWN0XCI7XG5pbXBvcnQgTmF2YmFyUmVzdGF1cmFudCBmcm9tIFwiQC9jb21wb25lbnRzL05hdmJhclJlc3RhdXJhbnRcIjtcbmltcG9ydCB7IENhdGVnb3J5LCBNZW51LCBQcm9kdWN0LCBkZWZhdWx0TWVudSB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczx7XG4gIHJlc3RhdXJhbnRNZW51OiBNZW51O1xufT4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBtZW51SWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9yZXN0YXVyYW50L21lbnUvJHttZW51SWR9YCxcbiAgICB7IG1ldGhvZDogXCJHRVRcIiB9XG4gICk7XG5cbiAgbGV0IHJlc3RhdXJhbnRNZW51ID0gZGVmYXVsdE1lbnU7XG5cbiAgaWYgKHJlcy5vaykge1xuICAgIHJlc3RhdXJhbnRNZW51ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgfVxuXG4gIHJldHVybiB7IHByb3BzOiB7IHJlc3RhdXJhbnRNZW51IH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVQYWdlKHtcbiAgcmVzdGF1cmFudE1lbnUsXG59OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz4pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgaWYgKHJlc3RhdXJhbnRNZW51LmlkID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DYXJkw6FwaW8gbsOjbyBlbmNvbnRyYWRvPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyUmVzdGF1cmFudCByZXN0YXVyYW50PXtyZXN0YXVyYW50TWVudS5yZXN0YXVyYW50fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICA8aDE+e3Jlc3RhdXJhbnRNZW51Lm5hbWV9PC9oMT5cbiAgICAgICAgICA8aDE+UmVzdGF1cmFudGU6IHtyb3V0ZXIucXVlcnkuaWR9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3Jlc3RhdXJhbnRNZW51LmNhdGVnb3JpZXMgJiZcbiAgICAgICAgICAgIHJlc3RhdXJhbnRNZW51LmNhdGVnb3JpZXMubWFwKChjYXRlZ29yaWE6IENhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMj57Y2F0ZWdvcmlhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWEucHJvZHVjdHMgJiZcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhLnByb2R1Y3RzLm1hcCgocHJvZHV0bzogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvd1Byb2R1Y3QgcHJvZHVjdD17cHJvZHV0b30gcmVzdGF1cmFudElkPXtOdW1iZXJyZXN0YXVyYW50TWVudS5yZXN0YXVyYW50Py5pZH0vPjtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJTaG93UHJvZHVjdCIsIk5hdmJhclJlc3RhdXJhbnQiLCJNZW51UGFnZSIsInJlc3RhdXJhbnRNZW51Iiwicm91dGVyIiwiaWQiLCJkaXYiLCJoMSIsInJlc3RhdXJhbnQiLCJjbGFzc05hbWUiLCJuYW1lIiwicXVlcnkiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcmlhIiwiaDIiLCJwcm9kdWN0cyIsInByb2R1dG8iLCJOdW1iZXJyZXN0YXVyYW50TWVudSIsInByb2R1Y3QiLCJyZXN0YXVyYW50SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/restaurant/menu/[id].tsx\n"));

/***/ })

});