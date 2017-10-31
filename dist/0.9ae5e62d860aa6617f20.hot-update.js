webpackHotUpdate(0,{

/***/ 62:
/* exports provided: stateFactory, stateFactoryDispatching */
/* exports used: stateFactoryDispatching, stateFactory */
/*!**************************************************!*\
  !*** ./client/components/states/stateFactory.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return stateFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return stateFactoryDispatching; });\nvar getterToSetter = function getterToSetter(mutation, getter) {\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\treturn mutation;\n};\n\n/**\n * @param {String} getter The name of the getter\n * @param {String|undefined} mutation The name of the mutation, or undefined to use same name as getter\n */\nvar stateFactory = function stateFactory(getter, mutation) {\n\n\tmutation = getterToSetter(mutation, getter);\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.commit(mutation, value);\n\t\t}\n\t};\n};\n\nvar stateFactoryDispatching = function stateFactoryDispatching(getter, mutation) {\n\n\tmutation = getterToSetter(mutation, getter);\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.dispatch(mutation, value);\n\t\t}\n\t};\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9zdGF0ZUZhY3RvcnkuanMiXSwibmFtZXMiOlsiZ2V0dGVyVG9TZXR0ZXIiLCJtdXRhdGlvbiIsImdldHRlciIsInN0YXRlRmFjdG9yeSIsImdldCIsIiRzdG9yZSIsInN0YXRlIiwic2V0IiwidmFsdWUiLCJjb21taXQiLCJzdGF0ZUZhY3RvcnlEaXNwYXRjaGluZyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVVDLFFBQVYsRUFBb0JDLE1BQXBCLEVBQTRCO0FBQ2xELEtBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2RBLGFBQVdDLE1BQVg7QUFDQTtBQUNELFFBQU9ELFFBQVA7QUFDQSxDQUxEOztBQVFBOzs7O0FBSVEsSUFBTUUsZUFBZSxTQUFmQSxZQUFlLENBQUVELE1BQUYsRUFBVUQsUUFBVixFQUF3Qjs7QUFFcERBLFlBQVdELGVBQWVDLFFBQWYsRUFBeUJDLE1BQXpCLENBQVg7O0FBRUEsUUFBTztBQUNORSxLQURNLGlCQUNFO0FBQ1AsVUFBTyxLQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBbUJKLE1BQW5CLENBQVA7QUFDQSxHQUhLO0FBSU5LLEtBSk0sZUFJRkMsS0FKRSxFQUlLO0FBQ1YsUUFBS0gsTUFBTCxDQUFZSSxNQUFaLENBQW1CUixRQUFuQixFQUE2Qk8sS0FBN0I7QUFDQTtBQU5LLEVBQVA7QUFRQSxDQVpPOztBQWdCQSxJQUFNRSwwQkFBMEIsU0FBMUJBLHVCQUEwQixDQUFFUixNQUFGLEVBQVVELFFBQVYsRUFBd0I7O0FBRS9EQSxZQUFXRCxlQUFlQyxRQUFmLEVBQXlCQyxNQUF6QixDQUFYOztBQUVBLFFBQU87QUFDTkUsS0FETSxpQkFDRTtBQUNQLFVBQU8sS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQW1CSixNQUFuQixDQUFQO0FBQ0EsR0FISztBQUlOSyxLQUpNLGVBSUZDLEtBSkUsRUFJSztBQUNWLFFBQUtILE1BQUwsQ0FBWU0sUUFBWixDQUFxQlYsUUFBckIsRUFBK0JPLEtBQS9CO0FBQ0E7QUFOSyxFQUFQO0FBUUEsQ0FaTyIsImZpbGUiOiI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldHRlclRvU2V0dGVyID0gZnVuY3Rpb24gKG11dGF0aW9uLCBnZXR0ZXIpIHtcblx0aWYgKCFtdXRhdGlvbikge1xuXHRcdG11dGF0aW9uID0gZ2V0dGVyO1xuXHR9XG5cdHJldHVybiBtdXRhdGlvbjtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gZ2V0dGVyIFRoZSBuYW1lIG9mIHRoZSBnZXR0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfHVuZGVmaW5lZH0gbXV0YXRpb24gVGhlIG5hbWUgb2YgdGhlIG11dGF0aW9uLCBvciB1bmRlZmluZWQgdG8gdXNlIHNhbWUgbmFtZSBhcyBnZXR0ZXJcbiAqL1xuZXhwb3J0ICBjb25zdCBzdGF0ZUZhY3RvcnkgPSAoIGdldHRlciwgbXV0YXRpb24gKSA9PiB7XG5cblx0bXV0YXRpb24gPSBnZXR0ZXJUb1NldHRlcihtdXRhdGlvbiwgZ2V0dGVyKTtcblxuXHRyZXR1cm4ge1xuXHRcdGdldCAoKSAge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlWyBnZXR0ZXIgXTtcblx0XHR9LFxuXHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KG11dGF0aW9uLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG59O1xuXG5cblxuZXhwb3J0ICBjb25zdCBzdGF0ZUZhY3RvcnlEaXNwYXRjaGluZyA9ICggZ2V0dGVyLCBtdXRhdGlvbiApID0+IHtcblxuXHRtdXRhdGlvbiA9IGdldHRlclRvU2V0dGVyKG11dGF0aW9uLCBnZXR0ZXIpO1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0ICgpICB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbIGdldHRlciBdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaChtdXRhdGlvbiwgdmFsdWUpO1xuXHRcdH1cblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9zdGF0ZUZhY3RvcnkuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 63:
/* exports provided: formState */
/* exports used: formState */
/*!***********************************************!*\
  !*** ./client/components/states/formState.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stateFactory__ = __webpack_require__(/*! ./stateFactory */ 62);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return formState; });\n\n\nvar formState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stateFactory__[\"a\" /* stateFactoryDispatching */])('form', undefined);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9mb3JtU3RhdGUuanMiXSwibmFtZXMiOlsiZm9ybVN0YXRlIiwic3RhdGVGYWN0b3J5RGlzcGF0Y2hpbmciLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRU8sSUFBTUEsWUFBWSxxR0FBQUMsQ0FBeUIsTUFBekIsRUFBaUNDLFNBQWpDLENBQWxCIiwiZmlsZSI6IjYzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RhdGVGYWN0b3J5RGlzcGF0Y2hpbmcgfSBmcm9tICcuL3N0YXRlRmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBmb3JtU3RhdGUgPSBzdGF0ZUZhY3RvcnlEaXNwYXRjaGluZyggJ2Zvcm0nLCB1bmRlZmluZWQgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9mb3JtU3RhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 64:
/* exports provided: languageState */
/* exports used: languageState */
/*!***************************************************!*\
  !*** ./client/components/states/languageState.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stateFactory__ = __webpack_require__(/*! ./stateFactory */ 62);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return languageState; });\n\n\nvar languageState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stateFactory__[\"b\" /* stateFactory */])('language', undefined);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9sYW5ndWFnZVN0YXRlLmpzIl0sIm5hbWVzIjpbImxhbmd1YWdlU3RhdGUiLCJzdGF0ZUZhY3RvcnkiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRU8sSUFBTUEsZ0JBQWdCLDBGQUFBQyxDQUFjLFVBQWQsRUFBMEJDLFNBQTFCLENBQXRCIiwiZmlsZSI6IjY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RhdGVGYWN0b3J5IH0gZnJvbSAnLi9zdGF0ZUZhY3RvcnknO1xuXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VTdGF0ZSA9IHN0YXRlRmFjdG9yeSggJ2xhbmd1YWdlJywgdW5kZWZpbmVkICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdGF0ZXMvbGFuZ3VhZ2VTdGF0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 65:
/* exports provided: languagesState */
/* exports used: languagesState */
/*!****************************************************!*\
  !*** ./client/components/states/languagesState.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stateFactory__ = __webpack_require__(/*! ./stateFactory */ 62);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return languagesState; });\n\n\nvar languagesState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stateFactory__[\"b\" /* stateFactory */])('languages', undefined);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9sYW5ndWFnZXNTdGF0ZS5qcyJdLCJuYW1lcyI6WyJsYW5ndWFnZXNTdGF0ZSIsInN0YXRlRmFjdG9yeSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFTyxJQUFNQSxpQkFBaUIsMEZBQUFDLENBQWMsV0FBZCxFQUEyQkMsU0FBM0IsQ0FBdkIiLCJmaWxlIjoiNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdGF0ZUZhY3RvcnkgfSBmcm9tICcuL3N0YXRlRmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZXNTdGF0ZSA9IHN0YXRlRmFjdG9yeSggJ2xhbmd1YWdlcycsIHVuZGVmaW5lZCApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc3RhdGVzL2xhbmd1YWdlc1N0YXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 66:
/* exports provided: formLanguagesState */
/* exports used: formLanguagesState */
/*!********************************************************!*\
  !*** ./client/components/states/formLanguagesState.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stateFactory__ = __webpack_require__(/*! ./stateFactory */ 62);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return formLanguagesState; });\n\n\nvar formLanguagesState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stateFactory__[\"b\" /* stateFactory */])('formLanguages', undefined);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9mb3JtTGFuZ3VhZ2VzU3RhdGUuanMiXSwibmFtZXMiOlsiZm9ybUxhbmd1YWdlc1N0YXRlIiwic3RhdGVGYWN0b3J5IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVPLElBQU1BLHFCQUFxQiwwRkFBQUMsQ0FBYyxlQUFkLEVBQStCQyxTQUEvQixDQUEzQiIsImZpbGUiOiI2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0YXRlRmFjdG9yeSB9IGZyb20gJy4vc3RhdGVGYWN0b3J5JztcblxuZXhwb3J0IGNvbnN0IGZvcm1MYW5ndWFnZXNTdGF0ZSA9IHN0YXRlRmFjdG9yeSggJ2Zvcm1MYW5ndWFnZXMnLCB1bmRlZmluZWQgKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdGF0ZXMvZm9ybUxhbmd1YWdlc1N0YXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})