webpackHotUpdate(0,{

/***/ 77:
/* exports provided: default */
/* exports used: default */
/*!***************************************!*\
  !*** ./client/plugins/state/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factories__ = __webpack_require__(/*! ./factories */ 78);\n\n\nvar factories = {\n\ttwoWay: {},\n\tdispatching: {},\n\toneWay: {}\n};\n\nvar twoWayFACTORY = function twoWayFACTORY(prop) {\n\n\tif (!factories.twoWay.hasOwnProperty(prop)) {\n\t\tfactories.twoWay[prop] = new __WEBPACK_IMPORTED_MODULE_0__factories__[\"a\" /* StateFactory */](prop);\n\t}\n\treturn factories.twoWay[prop];\n};\n\nvar computed = {};\n\nvar stateComputes = {\n\ttwoWay: ['foo'],\n\tdispatching: [],\n\toneWay: []\n\n};\n\nstateComputes.twoWay.forEach(function (key, i) {\n\tcomputed[key] = twoWayFACTORY(key);\n});\n\nvar statePlugin = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomputed: computed\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = statePlugin;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL3N0YXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbImZhY3RvcmllcyIsInR3b1dheSIsImRpc3BhdGNoaW5nIiwib25lV2F5IiwidHdvV2F5RkFDVE9SWSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbXB1dGVkIiwic3RhdGVDb21wdXRlcyIsImZvckVhY2giLCJrZXkiLCJpIiwic3RhdGVQbHVnaW4iLCJpbnN0YWxsIiwiVnVlIiwib3B0aW9ucyIsIm1peGluIl0sIm1hcHBpbmdzIjoiO0FBQUE7O0FBTUEsSUFBSUEsWUFBWTtBQUNmQyxTQUFRLEVBRE87QUFFZkMsY0FBYSxFQUZFO0FBR2ZDLFNBQVE7QUFITyxDQUFoQjs7QUFNQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUVDLElBQUYsRUFBWTs7QUFFakMsS0FBSyxDQUFFTCxVQUFVQyxNQUFWLENBQWlCSyxjQUFqQixDQUFpQ0QsSUFBakMsQ0FBUCxFQUFpRDtBQUNoREwsWUFBVUMsTUFBVixDQUFpQkksSUFBakIsSUFBeUIsSUFBSSxnRUFBSixDQUFpQkEsSUFBakIsQ0FBekI7QUFDQTtBQUNELFFBQU9MLFVBQVVDLE1BQVYsQ0FBaUJJLElBQWpCLENBQVA7QUFDQSxDQU5EOztBQVFBLElBQUlFLFdBQVcsRUFBZjs7QUFFQSxJQUFNQyxnQkFBZ0I7QUFDckJQLFNBQVEsQ0FDUCxLQURPLENBRGE7QUFJckJDLGNBQWEsRUFKUTtBQU9yQkMsU0FBUTs7QUFQYSxDQUF0Qjs7QUFhQUssY0FBY1AsTUFBZCxDQUFxQlEsT0FBckIsQ0FBOEIsVUFBQ0MsR0FBRCxFQUFLQyxDQUFMLEVBQVc7QUFDeENKLFVBQVNHLEdBQVQsSUFBZ0JOLGNBQWVNLEdBQWYsQ0FBaEI7QUFDQSxDQUZEOztBQUtBLElBQU1FLGNBQWM7QUFDbkJDLFFBRG1CLG1CQUNYQyxHQURXLEVBQ05DLE9BRE0sRUFDRztBQUNyQkQsTUFBSUUsS0FBSixDQUFVO0FBQ1RULGFBQVVBO0FBREQsR0FBVjtBQUdBO0FBTGtCLENBQXBCOztBQVFBLHdEQUFlSyxXQUFmIiwiZmlsZSI6Ijc3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7XG5cdFN0YXRlRmFjdG9yeSxcblx0U3RhdGVGYWN0b3J5UmVhZE9ubHksXG5cdFN0YXRlRmFjdG9yeURpc3BhdGNoaW5nXG59IGZyb20gJy4vZmFjdG9yaWVzJztcblxubGV0IGZhY3RvcmllcyA9IHtcblx0dHdvV2F5OiB7fSxcblx0ZGlzcGF0Y2hpbmc6IHt9LFxuXHRvbmVXYXk6IHt9XG59O1xuXG5jb25zdCB0d29XYXlGQUNUT1JZID0gKCBwcm9wICkgPT4ge1xuXG5cdGlmICggISBmYWN0b3JpZXMudHdvV2F5Lmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XG5cdFx0ZmFjdG9yaWVzLnR3b1dheVtwcm9wXSA9IG5ldyBTdGF0ZUZhY3RvcnkocHJvcCk7XG5cdH1cblx0cmV0dXJuIGZhY3Rvcmllcy50d29XYXlbcHJvcF07XG59O1xuXG5sZXQgY29tcHV0ZWQgPSB7fTtcblxuY29uc3Qgc3RhdGVDb21wdXRlcyA9IHtcblx0dHdvV2F5OiBbXG5cdFx0J2Zvbydcblx0XSxcblx0ZGlzcGF0Y2hpbmc6IFtcblxuXHRdLFxuXHRvbmVXYXk6IFtcblxuXHRdXG5cbn07XG5cbnN0YXRlQ29tcHV0ZXMudHdvV2F5LmZvckVhY2goIChrZXksaSkgPT4ge1xuXHRjb21wdXRlZFtrZXldID0gdHdvV2F5RkFDVE9SWSgga2V5ICk7XG59KTtcblxuXG5jb25zdCBzdGF0ZVBsdWdpbiA9IHtcblx0aW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcblx0XHRWdWUubWl4aW4oe1xuXHRcdFx0Y29tcHV0ZWQ6IGNvbXB1dGVkXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlUGx1Z2luO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wbHVnaW5zL3N0YXRlL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})