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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowCategory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ShowCategory(param) {\n    let { menu } = param;\n    // console.log(categoria);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: \"menu.cate()\"\n    }, void 0, false);\n}\n_c = ShowCategory;\nlet jason = {\n    id: 2,\n    restaurantId: 2,\n    name: \"Pizzas\",\n    categories: [\n        {\n            id: 3,\n            menuId: 2,\n            name: \"Pizzas\",\n            products: [\n                {\n                    id: 9,\n                    categoryId: 3,\n                    name: \"Calabresa\",\n                    ingredients: \"Ingredients 1\",\n                    price: 10,\n                    discount: 0,\n                    description: 'Description 1\"'\n                },\n                {\n                    id: 10,\n                    categoryId: 3,\n                    name: \"Quatro queijos\",\n                    ingredients: \"Ingredients 2\",\n                    price: 11,\n                    discount: 0,\n                    description: 'Description 2\"'\n                },\n                {\n                    id: 11,\n                    categoryId: 3,\n                    name: \"Portuguesa\",\n                    ingredients: \"Ingredients 3\",\n                    price: 12,\n                    discount: 0,\n                    description: 'Description 3\"'\n                },\n                {\n                    id: 12,\n                    categoryId: 3,\n                    name: \"Frango com catupiry\",\n                    ingredients: \"Ingredients 4\",\n                    price: 13,\n                    discount: 0,\n                    description: 'Description 4\"'\n                }\n            ]\n        },\n        {\n            id: 4,\n            menuId: 2,\n            name: \"Bebidas\",\n            products: [\n                {\n                    id: 13,\n                    categoryId: 4,\n                    name: \"Coca-cola\",\n                    ingredients: \"Ingredients 1\",\n                    price: 10,\n                    discount: 0,\n                    description: 'Description 1\"'\n                },\n                {\n                    id: 14,\n                    categoryId: 4,\n                    name: \"Suco\",\n                    ingredients: \"Ingredients 2\",\n                    price: 11,\n                    discount: 0,\n                    description: 'Description 2\"'\n                },\n                {\n                    id: 15,\n                    categoryId: 4,\n                    name: \"\\xc1gua\",\n                    ingredients: \"Ingredients 3\",\n                    price: 12,\n                    discount: 0,\n                    description: 'Description 3\"'\n                },\n                {\n                    id: 16,\n                    categoryId: 4,\n                    name: \"Guaran\\xe1\",\n                    ingredients: \"Ingredients 4\",\n                    price: 13,\n                    discount: 0,\n                    description: 'Description 4\"'\n                }\n            ]\n        }\n    ]\n};\nvar _c;\n$RefreshReg$(_c, \"ShowCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaG93TWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUllLFNBQVNBLGFBQWEsS0FBd0I7UUFBeEIsRUFBRUMsSUFBSSxFQUFrQixHQUF4QjtJQUNuQywwQkFBMEI7SUFDMUIscUJBQU87a0JBQUU7O0FBQ1g7S0FId0JEO0FBS3hCLElBQUlFLFFBQVE7SUFDVkMsSUFBSTtJQUNKQyxjQUFjO0lBQ2RDLE1BQU07SUFDTkMsWUFBWTtRQUNWO1lBQ0VILElBQUk7WUFDSkksUUFBUTtZQUNSRixNQUFNO1lBQ05HLFVBQVU7Z0JBQ1I7b0JBQ0VMLElBQUk7b0JBQ0pNLFlBQVk7b0JBQ1pKLE1BQU07b0JBQ05LLGFBQWE7b0JBQ2JDLE9BQU87b0JBQ1BDLFVBQVU7b0JBQ1ZDLGFBQWE7Z0JBQ2Y7Z0JBQ0E7b0JBQ0VWLElBQUk7b0JBQ0pNLFlBQVk7b0JBQ1pKLE1BQU07b0JBQ05LLGFBQWE7b0JBQ2JDLE9BQU87b0JBQ1BDLFVBQVU7b0JBQ1ZDLGFBQWE7Z0JBQ2Y7Z0JBQ0E7b0JBQ0VWLElBQUk7b0JBQ0pNLFlBQVk7b0JBQ1pKLE1BQU07b0JBQ05LLGFBQWE7b0JBQ2JDLE9BQU87b0JBQ1BDLFVBQVU7b0JBQ1ZDLGFBQWE7Z0JBQ2Y7Z0JBQ0E7b0JBQ0VWLElBQUk7b0JBQ0pNLFlBQVk7b0JBQ1pKLE1BQU07b0JBQ05LLGFBQWE7b0JBQ2JDLE9BQU87b0JBQ1BDLFVBQVU7b0JBQ1ZDLGFBQWE7Z0JBQ2Y7YUFDRDtRQUNIO1FBQ0E7WUFDRVYsSUFBSTtZQUNKSSxRQUFRO1lBQ1JGLE1BQU07WUFDTkcsVUFBVTtnQkFDUjtvQkFDRUwsSUFBSTtvQkFDSk0sWUFBWTtvQkFDWkosTUFBTTtvQkFDTkssYUFBYTtvQkFDYkMsT0FBTztvQkFDUEMsVUFBVTtvQkFDVkMsYUFBYTtnQkFDZjtnQkFDQTtvQkFDRVYsSUFBSTtvQkFDSk0sWUFBWTtvQkFDWkosTUFBTTtvQkFDTkssYUFBYTtvQkFDYkMsT0FBTztvQkFDUEMsVUFBVTtvQkFDVkMsYUFBYTtnQkFDZjtnQkFDQTtvQkFDRVYsSUFBSTtvQkFDSk0sWUFBWTtvQkFDWkosTUFBTTtvQkFDTkssYUFBYTtvQkFDYkMsT0FBTztvQkFDUEMsVUFBVTtvQkFDVkMsYUFBYTtnQkFDZjtnQkFDQTtvQkFDRVYsSUFBSTtvQkFDSk0sWUFBWTtvQkFDWkosTUFBTTtvQkFDTkssYUFBYTtvQkFDYkMsT0FBTztvQkFDUEMsVUFBVTtvQkFDVkMsYUFBYTtnQkFDZjthQUNEO1FBQ0g7S0FDRDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Nob3dNZW51LnRzeD84MTkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnUsIENhdGVnb3J5LCBQcm9kdWN0IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9NZW51Lm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd0NhdGVnb3J5KHsgbWVudSB9OiB7IG1lbnU6IE1lbnUgfSkge1xuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWEpO1xuICByZXR1cm4gPD5tZW51LmNhdGUoKTwvPjtcbn1cblxubGV0IGphc29uID0ge1xuICBpZDogMixcbiAgcmVzdGF1cmFudElkOiAyLFxuICBuYW1lOiBcIlBpenphc1wiLFxuICBjYXRlZ29yaWVzOiBbXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBtZW51SWQ6IDIsXG4gICAgICBuYW1lOiBcIlBpenphc1wiLFxuICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA5LFxuICAgICAgICAgIGNhdGVnb3J5SWQ6IDMsXG4gICAgICAgICAgbmFtZTogXCJDYWxhYnJlc2FcIixcbiAgICAgICAgICBpbmdyZWRpZW50czogXCJJbmdyZWRpZW50cyAxXCIsXG4gICAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gMVwiJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMCxcbiAgICAgICAgICBjYXRlZ29yeUlkOiAzLFxuICAgICAgICAgIG5hbWU6IFwiUXVhdHJvIHF1ZWlqb3NcIixcbiAgICAgICAgICBpbmdyZWRpZW50czogXCJJbmdyZWRpZW50cyAyXCIsXG4gICAgICAgICAgcHJpY2U6IDExLFxuICAgICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gMlwiJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMSxcbiAgICAgICAgICBjYXRlZ29yeUlkOiAzLFxuICAgICAgICAgIG5hbWU6IFwiUG9ydHVndWVzYVwiLFxuICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkluZ3JlZGllbnRzIDNcIixcbiAgICAgICAgICBwcmljZTogMTIsXG4gICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiAzXCInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgIGNhdGVnb3J5SWQ6IDMsXG4gICAgICAgICAgbmFtZTogXCJGcmFuZ28gY29tIGNhdHVwaXJ5XCIsXG4gICAgICAgICAgaW5ncmVkaWVudHM6IFwiSW5ncmVkaWVudHMgNFwiLFxuICAgICAgICAgIHByaWNlOiAxMyxcbiAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIDRcIicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBtZW51SWQ6IDIsXG4gICAgICBuYW1lOiBcIkJlYmlkYXNcIixcbiAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTMsXG4gICAgICAgICAgY2F0ZWdvcnlJZDogNCxcbiAgICAgICAgICBuYW1lOiBcIkNvY2EtY29sYVwiLFxuICAgICAgICAgIGluZ3JlZGllbnRzOiBcIkluZ3JlZGllbnRzIDFcIixcbiAgICAgICAgICBwcmljZTogMTAsXG4gICAgICAgICAgZGlzY291bnQ6IDAsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiAxXCInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDE0LFxuICAgICAgICAgIGNhdGVnb3J5SWQ6IDQsXG4gICAgICAgICAgbmFtZTogXCJTdWNvXCIsXG4gICAgICAgICAgaW5ncmVkaWVudHM6IFwiSW5ncmVkaWVudHMgMlwiLFxuICAgICAgICAgIHByaWNlOiAxMSxcbiAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIDJcIicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTUsXG4gICAgICAgICAgY2F0ZWdvcnlJZDogNCxcbiAgICAgICAgICBuYW1lOiBcIsOBZ3VhXCIsXG4gICAgICAgICAgaW5ncmVkaWVudHM6IFwiSW5ncmVkaWVudHMgM1wiLFxuICAgICAgICAgIHByaWNlOiAxMixcbiAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIDNcIicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTYsXG4gICAgICAgICAgY2F0ZWdvcnlJZDogNCxcbiAgICAgICAgICBuYW1lOiBcIkd1YXJhbsOhXCIsXG4gICAgICAgICAgaW5ncmVkaWVudHM6IFwiSW5ncmVkaWVudHMgNFwiLFxuICAgICAgICAgIHByaWNlOiAxMyxcbiAgICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIDRcIicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuIl0sIm5hbWVzIjpbIlNob3dDYXRlZ29yeSIsIm1lbnUiLCJqYXNvbiIsImlkIiwicmVzdGF1cmFudElkIiwibmFtZSIsImNhdGVnb3JpZXMiLCJtZW51SWQiLCJwcm9kdWN0cyIsImNhdGVnb3J5SWQiLCJpbmdyZWRpZW50cyIsInByaWNlIiwiZGlzY291bnQiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ShowMenu.tsx\n"));

/***/ })

});