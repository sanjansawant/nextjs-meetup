"use strict";
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
exports.id = "pages/api/meetup";
exports.ids = ["pages/api/meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/meetup.js":
/*!*****************************!*\
  !*** ./pages/api/meetup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// /api/meetup\n\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { title , image , address , description  } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://niranjan:Stevens509097@cluster0.zd1lv6q.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = meetupsCollection.insertOne(data);\n        console.log(result);\n        setTimeout(()=>{\n            client.close();\n        }, 1500);\n        res.status(201).json({\n            message: \"meetup inserted\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVldHVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGNBQWM7QUFFd0I7QUFDdEMsTUFBTUMsT0FBTyxHQUFHLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2xDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUNyQixNQUFNLEVBQUVDLEtBQUssR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUVDLFdBQVcsR0FBRSxHQUFHTCxJQUFJO1FBQ25ELE1BQU1NLE1BQU0sR0FBRyxNQUFNWCx3REFBbUIsQ0FDdEMsdUdBQXVHLENBQ3hHO1FBRUQsTUFBTWEsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtRQUN0QixNQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBRWxELE1BQU1DLE1BQU0sR0FBR0YsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1osSUFBSSxDQUFDO1FBQ2hEYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7UUFDcEJJLFVBQVUsQ0FBQyxJQUFNO1lBQ2ZULE1BQU0sQ0FBQ1UsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1RsQixHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsaUJBQWlCO1NBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWV2QixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL21lZXR1cC5qcz9hZWVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9hcGkvbWVldHVwXHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgIFwibW9uZ29kYitzcnY6Ly9uaXJhbmphbjpTdGV2ZW5zNTA5MDk3QGNsdXN0ZXIwLnpkMWx2NnEubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwibWVldHVwIGluc2VydGVkXCIgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/meetup.js"));
module.exports = __webpack_exports__;

})();