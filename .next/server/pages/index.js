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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-react-common */ \"@progress/kendo-react-common\");\n/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/kenny/Desktop/next-kendo-cloudinary-gallery/pages/index.js\";\n\n // import CloudAssets from \"../components/CloudAssets\";\n\n\n\nasync function getStaticProps(context) {\n  const res = await fetch(`https://res.cloudinary.com/kizmelvin/image/list/v1633911053/city.json`);\n  const resData = await res.json();\n\n  if (!resData) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      resData\n    },\n    revalidate: 5\n  };\n}\nfunction Home({\n  resData\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"title\", {\n        children: \"KendoUI Gallary \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"meta\", {\n        name: \"description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"main\", {\n      className: \"wrap k-align-items-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1__.Typography.h2, {\n        textAlign: \"center\",\n        fontWeight: \"bold\",\n        children: \"Awesome Gallary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1__.Typography.p, {\n        textAlign: \"center\",\n        themeColor: \"inverse\",\n        fontWeight: \"light\",\n        children: [\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quam eos consequatur, \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 28\n        }, this), \" rem ratione nesciunt quisquam dolorem, repudiandae officia totam amet corporis illum \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 57\n        }, this), \" minus fugit incidunt magnam deserunt veniam dignissimos.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7O0FBRU8sZUFBZUcsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDcEIsdUVBRG9CLENBQXZCO0FBR0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUF0Qjs7QUFFQSxNQUFJLENBQUNELE9BQUwsRUFBYztBQUNaLFdBQU87QUFDTEUsTUFBQUEsUUFBUSxFQUFFO0FBREwsS0FBUDtBQUdEOztBQUVELFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBQUVILE1BQUFBO0FBQUYsS0FERjtBQUdMSSxJQUFBQSxVQUFVLEVBQUU7QUFIUCxHQUFQO0FBS0Q7QUFFYyxTQUFTQyxJQUFULENBQWM7QUFBRUwsRUFBQUE7QUFBRixDQUFkLEVBQTJCO0FBQ3hDLHNCQUNFO0FBQUssYUFBUyxFQUFFTiwwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQU0sZUFBUyxFQUFDLDJCQUFoQjtBQUFBLDhCQUNFLDhEQUFDLHVFQUFEO0FBQWUsaUJBQVMsRUFBRSxRQUExQjtBQUFvQyxrQkFBVSxFQUFFLE1BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQyxzRUFBRDtBQUNFLGlCQUFTLEVBQUUsUUFEYjtBQUVFLGtCQUFVLEVBQUUsU0FGZDtBQUdFLGtCQUFVLEVBQUUsT0FIZDtBQUFBLDJIQU1tQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5uQix5R0FPZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWtlbmRvLWNsb3VkaW5hcnktZ2FsbGVyeS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IENsb3VkQXNzZXRzIGZyb20gXCIuLi9jb21wb25lbnRzL0Nsb3VkQXNzZXRzXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBwcm9ncmVzcy9rZW5kby1yZWFjdC1jb21tb25cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2tpem1lbHZpbi9pbWFnZS9saXN0L3YxNjMzOTExMDUzL2NpdHkuanNvbmBcbiAgKTtcbiAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgaWYgKCFyZXNEYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJlc0RhdGEgfSxcblxuICAgIHJldmFsaWRhdGU6IDUsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyByZXNEYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPktlbmRvVUkgR2FsbGFyeSA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIndyYXAgay1hbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPFR5cG9ncmFwaHkuaDIgdGV4dEFsaWduPXtcImNlbnRlclwifSBmb250V2VpZ2h0PXtcImJvbGRcIn0+XG4gICAgICAgICAgQXdlc29tZSBHYWxsYXJ5XG4gICAgICAgIDwvVHlwb2dyYXBoeS5oMj5cbiAgICAgICAgPFR5cG9ncmFwaHkucFxuICAgICAgICAgIHRleHRBbGlnbj17XCJjZW50ZXJcIn1cbiAgICAgICAgICB0aGVtZUNvbG9yPXtcImludmVyc2VcIn1cbiAgICAgICAgICBmb250V2VpZ2h0PXtcImxpZ2h0XCJ9XG4gICAgICAgID5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEdWNpbXVzIHF1YW1cbiAgICAgICAgICBlb3MgY29uc2VxdWF0dXIsIDxiciAvPiByZW0gcmF0aW9uZSBuZXNjaXVudCBxdWlzcXVhbSBkb2xvcmVtLFxuICAgICAgICAgIHJlcHVkaWFuZGFlIG9mZmljaWEgdG90YW0gYW1ldCBjb3Jwb3JpcyBpbGx1bSA8YnIgLz4gbWludXMgZnVnaXRcbiAgICAgICAgICBpbmNpZHVudCBtYWduYW0gZGVzZXJ1bnQgdmVuaWFtIGRpZ25pc3NpbW9zLlxuICAgICAgICA8L1R5cG9ncmFwaHkucD5cbiAgICAgICAgey8qIDxDbG91ZEFzc2V0cyBkYXRhPXtyZXNEYXRhfSAvPiAqL31cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiVHlwb2dyYXBoeSIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwicmVzRGF0YSIsImpzb24iLCJub3RGb3VuZCIsInByb3BzIiwicmV2YWxpZGF0ZSIsIkhvbWUiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"grid\": \"Home_grid__2Ei2F\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWtlbmRvLWNsb3VkaW5hcnktZ2FsbGVyeS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/ZTBjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@progress/kendo-react-common":
/*!***********************************************!*\
  !*** external "@progress/kendo-react-common" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@progress/kendo-react-common");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();