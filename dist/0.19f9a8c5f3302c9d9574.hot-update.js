webpackHotUpdate(0,{

/***/ 80:
/* exports provided: default */
/* exports used: default */
/*!**************************************!*\
  !*** ./client/plugins/CFUI/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var Input = {\n\trender: function render(h) {\n\t\treturn h('input', {\n\t\t\tattrs: {\n\t\t\t\tid: 'foo'\n\t\t\t}\n\t\t}, 'jsdf');\n\t}\n};\n\nvar Label = {\n\trender: function render(h) {\n\t\treturn h('label', {\n\t\t\tattrs: {\n\t\t\t\tfor: 'foo'\n\t\t\t}\n\t\t}, 'For');\n\t}\n};\n\nvar InputField = {\n\tcomponents: {\n\t\t'input': Input\n\t},\n\trender: function render(h) {\n\t\treturn h('div', {\n\t\t\tattrs: {\n\t\t\t\tid: 'foo-wrap'\n\t\t\t}\n\n\t\t}, [Input, Label]);\n\t}\n};\n\nvar components = {\n\t'cf-input': InputField\n};\n\n/**\n * Create plugin\n *\n * @type {{install: (function(*, *): void)}}\n */\nvar CFUI = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomponents: components\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = CFUI;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL0NGVUkvaW5kZXguanMiXSwibmFtZXMiOlsiSW5wdXQiLCJyZW5kZXIiLCJoIiwiYXR0cnMiLCJpZCIsIkxhYmVsIiwiZm9yIiwiSW5wdXRGaWVsZCIsImNvbXBvbmVudHMiLCJDRlVJIiwiaW5zdGFsbCIsIlZ1ZSIsIm9wdGlvbnMiLCJtaXhpbiJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsUUFBUTtBQUNiQyxPQURhLGtCQUNOQyxDQURNLEVBQ0o7QUFDUixTQUFPQSxFQUFHLE9BQUgsRUFBWTtBQUNsQkMsVUFBTztBQUNOQyxRQUFJO0FBREU7QUFEVyxHQUFaLEVBSUosTUFKSSxDQUFQO0FBS0E7QUFQWSxDQUFkOztBQVVBLElBQU1DLFFBQVE7QUFDYkosT0FEYSxrQkFDTkMsQ0FETSxFQUNKO0FBQ1IsU0FBT0EsRUFBRyxPQUFILEVBQVk7QUFDbEJDLFVBQU87QUFDTkcsU0FBSztBQURDO0FBRFcsR0FBWixFQUlKLEtBSkksQ0FBUDtBQUtBO0FBUFksQ0FBZDs7QUFVQSxJQUFNQyxhQUFhO0FBQ2xCQyxhQUFZO0FBQ1gsV0FBVVI7QUFEQyxFQURNO0FBSWxCQyxPQUprQixrQkFJWEMsQ0FKVyxFQUlUO0FBQ1IsU0FBT0EsRUFBRyxLQUFILEVBQVU7QUFDZkMsVUFBTztBQUNOQyxRQUFJO0FBREU7O0FBRFEsR0FBVixFQUtILENBQUVKLEtBQUYsRUFBU0ssS0FBVCxDQUxHLENBQVA7QUFRQTtBQWJpQixDQUFuQjs7QUFpQkEsSUFBSUcsYUFBYTtBQUNoQixhQUFZRDtBQURJLENBQWpCOztBQUlBOzs7OztBQUtBLElBQU1FLE9BQU87QUFDWkMsUUFEWSxtQkFDSkMsR0FESSxFQUNDQyxPQURELEVBQ1U7QUFDckJELE1BQUlFLEtBQUosQ0FBVTtBQUNUTCxlQUFZQTtBQURILEdBQVY7QUFHQTtBQUxXLENBQWI7O0FBUUEsd0RBQWVDLElBQWYiLCJmaWxlIjoiODAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJbnB1dCA9IHtcblx0cmVuZGVyKGgpe1xuXHRcdHJldHVybiBoKCAnaW5wdXQnLCB7XG5cdFx0XHRhdHRyczoge1xuXHRcdFx0XHRpZDogJ2Zvbydcblx0XHRcdH1cblx0XHR9LCAnanNkZicgKVxuXHR9XG59XG5cbmNvbnN0IExhYmVsID0ge1xuXHRyZW5kZXIoaCl7XG5cdFx0cmV0dXJuIGgoICdsYWJlbCcsIHtcblx0XHRcdGF0dHJzOiB7XG5cdFx0XHRcdGZvcjogJ2Zvbydcblx0XHRcdH1cblx0XHR9LCAnRm9yJyApXG5cdH1cbn1cblxuY29uc3QgSW5wdXRGaWVsZCA9IHtcblx0Y29tcG9uZW50czoge1xuXHRcdCdpbnB1dCcgOiBJbnB1dFxuXHR9LFxuXHRyZW5kZXIoaCl7XG5cdFx0cmV0dXJuIGgoICdkaXYnLCB7XG5cdFx0XHRcdGF0dHJzIDp7XG5cdFx0XHRcdFx0aWQ6ICdmb28td3JhcCdcblx0XHRcdFx0fVxuXG5cdFx0XHR9LCBbIElucHV0LCBMYWJlbCBdXG5cdFx0KTtcblxuXHR9XG59O1xuXG5cbmxldCBjb21wb25lbnRzID0ge1xuXHQnY2YtaW5wdXQnOiBJbnB1dEZpZWxkXG59O1xuXG4vKipcbiAqIENyZWF0ZSBwbHVnaW5cbiAqXG4gKiBAdHlwZSB7e2luc3RhbGw6IChmdW5jdGlvbigqLCAqKTogdm9pZCl9fVxuICovXG5jb25zdCBDRlVJID0ge1xuXHRpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuXHRcdFZ1ZS5taXhpbih7XG5cdFx0XHRjb21wb25lbnRzOiBjb21wb25lbnRzXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENGVUk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3BsdWdpbnMvQ0ZVSS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})