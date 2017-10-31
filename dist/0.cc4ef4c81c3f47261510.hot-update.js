webpackHotUpdate(0,{

/***/ 4:
/* exports provided: stateFactory, stateFactoryDispatching, stateFactoryReadOnly */
/* exports used: stateFactory, stateFactoryDispatching, stateFactoryReadOnly */
/*!**************************************************!*\
  !*** ./client/components/states/stateFactory.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return stateFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return stateFactoryDispatching; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return stateFactoryReadOnly; });\nvar getterToSetter = function getterToSetter(mutation, getter) {\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\treturn mutation;\n};\n\nvar stateFactory = function stateFactory(getter, mutation) {\n\n\tmutation = getterToSetter(mutation, getter);\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.commit(mutation, value);\n\t\t}\n\t};\n};\n\nvar stateFactoryDispatching = function stateFactoryDispatching(getter, mutation) {\n\n\tmutation = getterToSetter(mutation, getter);\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.dispatch(mutation, value);\n\t\t}\n\t};\n};\n\nvar stateFactoryReadOnly = function stateFactoryReadOnly(getter) {\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\t//You shall not pass\n\t\t}\n\t};\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9zdGF0ZUZhY3RvcnkuanMiXSwibmFtZXMiOlsiZ2V0dGVyVG9TZXR0ZXIiLCJtdXRhdGlvbiIsImdldHRlciIsInN0YXRlRmFjdG9yeSIsImdldCIsIiRzdG9yZSIsInN0YXRlIiwic2V0IiwidmFsdWUiLCJjb21taXQiLCJzdGF0ZUZhY3RvcnlEaXNwYXRjaGluZyIsImRpc3BhdGNoIiwic3RhdGVGYWN0b3J5UmVhZE9ubHkiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFBQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVVDLFFBQVYsRUFBb0JDLE1BQXBCLEVBQTRCO0FBQ2xELEtBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2RBLGFBQVdDLE1BQVg7QUFDQTtBQUNELFFBQU9ELFFBQVA7QUFDQSxDQUxEOztBQVFRLElBQU1FLGVBQWUsU0FBZkEsWUFBZSxDQUFFRCxNQUFGLEVBQVVELFFBQVYsRUFBd0I7O0FBRXBEQSxZQUFXRCxlQUFlQyxRQUFmLEVBQXlCQyxNQUF6QixDQUFYOztBQUVBLFFBQU87QUFDTkUsS0FETSxpQkFDRTtBQUNQLFVBQU8sS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQW1CSixNQUFuQixDQUFQO0FBQ0EsR0FISztBQUlOSyxLQUpNLGVBSUZDLEtBSkUsRUFJSztBQUNWLFFBQUtILE1BQUwsQ0FBWUksTUFBWixDQUFtQlIsUUFBbkIsRUFBNkJPLEtBQTdCO0FBQ0E7QUFOSyxFQUFQO0FBUUEsQ0FaTzs7QUFnQkEsSUFBTUUsMEJBQTBCLFNBQTFCQSx1QkFBMEIsQ0FBRVIsTUFBRixFQUFVRCxRQUFWLEVBQXdCOztBQUUvREEsWUFBV0QsZUFBZUMsUUFBZixFQUF5QkMsTUFBekIsQ0FBWDs7QUFFQSxRQUFPO0FBQ05FLEtBRE0saUJBQ0U7QUFDUCxVQUFPLEtBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFtQkosTUFBbkIsQ0FBUDtBQUNBLEdBSEs7QUFJTkssS0FKTSxlQUlGQyxLQUpFLEVBSUs7QUFDVixRQUFLSCxNQUFMLENBQVlNLFFBQVosQ0FBcUJWLFFBQXJCLEVBQStCTyxLQUEvQjtBQUNBO0FBTkssRUFBUDtBQVFBLENBWk87O0FBY0EsSUFBTUksdUJBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBRVYsTUFBRixFQUFjO0FBQ2xELFFBQU87QUFDTkUsS0FETSxpQkFDRTtBQUNQLFVBQU8sS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQW1CSixNQUFuQixDQUFQO0FBQ0EsR0FISztBQUlOSyxLQUpNLGVBSUZDLEtBSkUsRUFJSTtBQUNUO0FBQ0E7QUFOSyxFQUFQO0FBUUEsQ0FUTyIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0dGVyVG9TZXR0ZXIgPSBmdW5jdGlvbiAobXV0YXRpb24sIGdldHRlcikge1xuXHRpZiAoIW11dGF0aW9uKSB7XG5cdFx0bXV0YXRpb24gPSBnZXR0ZXI7XG5cdH1cblx0cmV0dXJuIG11dGF0aW9uO1xufTtcblxuXG5leHBvcnQgIGNvbnN0IHN0YXRlRmFjdG9yeSA9ICggZ2V0dGVyLCBtdXRhdGlvbiApID0+IHtcblxuXHRtdXRhdGlvbiA9IGdldHRlclRvU2V0dGVyKG11dGF0aW9uLCBnZXR0ZXIpO1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0ICgpICB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbIGdldHRlciBdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb24sIHZhbHVlKTtcblx0XHR9XG5cdH1cbn07XG5cblxuXG5leHBvcnQgIGNvbnN0IHN0YXRlRmFjdG9yeURpc3BhdGNoaW5nID0gKCBnZXR0ZXIsIG11dGF0aW9uICkgPT4ge1xuXG5cdG11dGF0aW9uID0gZ2V0dGVyVG9TZXR0ZXIobXV0YXRpb24sIGdldHRlcik7XG5cblx0cmV0dXJuIHtcblx0XHRnZXQgKCkgIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVsgZ2V0dGVyIF07XG5cdFx0fSxcblx0XHRzZXQodmFsdWUpIHtcblx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKG11dGF0aW9uLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgIGNvbnN0IHN0YXRlRmFjdG9yeVJlYWRPbmx5ID0gKCBnZXR0ZXIgKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Z2V0ICgpICB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbIGdldHRlciBdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKXtcblx0XHRcdC8vWW91IHNoYWxsIG5vdCBwYXNzXG5cdFx0fVxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9zdGF0ZUZhY3RvcnkuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})