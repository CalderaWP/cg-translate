webpackHotUpdate(0,{

/***/ 80:
/* exports provided: default */
/* exports used: default */
/*!**************************************!*\
  !*** ./client/plugins/CFUI/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var Input = {\n\trender: function render(h) {\n\t\treturn h('input', {\n\t\t\tattrs: {\n\t\t\t\tid: 'foo'\n\t\t\t}\n\t\t}, 'jsdf');\n\t}\n};\n\nvar Label = {\n\trender: function render(h) {\n\t\treturn h('label', {\n\t\t\tattrs: {\n\t\t\t\tfor: 'foo'\n\t\t\t}\n\t\t}, 'For');\n\t}\n};\n\nvar InputField = {\n\tprops: {\n\t\tid: id\n\t},\n\trender: function render(h) {\n\t\treturn h('div', {\n\t\t\tattrs: {\n\t\t\t\tid: 'foo-wrap'\n\t\t\t}\n\n\t\t}, [h(Input), h(Label)]);\n\t}\n};\n\nvar components = {\n\t'cf-input': InputField\n};\n\n/**\n * Create plugin\n *\n * @type {{install: (function(*, *): void)}}\n */\nvar CFUI = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomponents: components\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = CFUI;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL0NGVUkvaW5kZXguanMiXSwibmFtZXMiOlsiSW5wdXQiLCJyZW5kZXIiLCJoIiwiYXR0cnMiLCJpZCIsIkxhYmVsIiwiZm9yIiwiSW5wdXRGaWVsZCIsInByb3BzIiwiY29tcG9uZW50cyIsIkNGVUkiLCJpbnN0YWxsIiwiVnVlIiwib3B0aW9ucyIsIm1peGluIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxRQUFRO0FBQ2JDLE9BRGEsa0JBQ05DLENBRE0sRUFDSjtBQUNSLFNBQU9BLEVBQUcsT0FBSCxFQUFZO0FBQ2xCQyxVQUFPO0FBQ05DLFFBQUk7QUFERTtBQURXLEdBQVosRUFJSixNQUpJLENBQVA7QUFLQTtBQVBZLENBQWQ7O0FBVUEsSUFBTUMsUUFBUTtBQUNiSixPQURhLGtCQUNOQyxDQURNLEVBQ0o7QUFDUixTQUFPQSxFQUFHLE9BQUgsRUFBWTtBQUNsQkMsVUFBTztBQUNORyxTQUFLO0FBREM7QUFEVyxHQUFaLEVBSUosS0FKSSxDQUFQO0FBS0E7QUFQWSxDQUFkOztBQVVBLElBQU1DLGFBQWE7QUFDbEJDLFFBQVE7QUFDUEo7QUFETyxFQURVO0FBSWxCSCxPQUprQixrQkFJWEMsQ0FKVyxFQUlUO0FBQ1IsU0FBT0EsRUFBRyxLQUFILEVBQVU7QUFDZkMsVUFBTztBQUNOQyxRQUFJO0FBREU7O0FBRFEsR0FBVixFQUtILENBQUVGLEVBQUVGLEtBQUYsQ0FBRixFQUFZRSxFQUFFRyxLQUFGLENBQVosQ0FMRyxDQUFQO0FBUUE7QUFiaUIsQ0FBbkI7O0FBaUJBLElBQUlJLGFBQWE7QUFDaEIsYUFBWUY7QUFESSxDQUFqQjs7QUFJQTs7Ozs7QUFLQSxJQUFNRyxPQUFPO0FBQ1pDLFFBRFksbUJBQ0pDLEdBREksRUFDQ0MsT0FERCxFQUNVO0FBQ3JCRCxNQUFJRSxLQUFKLENBQVU7QUFDVEwsZUFBWUE7QUFESCxHQUFWO0FBR0E7QUFMVyxDQUFiOztBQVFBLHdEQUFlQyxJQUFmIiwiZmlsZSI6IjgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSW5wdXQgPSB7XG5cdHJlbmRlcihoKXtcblx0XHRyZXR1cm4gaCggJ2lucHV0Jywge1xuXHRcdFx0YXR0cnM6IHtcblx0XHRcdFx0aWQ6ICdmb28nXG5cdFx0XHR9XG5cdFx0fSwgJ2pzZGYnIClcblx0fVxufVxuXG5jb25zdCBMYWJlbCA9IHtcblx0cmVuZGVyKGgpe1xuXHRcdHJldHVybiBoKCAnbGFiZWwnLCB7XG5cdFx0XHRhdHRyczoge1xuXHRcdFx0XHRmb3I6ICdmb28nXG5cdFx0XHR9XG5cdFx0fSwgJ0ZvcicgKVxuXHR9XG59XG5cbmNvbnN0IElucHV0RmllbGQgPSB7XG5cdHByb3BzIDoge1xuXHRcdGlkXG5cdH0sXG5cdHJlbmRlcihoKXtcblx0XHRyZXR1cm4gaCggJ2RpdicsIHtcblx0XHRcdFx0YXR0cnMgOntcblx0XHRcdFx0XHRpZDogJ2Zvby13cmFwJ1xuXHRcdFx0XHR9XG5cblx0XHRcdH0sIFsgaChJbnB1dCksIGgoTGFiZWwpIF1cblx0XHQpO1xuXG5cdH1cbn07XG5cblxubGV0IGNvbXBvbmVudHMgPSB7XG5cdCdjZi1pbnB1dCc6IElucHV0RmllbGRcbn07XG5cbi8qKlxuICogQ3JlYXRlIHBsdWdpblxuICpcbiAqIEB0eXBlIHt7aW5zdGFsbDogKGZ1bmN0aW9uKCosICopOiB2b2lkKX19XG4gKi9cbmNvbnN0IENGVUkgPSB7XG5cdGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG5cdFx0VnVlLm1peGluKHtcblx0XHRcdGNvbXBvbmVudHM6IGNvbXBvbmVudHNcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ0ZVSTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGx1Z2lucy9DRlVJL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})