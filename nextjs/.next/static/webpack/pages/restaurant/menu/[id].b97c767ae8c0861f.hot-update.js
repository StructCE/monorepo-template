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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowProduct; },\n/* harmony export */   getCartId: function() { return /* binding */ getCartId; },\n/* harmony export */   postCartProdut: function() { return /* binding */ postCartProdut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Menu.module.css */ \"./src/styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AddToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AddToCart */ \"./src/components/AddToCart.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nasync function postCartProdut(props) {\n    const res = await fetch(\"http://localhost:3000/api/user/cart/product/0\", {\n        method: \"POST\",\n        body: JSON.stringify({\n            productId: props.productId,\n            cartId: props.cartId,\n            restaurantId: props.restaurantId\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (res.ok) {\n        const data = await res.json();\n        alert(JSON.stringify(data));\n    }\n}\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    const userData = await res.json();\n    return Number(userData.cart.id);\n}\nfunction ShowProduct(props) {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().tabela),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().ul),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().li),\n                        children: props.product.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().li2),\n                        children: [\n                            props.product.ingredients,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().ul),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().li),\n                        children: \"Valor\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().li2),\n                        children: [\n                            props.product.price.toFixed(2).replace(\",\", \".\"),\n                            \" R$\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddToCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        product: props.product\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(ShowProduct, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ShowProduct;\nvar _c;\n$RefreshReg$(_c, \"ShowProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaG93UHJvZHVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFFRDtBQUNMO0FBQ087QUFLeEMsZUFBZUksZUFBZUMsS0FJcEM7SUFDQyxNQUFNQyxNQUFNLE1BQU1DLE1BQU8saURBQWdEO1FBQ3ZFQyxRQUFRO1FBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNuQkMsV0FBV1AsTUFBTU8sU0FBUztZQUMxQkMsUUFBUVIsTUFBTVEsTUFBTTtZQUNwQkMsY0FBY1QsTUFBTVMsWUFBWTtRQUNsQztRQUNBQyxTQUFTO1lBQUUsZ0JBQWdCO1FBQW1CO0lBQ2hEO0lBRUEsSUFBSVQsSUFBSVUsRUFBRSxFQUFFO1FBQ1YsTUFBTUMsT0FBTyxNQUFNWCxJQUFJWSxJQUFJO1FBQzNCQyxNQUFNVCxLQUFLQyxTQUFTLENBQUNNO0lBQ3ZCO0FBQ0Y7QUFFTyxlQUFlRyxVQUFVQyxTQUFpQjtJQUMvQyxNQUFNZixNQUFNLE1BQU1DLE1BQU0sa0NBQTRDLE9BQVZjLFlBQWE7UUFDckViLFFBQVE7SUFDVjtJQUNBLE1BQU1jLFdBQVcsTUFBTWhCLElBQUlZLElBQUk7SUFDL0IsT0FBT0ssT0FBT0QsU0FBU0UsSUFBSSxDQUFDQyxFQUFFO0FBQ2hDO0FBRWUsU0FBU0MsWUFBWXJCLEtBR25DOztJQUNDLE1BQU0sRUFBRVksTUFBTVUsT0FBTyxFQUFFLEdBQUcxQiwyREFBVUE7SUFDcEMsTUFBTTJCLFNBQVMxQixzREFBU0E7SUFFeEIscUJBQ0UsOERBQUMyQjtRQUFJQyxXQUFXOUIsdUVBQWE7OzBCQUMzQiw4REFBQ2dDO2dCQUFHRixXQUFXOUIsbUVBQVM7O2tDQUN0Qiw4REFBQ2lDO3dCQUFHSCxXQUFXOUIsbUVBQVM7a0NBQUdLLE1BQU02QixPQUFPLENBQUNDLElBQUk7Ozs7OztrQ0FDN0MsOERBQUNGO3dCQUFHSCxXQUFXOUIsb0VBQVU7OzRCQUFHSyxNQUFNNkIsT0FBTyxDQUFDRyxXQUFXOzRCQUFDOzs7Ozs7Ozs7Ozs7OzBCQUV4RCw4REFBQ0w7Z0JBQUdGLFdBQVc5QixtRUFBUzs7a0NBQ3RCLDhEQUFDaUM7d0JBQUdILFdBQVc5QixtRUFBUztrQ0FBRTs7Ozs7O2tDQUMxQiw4REFBQ2lDO3dCQUFHSCxXQUFXOUIsb0VBQVU7OzRCQUN0QkssTUFBTTZCLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDQyxPQUFPLENBQUMsR0FBR0MsT0FBTyxDQUFDLEtBQUs7NEJBQUs7Ozs7Ozs7a0NBRXBELDhEQUFDckMsNkRBQVNBO3dCQUFDK0IsU0FBUzdCLE1BQU02QixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekM7R0F0QndCUjs7UUFJSXpCLHVEQUFVQTtRQUNyQkMsa0RBQVNBOzs7S0FMRndCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Nob3dQcm9kdWN0LnRzeD8xNzkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL01lbnUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gXCJAL2NvbXBvbmVudHMvQWRkVG9DYXJ0XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGNhcnJpbmhvIGZyb20gXCIvcHVibGljL2ltYWdlcy9jYXJyaW5oby5wbmdcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RDYXJ0UHJvZHV0KHByb3BzOiB7XG4gIHByb2R1Y3RJZDogbnVtYmVyO1xuICBjYXJ0SWQ6IG51bWJlcjtcbiAgcmVzdGF1cmFudElkOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvY2FydC9wcm9kdWN0LzBgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBwcm9kdWN0SWQ6IHByb3BzLnByb2R1Y3RJZCxcbiAgICAgIGNhcnRJZDogcHJvcHMuY2FydElkLFxuICAgICAgcmVzdGF1cmFudElkOiBwcm9wcy5yZXN0YXVyYW50SWQsXG4gICAgfSksXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICB9KTtcblxuICBpZiAocmVzLm9rKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJ0SWQodXNlckVtYWlsOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci8ke3VzZXJFbWFpbH1gLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICB9KTtcbiAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gTnVtYmVyKHVzZXJEYXRhLmNhcnQuaWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93UHJvZHVjdChwcm9wczoge1xuICBwcm9kdWN0OiBQcm9kdWN0O1xuICByZXN0YXVyYW50SWQ6IG51bWJlcjtcbn0pIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJlbGF9PlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnVsfT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpfT57cHJvcHMucHJvZHVjdC5uYW1lfTwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saTJ9Pntwcm9wcy5wcm9kdWN0LmluZ3JlZGllbnRzfSA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy51bH0+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saX0+VmFsb3I8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGkyfT5cbiAgICAgICAgICB7cHJvcHMucHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpLnJlcGxhY2UoXCIsXCIsIFwiLlwiKX0gUiRcbiAgICAgICAgPC9saT5cbiAgICAgICAgPEFkZFRvQ2FydCBwcm9kdWN0PXtwcm9wcy5wcm9kdWN0fS8+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJBZGRUb0NhcnQiLCJwb3N0Q2FydFByb2R1dCIsInByb3BzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2R1Y3RJZCIsImNhcnRJZCIsInJlc3RhdXJhbnRJZCIsImhlYWRlcnMiLCJvayIsImRhdGEiLCJqc29uIiwiYWxlcnQiLCJnZXRDYXJ0SWQiLCJ1c2VyRW1haWwiLCJ1c2VyRGF0YSIsIk51bWJlciIsImNhcnQiLCJpZCIsIlNob3dQcm9kdWN0Iiwic2Vzc2lvbiIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsInRhYmVsYSIsInVsIiwibGkiLCJwcm9kdWN0IiwibmFtZSIsImxpMiIsImluZ3JlZGllbnRzIiwicHJpY2UiLCJ0b0ZpeGVkIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ShowProduct.tsx\n"));

/***/ })

});