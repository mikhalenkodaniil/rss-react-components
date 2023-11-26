/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_search_search_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/search/search.css */ \"./src/components/search/search.css\");\n/* harmony import */ var _components_search_search_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_search_search_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_app_App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/app/App.css */ \"./src/components/app/App.css\");\n/* harmony import */ var _components_app_App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_app_App_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst defaultState = {\n    searchName: null,\n    data: []\n};\nconst reducer = (state = defaultState, action)=>{\n    switch(action.type){\n        case \"SET_NAME\":\n            return {\n                ...state,\n                searchName: action.payload\n            };\n        case \"SET_DATA\":\n            return {\n                ...state,\n                data: action.payload\n            };\n        default:\n            return state;\n    }\n};\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)(reducer);\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        defaultState.searchName = localStorage.getItem(\"name\") ? localStorage.getItem(\"name\") : \"\";\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n                store: store,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/daniil/Desktop/projects/rsschool/rss-react-components-4/react-components/src/pages/_app.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/daniil/Desktop/projects/rsschool/rss-react-components-4/react-components/src/pages/_app.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNtQjtBQUNOO0FBRUM7QUFFRztBQUNMO0FBRWxDLE1BQU1HLGVBQXVCO0lBQzNCQyxZQUFZO0lBQ1pDLE1BQU0sRUFBRTtBQUNWO0FBRUEsTUFBTUMsVUFBVSxDQUNkQyxRQUFRSixZQUFZLEVBQ3BCSztJQUVBLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0YsS0FBSztnQkFBRUgsWUFBWUksT0FBT0UsT0FBTztZQUFDO1FBQ2hELEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdILEtBQUs7Z0JBQUVGLE1BQU1HLE9BQU9FLE9BQU87WUFBQztRQUMxQztZQUNFLE9BQU9IO0lBQ1g7QUFDRjtBQUVBLE1BQU1JLFFBQVFYLGtEQUFXQSxDQUFDTTtBQUVYLFNBQVNNLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNURaLGdEQUFTQSxDQUFDO1FBQ1JDLGFBQWFDLFVBQVUsR0FBR1csYUFBYUMsT0FBTyxDQUFDLFVBQzNDRCxhQUFhQyxPQUFPLENBQUMsVUFDckI7SUFDTixHQUFHLEVBQUU7SUFDTCxxQkFDRTs7WUFDRzswQkFDRCw4REFBQ2YsaURBQVFBO2dCQUFDVSxPQUFPQTswQkFDZiw0RUFBQ0U7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWNvbXBvbmVudHMvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jc3MnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL2FwcC9BcHAuY3NzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTogSVN0b3JlID0ge1xuICBzZWFyY2hOYW1lOiBudWxsLFxuICBkYXRhOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoXG4gIHN0YXRlID0gZGVmYXVsdFN0YXRlLFxuICBhY3Rpb246IHsgdHlwZTogc3RyaW5nOyBwYXlsb2FkOiBzdHJpbmcgfVxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfTkFNRSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoTmFtZTogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlICdTRVRfREFUQSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGF0YTogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRlZmF1bHRTdGF0ZS5zZWFyY2hOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKVxuICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpXG4gICAgICA6ICcnO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsnICd9XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfT48L0NvbXBvbmVudD5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJQcm92aWRlciIsInVzZUVmZmVjdCIsImRlZmF1bHRTdGF0ZSIsInNlYXJjaE5hbWUiLCJkYXRhIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJzdG9yZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/components/app/App.css":
/*!************************************!*\
  !*** ./src/components/app/App.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/search/search.css":
/*!******************************************!*\
  !*** ./src/components/search/search.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();