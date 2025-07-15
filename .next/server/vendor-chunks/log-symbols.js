"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/log-symbols";
exports.ids = ["vendor-chunks/log-symbols"];
exports.modules = {

/***/ "(ssr)/./node_modules/log-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/log-symbols/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst chalk = __webpack_require__(/*! chalk */ \"(ssr)/./node_modules/chalk/source/index.js\");\nconst isUnicodeSupported = __webpack_require__(/*! is-unicode-supported */ \"(ssr)/./node_modules/is-unicode-supported/index.js\");\n\nconst main = {\n\tinfo: chalk.blue('ℹ'),\n\tsuccess: chalk.green('✔'),\n\twarning: chalk.yellow('⚠'),\n\terror: chalk.red('✖')\n};\n\nconst fallback = {\n\tinfo: chalk.blue('i'),\n\tsuccess: chalk.green('√'),\n\twarning: chalk.yellow('‼'),\n\terror: chalk.red('×')\n};\n\nmodule.exports = isUnicodeSupported() ? main : fallback;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbG9nLXN5bWJvbHMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixjQUFjLG1CQUFPLENBQUMseURBQU87QUFDN0IsMkJBQTJCLG1CQUFPLENBQUMsZ0ZBQXNCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YXBsZXgtdW1pLW5leHQtanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvbG9nLXN5bWJvbHMvaW5kZXguanM/NjNlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJyk7XG5jb25zdCBpc1VuaWNvZGVTdXBwb3J0ZWQgPSByZXF1aXJlKCdpcy11bmljb2RlLXN1cHBvcnRlZCcpO1xuXG5jb25zdCBtYWluID0ge1xuXHRpbmZvOiBjaGFsay5ibHVlKCfihLknKSxcblx0c3VjY2VzczogY2hhbGsuZ3JlZW4oJ+KclCcpLFxuXHR3YXJuaW5nOiBjaGFsay55ZWxsb3coJ+KaoCcpLFxuXHRlcnJvcjogY2hhbGsucmVkKCfinJYnKVxufTtcblxuY29uc3QgZmFsbGJhY2sgPSB7XG5cdGluZm86IGNoYWxrLmJsdWUoJ2knKSxcblx0c3VjY2VzczogY2hhbGsuZ3JlZW4oJ+KImicpLFxuXHR3YXJuaW5nOiBjaGFsay55ZWxsb3coJ+KAvCcpLFxuXHRlcnJvcjogY2hhbGsucmVkKCfDlycpXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5pY29kZVN1cHBvcnRlZCgpID8gbWFpbiA6IGZhbGxiYWNrO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/log-symbols/index.js\n");

/***/ })

};
;