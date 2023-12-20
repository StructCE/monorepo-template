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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DropDownProfile; },\n/* harmony export */   getCartId: function() { return /* binding */ getCartId; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Navbar.module.css */ \"./src/styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/types/types */ \"./src/types/types.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    let user = _types_types__WEBPACK_IMPORTED_MODULE_3__.defaultUser;\n    if (res.ok) user = await res.json();\n    if (user && user.cart) {\n        return Number(user.cart.id);\n    }\n    return 0;\n}\nfunction DropDownProfile() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [openDropdown, setOpenDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    if (openDropdown) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownProfile),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownItem),\n                        onClick: ()=>{\n                            router.push(\"/user/profile\");\n                        },\n                        children: \"Perfil\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownItem),\n                        onClick: async ()=>{\n                            if (session && session.user) {\n                                const cartId = Number(await getCartId(String(session.user.email)));\n                                router.push(\"/user/cart/\".concat(cartId));\n                            }\n                        },\n                        children: \"Carrinho\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    session && session.user && session.user.isOwner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownItem),\n                        onClick: ()=>{\n                            if (session && session.user) {\n                                router.push(\"/user/menu/\".concat(session.user.id));\n                            } else {\n                                alert(\"Fa\\xe7a login para acessar seu restaurante!\");\n                                router.push(\"/login\");\n                            }\n                        },\n                        children: \"Restaurante\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownItem),\n                        onClick: ()=>{\n                            if (confirm(\"Deseja sair?\")) {\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                            }\n                        },\n                        children: \"Sair\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(DropDownProfile, \"NMxSOXVKf9VX6O1+izgLzNe0XsM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = DropDownProfile;\nvar _c;\n$RefreshReg$(_c, \"DropDownProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ecm9wRG93blByb2ZpbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNRO0FBQ007QUFDVjtBQUNYO0FBRTFCLGVBQWVNLFVBQVVDLFNBQWlCO0lBQy9DLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxrQ0FBNEMsT0FBVkYsWUFBYTtRQUNyRUcsUUFBUTtJQUNWO0lBRUEsSUFBSUMsT0FBT1AscURBQVdBO0lBQ3RCLElBQUlJLElBQUlJLEVBQUUsRUFBRUQsT0FBTyxNQUFNSCxJQUFJSyxJQUFJO0lBRWpDLElBQUlGLFFBQVFBLEtBQUtHLElBQUksRUFBRTtRQUNyQixPQUFPQyxPQUFPSixLQUFLRyxJQUFJLENBQUNFLEVBQUU7SUFDNUI7SUFDQSxPQUFPO0FBQ1Q7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTUMsU0FBU2xCLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVtQixNQUFNQyxPQUFPLEVBQUUsR0FBR2pCLDJEQUFVQTtJQUVwQyxNQUFNLENBQUNrQixjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRWpELElBQUlnQixjQUFhO1FBQ2YscUJBQ0UsOERBQUNFO1lBQUlDLFdBQVd2QixrRkFBc0I7c0JBQ3BDLDRFQUFDc0I7Z0JBQUlDLFdBQVd2QixrRkFBc0I7O2tDQUNwQyw4REFBQzBCO3dCQUNDSCxXQUFXdkIsK0VBQW1CO3dCQUM5QjRCLFNBQVM7NEJBQ1BYLE9BQU9ZLElBQUksQ0FBRTt3QkFDZjtrQ0FDRDs7Ozs7O29CQUVTO2tDQUNWLDhEQUFDSDt3QkFDQ0gsV0FBV3ZCLCtFQUFtQjt3QkFDOUI0QixTQUFTOzRCQUNQLElBQUlULFdBQVdBLFFBQVFULElBQUksRUFBRTtnQ0FDM0IsTUFBTW9CLFNBQVNoQixPQUNiLE1BQU1ULFVBQVUwQixPQUFPWixRQUFRVCxJQUFJLENBQUNzQixLQUFLO2dDQUczQ2YsT0FBT1ksSUFBSSxDQUFDLGNBQXFCLE9BQVBDOzRCQUM1Qjt3QkFDRjtrQ0FDRDs7Ozs7O29CQUdBWCxXQUFXQSxRQUFRVCxJQUFJLElBQUlTLFFBQVFULElBQUksQ0FBQ3VCLE9BQU8sa0JBQzlDLDhEQUFDUDt3QkFDQ0gsV0FBV3ZCLCtFQUFtQjt3QkFDOUI0QixTQUFTOzRCQUNQLElBQUlULFdBQVdBLFFBQVFULElBQUksRUFBRTtnQ0FDM0JPLE9BQU9ZLElBQUksQ0FBQyxjQUE4QixPQUFoQlYsUUFBUVQsSUFBSSxDQUFDSyxFQUFFOzRCQUMzQyxPQUFPO2dDQUNMbUIsTUFBTTtnQ0FDTmpCLE9BQU9ZLElBQUksQ0FBRTs0QkFDZjt3QkFDRjtrQ0FDRDs7Ozs7O2tDQUlILDhEQUFDSDt3QkFDQ0gsV0FBV3ZCLCtFQUFtQjt3QkFDOUI0QixTQUFTOzRCQUNQLElBQUlPLFFBQVEsaUJBQWlCO2dDQUMzQmxDLHdEQUFPQTs0QkFDVDt3QkFDRjtrQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTDtBQUNOO0dBNUR3QmU7O1FBQ1BqQixrREFBU0E7UUFDRUcsdURBQVVBOzs7S0FGZGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRHJvcERvd25Qcm9maWxlLnRzeD8zM2NmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvTmF2YmFyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBkZWZhdWx0VXNlciB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FydElkKHVzZXJFbWFpbDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvJHt1c2VyRW1haWx9YCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgfSk7XG5cbiAgbGV0IHVzZXIgPSBkZWZhdWx0VXNlcjtcbiAgaWYgKHJlcy5vaykgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgaWYgKHVzZXIgJiYgdXNlci5jYXJ0KSB7XG4gICAgcmV0dXJuIE51bWJlcih1c2VyLmNhcnQuaWQpO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wRG93blByb2ZpbGUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCBbb3BlbkRyb3Bkb3duLCBzZXRPcGVuRHJvcERvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGlmIChvcGVuRHJvcGRvd24pe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3BEb3duUHJvZmlsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcERvd25Db250ZW50fT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bkl0ZW19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlci9wcm9maWxlYCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBlcmZpbFxuICAgICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bkl0ZW19XG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24udXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJZCA9IE51bWJlcihcbiAgICAgICAgICAgICAgICAgIGF3YWl0IGdldENhcnRJZChTdHJpbmcoc2Vzc2lvbi51c2VyLmVtYWlsKSlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyL2NhcnQvJHtjYXJ0SWR9YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FycmluaG9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7c2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXIgJiYgc2Vzc2lvbi51c2VyLmlzT3duZXIgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bkl0ZW19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlci9tZW51LyR7c2Vzc2lvbi51c2VyLmlkfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBhbGVydChcIkZhw6dhIGxvZ2luIHBhcmEgYWNlc3NhciBzZXUgcmVzdGF1cmFudGUhXCIpO1xuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9sb2dpbmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVzdGF1cmFudGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcERvd25JdGVtfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY29uZmlybShcIkRlc2VqYSBzYWlyP1wiKSkge1xuICAgICAgICAgICAgICAgIHNpZ25PdXQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTYWlyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTt9XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGVzIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJkZWZhdWx0VXNlciIsInVzZVN0YXRlIiwiZ2V0Q2FydElkIiwidXNlckVtYWlsIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJ1c2VyIiwib2siLCJqc29uIiwiY2FydCIsIk51bWJlciIsImlkIiwiRHJvcERvd25Qcm9maWxlIiwicm91dGVyIiwiZGF0YSIsInNlc3Npb24iLCJvcGVuRHJvcGRvd24iLCJzZXRPcGVuRHJvcERvd24iLCJkaXYiLCJjbGFzc05hbWUiLCJkcm9wRG93blByb2ZpbGUiLCJkcm9wRG93bkNvbnRlbnQiLCJidXR0b24iLCJkcm9wRG93bkl0ZW0iLCJvbkNsaWNrIiwicHVzaCIsImNhcnRJZCIsIlN0cmluZyIsImVtYWlsIiwiaXNPd25lciIsImFsZXJ0IiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DropDownProfile.tsx\n"));

/***/ })

});