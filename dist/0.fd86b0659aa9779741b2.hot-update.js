webpackHotUpdate(0,{

/***/ 23:
/* exports provided: stateFactory, default */
/* exports used: default */
/*!*******************************!*\
  !*** ./client/plugins/foo.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export stateFactory */\n\nvar getterToSetter = function getterToSetter(mutation, getter) {\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\treturn mutation;\n};\n\nvar stateFactory = function stateFactory(getter, mutation) {\n\n\tmutation = getterToSetter(mutation, getter);\n\n\treturn {\n\t\tget: function get() {\n\t\t\treturn this.$store.state[getter];\n\t\t},\n\t\tset: function set(value) {\n\t\t\tthis.$store.commit(mutation, value);\n\t\t}\n\t};\n};\n\nvar FooPlugin = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomputed: {\n\t\t\t\tfoo: new stateFactory('foo')\n\t\t\t}\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = FooPlugin;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL2Zvby5qcyJdLCJuYW1lcyI6WyJnZXR0ZXJUb1NldHRlciIsIm11dGF0aW9uIiwiZ2V0dGVyIiwic3RhdGVGYWN0b3J5IiwiZ2V0IiwiJHN0b3JlIiwic3RhdGUiLCJzZXQiLCJ2YWx1ZSIsImNvbW1pdCIsIkZvb1BsdWdpbiIsImluc3RhbGwiLCJWdWUiLCJvcHRpb25zIiwibWl4aW4iLCJjb21wdXRlZCIsImZvbyJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVVDLFFBQVYsRUFBb0JDLE1BQXBCLEVBQTRCO0FBQ2xELEtBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2RBLGFBQVdDLE1BQVg7QUFDQTtBQUNELFFBQU9ELFFBQVA7QUFDQSxDQUxEOztBQVFRLElBQU1FLGVBQWUsU0FBZkEsWUFBZSxDQUFFRCxNQUFGLEVBQVVELFFBQVYsRUFBd0I7O0FBRXBEQSxZQUFXRCxlQUFlQyxRQUFmLEVBQXlCQyxNQUF6QixDQUFYOztBQUVBLFFBQU87QUFDTkUsS0FETSxpQkFDRTtBQUNQLFVBQU8sS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQW1CSixNQUFuQixDQUFQO0FBQ0EsR0FISztBQUlOSyxLQUpNLGVBSUZDLEtBSkUsRUFJSztBQUNWLFFBQUtILE1BQUwsQ0FBWUksTUFBWixDQUFtQlIsUUFBbkIsRUFBNkJPLEtBQTdCO0FBQ0E7QUFOSyxFQUFQO0FBUUEsQ0FaTzs7QUFjUixJQUFNRSxZQUFZO0FBQ2pCQyxRQURpQixtQkFDVEMsR0FEUyxFQUNKQyxPQURJLEVBQ0s7QUFDckJELE1BQUlFLEtBQUosQ0FBVTtBQUNUQyxhQUFVO0FBQ1RDLFNBQUssSUFBSWIsWUFBSixDQUFrQixLQUFsQjtBQURJO0FBREQsR0FBVjtBQUtBO0FBUGdCLENBQWxCOztBQVVBLHdEQUFlTyxTQUFmIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBnZXR0ZXJUb1NldHRlciA9IGZ1bmN0aW9uIChtdXRhdGlvbiwgZ2V0dGVyKSB7XG5cdGlmICghbXV0YXRpb24pIHtcblx0XHRtdXRhdGlvbiA9IGdldHRlcjtcblx0fVxuXHRyZXR1cm4gbXV0YXRpb247XG59O1xuXG5cbmV4cG9ydCAgY29uc3Qgc3RhdGVGYWN0b3J5ID0gKCBnZXR0ZXIsIG11dGF0aW9uICkgPT4ge1xuXG5cdG11dGF0aW9uID0gZ2V0dGVyVG9TZXR0ZXIobXV0YXRpb24sIGdldHRlcik7XG5cblx0cmV0dXJuIHtcblx0XHRnZXQgKCkgIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVsgZ2V0dGVyIF07XG5cdFx0fSxcblx0XHRzZXQodmFsdWUpIHtcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdChtdXRhdGlvbiwgdmFsdWUpO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgRm9vUGx1Z2luID0ge1xuXHRpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuXHRcdFZ1ZS5taXhpbih7XG5cdFx0XHRjb21wdXRlZDoge1xuXHRcdFx0XHRmb286IG5ldyBzdGF0ZUZhY3RvcnkoICdmb28nIClcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vUGx1Z2luO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wbHVnaW5zL2Zvby5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})