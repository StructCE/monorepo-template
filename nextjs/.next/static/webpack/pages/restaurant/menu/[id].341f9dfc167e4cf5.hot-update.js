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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowCategory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ShowCategory(param) {\n    let { menu } = param;\n    // console.log(categoria);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_c = ShowCategory;\nlet jason = {\n    \"id\": 2,\n    \"restaurantId\": 2,\n    \"name\": \"Pizzas\",\n    \"categories\": [\n        {\n            \"id\": 3,\n            \"menuId\": 2,\n            \"name\": \"Pizzas\",\n            \"products\": [\n                {\n                    \"id\": 9,\n                    \"categoryId\": 3,\n                    \"name\": \"Calabresa\",\n                    \"ingredients\": \"Ingredients 1\",\n                    \"price\": 10,\n                    \"discount\": 0,\n                    \"description\": 'Description 1\"'\n                },\n                {\n                    \"id\": 10,\n                    \"categoryId\": 3,\n                    \"name\": \"Quatro queijos\",\n                    \"ingredients\": \"Ingredients 2\",\n                    \"price\": 11,\n                    \"discount\": 0,\n                    \"description\": 'Description 2\"'\n                },\n                {\n                    \"id\": 11,\n                    \"categoryId\": 3,\n                    \"name\": \"Portuguesa\",\n                    \"ingredients\": \"Ingredients 3\",\n                    \"price\": 12,\n                    \"discount\": 0,\n                    \"description\": 'Description 3\"'\n                },\n                {\n                    \"id\": 12,\n                    \"categoryId\": 3,\n                    \"name\": \"Frango com catupiry\",\n                    \"ingredients\": \"Ingredients 4\",\n                    \"price\": 13,\n                    \"discount\": 0,\n                    \"description\": 'Description 4\"'\n                }\n            ]\n        },\n        {\n            \"id\": 4,\n            \"menuId\": 2,\n            \"name\": \"Bebidas\",\n            \"products\": [\n                {\n                    \"id\": 13,\n                    \"categoryId\": 4,\n                    \"name\": \"Coca-cola\",\n                    \"ingredients\": \"Ingredients 1\",\n                    \"price\": 10,\n                    \"discount\": 0,\n                    \"description\": 'Description 1\"'\n                },\n                {\n                    \"id\": 14,\n                    \"categoryId\": 4,\n                    \"name\": \"Suco\",\n                    \"ingredients\": \"Ingredients 2\",\n                    \"price\": 11,\n                    \"discount\": 0,\n                    \"description\": 'Description 2\"'\n                },\n                {\n                    \"id\": 15,\n                    \"categoryId\": 4,\n                    \"name\": \"\\xc1gua\",\n                    \"ingredients\": \"Ingredients 3\",\n                    \"price\": 12,\n                    \"discount\": 0,\n                    \"description\": 'Description 3\"'\n                },\n                {\n                    \"id\": 16,\n                    \"categoryId\": 4,\n                    \"name\": \"Guaran\\xe1\",\n                    \"ingredients\": \"Ingredients 4\",\n                    \"price\": 13,\n                    \"discount\": 0,\n                    \"description\": 'Description 4\"'\n                }\n            ]\n        }\n    ]\n};\nvar _c;\n$RefreshReg$(_c, \"ShowCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaG93TWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUllLFNBQVNBLGFBQWEsS0FBdUI7UUFBdkIsRUFBRUMsSUFBSSxFQUFpQixHQUF2QjtJQUNuQywwQkFBMEI7SUFDMUIscUJBQ0U7QUFJSjtLQVB3QkQ7QUFTeEIsSUFBSUUsUUFBUTtJQUFDLE1BQUs7SUFBRSxnQkFBZTtJQUFFLFFBQU87SUFBUyxjQUFhO1FBQUM7WUFBQyxNQUFLO1lBQUUsVUFBUztZQUFFLFFBQU87WUFBUyxZQUFXO2dCQUFDO29CQUFDLE1BQUs7b0JBQUUsY0FBYTtvQkFBRSxRQUFPO29CQUFZLGVBQWM7b0JBQWdCLFNBQVE7b0JBQUcsWUFBVztvQkFBRSxlQUFjO2dCQUFpQjtnQkFBRTtvQkFBQyxNQUFLO29CQUFHLGNBQWE7b0JBQUUsUUFBTztvQkFBaUIsZUFBYztvQkFBZ0IsU0FBUTtvQkFBRyxZQUFXO29CQUFFLGVBQWM7Z0JBQWlCO2dCQUFFO29CQUFDLE1BQUs7b0JBQUcsY0FBYTtvQkFBRSxRQUFPO29CQUFhLGVBQWM7b0JBQWdCLFNBQVE7b0JBQUcsWUFBVztvQkFBRSxlQUFjO2dCQUFpQjtnQkFBRTtvQkFBQyxNQUFLO29CQUFHLGNBQWE7b0JBQUUsUUFBTztvQkFBc0IsZUFBYztvQkFBZ0IsU0FBUTtvQkFBRyxZQUFXO29CQUFFLGVBQWM7Z0JBQWlCO2FBQUU7UUFBQTtRQUFFO1lBQUMsTUFBSztZQUFFLFVBQVM7WUFBRSxRQUFPO1lBQVUsWUFBVztnQkFBQztvQkFBQyxNQUFLO29CQUFHLGNBQWE7b0JBQUUsUUFBTztvQkFBWSxlQUFjO29CQUFnQixTQUFRO29CQUFHLFlBQVc7b0JBQUUsZUFBYztnQkFBaUI7Z0JBQUU7b0JBQUMsTUFBSztvQkFBRyxjQUFhO29CQUFFLFFBQU87b0JBQU8sZUFBYztvQkFBZ0IsU0FBUTtvQkFBRyxZQUFXO29CQUFFLGVBQWM7Z0JBQWlCO2dCQUFFO29CQUFDLE1BQUs7b0JBQUcsY0FBYTtvQkFBRSxRQUFPO29CQUFPLGVBQWM7b0JBQWdCLFNBQVE7b0JBQUcsWUFBVztvQkFBRSxlQUFjO2dCQUFpQjtnQkFBRTtvQkFBQyxNQUFLO29CQUFHLGNBQWE7b0JBQUUsUUFBTztvQkFBVSxlQUFjO29CQUFnQixTQUFRO29CQUFHLFlBQVc7b0JBQUUsZUFBYztnQkFBaUI7YUFBRTtRQUFBO0tBQUU7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaG93TWVudS50c3g/ODE5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51LCBDYXRlZ29yeSwgUHJvZHVjdCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvTWVudS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dDYXRlZ29yeSh7IG1lbnUgfTogeyBtZW51OiBhbnkgfSkge1xuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWEpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICBcbiAgICA8Lz5cbiAgKTtcbn1cblxubGV0IGphc29uID0ge1wiaWRcIjoyLFwicmVzdGF1cmFudElkXCI6MixcIm5hbWVcIjpcIlBpenphc1wiLFwiY2F0ZWdvcmllc1wiOlt7XCJpZFwiOjMsXCJtZW51SWRcIjoyLFwibmFtZVwiOlwiUGl6emFzXCIsXCJwcm9kdWN0c1wiOlt7XCJpZFwiOjksXCJjYXRlZ29yeUlkXCI6MyxcIm5hbWVcIjpcIkNhbGFicmVzYVwiLFwiaW5ncmVkaWVudHNcIjpcIkluZ3JlZGllbnRzIDFcIixcInByaWNlXCI6MTAsXCJkaXNjb3VudFwiOjAsXCJkZXNjcmlwdGlvblwiOlwiRGVzY3JpcHRpb24gMVxcXCJcIn0se1wiaWRcIjoxMCxcImNhdGVnb3J5SWRcIjozLFwibmFtZVwiOlwiUXVhdHJvIHF1ZWlqb3NcIixcImluZ3JlZGllbnRzXCI6XCJJbmdyZWRpZW50cyAyXCIsXCJwcmljZVwiOjExLFwiZGlzY291bnRcIjowLFwiZGVzY3JpcHRpb25cIjpcIkRlc2NyaXB0aW9uIDJcXFwiXCJ9LHtcImlkXCI6MTEsXCJjYXRlZ29yeUlkXCI6MyxcIm5hbWVcIjpcIlBvcnR1Z3Vlc2FcIixcImluZ3JlZGllbnRzXCI6XCJJbmdyZWRpZW50cyAzXCIsXCJwcmljZVwiOjEyLFwiZGlzY291bnRcIjowLFwiZGVzY3JpcHRpb25cIjpcIkRlc2NyaXB0aW9uIDNcXFwiXCJ9LHtcImlkXCI6MTIsXCJjYXRlZ29yeUlkXCI6MyxcIm5hbWVcIjpcIkZyYW5nbyBjb20gY2F0dXBpcnlcIixcImluZ3JlZGllbnRzXCI6XCJJbmdyZWRpZW50cyA0XCIsXCJwcmljZVwiOjEzLFwiZGlzY291bnRcIjowLFwiZGVzY3JpcHRpb25cIjpcIkRlc2NyaXB0aW9uIDRcXFwiXCJ9XX0se1wiaWRcIjo0LFwibWVudUlkXCI6MixcIm5hbWVcIjpcIkJlYmlkYXNcIixcInByb2R1Y3RzXCI6W3tcImlkXCI6MTMsXCJjYXRlZ29yeUlkXCI6NCxcIm5hbWVcIjpcIkNvY2EtY29sYVwiLFwiaW5ncmVkaWVudHNcIjpcIkluZ3JlZGllbnRzIDFcIixcInByaWNlXCI6MTAsXCJkaXNjb3VudFwiOjAsXCJkZXNjcmlwdGlvblwiOlwiRGVzY3JpcHRpb24gMVxcXCJcIn0se1wiaWRcIjoxNCxcImNhdGVnb3J5SWRcIjo0LFwibmFtZVwiOlwiU3Vjb1wiLFwiaW5ncmVkaWVudHNcIjpcIkluZ3JlZGllbnRzIDJcIixcInByaWNlXCI6MTEsXCJkaXNjb3VudFwiOjAsXCJkZXNjcmlwdGlvblwiOlwiRGVzY3JpcHRpb24gMlxcXCJcIn0se1wiaWRcIjoxNSxcImNhdGVnb3J5SWRcIjo0LFwibmFtZVwiOlwiw4FndWFcIixcImluZ3JlZGllbnRzXCI6XCJJbmdyZWRpZW50cyAzXCIsXCJwcmljZVwiOjEyLFwiZGlzY291bnRcIjowLFwiZGVzY3JpcHRpb25cIjpcIkRlc2NyaXB0aW9uIDNcXFwiXCJ9LHtcImlkXCI6MTYsXCJjYXRlZ29yeUlkXCI6NCxcIm5hbWVcIjpcIkd1YXJhbsOhXCIsXCJpbmdyZWRpZW50c1wiOlwiSW5ncmVkaWVudHMgNFwiLFwicHJpY2VcIjoxMyxcImRpc2NvdW50XCI6MCxcImRlc2NyaXB0aW9uXCI6XCJEZXNjcmlwdGlvbiA0XFxcIlwifV19XX0iXSwibmFtZXMiOlsiU2hvd0NhdGVnb3J5IiwibWVudSIsImphc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ShowMenu.tsx\n"));

/***/ })

});