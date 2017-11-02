webpackHotUpdate(0,{

/***/ 101:
/* exports provided: InputGroupFactory */
/* exports used: InputGroupFactory */
/*!**************************************************!*\
  !*** ./client/plugins/CFUI/InputGroupFactory.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input__ = __webpack_require__(/*! ./Input */ 90);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Input__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return InputGroupFactory; });\n\n\nvar InputGroupFactory = function InputGroupFactory(type) {\n\n\tvar group = {\n\t\tfunctional: true,\n\t\tprops: props,\n\t\trender: function render(h, context) {\n\t\t\treturn h('div', {\n\t\t\t\t'class': {\n\t\t\t\t\t'caldera-config-group': true\n\t\t\t\t},\n\t\t\t\tattrs: {\n\t\t\t\t\tid: 'wrap-' + context.props.id\n\t\t\t\t}\n\t\t\t}, [h('cf-label', {\n\t\t\t\tid: context.props.id,\n\t\t\t\tlabel: context.props.label\n\t\t\t}), h('cf-input', {\n\t\t\t\tid: context.props.id,\n\t\t\t\tvalue: context.props.value,\n\t\t\t\ttype: context.props.type\n\t\t\t})]);\n\t\t}\n\t};\n\n\treturn group;\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL0NGVUkvSW5wdXRHcm91cEZhY3RvcnkuanMiXSwibmFtZXMiOlsiSW5wdXRHcm91cEZhY3RvcnkiLCJ0eXBlIiwiZ3JvdXAiLCJmdW5jdGlvbmFsIiwicHJvcHMiLCJyZW5kZXIiLCJoIiwiY29udGV4dCIsImF0dHJzIiwiaWQiLCJsYWJlbCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFTyxJQUFNQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFFQyxJQUFGLEVBQVk7O0FBRTVDLEtBQUlDLFFBQVE7QUFDWEMsY0FBWSxJQUREO0FBRVhDLFNBQU9BLEtBRkk7QUFHWEMsUUFIVyxrQkFHSkMsQ0FISSxFQUdEQyxPQUhDLEVBR1E7QUFDbEIsVUFBT0QsRUFDTixLQURNLEVBRU47QUFDQyxhQUFTO0FBQ1IsNkJBQXdCO0FBRGhCLEtBRFY7QUFJQ0UsV0FBTztBQUNOQyxTQUFJLFVBQVVGLFFBQVFILEtBQVIsQ0FBY0s7QUFEdEI7QUFKUixJQUZNLEVBVU4sQ0FDQ0gsRUFBRSxVQUFGLEVBQ0M7QUFDQ0csUUFBSUYsUUFBUUgsS0FBUixDQUFjSyxFQURuQjtBQUVDQyxXQUFPSCxRQUFRSCxLQUFSLENBQWNNO0FBRnRCLElBREQsQ0FERCxFQU9DSixFQUFFLFVBQUYsRUFDQztBQUNDRyxRQUFJRixRQUFRSCxLQUFSLENBQWNLLEVBRG5CO0FBRUNFLFdBQU9KLFFBQVFILEtBQVIsQ0FBY08sS0FGdEI7QUFHQ1YsVUFBTU0sUUFBUUgsS0FBUixDQUFjSDtBQUhyQixJQURELENBUEQsQ0FWTSxDQUFQO0FBNEJBO0FBaENVLEVBQVo7O0FBbUNBLFFBQU9DLEtBQVA7QUFFQSxDQXZDTSIsImZpbGUiOiIxMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5leHBvcnQgY29uc3QgSW5wdXRHcm91cEZhY3RvcnkgPSAoIHR5cGUgKSA9PiB7XG5cblx0bGV0IGdyb3VwID0ge1xuXHRcdGZ1bmN0aW9uYWw6IHRydWUsXG5cdFx0cHJvcHM6IHByb3BzLFxuXHRcdHJlbmRlcihoLCBjb250ZXh0KSB7XG5cdFx0XHRyZXR1cm4gaChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQnY2xhc3MnOiB7XG5cdFx0XHRcdFx0XHQnY2FsZGVyYS1jb25maWctZ3JvdXAnOiB0cnVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YXR0cnM6IHtcblx0XHRcdFx0XHRcdGlkOiAnd3JhcC0nICsgY29udGV4dC5wcm9wcy5pZFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGgoJ2NmLWxhYmVsJyxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aWQ6IGNvbnRleHQucHJvcHMuaWQsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBjb250ZXh0LnByb3BzLmxhYmVsLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0aCgnY2YtaW5wdXQnLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRpZDogY29udGV4dC5wcm9wcy5pZCxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGNvbnRleHQucHJvcHMudmFsdWUsXG5cdFx0XHRcdFx0XHRcdHR5cGU6IGNvbnRleHQucHJvcHMudHlwZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblxuXG5cdFx0XHRcdF1cblx0XHRcdClcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIGdyb3VwO1xuXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wbHVnaW5zL0NGVUkvSW5wdXRHcm91cEZhY3RvcnkuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})