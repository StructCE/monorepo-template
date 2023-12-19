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

/***/ "./src/components/AddToCart.tsx":
/*!**************************************!*\
  !*** ./src/components/AddToCart.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddToCart; },\n/* harmony export */   getCartId: function() { return /* binding */ getCartId; },\n/* harmony export */   postCartProdut: function() { return /* binding */ postCartProdut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Menu.module.css */ \"./src/styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nasync function postCartProdut(props) {\n    const res = await fetch(\"http://localhost:3000/api/user/cart/product/0\", {\n        method: \"POST\",\n        body: JSON.stringify({\n            productId: props.productId,\n            cartId: props.cartId,\n            restaurantId: props.restaurantId\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (res.ok) {\n        const data = await res.json();\n        alert(JSON.stringify(data));\n    }\n}\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    const userData = await res.json();\n    return Number(userData.cart.id);\n}\nfunction AddToCart(props) {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default().action),\n        onClick: async ()=>{\n            if (session && session.user) {\n                const productId = props.product.id;\n                const restaurantId = props.restaurantId;\n                const cartId = Number(await getCartId(String(session.user.email)));\n                if (confirm(\"Adicionar produto ao carrinho?\")) {\n                    postCartProdut({\n                        cartId: cartId,\n                        productId: productId,\n                        restaurantId: restaurantId\n                    });\n                }\n            } else {\n                alert(\"Fa\\xe7a login para acessar adicionar produtos ao carrinho!\");\n                router.push(\"/api/auth/signin\");\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/images/icons/cart.png\",\n            alt: \"add_to_cart\",\n            className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default().action_icon)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/AddToCart.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/AddToCart.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(AddToCart, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddToCart;\nvar _c;\n$RefreshReg$(_c, \"AddToCart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRUb0NhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFFRDtBQUNMO0FBSWpDLGVBQWVHLGVBQWVDLEtBSXBDO0lBQ0MsTUFBTUMsTUFBTSxNQUFNQyxNQUFPLGlEQUFnRDtRQUN2RUMsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDbkJDLFdBQVdQLE1BQU1PLFNBQVM7WUFDMUJDLFFBQVFSLE1BQU1RLE1BQU07WUFDcEJDLGNBQWNULE1BQU1TLFlBQVk7UUFDbEM7UUFDQUMsU0FBUztZQUFFLGdCQUFnQjtRQUFtQjtJQUNoRDtJQUVBLElBQUlULElBQUlVLEVBQUUsRUFBRTtRQUNWLE1BQU1DLE9BQU8sTUFBTVgsSUFBSVksSUFBSTtRQUMzQkMsTUFBTVQsS0FBS0MsU0FBUyxDQUFDTTtJQUN2QjtBQUNGO0FBRU8sZUFBZUcsVUFBVUMsU0FBaUI7SUFDL0MsTUFBTWYsTUFBTSxNQUFNQyxNQUFNLGtDQUE0QyxPQUFWYyxZQUFhO1FBQ3JFYixRQUFRO0lBQ1Y7SUFDQSxNQUFNYyxXQUFXLE1BQU1oQixJQUFJWSxJQUFJO0lBQy9CLE9BQU9LLE9BQU9ELFNBQVNFLElBQUksQ0FBQ0MsRUFBRTtBQUNoQztBQUVlLFNBQVNDLFVBQVVyQixLQUdqQzs7SUFDQyxNQUFNLEVBQUVZLE1BQU1VLE9BQU8sRUFBRSxHQUFHekIsMkRBQVVBO0lBQ3BDLE1BQU0wQixTQUFTekIsc0RBQVNBO0lBRXhCLHFCQUNFLDhEQUFDMEI7UUFDQ0MsV0FBVzdCLHVFQUFhO1FBQ3hCK0IsU0FBUztZQUNQLElBQUlMLFdBQVdBLFFBQVFNLElBQUksRUFBRTtnQkFDM0IsTUFBTXJCLFlBQVlQLE1BQU02QixPQUFPLENBQUNULEVBQUU7Z0JBQ2xDLE1BQU1YLGVBQWVULE1BQU1TLFlBQVk7Z0JBQ3ZDLE1BQU1ELFNBQVNVLE9BQU8sTUFBTUgsVUFBVWUsT0FBT1IsUUFBUU0sSUFBSSxDQUFDRyxLQUFLO2dCQUMvRCxJQUFJQyxRQUFRLG1DQUFtQztvQkFDN0NqQyxlQUFlO3dCQUNiUyxRQUFRQTt3QkFDUkQsV0FBV0E7d0JBQ1hFLGNBQWNBO29CQUNoQjtnQkFDRjtZQUNGLE9BQU87Z0JBQ0xLLE1BQU07Z0JBQ05TLE9BQU9VLElBQUksQ0FBRTtZQUNmO1FBQ0Y7a0JBRUEsNEVBQUNDO1lBQ0NDLEtBQUk7WUFDSkMsS0FBSTtZQUNKWCxXQUFXN0IsNEVBQWtCOzs7Ozs7Ozs7OztBQUlyQztHQW5Dd0J5Qjs7UUFJSXhCLHVEQUFVQTtRQUNyQkMsa0RBQVNBOzs7S0FMRnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZFRvQ2FydC50c3g/MzM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9NZW51Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RDYXJ0UHJvZHV0KHByb3BzOiB7XG4gIHByb2R1Y3RJZDogbnVtYmVyO1xuICBjYXJ0SWQ6IG51bWJlcjtcbiAgcmVzdGF1cmFudElkOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvY2FydC9wcm9kdWN0LzBgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBwcm9kdWN0SWQ6IHByb3BzLnByb2R1Y3RJZCxcbiAgICAgIGNhcnRJZDogcHJvcHMuY2FydElkLFxuICAgICAgcmVzdGF1cmFudElkOiBwcm9wcy5yZXN0YXVyYW50SWQsXG4gICAgfSksXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICB9KTtcblxuICBpZiAocmVzLm9rKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJ0SWQodXNlckVtYWlsOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci8ke3VzZXJFbWFpbH1gLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICB9KTtcbiAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gTnVtYmVyKHVzZXJEYXRhLmNhcnQuaWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUb0NhcnQocHJvcHM6IHtcbiAgcHJvZHVjdDogUHJvZHVjdDtcbiAgcmVzdGF1cmFudElkOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbn1cbiAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gcHJvcHMucHJvZHVjdC5pZDtcbiAgICAgICAgICBjb25zdCByZXN0YXVyYW50SWQgPSBwcm9wcy5yZXN0YXVyYW50SWQ7XG4gICAgICAgICAgY29uc3QgY2FydElkID0gTnVtYmVyKGF3YWl0IGdldENhcnRJZChTdHJpbmcoc2Vzc2lvbi51c2VyLmVtYWlsKSkpO1xuICAgICAgICAgIGlmIChjb25maXJtKFwiQWRpY2lvbmFyIHByb2R1dG8gYW8gY2FycmluaG8/XCIpKSB7XG4gICAgICAgICAgICBwb3N0Q2FydFByb2R1dCh7XG4gICAgICAgICAgICAgIGNhcnRJZDogY2FydElkLFxuICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgcmVzdGF1cmFudElkOiByZXN0YXVyYW50SWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJGYcOnYSBsb2dpbiBwYXJhIGFjZXNzYXIgYWRpY2lvbmFyIHByb2R1dG9zIGFvIGNhcnJpbmhvIVwiKTtcbiAgICAgICAgICByb3V0ZXIucHVzaChgL2FwaS9hdXRoL3NpZ25pbmApO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiL2ltYWdlcy9pY29ucy9jYXJ0LnBuZ1wiXG4gICAgICAgIGFsdD1cImFkZF90b19jYXJ0XCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX2ljb259XG4gICAgICAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJwb3N0Q2FydFByb2R1dCIsInByb3BzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2R1Y3RJZCIsImNhcnRJZCIsInJlc3RhdXJhbnRJZCIsImhlYWRlcnMiLCJvayIsImRhdGEiLCJqc29uIiwiYWxlcnQiLCJnZXRDYXJ0SWQiLCJ1c2VyRW1haWwiLCJ1c2VyRGF0YSIsIk51bWJlciIsImNhcnQiLCJpZCIsIkFkZFRvQ2FydCIsInNlc3Npb24iLCJyb3V0ZXIiLCJidXR0b24iLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJvbkNsaWNrIiwidXNlciIsInByb2R1Y3QiLCJTdHJpbmciLCJlbWFpbCIsImNvbmZpcm0iLCJwdXNoIiwiaW1nIiwic3JjIiwiYWx0IiwiYWN0aW9uX2ljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AddToCart.tsx\n"));

/***/ })

});