webpackHotUpdate(0,{

/***/ 62:
/* exports provided: stateFactory, stateFactoryDispatching */
/* exports used: stateFactory */
/*!**************************************************!*\
  !*** ./client/components/states/stateFactory.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return stateFactory; });\n/* unused harmony export stateFactoryDispatching */\n\n/**\n * @param {String} getter The name of the getter\n * @param {String|undefined} mutation The name of the mutation, or undefined to use same name as getter\n */\nvar stateFactory = function stateFactory(getter, mutation) {\n\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.commit(mutation, value);\n\t\t}\n\t};\n};\n\nvar stateFactoryDispatching = function stateFactoryDispatching(getter, mutation) {\n\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.dispatch(mutation, value);\n\t\t}\n\t};\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL3N0YXRlcy9zdGF0ZUZhY3RvcnkuanMiXSwibmFtZXMiOlsic3RhdGVGYWN0b3J5IiwiZ2V0dGVyIiwibXV0YXRpb24iLCJnZXQiLCIkc3RvcmUiLCJzdGF0ZSIsInNldCIsInZhbHVlIiwiY29tbWl0Iiwic3RhdGVGYWN0b3J5RGlzcGF0Y2hpbmciLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7Ozs7QUFJUSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBRUMsTUFBRixFQUFVQyxRQUFWLEVBQXdCOztBQUVwRCxLQUFJLENBQUVBLFFBQU4sRUFBZ0I7QUFBR0EsYUFBV0QsTUFBWDtBQUFvQjs7QUFHdkMsUUFBTztBQUNORSxLQURNLGlCQUNFO0FBQ1AsVUFBTyxLQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBbUJKLE1BQW5CLENBQVA7QUFDQSxHQUhLO0FBSU5LLEtBSk0sZUFJRkMsS0FKRSxFQUlLO0FBQ1YsUUFBS0gsTUFBTCxDQUFZSSxNQUFaLENBQW1CTixRQUFuQixFQUE2QkssS0FBN0I7QUFDQTtBQU5LLEVBQVA7QUFRQSxDQWJPOztBQWdCQSxJQUFNRSwwQkFBMEIsU0FBMUJBLHVCQUEwQixDQUFFUixNQUFGLEVBQVVDLFFBQVYsRUFBd0I7O0FBRS9ELEtBQUksQ0FBRUEsUUFBTixFQUFnQjtBQUFHQSxhQUFXRCxNQUFYO0FBQW9COztBQUd2QyxRQUFPO0FBQ05FLEtBRE0saUJBQ0U7QUFDUCxVQUFPLEtBQUtDLE1BQUwsQ0FBWUMsS0FBWixDQUFtQkosTUFBbkIsQ0FBUDtBQUNBLEdBSEs7QUFJTkssS0FKTSxlQUlGQyxLQUpFLEVBSUs7QUFDVixRQUFLSCxNQUFMLENBQVlNLFFBQVosQ0FBcUJSLFFBQXJCLEVBQStCSyxLQUEvQjtBQUNBO0FBTkssRUFBUDtBQVFBLENBYk8iLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IGdldHRlciBUaGUgbmFtZSBvZiB0aGUgZ2V0dGVyXG4gKiBAcGFyYW0ge1N0cmluZ3x1bmRlZmluZWR9IG11dGF0aW9uIFRoZSBuYW1lIG9mIHRoZSBtdXRhdGlvbiwgb3IgdW5kZWZpbmVkIHRvIHVzZSBzYW1lIG5hbWUgYXMgZ2V0dGVyXG4gKi9cbmV4cG9ydCAgY29uc3Qgc3RhdGVGYWN0b3J5ID0gKCBnZXR0ZXIsIG11dGF0aW9uICkgPT4ge1xuXG5cdGlmKCAhIG11dGF0aW9uICl7ICBtdXRhdGlvbiA9IGdldHRlcjsgfVxuXG5cblx0cmV0dXJuIHtcblx0XHRnZXQgKCkgIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVsgZ2V0dGVyIF07XG5cdFx0fSxcblx0XHRzZXQodmFsdWUpIHtcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdChtdXRhdGlvbiwgdmFsdWUpO1xuXHRcdH1cblx0fVxufTtcblxuXG5leHBvcnQgIGNvbnN0IHN0YXRlRmFjdG9yeURpc3BhdGNoaW5nID0gKCBnZXR0ZXIsIG11dGF0aW9uICkgPT4ge1xuXG5cdGlmKCAhIG11dGF0aW9uICl7ICBtdXRhdGlvbiA9IGdldHRlcjsgfVxuXG5cblx0cmV0dXJuIHtcblx0XHRnZXQgKCkgIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVsgZ2V0dGVyIF07XG5cdFx0fSxcblx0XHRzZXQodmFsdWUpIHtcblx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKG11dGF0aW9uLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc3RhdGVzL3N0YXRlRmFjdG9yeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})