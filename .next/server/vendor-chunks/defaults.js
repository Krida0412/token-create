/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/defaults";
exports.ids = ["vendor-chunks/defaults"];
exports.modules = {

/***/ "(ssr)/./node_modules/defaults/index.js":
/*!****************************************!*\
  !*** ./node_modules/defaults/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var clone = __webpack_require__(/*! clone */ \"(ssr)/./node_modules/clone/clone.js\");\n\nmodule.exports = function(options, defaults) {\n  options = options || {};\n\n  Object.keys(defaults).forEach(function(key) {\n    if (typeof options[key] === 'undefined') {\n      options[key] = clone(defaults[key]);\n    }\n  });\n\n  return options;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVmYXVsdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxtQkFBTyxDQUFDLGtEQUFPOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YXBsZXgtdW1pLW5leHQtanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGVmYXVsdHMvaW5kZXguanM/ZGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2xvbmUgPSByZXF1aXJlKCdjbG9uZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0aW9uc1trZXldID0gY2xvbmUoZGVmYXVsdHNba2V5XSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/defaults/index.js\n");

/***/ })

};
;