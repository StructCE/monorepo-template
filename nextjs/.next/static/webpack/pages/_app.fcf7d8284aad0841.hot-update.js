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

/***/ "./src/components/DropDownProfile.tsx":
/*!********************************************!*\
  !*** ./src/components/DropDownProfile.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DropDownProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Navbar.module.css */ \"./src/styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction DropDownProfile() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropdown_item),\n                onClick: ()=>{\n                    if (confirm(\"Deseja sair?\")) {\n                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                    }\n                },\n                children: \"Sair\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropdown_item),\n                onClick: ()=>{\n                    router.push(\"/user/profile\");\n                },\n                children: \"Perfil\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(DropDownProfile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = DropDownProfile;\nvar _c;\n$RefreshReg$(_c, \"DropDownProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ecm9wRG93blByb2ZpbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1E7QUFDTjtBQUUzQixTQUFTRzs7SUFDdEIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNDO2dCQUNDQyxXQUFXTixnRkFBb0I7Z0JBQy9CUSxTQUFTO29CQUNQLElBQUlDLFFBQVEsaUJBQWlCO3dCQUMzQlIsd0RBQU9BO29CQUNUO2dCQUNGOzBCQUNEOzs7Ozs7MEJBR0QsOERBQUNJO2dCQUNDQyxXQUFXTixnRkFBb0I7Z0JBQy9CUSxTQUFTO29CQUNQTCxPQUFPTyxJQUFJLENBQUU7Z0JBQ2Y7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUtQO0dBeEJ3QlI7O1FBQ1BILGtEQUFTQTs7O0tBREZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Ryb3BEb3duUHJvZmlsZS50c3g/MzNjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wRG93blByb2ZpbGUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX2l0ZW19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoY29uZmlybShcIkRlc2VqYSBzYWlyP1wiKSkge1xuICAgICAgICAgICAgc2lnbk91dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU2FpclxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX2l0ZW19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICByb3V0ZXIucHVzaChgL3VzZXIvcHJvZmlsZWApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBQZXJmaWxcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlcyIsInNpZ25PdXQiLCJEcm9wRG93blByb2ZpbGUiLCJyb3V0ZXIiLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJkcm9wZG93bl9pdGVtIiwib25DbGljayIsImNvbmZpcm0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DropDownProfile.tsx\n"));

/***/ }),

/***/ "./src/components/LoginGoogle.tsx":
/*!****************************************!*\
  !*** ./src/components/LoginGoogle.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SigninButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Navbar.module.css */ \"./src/styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DropDownProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDownProfile */ \"./src/components/DropDownProfile.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction dropDown() {\n    throw new Error(\"Function not implemented.\");\n}\nfunction SigninButton() {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    if (session && session.user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon_div),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    onClick: ()=>{\n                        dropDown();\n                    },\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().user_icon),\n                    src: String(session.user.image),\n                    alt: String(session.user.name)\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDownProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>{\n            router.push(\"/login\");\n        },\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n        children: \"Entrar\"\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/LoginGoogle.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(SigninButton, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SigninButton;\nvar _c;\n$RefreshReg$(_c, \"SigninButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbkdvb2dsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDb0M7QUFDZDtBQUNSO0FBQ1E7QUFFaEQsU0FBU0s7SUFDUCxNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR1IsMkRBQVVBO0lBQ3BDLE1BQU1TLFNBQVNQLHNEQUFTQTtJQUV4QixJQUFJTSxXQUFXQSxRQUFRRSxJQUFJLEVBQUU7UUFFM0IscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVdYLDJFQUFlOzs4QkFDN0IsOERBQUNhO29CQUNDQyxTQUFTO3dCQUFLWDtvQkFBVTtvQkFDeEJRLFdBQVdYLDRFQUFnQjtvQkFDM0JnQixLQUFLQyxPQUFPVixRQUFRRSxJQUFJLENBQUNTLEtBQUs7b0JBQzlCQyxLQUFLRixPQUFPVixRQUFRRSxJQUFJLENBQUNXLElBQUk7Ozs7Ozs4QkFHL0IsOERBQUNsQix3REFBZUE7Ozs7Ozs7Ozs7O0lBR3RCO0lBQ0EscUJBQ0UsOERBQUNtQjtRQUNDUCxTQUFTO1lBQ1BOLE9BQU9jLElBQUksQ0FBRTtRQUNmO1FBQ0FYLFdBQVdYLHlFQUFhO2tCQUN6Qjs7Ozs7O0FBT0w7R0FoQ3dCSzs7UUFDSU4sdURBQVVBO1FBQ3JCRSxrREFBU0E7OztLQUZGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb2dpbkdvb2dsZS50c3g/Y2MzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBEcm9wRG93blByb2ZpbGUgZnJvbSBcIi4vRHJvcERvd25Qcm9maWxlXCI7XG5cbmZ1bmN0aW9uIGRyb3BEb3duKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduaW5CdXR0b24oKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXIpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25fZGl2fT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIG9uQ2xpY2s9eygpPT57ZHJvcERvd24oKX19XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pY29ufVxuICAgICAgICAgIHNyYz17U3RyaW5nKHNlc3Npb24udXNlci5pbWFnZSl9XG4gICAgICAgICAgYWx0PXtTdHJpbmcoc2Vzc2lvbi51c2VyLm5hbWUpfVxuICAgICAgICAvPlxuICAgICAgICB7LyogVE9ETzogZHJvcGRvd24gY29tIFwic2FpclwiIGUgXCJwZXJmaWxcIiAqL31cbiAgICAgICAgPERyb3BEb3duUHJvZmlsZS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChgL2xvZ2luYCk7XG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgID5cbiAgICAgIEVudHJhclxuICAgIDwvYnV0dG9uPlxuICAgIC8vIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgLy8gICBFbnRyYXJcbiAgICAvLyA8L2J1dHRvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlc3Npb24iLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJEcm9wRG93blByb2ZpbGUiLCJkcm9wRG93biIsIkVycm9yIiwiU2lnbmluQnV0dG9uIiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbl9kaXYiLCJpbWciLCJvbkNsaWNrIiwidXNlcl9pY29uIiwic3JjIiwiU3RyaW5nIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwiYnV0dG9uIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LoginGoogle.tsx\n"));

/***/ })

});