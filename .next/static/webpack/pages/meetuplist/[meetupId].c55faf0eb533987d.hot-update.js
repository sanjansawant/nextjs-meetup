"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/meetuplist/[meetupId]",{

/***/ "./pages/meetuplist/[meetupId].js":
/*!****************************************!*\
  !*** ./pages/meetuplist/[meetupId].js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\nvar _this = undefined;\n\n\nvar dummyMeetups = [\n    {\n        id: 1,\n        image: \"https://e1.pxfuel.com/desktop-wallpaper/312/712/desktop-wallpaper-shahrukh-khan-best-shahrukh-khan-mobile.jpg\",\n        title: \"srk\",\n        address: \"random 1\"\n    },\n    {\n        id: 2,\n        image: \"https://e0.pxfuel.com/wallpapers/55/976/desktop-wallpaper-shahrukh-khan-bollywood-indian-cinema-srk.jpg\",\n        title: \"srk 2\",\n        address: \"random 2\"\n    }, \n];\nvar MeetupDetails = function(props) {\n    // const { query } = useRouter();\n    // console.log(query.meetupid);\n    // const item = dummyMeetups[query.meetupid];\n    // console.log(\"item is here\");\n    // console.log(item);\n    var item = props.meetup;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, item), void 0, false, {\n        fileName: \"D:\\\\next\\\\06-onwards-to-a-bigger-project-starting-project\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\meetuplist\\\\[meetupId].js\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, _this);\n};\n_c = MeetupDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZWV0dXBsaXN0L1ttZWV0dXBJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBQWlFO0FBRWpFLElBQU1DLFlBQVksR0FBRztJQUNuQjtRQUNFQyxFQUFFLEVBQUUsQ0FBQztRQUNMQyxLQUFLLEVBQ0gsK0dBQStHO1FBQ2pIQyxLQUFLLEVBQUUsS0FBSztRQUNaQyxPQUFPLEVBQUUsVUFBVTtLQUNwQjtJQUNEO1FBQ0VILEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFDSCx5R0FBeUc7UUFDM0dDLEtBQUssRUFBRSxPQUFPO1FBQ2RDLE9BQU8sRUFBRSxVQUFVO0tBQ3BCO0NBQ0Y7QUFDRCxJQUFNQyxhQUFhLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQy9CLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsNkNBQTZDO0lBRTdDLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsSUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLE1BQU07SUFDekIscUJBQU8sOERBQUNULHdFQUFZLHFGQUFLUSxJQUFJOzs7O2FBQUksQ0FBQztBQUNwQyxDQUFDO0FBVEtGLEtBQUFBLGFBQWE7O0FBdUVuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21lZXR1cGxpc3QvW21lZXR1cElkXS5qcz8xNTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuY29uc3QgZHVtbXlNZWV0dXBzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9lMS5weGZ1ZWwuY29tL2Rlc2t0b3Atd2FsbHBhcGVyLzMxMi83MTIvZGVza3RvcC13YWxscGFwZXItc2hhaHJ1a2gta2hhbi1iZXN0LXNoYWhydWtoLWtoYW4tbW9iaWxlLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwic3JrXCIsXHJcbiAgICBhZGRyZXNzOiBcInJhbmRvbSAxXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vZTAucHhmdWVsLmNvbS93YWxscGFwZXJzLzU1Lzk3Ni9kZXNrdG9wLXdhbGxwYXBlci1zaGFocnVraC1raGFuLWJvbGx5d29vZC1pbmRpYW4tY2luZW1hLXNyay5qcGdcIixcclxuICAgIHRpdGxlOiBcInNyayAyXCIsXHJcbiAgICBhZGRyZXNzOiBcInJhbmRvbSAyXCIsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgTWVldHVwRGV0YWlscyA9IChwcm9wcykgPT4ge1xyXG4gIC8vIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHF1ZXJ5Lm1lZXR1cGlkKTtcclxuICAvLyBjb25zdCBpdGVtID0gZHVtbXlNZWV0dXBzW3F1ZXJ5Lm1lZXR1cGlkXTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJpdGVtIGlzIGhlcmVcIik7XHJcbiAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcbiAgY29uc3QgaXRlbSA9IHByb3BzLm1lZXR1cDtcclxuICByZXR1cm4gPE1lZXR1cERldGFpbCB7Li4uaXRlbX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9uaXJhbmphbjpTdGV2ZW5zNTA5MDk3QGNsdXN0ZXIwLnpkMWx2NnEubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xyXG4gIGNvbnNvbGUubG9nKFwiZ2V0U3RhdGljUGF0aHNcIik7XHJcbiAgY29uc29sZS5sb2cobWVldHVwcyk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gICAgLy8gcGF0aHM6IFtcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIHBhcmFtczoge1xyXG4gICAgLy8gICAgICAgbWVldHVwSWQ6IFwiMFwiLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBwYXJhbXM6IHtcclxuICAgIC8vICAgICAgIG1lZXR1cElkOiBcIjFcIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gXSxcclxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgICAgfTtcclxuICAgIH0pLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiY29udGV4dC5wYXJhbXNcIik7XHJcbiAgY29uc29sZS5sb2coY29udGV4dC5wYXJhbXMpO1xyXG4gIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vbmlyYW5qYW46U3RldmVuczUwOTA5N0BjbHVzdGVyMC56ZDFsdjZxLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgY29uc29sZS5sb2coXCJnZXRTdGF0aWNQcm9wc1wiKTtcclxuICBjb25zb2xlLmxvZyhtZWV0dXBzKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogbWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcclxuIl0sIm5hbWVzIjpbIk1lZXR1cERldGFpbCIsImR1bW15TWVldHVwcyIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJpdGVtIiwibWVldHVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/meetuplist/[meetupId].js\n"));

/***/ })

});