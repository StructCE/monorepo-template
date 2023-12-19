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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddToCart; },\n/* harmony export */   getCartId: function() { return /* binding */ getCartId; },\n/* harmony export */   postCartProdut: function() { return /* binding */ postCartProdut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Menu.module.css */ \"./src/styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types/types */ \"./src/types/types.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nasync function postCartProdut(props) {\n    const res = await fetch(\"http://localhost:3000/api/user/cart/product/0\", {\n        method: \"POST\",\n        body: JSON.stringify({\n            productId: props.productId,\n            cartId: props.cartId,\n            restaurantId: props.restaurantId\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (res.ok) {\n        const data = await res.json();\n        alert(JSON.stringify(data));\n    }\n}\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    let user = _types_types__WEBPACK_IMPORTED_MODULE_1__.defaultUser;\n    if (res.ok) user = await res.json();\n    const cartId = Number(user.cart.id) || 0;\n    return Number(user.cart.id || 0);\n}\nfunction AddToCart(props) {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().action),\n        onClick: async ()=>{\n            if (session && session.user) {\n                const productId = props.product.id;\n                const restaurantId = props.restaurantId;\n                const cartId = Number(await getCartId(String(session.user.email)));\n                if (confirm(\"Adicionar produto ao carrinho?\")) {\n                    postCartProdut({\n                        cartId: cartId,\n                        productId: productId,\n                        restaurantId: restaurantId\n                    });\n                }\n            } else {\n                alert(\"Fa\\xe7a login para acessar adicionar produtos ao carrinho!\");\n                router.push(\"/api/auth/signin\");\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/images/icons/cart.png\",\n            alt: \"add_to_cart\",\n            className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().action_icon)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/AddToCart.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/AddToCart.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(AddToCart, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AddToCart;\nvar _c;\n$RefreshReg$(_c, \"AddToCart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRUb0NhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ087QUFDUjtBQUNMO0FBRWpDLGVBQWVJLGVBQWVDLEtBSXBDO0lBQ0MsTUFBTUMsTUFBTSxNQUFNQyxNQUFPLGlEQUFnRDtRQUN2RUMsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDbkJDLFdBQVdQLE1BQU1PLFNBQVM7WUFDMUJDLFFBQVFSLE1BQU1RLE1BQU07WUFDcEJDLGNBQWNULE1BQU1TLFlBQVk7UUFDbEM7UUFDQUMsU0FBUztZQUFFLGdCQUFnQjtRQUFtQjtJQUNoRDtJQUVBLElBQUlULElBQUlVLEVBQUUsRUFBRTtRQUNWLE1BQU1DLE9BQU8sTUFBTVgsSUFBSVksSUFBSTtRQUMzQkMsTUFBTVQsS0FBS0MsU0FBUyxDQUFDTTtJQUN2QjtBQUNGO0FBRU8sZUFBZUcsVUFBVUMsU0FBaUI7SUFDL0MsTUFBTWYsTUFBTSxNQUFNQyxNQUFNLGtDQUE0QyxPQUFWYyxZQUFhO1FBQ3JFYixRQUFRO0lBQ1Y7SUFFQSxJQUFJYyxPQUFPckIscURBQVdBO0lBQ3RCLElBQUlLLElBQUlVLEVBQUUsRUFDUk0sT0FBTyxNQUFNaEIsSUFBSVksSUFBSTtJQUN2QixNQUFNTCxTQUFTVSxPQUFPRCxLQUFLRSxJQUFJLENBQUNDLEVBQUUsS0FBSztJQUN2QyxPQUFPRixPQUFPRCxLQUFLRSxJQUFJLENBQUNDLEVBQUUsSUFBSTtBQUNoQztBQUVlLFNBQVNDLFVBQVVyQixLQUdqQzs7SUFDQyxNQUFNLEVBQUVZLE1BQU1VLE9BQU8sRUFBRSxHQUFHekIsMkRBQVVBO0lBQ3BDLE1BQU0wQixTQUFTekIsc0RBQVNBO0lBRXhCLHFCQUNFLDhEQUFDMEI7UUFDQ0MsV0FBVzlCLHVFQUFhO1FBQ3hCZ0MsU0FBUztZQUNQLElBQUlMLFdBQVdBLFFBQVFMLElBQUksRUFBRTtnQkFDM0IsTUFBTVYsWUFBWVAsTUFBTTRCLE9BQU8sQ0FBQ1IsRUFBRTtnQkFDbEMsTUFBTVgsZUFBZVQsTUFBTVMsWUFBWTtnQkFDdkMsTUFBTUQsU0FBU1UsT0FBTyxNQUFNSCxVQUFVYyxPQUFPUCxRQUFRTCxJQUFJLENBQUNhLEtBQUs7Z0JBQy9ELElBQUlDLFFBQVEsbUNBQW1DO29CQUM3Q2hDLGVBQWU7d0JBQ2JTLFFBQVFBO3dCQUNSRCxXQUFXQTt3QkFDWEUsY0FBY0E7b0JBQ2hCO2dCQUNGO1lBQ0YsT0FBTztnQkFDTEssTUFBTTtnQkFDTlMsT0FBT1MsSUFBSSxDQUFFO1lBQ2Y7UUFDRjtrQkFFQSw0RUFBQ0M7WUFDQ0MsS0FBSTtZQUNKQyxLQUFJO1lBQ0pWLFdBQVc5Qiw0RUFBa0I7Ozs7Ozs7Ozs7O0FBSXJDO0dBbkN3QjBCOztRQUlJeEIsdURBQVVBO1FBQ3JCQyxrREFBU0E7OztLQUxGdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkVG9DYXJ0LnRzeD8zMzZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL01lbnUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUHJvZHVjdCwgZGVmYXVsdFVzZXIgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdENhcnRQcm9kdXQocHJvcHM6IHtcbiAgcHJvZHVjdElkOiBudW1iZXI7XG4gIGNhcnRJZDogbnVtYmVyO1xuICByZXN0YXVyYW50SWQ6IG51bWJlcjtcbn0pIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci9jYXJ0L3Byb2R1Y3QvMGAsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHByb2R1Y3RJZDogcHJvcHMucHJvZHVjdElkLFxuICAgICAgY2FydElkOiBwcm9wcy5jYXJ0SWQsXG4gICAgICByZXN0YXVyYW50SWQ6IHByb3BzLnJlc3RhdXJhbnRJZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gIH0pO1xuXG4gIGlmIChyZXMub2spIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBhbGVydChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcnRJZCh1c2VyRW1haWw6IHN0cmluZykge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyLyR7dXNlckVtYWlsfWAsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gIH0pO1xuXG4gIGxldCB1c2VyID0gZGVmYXVsdFVzZXJcbiAgaWYgKHJlcy5vaylcbiAgICB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgY2FydElkID0gTnVtYmVyKHVzZXIuY2FydC5pZCkgfHwgMCBcbiAgcmV0dXJuIE51bWJlcih1c2VyLmNhcnQuaWQgfHwgMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRvQ2FydChwcm9wczoge1xuICBwcm9kdWN0OiBQcm9kdWN0O1xuICByZXN0YXVyYW50SWQ6IG51bWJlcjtcbn0pIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9ufVxuICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBwcm9wcy5wcm9kdWN0LmlkO1xuICAgICAgICAgIGNvbnN0IHJlc3RhdXJhbnRJZCA9IHByb3BzLnJlc3RhdXJhbnRJZDtcbiAgICAgICAgICBjb25zdCBjYXJ0SWQgPSBOdW1iZXIoYXdhaXQgZ2V0Q2FydElkKFN0cmluZyhzZXNzaW9uLnVzZXIuZW1haWwpKSk7XG4gICAgICAgICAgaWYgKGNvbmZpcm0oXCJBZGljaW9uYXIgcHJvZHV0byBhbyBjYXJyaW5obz9cIikpIHtcbiAgICAgICAgICAgIHBvc3RDYXJ0UHJvZHV0KHtcbiAgICAgICAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdElkLFxuICAgICAgICAgICAgICByZXN0YXVyYW50SWQ6IHJlc3RhdXJhbnRJZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIkZhw6dhIGxvZ2luIHBhcmEgYWNlc3NhciBhZGljaW9uYXIgcHJvZHV0b3MgYW8gY2FycmluaG8hXCIpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKGAvYXBpL2F1dGgvc2lnbmluYCk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIvaW1hZ2VzL2ljb25zL2NhcnQucG5nXCJcbiAgICAgICAgYWx0PVwiYWRkX3RvX2NhcnRcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25faWNvbn1cbiAgICAgIC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiZGVmYXVsdFVzZXIiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwicG9zdENhcnRQcm9kdXQiLCJwcm9wcyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9kdWN0SWQiLCJjYXJ0SWQiLCJyZXN0YXVyYW50SWQiLCJoZWFkZXJzIiwib2siLCJkYXRhIiwianNvbiIsImFsZXJ0IiwiZ2V0Q2FydElkIiwidXNlckVtYWlsIiwidXNlciIsIk51bWJlciIsImNhcnQiLCJpZCIsIkFkZFRvQ2FydCIsInNlc3Npb24iLCJyb3V0ZXIiLCJidXR0b24iLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJvbkNsaWNrIiwicHJvZHVjdCIsIlN0cmluZyIsImVtYWlsIiwiY29uZmlybSIsInB1c2giLCJpbWciLCJzcmMiLCJhbHQiLCJhY3Rpb25faWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AddToCart.tsx\n"));

/***/ })

});