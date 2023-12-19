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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddToCart; },\n/* harmony export */   getCartId: function() { return /* binding */ getCartId; },\n/* harmony export */   postCartProdut: function() { return /* binding */ postCartProdut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Menu.module.css */ \"./src/styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types/types */ \"./src/types/types.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nasync function postCartProdut(props) {\n    const res = await fetch(\"http://localhost:3000/api/user/cart/product/0\", {\n        method: \"POST\",\n        body: JSON.stringify({\n            productId: props.productId,\n            cartId: props.cartId,\n            restaurantId: props.restaurantId\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (res.ok) {\n        const data = await res.json();\n        alert(JSON.stringify(data));\n    }\n}\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    let user = _types_types__WEBPACK_IMPORTED_MODULE_1__.defaultUser;\n    if (res.ok) user = await res.json();\n    if (user && user.cart) {\n        Number(user.cart.id);\n        return console.log(user);\n    } else return 0;\n}\nfunction AddToCart(props) {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().action),\n        onClick: async ()=>{\n            if (session && session.user) {\n                const productId = props.product.id;\n                const restaurantId = props.restaurantId;\n                const cartId = Number(await getCartId(String(session.user.email)));\n                if (confirm(\"Adicionar produto ao carrinho?\")) {\n                    postCartProdut({\n                        cartId: cartId,\n                        productId: productId,\n                        restaurantId: restaurantId\n                    });\n                }\n            } else {\n                alert(\"Fa\\xe7a login para acessar adicionar produtos ao carrinho!\");\n                router.push(\"/api/auth/signin\");\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/images/icons/cart.png\",\n            alt: \"add_to_cart\",\n            className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().action_icon)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/AddToCart.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/AddToCart.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(AddToCart, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AddToCart;\nvar _c;\n$RefreshReg$(_c, \"AddToCart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRUb0NhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ087QUFDUjtBQUNMO0FBRWpDLGVBQWVJLGVBQWVDLEtBSXBDO0lBQ0MsTUFBTUMsTUFBTSxNQUFNQyxNQUFPLGlEQUFnRDtRQUN2RUMsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDbkJDLFdBQVdQLE1BQU1PLFNBQVM7WUFDMUJDLFFBQVFSLE1BQU1RLE1BQU07WUFDcEJDLGNBQWNULE1BQU1TLFlBQVk7UUFDbEM7UUFDQUMsU0FBUztZQUFFLGdCQUFnQjtRQUFtQjtJQUNoRDtJQUVBLElBQUlULElBQUlVLEVBQUUsRUFBRTtRQUNWLE1BQU1DLE9BQU8sTUFBTVgsSUFBSVksSUFBSTtRQUMzQkMsTUFBTVQsS0FBS0MsU0FBUyxDQUFDTTtJQUN2QjtBQUNGO0FBRU8sZUFBZUcsVUFBVUMsU0FBaUI7SUFDL0MsTUFBTWYsTUFBTSxNQUFNQyxNQUFNLGtDQUE0QyxPQUFWYyxZQUFhO1FBQ3JFYixRQUFRO0lBQ1Y7SUFFQSxJQUFJYyxPQUFPckIscURBQVdBO0lBQ3RCLElBQUlLLElBQUlVLEVBQUUsRUFBRU0sT0FBTyxNQUFNaEIsSUFBSVksSUFBSTtJQUVqQyxJQUFJSSxRQUFRQSxLQUFLQyxJQUFJLEVBQUU7UUFDckJDLE9BQU9GLEtBQUtDLElBQUksQ0FBQ0UsRUFBRTtRQUNuQixPQUFPQyxRQUFRQyxHQUFHLENBQUNMO0lBQ3JCLE9BQU8sT0FBTztBQUNoQjtBQUVlLFNBQVNNLFVBQVV2QixLQUdqQzs7SUFDQyxNQUFNLEVBQUVZLE1BQU1ZLE9BQU8sRUFBRSxHQUFHM0IsMkRBQVVBO0lBQ3BDLE1BQU00QixTQUFTM0Isc0RBQVNBO0lBRXhCLHFCQUNFLDhEQUFDNEI7UUFDQ0MsV0FBV2hDLHVFQUFhO1FBQ3hCa0MsU0FBUztZQUNQLElBQUlMLFdBQVdBLFFBQVFQLElBQUksRUFBRTtnQkFDM0IsTUFBTVYsWUFBWVAsTUFBTThCLE9BQU8sQ0FBQ1YsRUFBRTtnQkFDbEMsTUFBTVgsZUFBZVQsTUFBTVMsWUFBWTtnQkFDdkMsTUFBTUQsU0FBU1csT0FBTyxNQUFNSixVQUFVZ0IsT0FBT1AsUUFBUVAsSUFBSSxDQUFDZSxLQUFLO2dCQUMvRCxJQUFJQyxRQUFRLG1DQUFtQztvQkFDN0NsQyxlQUFlO3dCQUNiUyxRQUFRQTt3QkFDUkQsV0FBV0E7d0JBQ1hFLGNBQWNBO29CQUNoQjtnQkFDRjtZQUNGLE9BQU87Z0JBQ0xLLE1BQU07Z0JBQ05XLE9BQU9TLElBQUksQ0FBRTtZQUNmO1FBQ0Y7a0JBRUEsNEVBQUNDO1lBQ0NDLEtBQUk7WUFDSkMsS0FBSTtZQUNKVixXQUFXaEMsNEVBQWtCOzs7Ozs7Ozs7OztBQUlyQztHQW5Dd0I0Qjs7UUFJSTFCLHVEQUFVQTtRQUNyQkMsa0RBQVNBOzs7S0FMRnlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZFRvQ2FydC50c3g/MzM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9NZW51Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFByb2R1Y3QsIGRlZmF1bHRVc2VyIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RDYXJ0UHJvZHV0KHByb3BzOiB7XG4gIHByb2R1Y3RJZDogbnVtYmVyO1xuICBjYXJ0SWQ6IG51bWJlcjtcbiAgcmVzdGF1cmFudElkOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvY2FydC9wcm9kdWN0LzBgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBwcm9kdWN0SWQ6IHByb3BzLnByb2R1Y3RJZCxcbiAgICAgIGNhcnRJZDogcHJvcHMuY2FydElkLFxuICAgICAgcmVzdGF1cmFudElkOiBwcm9wcy5yZXN0YXVyYW50SWQsXG4gICAgfSksXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICB9KTtcblxuICBpZiAocmVzLm9rKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXJ0SWQodXNlckVtYWlsOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci8ke3VzZXJFbWFpbH1gLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICB9KTtcblxuICBsZXQgdXNlciA9IGRlZmF1bHRVc2VyO1xuICBpZiAocmVzLm9rKSB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBpZiAodXNlciAmJiB1c2VyLmNhcnQpIHtcbiAgICBOdW1iZXIodXNlci5jYXJ0LmlkKTtcbiAgICByZXR1cm4gY29uc29sZS5sb2codXNlcik7XG4gIH0gZWxzZSByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVG9DYXJ0KHByb3BzOiB7XG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XG4gIHJlc3RhdXJhbnRJZDogbnVtYmVyO1xufSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb259XG4gICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24udXNlcikge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHByb3BzLnByb2R1Y3QuaWQ7XG4gICAgICAgICAgY29uc3QgcmVzdGF1cmFudElkID0gcHJvcHMucmVzdGF1cmFudElkO1xuICAgICAgICAgIGNvbnN0IGNhcnRJZCA9IE51bWJlcihhd2FpdCBnZXRDYXJ0SWQoU3RyaW5nKHNlc3Npb24udXNlci5lbWFpbCkpKTtcbiAgICAgICAgICBpZiAoY29uZmlybShcIkFkaWNpb25hciBwcm9kdXRvIGFvIGNhcnJpbmhvP1wiKSkge1xuICAgICAgICAgICAgcG9zdENhcnRQcm9kdXQoe1xuICAgICAgICAgICAgICBjYXJ0SWQ6IGNhcnRJZCxcbiAgICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0SWQsXG4gICAgICAgICAgICAgIHJlc3RhdXJhbnRJZDogcmVzdGF1cmFudElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiRmHDp2EgbG9naW4gcGFyYSBhY2Vzc2FyIGFkaWNpb25hciBwcm9kdXRvcyBhbyBjYXJyaW5obyFcIik7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC9hcGkvYXV0aC9zaWduaW5gKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvaWNvbnMvY2FydC5wbmdcIlxuICAgICAgICBhbHQ9XCJhZGRfdG9fY2FydFwiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbl9pY29ufVxuICAgICAgLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJkZWZhdWx0VXNlciIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJwb3N0Q2FydFByb2R1dCIsInByb3BzIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2R1Y3RJZCIsImNhcnRJZCIsInJlc3RhdXJhbnRJZCIsImhlYWRlcnMiLCJvayIsImRhdGEiLCJqc29uIiwiYWxlcnQiLCJnZXRDYXJ0SWQiLCJ1c2VyRW1haWwiLCJ1c2VyIiwiY2FydCIsIk51bWJlciIsImlkIiwiY29uc29sZSIsImxvZyIsIkFkZFRvQ2FydCIsInNlc3Npb24iLCJyb3V0ZXIiLCJidXR0b24iLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJvbkNsaWNrIiwicHJvZHVjdCIsIlN0cmluZyIsImVtYWlsIiwiY29uZmlybSIsInB1c2giLCJpbWciLCJzcmMiLCJhbHQiLCJhY3Rpb25faWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AddToCart.tsx\n"));

/***/ })

});