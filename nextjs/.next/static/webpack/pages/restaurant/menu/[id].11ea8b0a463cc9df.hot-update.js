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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddToCart; },\n/* harmony export */   getCartId: function() { return /* binding */ getCartId; },\n/* harmony export */   postCartProdut: function() { return /* binding */ postCartProdut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Menu.module.css */ \"./src/styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types/types */ \"./src/types/types.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nasync function postCartProdut(props) {\n    const res = await fetch(\"http://localhost:3000/api/user/cart/product/0\", {\n        method: \"POST\",\n        body: JSON.stringify({\n            productId: props.productId,\n            cartId: props.cartId,\n            restaurantId: props.restaurantId\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (res.ok) {\n        const data = await res.json();\n        alert(JSON.stringify(data));\n    }\n}\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    let user = _types_types__WEBPACK_IMPORTED_MODULE_1__.defaultUser;\n    if (res.ok) user = await res.json();\n    if (user && user.cart) {\n        console.log(user);\n        Number(user.cart.id);\n        return;\n    } else return 0;\n}\nfunction AddToCart(props) {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().action),\n        onClick: async ()=>{\n            if (session && session.user) {\n                const productId = props.product.id;\n                const restaurantId = props.restaurantId;\n                const cartId = Number(await getCartId(String(session.user.email)));\n                if (confirm(\"Adicionar produto ao carrinho?\")) {\n                    postCartProdut({\n                        cartId: cartId,\n                        productId: productId,\n                        restaurantId: restaurantId\n                    });\n                }\n            } else {\n                alert(\"Fa\\xe7a login para acessar adicionar produtos ao carrinho!\");\n                router.push(\"/api/auth/signin\");\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/images/icons/cart.png\",\n            alt: \"add_to_cart\",\n            className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().action_icon)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/AddToCart.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/AddToCart.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(AddToCart, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AddToCart;\nvar _c;\n$RefreshReg$(_c, \"AddToCart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRUb0NhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ087QUFDUjtBQUNMO0FBRWpDLGVBQWVJLGVBQWVDLEtBSXBDO0lBQ0MsTUFBTUMsTUFBTSxNQUFNQyxNQUFPLGlEQUFnRDtRQUN2RUMsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDbkJDLFdBQVdQLE1BQU1PLFNBQVM7WUFDMUJDLFFBQVFSLE1BQU1RLE1BQU07WUFDcEJDLGNBQWNULE1BQU1TLFlBQVk7UUFDbEM7UUFDQUMsU0FBUztZQUFFLGdCQUFnQjtRQUFtQjtJQUNoRDtJQUVBLElBQUlULElBQUlVLEVBQUUsRUFBRTtRQUNWLE1BQU1DLE9BQU8sTUFBTVgsSUFBSVksSUFBSTtRQUMzQkMsTUFBTVQsS0FBS0MsU0FBUyxDQUFDTTtJQUN2QjtBQUNGO0FBRU8sZUFBZUcsVUFBVUMsU0FBaUI7SUFDL0MsTUFBTWYsTUFBTSxNQUFNQyxNQUFNLGtDQUE0QyxPQUFWYyxZQUFhO1FBQ3JFYixRQUFRO0lBQ1Y7SUFFQSxJQUFJYyxPQUFPckIscURBQVdBO0lBQ3RCLElBQUlLLElBQUlVLEVBQUUsRUFBRU0sT0FBTyxNQUFNaEIsSUFBSVksSUFBSTtJQUVqQyxJQUFJSSxRQUFRQSxLQUFLQyxJQUFJLEVBQUU7UUFDckJDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWkksT0FBT0osS0FBS0MsSUFBSSxDQUFDSSxFQUFFO1FBQ25CO0lBQ0YsT0FBTyxPQUFPO0FBQ2hCO0FBRWUsU0FBU0MsVUFBVXZCLEtBR2pDOztJQUNDLE1BQU0sRUFBRVksTUFBTVksT0FBTyxFQUFFLEdBQUczQiwyREFBVUE7SUFDcEMsTUFBTTRCLFNBQVMzQixzREFBU0E7SUFFeEIscUJBQ0UsOERBQUM0QjtRQUNDQyxXQUFXaEMsdUVBQWE7UUFDeEJrQyxTQUFTO1lBQ1AsSUFBSUwsV0FBV0EsUUFBUVAsSUFBSSxFQUFFO2dCQUMzQixNQUFNVixZQUFZUCxNQUFNOEIsT0FBTyxDQUFDUixFQUFFO2dCQUNsQyxNQUFNYixlQUFlVCxNQUFNUyxZQUFZO2dCQUN2QyxNQUFNRCxTQUFTYSxPQUFPLE1BQU1OLFVBQVVnQixPQUFPUCxRQUFRUCxJQUFJLENBQUNlLEtBQUs7Z0JBQy9ELElBQUlDLFFBQVEsbUNBQW1DO29CQUM3Q2xDLGVBQWU7d0JBQ2JTLFFBQVFBO3dCQUNSRCxXQUFXQTt3QkFDWEUsY0FBY0E7b0JBQ2hCO2dCQUNGO1lBQ0YsT0FBTztnQkFDTEssTUFBTTtnQkFDTlcsT0FBT1MsSUFBSSxDQUFFO1lBQ2Y7UUFDRjtrQkFFQSw0RUFBQ0M7WUFDQ0MsS0FBSTtZQUNKQyxLQUFJO1lBQ0pWLFdBQVdoQyw0RUFBa0I7Ozs7Ozs7Ozs7O0FBSXJDO0dBbkN3QjRCOztRQUlJMUIsdURBQVVBO1FBQ3JCQyxrREFBU0E7OztLQUxGeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkVG9DYXJ0LnRzeD8zMzZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL01lbnUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUHJvZHVjdCwgZGVmYXVsdFVzZXIgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdENhcnRQcm9kdXQocHJvcHM6IHtcbiAgcHJvZHVjdElkOiBudW1iZXI7XG4gIGNhcnRJZDogbnVtYmVyO1xuICByZXN0YXVyYW50SWQ6IG51bWJlcjtcbn0pIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci9jYXJ0L3Byb2R1Y3QvMGAsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHByb2R1Y3RJZDogcHJvcHMucHJvZHVjdElkLFxuICAgICAgY2FydElkOiBwcm9wcy5jYXJ0SWQsXG4gICAgICByZXN0YXVyYW50SWQ6IHByb3BzLnJlc3RhdXJhbnRJZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gIH0pO1xuXG4gIGlmIChyZXMub2spIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBhbGVydChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcnRJZCh1c2VyRW1haWw6IHN0cmluZykge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyLyR7dXNlckVtYWlsfWAsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gIH0pO1xuXG4gIGxldCB1c2VyID0gZGVmYXVsdFVzZXI7XG4gIGlmIChyZXMub2spIHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGlmICh1c2VyICYmIHVzZXIuY2FydCkge1xuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIE51bWJlcih1c2VyLmNhcnQuaWQpO1xuICAgIHJldHVybiBcbiAgfSBlbHNlIHJldHVybiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUb0NhcnQocHJvcHM6IHtcbiAgcHJvZHVjdDogUHJvZHVjdDtcbiAgcmVzdGF1cmFudElkOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbn1cbiAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gcHJvcHMucHJvZHVjdC5pZDtcbiAgICAgICAgICBjb25zdCByZXN0YXVyYW50SWQgPSBwcm9wcy5yZXN0YXVyYW50SWQ7XG4gICAgICAgICAgY29uc3QgY2FydElkID0gTnVtYmVyKGF3YWl0IGdldENhcnRJZChTdHJpbmcoc2Vzc2lvbi51c2VyLmVtYWlsKSkpO1xuICAgICAgICAgIGlmIChjb25maXJtKFwiQWRpY2lvbmFyIHByb2R1dG8gYW8gY2FycmluaG8/XCIpKSB7XG4gICAgICAgICAgICBwb3N0Q2FydFByb2R1dCh7XG4gICAgICAgICAgICAgIGNhcnRJZDogY2FydElkLFxuICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgcmVzdGF1cmFudElkOiByZXN0YXVyYW50SWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJGYcOnYSBsb2dpbiBwYXJhIGFjZXNzYXIgYWRpY2lvbmFyIHByb2R1dG9zIGFvIGNhcnJpbmhvIVwiKTtcbiAgICAgICAgICByb3V0ZXIucHVzaChgL2FwaS9hdXRoL3NpZ25pbmApO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiL2ltYWdlcy9pY29ucy9jYXJ0LnBuZ1wiXG4gICAgICAgIGFsdD1cImFkZF90b19jYXJ0XCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uX2ljb259XG4gICAgICAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsImRlZmF1bHRVc2VyIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsInBvc3RDYXJ0UHJvZHV0IiwicHJvcHMiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvZHVjdElkIiwiY2FydElkIiwicmVzdGF1cmFudElkIiwiaGVhZGVycyIsIm9rIiwiZGF0YSIsImpzb24iLCJhbGVydCIsImdldENhcnRJZCIsInVzZXJFbWFpbCIsInVzZXIiLCJjYXJ0IiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsImlkIiwiQWRkVG9DYXJ0Iiwic2Vzc2lvbiIsInJvdXRlciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImFjdGlvbiIsIm9uQ2xpY2siLCJwcm9kdWN0IiwiU3RyaW5nIiwiZW1haWwiLCJjb25maXJtIiwicHVzaCIsImltZyIsInNyYyIsImFsdCIsImFjdGlvbl9pY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AddToCart.tsx\n"));

/***/ })

});