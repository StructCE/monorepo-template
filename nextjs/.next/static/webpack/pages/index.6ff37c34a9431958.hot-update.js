"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SubscriptionCard.tsx":
/*!*********************************************!*\
  !*** ./src/components/SubscriptionCard.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubscriptionCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/SubscriptionCard.module.css */ \"./src/styles/SubscriptionCard.module.css\");\n/* harmony import */ var _styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SubscriptionCard() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    function handleSubmit() {\n        if (name && email) {\n            // alert(`/register?email=${email}&name=${name}`);\n            router.push(pathname);\n        } else alert(\"Preencha todos os campos!\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n            action: \"\",\n            onSubmit: (event)=>{\n                event.preventDefault();\n                handleSubmit();\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().formInput),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"name\",\n                            children: \"Seu nome:\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/SubscriptionCard.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"name\",\n                            \"aria-label\": \"Seu nome:\",\n                            placeholder: \"Clique para escrever\",\n                            value: name,\n                            onChange: (event)=>setName(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/SubscriptionCard.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/SubscriptionCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().formInput),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"email\",\n                            children: \"Email:\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/SubscriptionCard.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"email\",\n                            placeholder: \"Clique para escrever\",\n                            value: email,\n                            onChange: (event)=>setEmail(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/SubscriptionCard.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/SubscriptionCard.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_SubscriptionCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                    type: \"submit\",\n                    children: \"Continuar\"\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/SubscriptionCard.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/SubscriptionCard.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/SubscriptionCard.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(SubscriptionCard, \"3ibA6xORsIGOR5I6YGuzJ0Sn5XI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SubscriptionCard;\nvar _c;\n$RefreshReg$(_c, \"SubscriptionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpcHRpb25DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNsQjtBQUNpQjtBQUUxQyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNTSxTQUFTUCxzREFBU0E7SUFFeEIsU0FBU1E7UUFDUCxJQUFJSCxRQUFRRixPQUFPO1lBQ2pCLGtEQUFrRDtZQUNsREksT0FBT0UsSUFBSSxDQUFDQztRQUNkLE9BQU9DLE1BQU07SUFDZjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFDQ0MsV0FBV2YsaUZBQVc7WUFDdEJnQixRQUFPO1lBQ1BDLFVBQVUsQ0FBQ0M7Z0JBQ1RBLE1BQU1DLGNBQWM7Z0JBQ3BCVjtZQUNGOzs4QkFFQSw4REFBQ0k7b0JBQUlFLFdBQVdmLHNGQUFnQjs7c0NBQzlCLDhEQUFDcUI7NEJBQU1OLFdBQVdmLGtGQUFZOzRCQUFFc0IsU0FBUTtzQ0FBTzs7Ozs7O3NDQUcvQyw4REFBQ0M7NEJBQ0NSLFdBQVdmLGtGQUFZOzRCQUN2QndCLE1BQUs7NEJBQ0xDLGNBQVc7NEJBQ1hDLGFBQVk7NEJBQ1pDLE9BQU9yQjs0QkFDUHNCLFVBQVUsQ0FBQ1YsUUFBVVgsUUFBUVcsTUFBTVcsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7OEJBR25ELDhEQUFDZDtvQkFBSUUsV0FBV2Ysc0ZBQWdCOztzQ0FDOUIsOERBQUNxQjs0QkFBTU4sV0FBV2Ysa0ZBQVk7NEJBQUVzQixTQUFRO3NDQUFROzs7Ozs7c0NBR2hELDhEQUFDQzs0QkFDQ1IsV0FBV2Ysa0ZBQVk7NEJBQ3ZCd0IsTUFBSzs0QkFDTEUsYUFBWTs0QkFDWkMsT0FBT3ZCOzRCQUNQd0IsVUFBVSxDQUFDVixRQUFVYixTQUFTYSxNQUFNVyxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFHcEQsOERBQUNHO29CQUFPZixXQUFXZixtRkFBYTtvQkFBRXdCLE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhEO0dBckR3QnJCOztRQUdQRixrREFBU0E7OztLQUhGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpcHRpb25DYXJkLnRzeD8xMzgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1N1YnNjcmlwdGlvbkNhcmQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJzY3JpcHRpb25DYXJkKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgIGlmIChuYW1lICYmIGVtYWlsKSB7XG4gICAgICAvLyBhbGVydChgL3JlZ2lzdGVyP2VtYWlsPSR7ZW1haWx9Jm5hbWU9JHtuYW1lfWApO1xuICAgICAgcm91dGVyLnB1c2gocGF0aG5hbWUpO1xuICAgIH0gZWxzZSBhbGVydChcIlByZWVuY2hhIHRvZG9zIG9zIGNhbXBvcyFcIik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfVxuICAgICAgICBhY3Rpb249XCJcIlxuICAgICAgICBvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXR9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0gaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICAgIFNldSBub21lOlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIHR5cGU9XCJuYW1lXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZXUgbm9tZTpcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDbGlxdWUgcGFyYSBlc2NyZXZlclwiXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXR9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0gaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDbGlxdWUgcGFyYSBlc2NyZXZlclwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIENvbnRpbnVhclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIlN1YnNjcmlwdGlvbkNhcmQiLCJlbWFpbCIsInNldEVtYWlsIiwibmFtZSIsInNldE5hbWUiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJwdXNoIiwicGF0aG5hbWUiLCJhbGVydCIsImRpdiIsImZvcm0iLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtSW5wdXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJhcmlhLWxhYmVsIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubscriptionCard.tsx\n"));

/***/ })

});