webpackHotUpdate(0,{

/***/ 77:
/* exports provided: default */
/* exports used: default */
/*!***************************************!*\
  !*** ./client/plugins/state/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factories__ = __webpack_require__(/*! ./factories */ 78);\n\n\nvar factories = {};\n\nvar twoWayFACTORY = function twoWayFACTORY(prop) {\n\n\tif (!factories.hasOwnProperty(prop)) {\n\t\tfactories[prop] = new __WEBPACK_IMPORTED_MODULE_0__factories__[\"a\" /* StateFactory */](prop);\n\t}\n\treturn factories[prop];\n};\n\nvar computed = {};\n\nvar stateComputes = {\n\ttwoWay: ['foo'],\n\tdispatching: [],\n\toneWay: []\n\n};\n\nstateComputes.twoWay.forEach(function (key, i) {\n\tcomputed[key] = FACTORY(key);\n});\n\nvar statePlugin = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomputed: computed\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = statePlugin;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL3N0YXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbImZhY3RvcmllcyIsInR3b1dheUZBQ1RPUlkiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJjb21wdXRlZCIsInN0YXRlQ29tcHV0ZXMiLCJ0d29XYXkiLCJkaXNwYXRjaGluZyIsIm9uZVdheSIsImZvckVhY2giLCJrZXkiLCJpIiwiRkFDVE9SWSIsInN0YXRlUGx1Z2luIiwiaW5zdGFsbCIsIlZ1ZSIsIm9wdGlvbnMiLCJtaXhpbiJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQU1BLElBQUlBLFlBQVksRUFBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFFQyxJQUFGLEVBQVk7O0FBRWpDLEtBQUssQ0FBRUYsVUFBVUcsY0FBVixDQUEwQkQsSUFBMUIsQ0FBUCxFQUEwQztBQUN6Q0YsWUFBVUUsSUFBVixJQUFrQixJQUFJLGdFQUFKLENBQWlCQSxJQUFqQixDQUFsQjtBQUNBO0FBQ0QsUUFBT0YsVUFBVUUsSUFBVixDQUFQO0FBQ0EsQ0FORDs7QUFRQSxJQUFJRSxXQUFXLEVBQWY7O0FBRUEsSUFBTUMsZ0JBQWdCO0FBQ3JCQyxTQUFRLENBQ1AsS0FETyxDQURhO0FBSXJCQyxjQUFhLEVBSlE7QUFPckJDLFNBQVE7O0FBUGEsQ0FBdEI7O0FBYUFILGNBQWNDLE1BQWQsQ0FBcUJHLE9BQXJCLENBQThCLFVBQUNDLEdBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQ3hDUCxVQUFTTSxHQUFULElBQWdCRSxRQUFTRixHQUFULENBQWhCO0FBQ0EsQ0FGRDs7QUFLQSxJQUFNRyxjQUFjO0FBQ25CQyxRQURtQixtQkFDWEMsR0FEVyxFQUNOQyxPQURNLEVBQ0c7QUFDckJELE1BQUlFLEtBQUosQ0FBVTtBQUNUYixhQUFVQTtBQURELEdBQVY7QUFHQTtBQUxrQixDQUFwQjs7QUFRQSx3REFBZVMsV0FBZiIsImZpbGUiOiI3Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAge1xuXHRTdGF0ZUZhY3RvcnksXG5cdFN0YXRlRmFjdG9yeVJlYWRPbmx5LFxuXHRTdGF0ZUZhY3RvcnlEaXNwYXRjaGluZ1xufSBmcm9tICcuL2ZhY3Rvcmllcyc7XG5cbmxldCBmYWN0b3JpZXMgPSB7fTtcblxuY29uc3QgdHdvV2F5RkFDVE9SWSA9ICggcHJvcCApID0+IHtcblxuXHRpZiAoICEgZmFjdG9yaWVzLmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XG5cdFx0ZmFjdG9yaWVzW3Byb3BdID0gbmV3IFN0YXRlRmFjdG9yeShwcm9wKTtcblx0fVxuXHRyZXR1cm4gZmFjdG9yaWVzW3Byb3BdO1xufTtcblxubGV0IGNvbXB1dGVkID0ge307XG5cbmNvbnN0IHN0YXRlQ29tcHV0ZXMgPSB7XG5cdHR3b1dheTogW1xuXHRcdCdmb28nXG5cdF0sXG5cdGRpc3BhdGNoaW5nOiBbXG5cblx0XSxcblx0b25lV2F5OiBbXG5cblx0XVxuXG59O1xuXG5zdGF0ZUNvbXB1dGVzLnR3b1dheS5mb3JFYWNoKCAoa2V5LGkpID0+IHtcblx0Y29tcHV0ZWRba2V5XSA9IEZBQ1RPUlkoIGtleSApO1xufSk7XG5cblxuY29uc3Qgc3RhdGVQbHVnaW4gPSB7XG5cdGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG5cdFx0VnVlLm1peGluKHtcblx0XHRcdGNvbXB1dGVkOiBjb21wdXRlZFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZVBsdWdpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGx1Z2lucy9zdGF0ZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})