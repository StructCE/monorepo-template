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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavbarRestaurant; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Navbar.module.css */ \"./src/styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavbarLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavbarLogin */ \"./src/components/NavbarLogin.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction NavbarRestaurant(restaurantData) {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(restaurantData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav_div_res),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{},\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                children: \"Card\\xe1pio\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{},\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                children: \"Filiais\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo_div),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: restaurantData.image,\n                    alt: restaurantData.name,\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo)\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{},\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                children: \"Contato\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavbarLogin__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/NavbarRestaurant.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(NavbarRestaurant, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavbarRestaurant;\nvar _c;\n$RefreshReg$(_c, \"NavbarRestaurant\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXJSZXN0YXVyYW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDSDtBQUNMO0FBQ0E7QUFFekIsU0FBU0ksaUJBQWlCQyxjQUFtQjs7SUFDMUQsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR04sMkRBQVVBO0lBQ3BDLE1BQU1PLFNBQVNOLHNEQUFTQTtJQUN4Qk8sUUFBUUMsR0FBRyxDQUFDTDtJQUVaLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXWiw4RUFBa0I7OzBCQUNoQyw4REFBQ2M7Z0JBQU9DLFNBQVMsS0FBTztnQkFBR0gsV0FBV1oseUVBQWE7MEJBQUU7Ozs7OzswQkFJckQsOERBQUNjO2dCQUFPQyxTQUFTLEtBQU87Z0JBQUdILFdBQVdaLHlFQUFhOzBCQUFFOzs7Ozs7MEJBSXJELDhEQUFDZ0I7Z0JBQUlKLFdBQVdaLDJFQUFlOzBCQUM3Qiw0RUFBQ2tCO29CQUNDQyxLQUFLZCxlQUFlZSxLQUFLO29CQUN6QkMsS0FBS2hCLGVBQWVpQixJQUFJO29CQUN4QlYsV0FBV1osdUVBQVc7Ozs7Ozs7Ozs7OzBCQU8xQiw4REFBQ2M7Z0JBQU9DLFNBQVMsS0FBTztnQkFBR0gsV0FBV1oseUVBQWE7MEJBQUU7Ozs7OzswQkFJckQsOERBQUNHLG9EQUFXQTs7Ozs7Ozs7Ozs7QUFHbEI7R0FqQ3dCQzs7UUFDSUgsdURBQVVBO1FBQ3JCQyxrREFBU0E7OztLQUZGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXJSZXN0YXVyYW50LnRzeD82ZTBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2YmFyTG9naW4gZnJvbSBcIi4vTmF2YmFyTG9naW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyUmVzdGF1cmFudChyZXN0YXVyYW50RGF0YTogYW55KSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2cocmVzdGF1cmFudERhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9kaXZfcmVzfT5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge319IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgIENhcmTDoXBpb1xuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge319IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgIEZpbGlhaXNcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29fZGl2fT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cmVzdGF1cmFudERhdGEuaW1hZ2V9XG4gICAgICAgICAgYWx0PXtyZXN0YXVyYW50RGF0YS5uYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XG4gICAgICAgICAgLy8gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIC8vICAgcm91dGVyLnB1c2goYC9gKTtcbiAgICAgICAgICAvLyB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge319IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgIENvbnRhdG9cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8TmF2YmFyTG9naW4gLz5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiTmF2YmFyTG9naW4iLCJOYXZiYXJSZXN0YXVyYW50IiwicmVzdGF1cmFudERhdGEiLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJuYXYiLCJjbGFzc05hbWUiLCJuYXZfZGl2X3JlcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJsb2dvX2RpdiIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsImxvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavbarRestaurant.tsx\n"));

/***/ })

});