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

/***/ "./src/components/ShowMenu.tsx":
/*!*************************************!*\
  !*** ./src/components/ShowMenu.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowCategory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.tsx\");\n\n\nfunction ShowCategory(param) {\n    let { menu } = param;\n    // console.log(categoria);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            menu,\n            menu.categories.map((categoria)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: categoria.products.map((produto)=>{\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            produto: produto\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowMenu.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false);\n            })\n        ]\n    }, void 0, true);\n}\n_c = ShowCategory;\nconst jason = {\n    id: 2,\n    restaurantId: 2,\n    name: \"Pizzas\",\n    categories: [\n        {\n            id: 3,\n            menuId: 2,\n            name: \"Pizzas\",\n            products: [\n                {\n                    id: 9,\n                    categoryId: 3,\n                    name: \"Calabresa\",\n                    ingredients: \"Ingredients 1\",\n                    price: 10,\n                    discount: 0,\n                    description: 'Description 1\"'\n                },\n                {\n                    id: 10,\n                    categoryId: 3,\n                    name: \"Quatro queijos\",\n                    ingredients: \"Ingredients 2\",\n                    price: 11,\n                    discount: 0,\n                    description: 'Description 2\"'\n                },\n                {\n                    id: 11,\n                    categoryId: 3,\n                    name: \"Portuguesa\",\n                    ingredients: \"Ingredients 3\",\n                    price: 12,\n                    discount: 0,\n                    description: 'Description 3\"'\n                },\n                {\n                    id: 12,\n                    categoryId: 3,\n                    name: \"Frango com catupiry\",\n                    ingredients: \"Ingredients 4\",\n                    price: 13,\n                    discount: 0,\n                    description: 'Description 4\"'\n                }\n            ]\n        },\n        {\n            id: 4,\n            menuId: 2,\n            name: \"Bebidas\",\n            products: [\n                {\n                    id: 13,\n                    categoryId: 4,\n                    name: \"Coca-cola\",\n                    ingredients: \"Ingredients 1\",\n                    price: 10,\n                    discount: 0,\n                    description: 'Description 1\"'\n                },\n                {\n                    id: 14,\n                    categoryId: 4,\n                    name: \"Suco\",\n                    ingredients: \"Ingredients 2\",\n                    price: 11,\n                    discount: 0,\n                    description: 'Description 2\"'\n                },\n                {\n                    id: 15,\n                    categoryId: 4,\n                    name: \"\\xc1gua\",\n                    ingredients: \"Ingredients 3\",\n                    price: 12,\n                    discount: 0,\n                    description: 'Description 3\"'\n                },\n                {\n                    id: 16,\n                    categoryId: 4,\n                    name: \"Guaran\\xe1\",\n                    ingredients: \"Ingredients 4\",\n                    price: 13,\n                    discount: 0,\n                    description: 'Description 4\"'\n                }\n            ]\n        }\n    ]\n};\nvar _c;\n$RefreshReg$(_c, \"ShowCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaG93TWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMEI7QUFHWCxTQUFTQyxhQUFhLEtBQXVCO1FBQXZCLEVBQUVDLElBQUksRUFBaUIsR0FBdkI7SUFDbkMsMEJBQTBCO0lBQzFCLHFCQUNFOztZQUNHQTtZQUNBQSxLQUFLQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDQztnQkFDcEIscUJBQ0U7OEJBQ0dBLFVBQVVDLFFBQVEsQ0FBQ0YsR0FBRyxDQUFDLENBQUNHO3NDQUN2Qiw4REFBQ1AsNkNBQUlBOzRCQUFDTyxTQUFTQTs7Ozs7O29CQUNqQjs7WUFHTjs7O0FBR047S0FoQndCTjtBQWtCeEIsTUFBTU8sUUFBUTtJQUNaQyxJQUFJO0lBQ0pDLGNBQWM7SUFDZEMsTUFBTTtJQUNOUixZQUFZO1FBQ1Y7WUFDRU0sSUFBSTtZQUNKRyxRQUFRO1lBQ1JELE1BQU07WUFDTkwsVUFBVTtnQkFDUjtvQkFDRUcsSUFBSTtvQkFDSkksWUFBWTtvQkFDWkYsTUFBTTtvQkFDTkcsYUFBYTtvQkFDYkMsT0FBTztvQkFDUEMsVUFBVTtvQkFDVkMsYUFBYTtnQkFDZjtnQkFDQTtvQkFDRVIsSUFBSTtvQkFDSkksWUFBWTtvQkFDWkYsTUFBTTtvQkFDTkcsYUFBYTtvQkFDYkMsT0FBTztvQkFDUEMsVUFBVTtvQkFDVkMsYUFBYTtnQkFDZjtnQkFDQTtvQkFDRVIsSUFBSTtvQkFDSkksWUFBWTtvQkFDWkYsTUFBTTtvQkFDTkcsYUFBYTtvQkFDYkMsT0FBTztvQkFDUEMsVUFBVTtvQkFDVkMsYUFBYTtnQkFDZjtnQkFDQTtvQkFDRVIsSUFBSTtvQkFDSkksWUFBWTtvQkFDWkYsTUFBTTtvQkFDTkcsYUFBYTtvQkFDYkMsT0FBTztvQkFDUEMsVUFBVTtvQkFDVkMsYUFBYTtnQkFDZjthQUNEO1FBQ0g7UUFDQTtZQUNFUixJQUFJO1lBQ0pHLFFBQVE7WUFDUkQsTUFBTTtZQUNOTCxVQUFVO2dCQUNSO29CQUNFRyxJQUFJO29CQUNKSSxZQUFZO29CQUNaRixNQUFNO29CQUNORyxhQUFhO29CQUNiQyxPQUFPO29CQUNQQyxVQUFVO29CQUNWQyxhQUFhO2dCQUNmO2dCQUNBO29CQUNFUixJQUFJO29CQUNKSSxZQUFZO29CQUNaRixNQUFNO29CQUNORyxhQUFhO29CQUNiQyxPQUFPO29CQUNQQyxVQUFVO29CQUNWQyxhQUFhO2dCQUNmO2dCQUNBO29CQUNFUixJQUFJO29CQUNKSSxZQUFZO29CQUNaRixNQUFNO29CQUNORyxhQUFhO29CQUNiQyxPQUFPO29CQUNQQyxVQUFVO29CQUNWQyxhQUFhO2dCQUNmO2dCQUNBO29CQUNFUixJQUFJO29CQUNKSSxZQUFZO29CQUNaRixNQUFNO29CQUNORyxhQUFhO29CQUNiQyxPQUFPO29CQUNQQyxVQUFVO29CQUNWQyxhQUFhO2dCQUNmO2FBQ0Q7UUFDSDtLQUNEO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvd01lbnUudHN4PzgxOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4uLy4uL3ByaXNtYS9wcmlzbWFcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL01lbnUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93Q2F0ZWdvcnkoeyBtZW51IH06IHsgbWVudTogYW55IH0pIHtcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcmlhKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21lbnV9XG4gICAgICB7bWVudS5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcmlhOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2NhdGVnb3JpYS5wcm9kdWN0cy5tYXAoKHByb2R1dG86IGFueSkgPT4ge1xuICAgICAgICAgICAgICA8Q2FyZCBwcm9kdXRvPXtwcm9kdXRvfSAvPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IGphc29uID0ge1xuICBpZDogMixcbiAgcmVzdGF1cmFudElkOiAyLFxuICBuYW1lOiBcIlBpenphc1wiLFxuICBjYXRlZ29yaWVzOiBbXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBtZW51SWQ6IDIsXG4gICAgICBuYW1lOiBcIlBpenphc1wiLFxuICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA5LFxuICAgICAgICAgIGNhdGVnb3J5SWQ6IDMsXG4gICAgICAgICAgbmFtZTogXCJDYWxhYnJlc2FcIixcbiAgICAgICAgICBpbmdyZWRpZW50czogXCJJbmdyZWRpZW50cyAxXCIsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gMVwiJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMCxcbiAgICAgICAgICBjYXRlZ29yeUlkOiAzLFxuICAgICAgICAgIG5hbWU6IFwiUXVhdHJvIHF1ZWlqb3NcIixcbiAgICAgICAgICBpbmdyZWRpZW50czogXCJJbmdyZWRpZW50cyAyXCIsXG4gICAgICAgICAgcHJpY2U6IDExLFxuICAgICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gMlwiJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMSxcbiAgICAgICAgICBjYXRlZ29yeUlkOiAzLFxuICAgICAgICAgIG5hbWU6IFwiUG9ydHVndWVzYVwiLFxuICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkluZ3JlZGllbnRzIDNcIixcbiAgICAgICAgICBwcmljZTogMTIsXG4gICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiAzXCInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgIGNhdGVnb3J5SWQ6IDMsXG4gICAgICAgICAgbmFtZTogXCJGcmFuZ28gY29tIGNhdHVwaXJ5XCIsXG4gICAgICAgICAgaW5ncmVkaWVudHM6IFwiSW5ncmVkaWVudHMgNFwiLFxuICAgICAgICAgIHByaWNlOiAxMyxcbiAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIDRcIicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBtZW51SWQ6IDIsXG4gICAgICBuYW1lOiBcIkJlYmlkYXNcIixcbiAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTMsXG4gICAgICAgICAgY2F0ZWdvcnlJZDogNCxcbiAgICAgICAgICBuYW1lOiBcIkNvY2EtY29sYVwiLFxuICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkluZ3JlZGllbnRzIDFcIixcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiAxXCInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDE0LFxuICAgICAgICAgIGNhdGVnb3J5SWQ6IDQsXG4gICAgICAgICAgbmFtZTogXCJTdWNvXCIsXG4gICAgICAgICAgaW5ncmVkaWVudHM6IFwiSW5ncmVkaWVudHMgMlwiLFxuICAgICAgICAgIHByaWNlOiAxMSxcbiAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIDJcIicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTUsXG4gICAgICAgICAgY2F0ZWdvcnlJZDogNCxcbiAgICAgICAgICBuYW1lOiBcIsOBZ3VhXCIsXG4gICAgICAgICAgaW5ncmVkaWVudHM6IFwiSW5ncmVkaWVudHMgM1wiLFxuICAgICAgICAgIHByaWNlOiAxMixcbiAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIDNcIicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTYsXG4gICAgICAgICAgY2F0ZWdvcnlJZDogNCxcbiAgICAgICAgICBuYW1lOiBcIkd1YXJhbsOhXCIsXG4gICAgICAgICAgaW5ncmVkaWVudHM6IFwiSW5ncmVkaWVudHMgNFwiLFxuICAgICAgICAgIHByaWNlOiAxMyxcbiAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIDRcIicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJTaG93Q2F0ZWdvcnkiLCJtZW51IiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3JpYSIsInByb2R1Y3RzIiwicHJvZHV0byIsImphc29uIiwiaWQiLCJyZXN0YXVyYW50SWQiLCJuYW1lIiwibWVudUlkIiwiY2F0ZWdvcnlJZCIsImluZ3JlZGllbnRzIiwicHJpY2UiLCJkaXNjb3VudCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ShowMenu.tsx\n"));

/***/ })

});