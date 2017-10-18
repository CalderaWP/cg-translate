webpackHotUpdate(0,{

/***/ 16:
/* exports provided: default */
/* exports used: default */
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(/*! vuex */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(/*! ./mutations */ 38);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(/*! ./actions */ 36);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__(/*! ./getters */ 37);\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */]);\n\nvar STATE = {\n  field: {},\n  fields: {},\n  language: ''\n};\n\nvar PLUGINS = [];\n\n\n\n\n\nObject.getOwnPropertyNames(__WEBPACK_IMPORTED_MODULE_4__getters__[\"a\" /* GETTERS */]).forEach(function (index) {\n  STATE[index] = CF_TRANS_ADMIN.hasOwnProperty(index) ? CF_TRANS_ADMIN[index] : null;\n});\n\nvar store = new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */].Store({\n  strict: false,\n  plugins: [],\n  modules: {},\n  state: STATE,\n  getters: __WEBPACK_IMPORTED_MODULE_4__getters__[\"a\" /* GETTERS */],\n  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__[\"a\" /* MUTATIONS */],\n  actions: __WEBPACK_IMPORTED_MODULE_3__actions__[\"a\" /* ACTIONS */]\n});\n\n/* harmony default export */ __webpack_exports__[\"a\"] = store;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJTVEFURSIsImZpZWxkIiwiZmllbGRzIiwibGFuZ3VhZ2UiLCJQTFVHSU5TIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvckVhY2giLCJpbmRleCIsIkNGX1RSQU5TX0FETUlOIiwiaGFzT3duUHJvcGVydHkiLCJzdG9yZSIsIlZ1ZXgiLCJTdG9yZSIsInN0cmljdCIsInBsdWdpbnMiLCJtb2R1bGVzIiwic3RhdGUiLCJnZXR0ZXJzIiwibXV0YXRpb25zIiwiYWN0aW9ucyIsIkFDVElPTlMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQSw0Q0FBQUEsQ0FBSUMsR0FBSixDQUFRLHFEQUFSOztBQU1BLElBQU1DLFFBQVE7QUFDWkMsU0FBTyxFQURLO0FBRVpDLFVBQVEsRUFGSTtBQUdaQyxZQUFVO0FBSEUsQ0FBZDs7QUFPQSxJQUFNQyxVQUFVLEVBQWhCOztBQUlBO0FBQ0E7QUFDQTs7QUFFQUMsT0FBT0MsbUJBQVAsQ0FBMkIseURBQTNCLEVBQW9DQyxPQUFwQyxDQUE2QyxVQUFDQyxLQUFELEVBQVc7QUFDdERSLFFBQU1RLEtBQU4sSUFBZUMsZUFBZUMsY0FBZixDQUE4QkYsS0FBOUIsSUFBdUNDLGVBQWVELEtBQWYsQ0FBdkMsR0FBK0QsSUFBOUU7QUFDRCxDQUZEOztBQU1BLElBQU1HLFFBQVMsSUFBSSxxREFBQUMsQ0FBS0MsS0FBVCxDQUFlO0FBQzVCQyxVQUFRLEtBRG9CO0FBRTVCQyxXQUFTLEVBRm1CO0FBRzVCQyxXQUFTLEVBSG1CO0FBSTVCQyxTQUFPakIsS0FKcUI7QUFLNUJrQixXQUFTLHlEQUxtQjtBQU01QkMsYUFBVyw2REFOaUI7QUFPNUJDLFdBQVMseURBQUFDO0FBUG1CLENBQWYsQ0FBZjs7QUFZQSx3REFBZVYsS0FBZiIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcblxuVnVlLnVzZShWdWV4KTtcblxuXG5cblxuXG5jb25zdCBTVEFURSA9IHtcbiAgZmllbGQ6IHt9LFxuICBmaWVsZHM6IHt9LFxuICBsYW5ndWFnZTogJydcbn07XG5cblxuY29uc3QgUExVR0lOUyA9IFtcblxuXTtcblxuaW1wb3J0IHsgTVVUQVRJT05TIH0gZnJvbSAnLi9tdXRhdGlvbnMnO1xuaW1wb3J0IHsgQUNUSU9OUyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgIHsgR0VUVEVSUyB9IGZyb20gJy4vZ2V0dGVycyc7XG5cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEdFVFRFUlMpLmZvckVhY2goIChpbmRleCkgPT4ge1xuICBTVEFURVtpbmRleF0gPSBDRl9UUkFOU19BRE1JTi5oYXNPd25Qcm9wZXJ0eShpbmRleCkgPyBDRl9UUkFOU19BRE1JTltpbmRleF0gOiBudWxsO1xufSk7XG5cblxuXG5jb25zdCBzdG9yZSA9ICBuZXcgVnVleC5TdG9yZSh7XG4gIHN0cmljdDogZmFsc2UsXG4gIHBsdWdpbnM6IFtdLFxuICBtb2R1bGVzOiB7fSxcbiAgc3RhdGU6IFNUQVRFLFxuICBnZXR0ZXJzOiBHRVRURVJTLFxuICBtdXRhdGlvbnM6IE1VVEFUSU9OUyxcbiAgYWN0aW9uczogQUNUSU9OU1xufSk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})