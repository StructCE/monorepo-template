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

/***/ "./src/components/ShowProduct.tsx":
/*!****************************************!*\
  !*** ./src/components/ShowProduct.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/ShowProduct.module.css */ \"./src/styles/ShowProduct.module.css\");\n/* harmony import */ var _styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nasync function postCartProdut(productId) {\n    const res = await fetch(\"http://localhost:3000/api/user/cart/product/\".concat(productId), {\n        method: \"POST\",\n        body: JSON.stringify({\n            cartId: 1\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\nasync function getCartId(userEmail) {}\nfunction ShowProduct(param) {\n    let { product } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().nome),\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().descricao),\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredientes),\n                        children: product.ingredients\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().preco),\n                children: [\n                    \"R$ \",\n                    product.price + \",00\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().action),\n                onClick: ()=>{\n                    if (session && session.user) {\n                        const cartId = getCartId(session.user.email);\n                        if (confirm(\"Adicionar produto ao carrinho?\")) {\n                            postCartProdut(product.id);\n                        }\n                    } else {\n                        alert(\"Fa\\xe7a login para acessar adicionar produtos ao carrinho!\");\n                        router.push(\"/user/login\");\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/icons/cart.png\",\n                    alt: \"add_to_cart\",\n                    className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().action_icon)\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(ShowProduct, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ShowProduct;\nvar _c;\n$RefreshReg$(_c, \"ShowProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaG93UHJvZHVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDUjtBQUNMO0FBRXhDLGVBQWVHLGVBQWVDLFNBQWM7SUFDMUMsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQiwrQ0FBeUQsT0FBVkYsWUFDL0M7UUFDRUcsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsUUFBUTtRQUFFO1FBQ2pDQyxTQUFTO1lBQUUsZ0JBQWdCO1FBQW1CO0lBQ2hEO0FBRUo7QUFFQSxlQUFlQyxVQUFVQyxTQUFpQixHQUFHO0FBRTlCLFNBQVNDLFlBQVksS0FBZ0I7UUFBaEIsRUFBRUMsT0FBTyxFQUFPLEdBQWhCOztJQUNsQyxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHakIsMkRBQVVBO0lBQ3BDLE1BQU1rQixTQUFTakIsc0RBQVNBO0lBRXhCLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBV3JCLDRFQUFXOzswQkFFekIsOERBQUNvQjtnQkFBSUMsV0FBV3JCLDRFQUFXOztrQ0FDekIsOERBQUN3Qjt3QkFBR0gsV0FBV3JCLDRFQUFXO2tDQUFHZ0IsUUFBUVUsSUFBSTs7Ozs7O2tDQUN6Qyw4REFBQ0M7d0JBQUVOLFdBQVdyQixpRkFBZ0I7a0NBQUdnQixRQUFRYSxXQUFXOzs7Ozs7a0NBQ3BELDhEQUFDRjt3QkFBRU4sV0FBV3JCLG9GQUFtQjtrQ0FBR2dCLFFBQVFlLFdBQVc7Ozs7Ozs7Ozs7OzswQkFLekQsOERBQUNDO2dCQUFHWCxXQUFXckIsNkVBQVk7O29CQUFFO29CQUFJZ0IsUUFBUWtCLEtBQUssR0FBRzs7Ozs7OzswQkFDakQsOERBQUNDO2dCQUNDZCxXQUFXckIsOEVBQWE7Z0JBQ3hCcUMsU0FBUztvQkFDUCxJQUFJbkIsV0FBV0EsUUFBUW9CLElBQUksRUFBRTt3QkFDM0IsTUFBTTNCLFNBQVNFLFVBQVVLLFFBQVFvQixJQUFJLENBQUNDLEtBQUs7d0JBQzNDLElBQUlDLFFBQVEsbUNBQW1DOzRCQUM3Q3JDLGVBQWVhLFFBQVF5QixFQUFFO3dCQUMzQjtvQkFDRixPQUFPO3dCQUNMQyxNQUFNO3dCQUNOdkIsT0FBT3dCLElBQUksQ0FBRTtvQkFDZjtnQkFDRjswQkFFQSw0RUFBQ0M7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0p6QixXQUFXckIsbUZBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QztHQXRDd0JlOztRQUNJZCx1REFBVUE7UUFDckJDLGtEQUFTQTs7O0tBRkZhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Nob3dQcm9kdWN0LnRzeD8xNzkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1Nob3dQcm9kdWN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuYXN5bmMgZnVuY3Rpb24gcG9zdENhcnRQcm9kdXQocHJvZHVjdElkOiBhbnkpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci9jYXJ0L3Byb2R1Y3QvJHtwcm9kdWN0SWR9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjYXJ0SWQ6IDEgfSksXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfVxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDYXJ0SWQodXNlckVtYWlsOiBzdHJpbmcpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dQcm9kdWN0KHsgcHJvZHVjdCB9OiBhbnkpIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIHsvKiA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubm9tZX0+e3Byb2R1Y3QubmFtZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmljYW99Pntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5ncmVkaWVudGVzfT57cHJvZHVjdC5pbmdyZWRpZW50c308L3A+XG4gICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbmdyZWRpZW50ZXN9PlxuICAgICAgICAgIHtBcnJheS5mcm9tKHByb2R1Y3QuaW5ncmVkaWVudHMpLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgPC9wPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnByZWNvfT5SJCB7cHJvZHVjdC5wcmljZSArIFwiLDAwXCJ9PC9oMj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJ0SWQgPSBnZXRDYXJ0SWQoc2Vzc2lvbi51c2VyLmVtYWlsKTtcbiAgICAgICAgICAgIGlmIChjb25maXJtKFwiQWRpY2lvbmFyIHByb2R1dG8gYW8gY2FycmluaG8/XCIpKSB7XG4gICAgICAgICAgICAgIHBvc3RDYXJ0UHJvZHV0KHByb2R1Y3QuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIkZhw6dhIGxvZ2luIHBhcmEgYWNlc3NhciBhZGljaW9uYXIgcHJvZHV0b3MgYW8gY2FycmluaG8hXCIpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyL2xvZ2luYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9pY29ucy9jYXJ0LnBuZ1wiXG4gICAgICAgICAgYWx0PVwiYWRkX3RvX2NhcnRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9pY29ufVxuICAgICAgICAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsInBvc3RDYXJ0UHJvZHV0IiwicHJvZHVjdElkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNhcnRJZCIsImhlYWRlcnMiLCJnZXRDYXJ0SWQiLCJ1c2VyRW1haWwiLCJTaG93UHJvZHVjdCIsInByb2R1Y3QiLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbmZvIiwiaDEiLCJub21lIiwibmFtZSIsInAiLCJkZXNjcmljYW8iLCJkZXNjcmlwdGlvbiIsImluZ3JlZGllbnRlcyIsImluZ3JlZGllbnRzIiwiaDIiLCJwcmVjbyIsInByaWNlIiwiYnV0dG9uIiwiYWN0aW9uIiwib25DbGljayIsInVzZXIiLCJlbWFpbCIsImNvbmZpcm0iLCJpZCIsImFsZXJ0IiwicHVzaCIsImltZyIsInNyYyIsImFsdCIsImFjdGlvbl9pY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ShowProduct.tsx\n"));

/***/ })

});