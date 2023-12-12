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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/ShowProduct.module.css */ \"./src/styles/ShowProduct.module.css\");\n/* harmony import */ var _styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nasync function postCartProdut(productId, cartId) {\n    const res = await fetch(\"http://localhost:3000/api/user/cart/product/\".concat(productId), {\n        method: \"POST\",\n        body: JSON.stringify({\n            cartId: cartId\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    const userData = await res.json();\n    return userData.cart.id;\n}\nfunction ShowProduct(param) {\n    let { product } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().nome),\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().descricao),\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().ingredientes),\n                        children: product.ingredients\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().preco),\n                children: [\n                    \"R$ \",\n                    product.price + \",00\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().action),\n                onClick: ()=>{\n                    if (session && session.user) {\n                        const cartId = getCartId(session.user.email);\n                        if (confirm(\"Adicionar produto ao carrinho?\")) {\n                            postCartProdut(product.id);\n                        }\n                    } else {\n                        alert(\"Fa\\xe7a login para acessar adicionar produtos ao carrinho!\");\n                        router.push(\"/user/login\");\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/icons/cart.png\",\n                    alt: \"add_to_cart\",\n                    className: (_styles_ShowProduct_module_css__WEBPACK_IMPORTED_MODULE_3___default().action_icon)\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(ShowProduct, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ShowProduct;\nvar _c;\n$RefreshReg$(_c, \"ShowProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaG93UHJvZHVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDUjtBQUNMO0FBRXhDLGVBQWVHLGVBQWVDLFNBQWlCLEVBQUVDLE1BQWM7SUFDN0QsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQiwrQ0FBeUQsT0FBVkgsWUFDL0M7UUFDRUksUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFBRU4sUUFBUUE7UUFBTztRQUN0Q08sU0FBUztZQUFFLGdCQUFnQjtRQUFtQjtJQUNoRDtBQUVKO0FBRUEsZUFBZUMsVUFBVUMsU0FBaUI7SUFDeEMsTUFBTVIsTUFBTSxNQUFNQyxNQUFNLGtDQUE0QyxPQUFWTyxZQUFhO1FBQ3JFTixRQUFRO0lBQ1Y7SUFDQSxNQUFNTyxXQUFXLE1BQU1ULElBQUlVLElBQUk7SUFDL0IsT0FBT0QsU0FBU0UsSUFBSSxDQUFDQyxFQUFFO0FBQ3pCO0FBRWUsU0FBU0MsWUFBWSxLQUFnQjtRQUFoQixFQUFFQyxPQUFPLEVBQU8sR0FBaEI7O0lBQ2xDLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdyQiwyREFBVUE7SUFDcEMsTUFBTXNCLFNBQVNyQixzREFBU0E7SUFFeEIscUJBQ0UsOERBQUNzQjtRQUFJQyxXQUFXekIsNEVBQVc7OzBCQUV6Qiw4REFBQ3dCO2dCQUFJQyxXQUFXekIsNEVBQVc7O2tDQUN6Qiw4REFBQzRCO3dCQUFHSCxXQUFXekIsNEVBQVc7a0NBQUdvQixRQUFRVSxJQUFJOzs7Ozs7a0NBQ3pDLDhEQUFDQzt3QkFBRU4sV0FBV3pCLGlGQUFnQjtrQ0FBR29CLFFBQVFhLFdBQVc7Ozs7OztrQ0FDcEQsOERBQUNGO3dCQUFFTixXQUFXekIsb0ZBQW1CO2tDQUFHb0IsUUFBUWUsV0FBVzs7Ozs7Ozs7Ozs7OzBCQUt6RCw4REFBQ0M7Z0JBQUdYLFdBQVd6Qiw2RUFBWTs7b0JBQUU7b0JBQUlvQixRQUFRa0IsS0FBSyxHQUFHOzs7Ozs7OzBCQUNqRCw4REFBQ0M7Z0JBQ0NkLFdBQVd6Qiw4RUFBYTtnQkFDeEJ5QyxTQUFTO29CQUNQLElBQUluQixXQUFXQSxRQUFRb0IsSUFBSSxFQUFFO3dCQUMzQixNQUFNckMsU0FBU1EsVUFBVVMsUUFBUW9CLElBQUksQ0FBQ0MsS0FBSzt3QkFDM0MsSUFBSUMsUUFBUSxtQ0FBbUM7NEJBQzdDekMsZUFBZWlCLFFBQVFGLEVBQUU7d0JBQzNCO29CQUNGLE9BQU87d0JBQ0wyQixNQUFNO3dCQUNOdEIsT0FBT3VCLElBQUksQ0FBRTtvQkFDZjtnQkFDRjswQkFFQSw0RUFBQ0M7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0p4QixXQUFXekIsbUZBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QztHQXRDd0JtQjs7UUFDSWxCLHVEQUFVQTtRQUNyQkMsa0RBQVNBOzs7S0FGRmlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Nob3dQcm9kdWN0LnRzeD8xNzkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1Nob3dQcm9kdWN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuYXN5bmMgZnVuY3Rpb24gcG9zdENhcnRQcm9kdXQocHJvZHVjdElkOiBudW1iZXIsIGNhcnRJZDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvY2FydC9wcm9kdWN0LyR7cHJvZHVjdElkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2FydElkOiBjYXJ0SWQgfSksXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgfVxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDYXJ0SWQodXNlckVtYWlsOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci8ke3VzZXJFbWFpbH1gLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICB9KTtcbiAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gdXNlckRhdGEuY2FydC5pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd1Byb2R1Y3QoeyBwcm9kdWN0IH06IGFueSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgey8qIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5ub21lfT57cHJvZHVjdC5uYW1lfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaWNhb30+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbmdyZWRpZW50ZXN9Pntwcm9kdWN0LmluZ3JlZGllbnRzfTwvcD5cbiAgICAgICAgey8qIDxwIGNsYXNzTmFtZT17c3R5bGVzLmluZ3JlZGllbnRlc30+XG4gICAgICAgICAge0FycmF5LmZyb20ocHJvZHVjdC5pbmdyZWRpZW50cykuam9pbihcIiwgXCIpfVxuICAgICAgICA8L3A+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucHJlY299PlIkIHtwcm9kdWN0LnByaWNlICsgXCIsMDBcIn08L2gyPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb259XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcnRJZCA9IGdldENhcnRJZChzZXNzaW9uLnVzZXIuZW1haWwpO1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJBZGljaW9uYXIgcHJvZHV0byBhbyBjYXJyaW5obz9cIikpIHtcbiAgICAgICAgICAgICAgcG9zdENhcnRQcm9kdXQocHJvZHVjdC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRmHDp2EgbG9naW4gcGFyYSBhY2Vzc2FyIGFkaWNpb25hciBwcm9kdXRvcyBhbyBjYXJyaW5obyFcIik7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL3VzZXIvbG9naW5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ljb25zL2NhcnQucG5nXCJcbiAgICAgICAgICBhbHQ9XCJhZGRfdG9fY2FydFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX2ljb259XG4gICAgICAgIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwicG9zdENhcnRQcm9kdXQiLCJwcm9kdWN0SWQiLCJjYXJ0SWQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImdldENhcnRJZCIsInVzZXJFbWFpbCIsInVzZXJEYXRhIiwianNvbiIsImNhcnQiLCJpZCIsIlNob3dQcm9kdWN0IiwicHJvZHVjdCIsImRhdGEiLCJzZXNzaW9uIiwicm91dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImluZm8iLCJoMSIsIm5vbWUiLCJuYW1lIiwicCIsImRlc2NyaWNhbyIsImRlc2NyaXB0aW9uIiwiaW5ncmVkaWVudGVzIiwiaW5ncmVkaWVudHMiLCJoMiIsInByZWNvIiwicHJpY2UiLCJidXR0b24iLCJhY3Rpb24iLCJvbkNsaWNrIiwidXNlciIsImVtYWlsIiwiY29uZmlybSIsImFsZXJ0IiwicHVzaCIsImltZyIsInNyYyIsImFsdCIsImFjdGlvbl9pY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ShowProduct.tsx\n"));

/***/ })

});