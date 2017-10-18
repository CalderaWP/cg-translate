webpackHotUpdate(0,{

/***/ 62:
/* exports provided: stateFactory, stateFactoryDispatching */
/* exports used: stateFactory */
/*!**************************************************!*\
  !*** ./client/components/states/stateFactory.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return stateFactory; });\n/* unused harmony export stateFactoryDispatching */\n\n/**\n * @param {String} getter The name of the getter\n * @param {String|undefined} mutation The name of the mutation, or undefined to use same name as getter\n */\nvar stateFactory = function stateFactory(getter, mutation) {\n\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.commit(mutation, value);\n\t\t}\n\t};\n};\n\nvar stateFactoryDispatching = function stateFactoryDispatching(getter, mutation) {\n\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.commit(mutation, value);\n\t\t}\n\t};\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9zdGF0ZUZhY3RvcnkuanMiXSwibmFtZXMiOlsic3RhdGVGYWN0b3J5IiwiZ2V0dGVyIiwibXV0YXRpb24iLCJnZXQiLCIkc3RvcmUiLCJzdGF0ZSIsInNldCIsInZhbHVlIiwiY29tbWl0Iiwic3RhdGVGYWN0b3J5RGlzcGF0Y2hpbmciXSwibWFwcGluZ3MiOiI7OztBQUNBOzs7O0FBSVEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUVDLE1BQUYsRUFBVUMsUUFBVixFQUF3Qjs7QUFFcEQsS0FBSSxDQUFFQSxRQUFOLEVBQWdCO0FBQUdBLGFBQVdELE1BQVg7QUFBb0I7O0FBR3ZDLFFBQU87QUFDTkUsS0FETSxpQkFDRTtBQUNQLFVBQU8sS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQW1CSixNQUFuQixDQUFQO0FBQ0EsR0FISztBQUlOSyxLQUpNLGVBSUZDLEtBSkUsRUFJSztBQUNWLFFBQUtILE1BQUwsQ0FBWUksTUFBWixDQUFtQk4sUUFBbkIsRUFBNkJLLEtBQTdCO0FBQ0E7QUFOSyxFQUFQO0FBUUEsQ0FiTzs7QUFnQkEsSUFBTUUsMEJBQTBCLFNBQTFCQSx1QkFBMEIsQ0FBRVIsTUFBRixFQUFVQyxRQUFWLEVBQXdCOztBQUUvRCxLQUFJLENBQUVBLFFBQU4sRUFBZ0I7QUFBR0EsYUFBV0QsTUFBWDtBQUFvQjs7QUFHdkMsUUFBTztBQUNORSxLQURNLGlCQUNFO0FBQ1AsVUFBTyxLQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBbUJKLE1BQW5CLENBQVA7QUFDQSxHQUhLO0FBSU5LLEtBSk0sZUFJRkMsS0FKRSxFQUlLO0FBQ1YsUUFBS0gsTUFBTCxDQUFZSSxNQUFaLENBQW1CTixRQUFuQixFQUE2QkssS0FBN0I7QUFDQTtBQU5LLEVBQVA7QUFRQSxDQWJPIiwiZmlsZSI6IjYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBnZXR0ZXIgVGhlIG5hbWUgb2YgdGhlIGdldHRlclxuICogQHBhcmFtIHtTdHJpbmd8dW5kZWZpbmVkfSBtdXRhdGlvbiBUaGUgbmFtZSBvZiB0aGUgbXV0YXRpb24sIG9yIHVuZGVmaW5lZCB0byB1c2Ugc2FtZSBuYW1lIGFzIGdldHRlclxuICovXG5leHBvcnQgIGNvbnN0IHN0YXRlRmFjdG9yeSA9ICggZ2V0dGVyLCBtdXRhdGlvbiApID0+IHtcblxuXHRpZiggISBtdXRhdGlvbiApeyAgbXV0YXRpb24gPSBnZXR0ZXI7IH1cblxuXG5cdHJldHVybiB7XG5cdFx0Z2V0ICgpICB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbIGdldHRlciBdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb24sIHZhbHVlKTtcblx0XHR9XG5cdH1cbn07XG5cblxuZXhwb3J0ICBjb25zdCBzdGF0ZUZhY3RvcnlEaXNwYXRjaGluZyA9ICggZ2V0dGVyLCBtdXRhdGlvbiApID0+IHtcblxuXHRpZiggISBtdXRhdGlvbiApeyAgbXV0YXRpb24gPSBnZXR0ZXI7IH1cblxuXG5cdHJldHVybiB7XG5cdFx0Z2V0ICgpICB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbIGdldHRlciBdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb24sIHZhbHVlKTtcblx0XHR9XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zdGF0ZXMvc3RhdGVGYWN0b3J5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 67:
false

})