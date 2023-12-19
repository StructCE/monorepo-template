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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DropDownProfile; },\n/* harmony export */   getCartId: function() { return /* binding */ getCartId; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Navbar.module.css */ \"./src/styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/types/types */ \"./src/types/types.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    let user = _types_types__WEBPACK_IMPORTED_MODULE_3__.defaultUser;\n    if (res.ok) user = await res.json();\n    console.log(user);\n    if (user && user.cart) {\n        return Number(user.cart.id);\n    }\n    return 0;\n}\nfunction DropDownProfile() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropDownProfile),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropDownContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropDownItem),\n                    onClick: ()=>{\n                        router.push(\"/user/profile\");\n                    },\n                    children: \"Perfil\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropDownItem),\n                    onClick: async ()=>{\n                        if (session && session.user) {\n                            console.log(session.user);\n                            const cartId = Number(await getCartId(String(session.user.email)));\n                            router.push(\"/user/cart/\".concat(cartId));\n                        }\n                    },\n                    children: \"Carrinho\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropDownItem),\n                    onClick: ()=>{\n                        if (confirm(\"Deseja sair?\")) {\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                        }\n                    },\n                    children: \"Sair\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(DropDownProfile, \"pZYTleGwCoLp4YPidiydDoRoLys=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = DropDownProfile;\nvar _c;\n$RefreshReg$(_c, \"DropDownProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ecm9wRG93blByb2ZpbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUTtBQUNNO0FBQ1Y7QUFFckMsZUFBZUssVUFBVUMsU0FBaUI7SUFDL0MsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLGtDQUE0QyxPQUFWRixZQUFhO1FBQ3JFRyxRQUFRO0lBQ1Y7SUFFQSxJQUFJQyxPQUFPTixxREFBV0E7SUFDdEIsSUFBSUcsSUFBSUksRUFBRSxFQUFFRCxPQUFPLE1BQU1ILElBQUlLLElBQUk7SUFFakNDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWixJQUFJQSxRQUFRQSxLQUFLSyxJQUFJLEVBQUU7UUFDckIsT0FBT0MsT0FBT04sS0FBS0ssSUFBSSxDQUFDRSxFQUFFO0lBQzVCO0lBQ0EsT0FBTztBQUNUO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU1DLFNBQVNuQixzREFBU0E7SUFDeEIsTUFBTSxFQUFFb0IsTUFBTUMsT0FBTyxFQUFFLEdBQUdsQiwyREFBVUE7SUFFcEMscUJBQ0UsOERBQUNtQjtRQUFJQyxXQUFXdEIsa0ZBQXNCO2tCQUNwQyw0RUFBQ3FCO1lBQUlDLFdBQVd0QixrRkFBc0I7OzhCQUNwQyw4REFBQ3lCO29CQUNDSCxXQUFXdEIsK0VBQW1CO29CQUM5QjJCLFNBQVM7d0JBQ1BULE9BQU9VLElBQUksQ0FBRTtvQkFDZjs4QkFDRDs7Ozs7O2dCQUVTOzhCQUNWLDhEQUFDSDtvQkFDQ0gsV0FBV3RCLCtFQUFtQjtvQkFDOUIyQixTQUFTO3dCQUNQLElBQUlQLFdBQVdBLFFBQVFYLElBQUksRUFBRTs0QkFDM0JHLFFBQVFDLEdBQUcsQ0FBQ08sUUFBUVgsSUFBSTs0QkFDeEIsTUFBTW9CLFNBQVNkLE9BQ2IsTUFBTVgsVUFBVTBCLE9BQU9WLFFBQVFYLElBQUksQ0FBQ3NCLEtBQUs7NEJBRzNDYixPQUFPVSxJQUFJLENBQUMsY0FBcUIsT0FBUEM7d0JBQzVCO29CQUNGOzhCQUNEOzs7Ozs7OEJBR0QsOERBQUNKO29CQUNDSCxXQUFXdEIsK0VBQW1CO29CQUM5QjJCLFNBQVM7d0JBQ1AsSUFBSUssUUFBUSxpQkFBaUI7NEJBQzNCL0Isd0RBQU9BO3dCQUNUO29CQUNGOzhCQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBM0N3QmdCOztRQUNQbEIsa0RBQVNBO1FBQ0VHLHVEQUFVQTs7O0tBRmRlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Ryb3BEb3duUHJvZmlsZS50c3g/MzNjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgZGVmYXVsdFVzZXIgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FydElkKHVzZXJFbWFpbDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvJHt1c2VyRW1haWx9YCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgfSk7XG5cbiAgbGV0IHVzZXIgPSBkZWZhdWx0VXNlcjtcbiAgaWYgKHJlcy5vaykgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2codXNlcik7XG4gIGlmICh1c2VyICYmIHVzZXIuY2FydCkge1xuICAgIHJldHVybiBOdW1iZXIodXNlci5jYXJ0LmlkKTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcERvd25Qcm9maWxlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3BEb3duUHJvZmlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3BEb3duQ29udGVudH0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bkl0ZW19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyL3Byb2ZpbGVgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUGVyZmlsXG4gICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRyb3BEb3duSXRlbX1cbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvbi51c2VyKVxuICAgICAgICAgICAgICBjb25zdCBjYXJ0SWQgPSBOdW1iZXIoXG4gICAgICAgICAgICAgICAgYXdhaXQgZ2V0Q2FydElkKFN0cmluZyhzZXNzaW9uLnVzZXIuZW1haWwpKVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlci9jYXJ0LyR7Y2FydElkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBDYXJyaW5ob1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRyb3BEb3duSXRlbX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkRlc2VqYSBzYWlyP1wiKSkge1xuICAgICAgICAgICAgICBzaWduT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNhaXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsImRlZmF1bHRVc2VyIiwiZ2V0Q2FydElkIiwidXNlckVtYWlsIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJ1c2VyIiwib2siLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNhcnQiLCJOdW1iZXIiLCJpZCIsIkRyb3BEb3duUHJvZmlsZSIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiZHJvcERvd25Qcm9maWxlIiwiZHJvcERvd25Db250ZW50IiwiYnV0dG9uIiwiZHJvcERvd25JdGVtIiwib25DbGljayIsInB1c2giLCJjYXJ0SWQiLCJTdHJpbmciLCJlbWFpbCIsImNvbmZpcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DropDownProfile.tsx\n"));

/***/ })

});