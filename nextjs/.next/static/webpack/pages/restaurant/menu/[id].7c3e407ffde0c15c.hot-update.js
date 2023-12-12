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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/ShowProduct.module.css */ \"./src/styles/ShowProduct.module.css\");\n/* harmony import */ var _styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nasync function postCartProdut(productId) {\n    const res = await fetch(\"http://localhost:3000/api/user/cart/product/\".concat(productId), {\n        method: \"POST\",\n        body: JSON.stringify({\n            cartId: 1\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    const userData = await res.json();\n    return userData.cart.id;\n}\nfunction ShowProduct(param) {\n    let { product } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().nome),\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().descricao),\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredientes),\n                        children: product.ingredients\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().preco),\n                children: [\n                    \"R$ \",\n                    product.price + \",00\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().action),\n                onClick: ()=>{\n                    if (session && session.user) {\n                        const cartId = getCartId(session.user.email);\n                        if (confirm(\"Adicionar produto ao carrinho?\")) {\n                            postCartProdut(product.id);\n                        }\n                    } else {\n                        alert(\"Fa\\xe7a login para acessar adicionar produtos ao carrinho!\");\n                        router.push(\"/user/login\");\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/icons/cart.png\",\n                    alt: \"add_to_cart\",\n                    className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().action_icon)\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(ShowProduct, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ShowProduct;\nvar _c;\n$RefreshReg$(_c, \"ShowProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaG93UHJvZHVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDUjtBQUNMO0FBRXhDLGVBQWVHLGVBQWVDLFNBQWM7SUFDMUMsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQiwrQ0FBeUQsT0FBVkYsWUFDL0M7UUFDRUcsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsUUFBUTtRQUFFO1FBQ2pDQyxTQUFTO1lBQUUsZ0JBQWdCO1FBQW1CO0lBQ2hEO0FBRUo7QUFFQSxlQUFlQyxVQUFVQyxTQUFpQjtJQUN4QyxNQUFNVCxNQUFNLE1BQU1DLE1BQ2hCLGtDQUE0QyxPQUFWUSxZQUNsQztRQUFFUCxRQUFRO0lBQU07SUFFbEIsTUFBTVEsV0FBVyxNQUFNVixJQUFJVyxJQUFJO0lBQy9CLE9BQU9ELFNBQVNFLElBQUksQ0FBQ0MsRUFBRTtBQUN6QjtBQUVlLFNBQVNDLFlBQVksS0FBZ0I7UUFBaEIsRUFBRUMsT0FBTyxFQUFPLEdBQWhCOztJQUNsQyxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHckIsMkRBQVVBO0lBQ3BDLE1BQU1zQixTQUFTckIsc0RBQVNBO0lBRXhCLHFCQUNFLDhEQUFDc0I7UUFBSUMsV0FBV3pCLDRFQUFXOzswQkFFekIsOERBQUN3QjtnQkFBSUMsV0FBV3pCLDRFQUFXOztrQ0FDekIsOERBQUM0Qjt3QkFBR0gsV0FBV3pCLDRFQUFXO2tDQUFHb0IsUUFBUVUsSUFBSTs7Ozs7O2tDQUN6Qyw4REFBQ0M7d0JBQUVOLFdBQVd6QixpRkFBZ0I7a0NBQUdvQixRQUFRYSxXQUFXOzs7Ozs7a0NBQ3BELDhEQUFDRjt3QkFBRU4sV0FBV3pCLG9GQUFtQjtrQ0FBR29CLFFBQVFlLFdBQVc7Ozs7Ozs7Ozs7OzswQkFLekQsOERBQUNDO2dCQUFHWCxXQUFXekIsNkVBQVk7O29CQUFFO29CQUFJb0IsUUFBUWtCLEtBQUssR0FBRzs7Ozs7OzswQkFDakQsOERBQUNDO2dCQUNDZCxXQUFXekIsOEVBQWE7Z0JBQ3hCeUMsU0FBUztvQkFDUCxJQUFJbkIsV0FBV0EsUUFBUW9CLElBQUksRUFBRTt3QkFDM0IsTUFBTS9CLFNBQVNFLFVBQVVTLFFBQVFvQixJQUFJLENBQUNDLEtBQUs7d0JBQzNDLElBQUlDLFFBQVEsbUNBQW1DOzRCQUM3Q3pDLGVBQWVpQixRQUFRRixFQUFFO3dCQUMzQjtvQkFDRixPQUFPO3dCQUNMMkIsTUFBTTt3QkFDTnRCLE9BQU91QixJQUFJLENBQUU7b0JBQ2Y7Z0JBQ0Y7MEJBRUEsNEVBQUNDO29CQUNDQyxLQUFJO29CQUNKQyxLQUFJO29CQUNKeEIsV0FBV3pCLG1GQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkM7R0F0Q3dCbUI7O1FBQ0lsQix1REFBVUE7UUFDckJDLGtEQUFTQTs7O0tBRkZpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaG93UHJvZHVjdC50c3g/MTc5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9TaG93UHJvZHVjdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RDYXJ0UHJvZHV0KHByb2R1Y3RJZDogYW55KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvY2FydC9wcm9kdWN0LyR7cHJvZHVjdElkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2FydElkOiAxIH0pLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIH1cbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2FydElkKHVzZXJFbWFpbDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvJHt1c2VyRW1haWx9YCxcbiAgICB7IG1ldGhvZDogXCJHRVRcIiB9XG4gICk7XG4gIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4gdXNlckRhdGEuY2FydC5pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93UHJvZHVjdCh7IHByb2R1Y3QgfTogYW55KSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICB7LyogPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC5uYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm5vbWV9Pntwcm9kdWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpY2FvfT57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmluZ3JlZGllbnRlc30+e3Byb2R1Y3QuaW5ncmVkaWVudHN9PC9wPlxuICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5ncmVkaWVudGVzfT5cbiAgICAgICAgICB7QXJyYXkuZnJvbShwcm9kdWN0LmluZ3JlZGllbnRzKS5qb2luKFwiLCBcIil9XG4gICAgICAgIDwvcD4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5wcmVjb30+UiQge3Byb2R1Y3QucHJpY2UgKyBcIiwwMFwifTwvaDI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24udXNlcikge1xuICAgICAgICAgICAgY29uc3QgY2FydElkID0gZ2V0Q2FydElkKHNlc3Npb24udXNlci5lbWFpbCk7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkFkaWNpb25hciBwcm9kdXRvIGFvIGNhcnJpbmhvP1wiKSkge1xuICAgICAgICAgICAgICBwb3N0Q2FydFByb2R1dChwcm9kdWN0LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJGYcOnYSBsb2dpbiBwYXJhIGFjZXNzYXIgYWRpY2lvbmFyIHByb2R1dG9zIGFvIGNhcnJpbmhvIVwiKTtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlci9sb2dpbmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaWNvbnMvY2FydC5wbmdcIlxuICAgICAgICAgIGFsdD1cImFkZF90b19jYXJ0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25faWNvbn1cbiAgICAgICAgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJwb3N0Q2FydFByb2R1dCIsInByb2R1Y3RJZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXJ0SWQiLCJoZWFkZXJzIiwiZ2V0Q2FydElkIiwidXNlckVtYWlsIiwidXNlckRhdGEiLCJqc29uIiwiY2FydCIsImlkIiwiU2hvd1Byb2R1Y3QiLCJwcm9kdWN0IiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiaW5mbyIsImgxIiwibm9tZSIsIm5hbWUiLCJwIiwiZGVzY3JpY2FvIiwiZGVzY3JpcHRpb24iLCJpbmdyZWRpZW50ZXMiLCJpbmdyZWRpZW50cyIsImgyIiwicHJlY28iLCJwcmljZSIsImJ1dHRvbiIsImFjdGlvbiIsIm9uQ2xpY2siLCJ1c2VyIiwiZW1haWwiLCJjb25maXJtIiwiYWxlcnQiLCJwdXNoIiwiaW1nIiwic3JjIiwiYWx0IiwiYWN0aW9uX2ljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ShowProduct.tsx\n"));

/***/ })

});