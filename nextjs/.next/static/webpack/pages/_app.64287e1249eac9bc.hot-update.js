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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DropDownProfile; },\n/* harmony export */   getCartId: function() { return /* binding */ getCartId; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Navbar.module.css */ \"./src/styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/types/types */ \"./src/types/types.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    let user = _types_types__WEBPACK_IMPORTED_MODULE_3__.defaultUser;\n    if (res.ok) user = await res.json();\n    if (user && user.cart) {\n        return Number(user.cart.id);\n    }\n    return 0;\n}\nfunction DropDownProfile() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [openDropdown, setOpenDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownProfile),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownItem),\n                    onClick: ()=>{\n                        router.push(\"/user/profile\");\n                    },\n                    children: \"Perfil\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownItem),\n                    onClick: async ()=>{\n                        if (session && session.user) {\n                            const cartId = Number(await getCartId(String(session.user.email)));\n                            router.push(\"/user/cart/\".concat(cartId));\n                        }\n                    },\n                    children: \"Carrinho\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                session && session.user && session.user.isOwner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownItem),\n                    onClick: ()=>{\n                        if (session && session.user) {\n                            router.push(\"/user/menu/\".concat(session.user.id));\n                        } else {\n                            alert(\"Fa\\xe7a login para acessar seu restaurante!\");\n                            router.push(\"/login\");\n                        }\n                    },\n                    children: \"Restaurante\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropDownItem),\n                    onClick: ()=>{\n                        if (confirm(\"Deseja sair?\")) {\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                        }\n                    },\n                    children: \"Sair\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/DropDownProfile.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(DropDownProfile, \"NMxSOXVKf9VX6O1+izgLzNe0XsM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = DropDownProfile;\nvar _c;\n$RefreshReg$(_c, \"DropDownProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ecm9wRG93blByb2ZpbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNRO0FBQ007QUFDVjtBQUNYO0FBRTFCLGVBQWVNLFVBQVVDLFNBQWlCO0lBQy9DLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxrQ0FBNEMsT0FBVkYsWUFBYTtRQUNyRUcsUUFBUTtJQUNWO0lBRUEsSUFBSUMsT0FBT1AscURBQVdBO0lBQ3RCLElBQUlJLElBQUlJLEVBQUUsRUFBRUQsT0FBTyxNQUFNSCxJQUFJSyxJQUFJO0lBRWpDLElBQUlGLFFBQVFBLEtBQUtHLElBQUksRUFBRTtRQUNyQixPQUFPQyxPQUFPSixLQUFLRyxJQUFJLENBQUNFLEVBQUU7SUFDNUI7SUFDQSxPQUFPO0FBQ1Q7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTUMsU0FBU2xCLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVtQixNQUFNQyxPQUFPLEVBQUUsR0FBR2pCLDJEQUFVQTtJQUVsQyxNQUFNLENBQUNrQixjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBR25ELHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBV3ZCLGtGQUFzQjtrQkFDcEMsNEVBQUNzQjtZQUFJQyxXQUFXdkIsa0ZBQXNCOzs4QkFDcEMsOERBQUMwQjtvQkFDQ0gsV0FBV3ZCLCtFQUFtQjtvQkFDOUI0QixTQUFTO3dCQUNQWCxPQUFPWSxJQUFJLENBQUU7b0JBQ2Y7OEJBQ0Q7Ozs7OztnQkFFUzs4QkFDViw4REFBQ0g7b0JBQ0NILFdBQVd2QiwrRUFBbUI7b0JBQzlCNEIsU0FBUzt3QkFDUCxJQUFJVCxXQUFXQSxRQUFRVCxJQUFJLEVBQUU7NEJBQzNCLE1BQU1vQixTQUFTaEIsT0FDYixNQUFNVCxVQUFVMEIsT0FBT1osUUFBUVQsSUFBSSxDQUFDc0IsS0FBSzs0QkFHM0NmLE9BQU9ZLElBQUksQ0FBQyxjQUFxQixPQUFQQzt3QkFDNUI7b0JBQ0Y7OEJBQ0Q7Ozs7OztnQkFHQVgsV0FBV0EsUUFBUVQsSUFBSSxJQUFJUyxRQUFRVCxJQUFJLENBQUN1QixPQUFPLGtCQUM5Qyw4REFBQ1A7b0JBQ0NILFdBQVd2QiwrRUFBbUI7b0JBQzlCNEIsU0FBUzt3QkFDUCxJQUFJVCxXQUFXQSxRQUFRVCxJQUFJLEVBQUU7NEJBQzNCTyxPQUFPWSxJQUFJLENBQUMsY0FBOEIsT0FBaEJWLFFBQVFULElBQUksQ0FBQ0ssRUFBRTt3QkFDM0MsT0FBTzs0QkFDTG1CLE1BQU07NEJBQ05qQixPQUFPWSxJQUFJLENBQUU7d0JBQ2Y7b0JBQ0Y7OEJBQ0Q7Ozs7Ozs4QkFJSCw4REFBQ0g7b0JBQ0NILFdBQVd2QiwrRUFBbUI7b0JBQzlCNEIsU0FBUzt3QkFDUCxJQUFJTyxRQUFRLGlCQUFpQjs0QkFDM0JsQyx3REFBT0E7d0JBQ1Q7b0JBQ0Y7OEJBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0E1RHdCZTs7UUFDUGpCLGtEQUFTQTtRQUNFRyx1REFBVUE7OztLQUZkYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ecm9wRG93blByb2ZpbGUudHN4PzMzY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IGRlZmF1bHRVc2VyIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJ0SWQodXNlckVtYWlsOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci8ke3VzZXJFbWFpbH1gLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICB9KTtcblxuICBsZXQgdXNlciA9IGRlZmF1bHRVc2VyO1xuICBpZiAocmVzLm9rKSB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBpZiAodXNlciAmJiB1c2VyLmNhcnQpIHtcbiAgICByZXR1cm4gTnVtYmVyKHVzZXIuY2FydC5pZCk7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3BEb3duUHJvZmlsZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gICAgY29uc3QgW29wZW5Ecm9wZG93biwgc2V0T3BlbkRyb3BEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93blByb2ZpbGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bkNvbnRlbnR9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcERvd25JdGVtfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlci9wcm9maWxlYCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFBlcmZpbFxuICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bkl0ZW19XG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhcnRJZCA9IE51bWJlcihcbiAgICAgICAgICAgICAgICBhd2FpdCBnZXRDYXJ0SWQoU3RyaW5nKHNlc3Npb24udXNlci5lbWFpbCkpXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyL2NhcnQvJHtjYXJ0SWR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENhcnJpbmhvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7c2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXIgJiYgc2Vzc2lvbi51c2VyLmlzT3duZXIgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRyb3BEb3duSXRlbX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyL21lbnUvJHtzZXNzaW9uLnVzZXIuaWR9YCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYcOnYSBsb2dpbiBwYXJhIGFjZXNzYXIgc2V1IHJlc3RhdXJhbnRlIVwiKTtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2xvZ2luYCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVzdGF1cmFudGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRyb3BEb3duSXRlbX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkRlc2VqYSBzYWlyP1wiKSkge1xuICAgICAgICAgICAgICBzaWduT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNhaXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsImRlZmF1bHRVc2VyIiwidXNlU3RhdGUiLCJnZXRDYXJ0SWQiLCJ1c2VyRW1haWwiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsInVzZXIiLCJvayIsImpzb24iLCJjYXJ0IiwiTnVtYmVyIiwiaWQiLCJEcm9wRG93blByb2ZpbGUiLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsIm9wZW5Ecm9wZG93biIsInNldE9wZW5Ecm9wRG93biIsImRpdiIsImNsYXNzTmFtZSIsImRyb3BEb3duUHJvZmlsZSIsImRyb3BEb3duQ29udGVudCIsImJ1dHRvbiIsImRyb3BEb3duSXRlbSIsIm9uQ2xpY2siLCJwdXNoIiwiY2FydElkIiwiU3RyaW5nIiwiZW1haWwiLCJpc093bmVyIiwiYWxlcnQiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DropDownProfile.tsx\n"));

/***/ })

});