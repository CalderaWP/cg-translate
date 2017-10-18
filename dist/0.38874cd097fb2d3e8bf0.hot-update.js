webpackHotUpdate(0,{

/***/ 20:
/* exports provided: default */
/* exports used: default */
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(/*! vuex */ 69);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(/*! ./mutations */ 46);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(/*! ./actions */ 44);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__(/*! ./getters */ 45);\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */]);\n\nvar STATE = {\n  field: {}\n};\n\nvar PLUGINS = [];\n\n\n\n\n\nObject.getOwnPropertyNames(__WEBPACK_IMPORTED_MODULE_4__getters__[\"a\" /* GETTERS */]).forEach(function (index) {\n  STATE[index] = CF_TRANS_ADMIN.hasOwnProperty(index) ? CF_TRANS_ADMIN[index] : null;\n});\n\nvar store = new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */].Store({\n  strict: false,\n  plugins: [],\n  modules: {},\n  state: STATE,\n  getters: __WEBPACK_IMPORTED_MODULE_4__getters__[\"a\" /* GETTERS */],\n  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__[\"a\" /* MUTATIONS */],\n  actions: __WEBPACK_IMPORTED_MODULE_3__actions__[\"a\" /* ACTIONS */]\n});\n\n/* harmony default export */ __webpack_exports__[\"a\"] = store;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJTVEFURSIsImZpZWxkIiwiUExVR0lOUyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJDRl9UUkFOU19BRE1JTiIsImhhc093blByb3BlcnR5Iiwic3RvcmUiLCJWdWV4IiwiU3RvcmUiLCJzdHJpY3QiLCJwbHVnaW5zIiwibW9kdWxlcyIsInN0YXRlIiwiZ2V0dGVycyIsIm11dGF0aW9ucyIsImFjdGlvbnMiLCJBQ1RJT05TIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUEsNENBQUFBLENBQUlDLEdBQUosQ0FBUSxxREFBUjs7QUFNQSxJQUFNQyxRQUFRO0FBQ1pDLFNBQU87QUFESyxDQUFkOztBQUtBLElBQU1DLFVBQVUsRUFBaEI7O0FBSUE7QUFDQTtBQUNBOztBQUVBQyxPQUFPQyxtQkFBUCxDQUEyQix5REFBM0IsRUFBb0NDLE9BQXBDLENBQTZDLFVBQUNDLEtBQUQsRUFBVztBQUN0RE4sUUFBTU0sS0FBTixJQUFlQyxlQUFlQyxjQUFmLENBQThCRixLQUE5QixJQUF1Q0MsZUFBZUQsS0FBZixDQUF2QyxHQUErRCxJQUE5RTtBQUNELENBRkQ7O0FBTUEsSUFBTUcsUUFBUyxJQUFJLHFEQUFBQyxDQUFLQyxLQUFULENBQWU7QUFDNUJDLFVBQVEsS0FEb0I7QUFFNUJDLFdBQVMsRUFGbUI7QUFHNUJDLFdBQVMsRUFIbUI7QUFJNUJDLFNBQU9mLEtBSnFCO0FBSzVCZ0IsV0FBUyx5REFMbUI7QUFNNUJDLGFBQVcsNkRBTmlCO0FBTzVCQyxXQUFTLHlEQUFBQztBQVBtQixDQUFmLENBQWY7O0FBWUEsd0RBQWVWLEtBQWYiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXG5cblZ1ZS51c2UoVnVleCk7XG5cblxuXG5cblxuY29uc3QgU1RBVEUgPSB7XG4gIGZpZWxkOiB7fVxufTtcblxuXG5jb25zdCBQTFVHSU5TID0gW1xuXG5dO1xuXG5pbXBvcnQgeyBNVVRBVElPTlMgfSBmcm9tICcuL211dGF0aW9ucyc7XG5pbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCAgeyBHRVRURVJTIH0gZnJvbSAnLi9nZXR0ZXJzJztcblxuT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoR0VUVEVSUykuZm9yRWFjaCggKGluZGV4KSA9PiB7XG4gIFNUQVRFW2luZGV4XSA9IENGX1RSQU5TX0FETUlOLmhhc093blByb3BlcnR5KGluZGV4KSA/IENGX1RSQU5TX0FETUlOW2luZGV4XSA6IG51bGw7XG59KTtcblxuXG5cbmNvbnN0IHN0b3JlID0gIG5ldyBWdWV4LlN0b3JlKHtcbiAgc3RyaWN0OiBmYWxzZSxcbiAgcGx1Z2luczogW10sXG4gIG1vZHVsZXM6IHt9LFxuICBzdGF0ZTogU1RBVEUsXG4gIGdldHRlcnM6IEdFVFRFUlMsXG4gIG11dGF0aW9uczogTVVUQVRJT05TLFxuICBhY3Rpb25zOiBBQ1RJT05TXG59KTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3JlL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})