"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/LoginGoogle.tsx":
/*!****************************************!*\
  !*** ./src/components/LoginGoogle.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SigninButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Navbar.module.css */ \"./src/styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DropDownProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDownProfile */ \"./src/components/DropDownProfile.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SigninButton() {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [openDropdown, setOpenDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (session && session.user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon_div),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    onClick: ()=>{\n                        set;\n                    },\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_icon),\n                    src: String(session.user.image),\n                    alt: String(session.user.name)\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                openDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDownProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 26\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>{\n            router.push(\"/login\");\n        },\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n        children: \"Entrar\"\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(SigninButton, \"Z4lYCQOkQc5uo+ng1sG+Rze5vbE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SigninButton;\nvar _c;\n$RefreshReg$(_c, \"SigninButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbkdvb2dsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDc0I7QUFDZDtBQUNSO0FBQ1E7QUFFakMsU0FBU007O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdOLDJEQUFVQTtJQUNwQyxNQUFNTyxTQUFTTCxzREFBU0E7SUFFeEIsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7SUFFakQsSUFBSU8sV0FBV0EsUUFBUUksSUFBSSxFQUFFO1FBQzNCLHFCQUNFLDhEQUFDQztZQUFJQyxXQUFXWCwyRUFBZTs7OEJBQzdCLDhEQUFDYTtvQkFDQ0MsU0FBUzt3QkFBT0M7b0JBQUc7b0JBQ25CSixXQUFXWCw0RUFBZ0I7b0JBQzNCaUIsS0FBS0MsT0FBT2IsUUFBUUksSUFBSSxDQUFDVSxLQUFLO29CQUM5QkMsS0FBS0YsT0FBT2IsUUFBUUksSUFBSSxDQUFDWSxJQUFJOzs7Ozs7Z0JBRTlCZCw4QkFBZ0IsOERBQUNMLHdEQUFlQTs7Ozs7Ozs7Ozs7SUFHdkM7SUFDQSxxQkFDRSw4REFBQ29CO1FBQ0NSLFNBQVM7WUFDUFIsT0FBT2lCLElBQUksQ0FBRTtRQUNmO1FBQ0FaLFdBQVdYLHlFQUFhO2tCQUN6Qjs7Ozs7O0FBT0w7R0FoQ3dCRzs7UUFDSUosdURBQVVBO1FBQ3JCRSxrREFBU0E7OztLQUZGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb2dpbkdvb2dsZS50c3g/Y2MzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvTmF2YmFyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IERyb3BEb3duUHJvZmlsZSBmcm9tIFwiLi9Ecm9wRG93blByb2ZpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbmluQnV0dG9uKCkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW29wZW5Ecm9wZG93biwgc2V0T3BlbkRyb3BEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uX2Rpdn0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0fX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2ljb259XG4gICAgICAgICAgc3JjPXtTdHJpbmcoc2Vzc2lvbi51c2VyLmltYWdlKX1cbiAgICAgICAgICBhbHQ9e1N0cmluZyhzZXNzaW9uLnVzZXIubmFtZSl9XG4gICAgICAgIC8+XG4gICAgICAgIHtvcGVuRHJvcGRvd24gJiYgPERyb3BEb3duUHJvZmlsZSAvPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvbG9naW5gKTtcbiAgICAgIH19XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgPlxuICAgICAgRW50cmFyXG4gICAgPC9idXR0b24+XG4gICAgLy8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAvLyAgIEVudHJhclxuICAgIC8vIDwvYnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwic3R5bGVzIiwidXNlUm91dGVyIiwiRHJvcERvd25Qcm9maWxlIiwiU2lnbmluQnV0dG9uIiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJvcGVuRHJvcGRvd24iLCJzZXRPcGVuRHJvcERvd24iLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbl9kaXYiLCJpbWciLCJvbkNsaWNrIiwic2V0IiwidXNlcl9pY29uIiwic3JjIiwiU3RyaW5nIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwiYnV0dG9uIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LoginGoogle.tsx\n"));

/***/ })

});