"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-unicode-supported";
exports.ids = ["vendor-chunks/is-unicode-supported"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-unicode-supported/index.js":
/*!****************************************************!*\
  !*** ./node_modules/is-unicode-supported/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = () => {\n\tif (process.platform !== 'win32') {\n\t\treturn true;\n\t}\n\n\treturn Boolean(process.env.CI) ||\n\t\tBoolean(process.env.WT_SESSION) || // Windows Terminal\n\t\tprocess.env.TERM_PROGRAM === 'vscode' ||\n\t\tprocess.env.TERM === 'xterm-256color' ||\n\t\tprocess.env.TERM === 'alacritty';\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtdW5pY29kZS1zdXBwb3J0ZWQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YXBsZXgtdW1pLW5leHQtanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaXMtdW5pY29kZS1zdXBwb3J0ZWQvaW5kZXguanM/OGU0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ3dpbjMyJykge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIEJvb2xlYW4ocHJvY2Vzcy5lbnYuQ0kpIHx8XG5cdFx0Qm9vbGVhbihwcm9jZXNzLmVudi5XVF9TRVNTSU9OKSB8fCAvLyBXaW5kb3dzIFRlcm1pbmFsXG5cdFx0cHJvY2Vzcy5lbnYuVEVSTV9QUk9HUkFNID09PSAndnNjb2RlJyB8fFxuXHRcdHByb2Nlc3MuZW52LlRFUk0gPT09ICd4dGVybS0yNTZjb2xvcicgfHxcblx0XHRwcm9jZXNzLmVudi5URVJNID09PSAnYWxhY3JpdHR5Jztcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-unicode-supported/index.js\n");

/***/ })

};
;