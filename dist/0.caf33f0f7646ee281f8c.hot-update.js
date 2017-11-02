webpackHotUpdate(0,{

/***/ 80:
/* exports provided: default */
/* exports used: default */
/*!**************************************!*\
  !*** ./client/plugins/CFUI/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _props = {\n\tid: String,\n\tlabelText: String\n};\n\nvar Input = {\n\tprops: {\n\t\tid: 'iFoo'\n\t},\n\trender: function render(h) {\n\t\treturn h('input', {\n\t\t\tattrs: {\n\t\t\t\tid: this.id\n\t\t\t}\n\t\t});\n\t}\n};\n\nvar Label = {\n\tdata: {\n\t\tid: 'LLFoo',\n\t\tlabelText: 'LABEL TEXT'\n\t},\n\trender: function render(h) {\n\t\treturn h('label', {\n\t\t\tattrs: {\n\t\t\t\tfor: this.id\n\t\t\t}\n\t\t}, 'ddd');\n\t}\n};\n\nvar props = {\n\tid: 'foo',\n\tlabelText: 'Foo Label'\n};\n\nvar InputField = {\n\tprops: props,\n\trender: function render(h) {\n\t\treturn h('div', {\n\t\t\tattrs: {\n\t\t\t\tid: 'foo-wrap'\n\t\t\t}\n\n\t\t}, [h(Input, props), h(Label)]);\n\t}\n};\n\nvar components = {\n\t'cf-input': InputField\n};\n\n/**\n * Create plugin\n *\n * @type {{install: (function(*, *): void)}}\n */\nvar CFUI = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomponents: components\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = CFUI;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL0NGVUkvaW5kZXguanMiXSwibmFtZXMiOlsiX3Byb3BzIiwiaWQiLCJTdHJpbmciLCJsYWJlbFRleHQiLCJJbnB1dCIsInByb3BzIiwicmVuZGVyIiwiaCIsImF0dHJzIiwiTGFiZWwiLCJkYXRhIiwiZm9yIiwiSW5wdXRGaWVsZCIsImNvbXBvbmVudHMiLCJDRlVJIiwiaW5zdGFsbCIsIlZ1ZSIsIm9wdGlvbnMiLCJtaXhpbiJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsU0FBUztBQUNkQyxLQUFJQyxNQURVO0FBRWRDLFlBQVdEO0FBRkcsQ0FBZjs7QUFNQSxJQUFNRSxRQUFRO0FBQ2JDLFFBQU87QUFDTkosTUFBSTtBQURFLEVBRE07QUFJYkssT0FKYSxrQkFJTkMsQ0FKTSxFQUlKO0FBQ1IsU0FBT0EsRUFBRyxPQUFILEVBQVk7QUFDbEJDLFVBQU87QUFDTlAsUUFBSSxLQUFLQTtBQURIO0FBRFcsR0FBWixDQUFQO0FBS0E7QUFWWSxDQUFkOztBQWFBLElBQU1RLFFBQVE7QUFDYkMsT0FBTTtBQUNMVCxNQUFJLE9BREM7QUFFTEUsYUFBVztBQUZOLEVBRE87QUFLYkcsT0FMYSxrQkFLTkMsQ0FMTSxFQUtKO0FBQ1IsU0FBT0EsRUFBRyxPQUFILEVBQVk7QUFDbEJDLFVBQU87QUFDTkcsU0FBSyxLQUFLVjtBQURKO0FBRFcsR0FBWixFQUlKLEtBSkksQ0FBUDtBQUtBO0FBWFksQ0FBZDs7QUFjQSxJQUFNSSxRQUFRO0FBQ2JKLEtBQUksS0FEUztBQUViRSxZQUFXO0FBRkUsQ0FBZDs7QUFLQSxJQUFNUyxhQUFhO0FBQ2xCUCxRQUFRQSxLQURVO0FBRWxCQyxPQUZrQixrQkFFWEMsQ0FGVyxFQUVUO0FBQ1IsU0FBT0EsRUFBRyxLQUFILEVBQVU7QUFDZkMsVUFBTztBQUNOUCxRQUFJO0FBREU7O0FBRFEsR0FBVixFQUtILENBQUVNLEVBQUVILEtBQUYsRUFBUUMsS0FBUixDQUFGLEVBQWtCRSxFQUFFRSxLQUFGLENBQWxCLENBTEcsQ0FBUDtBQVFBO0FBWGlCLENBQW5COztBQWVBLElBQUlJLGFBQWE7QUFDaEIsYUFBWUQ7QUFESSxDQUFqQjs7QUFJQTs7Ozs7QUFLQSxJQUFNRSxPQUFPO0FBQ1pDLFFBRFksbUJBQ0pDLEdBREksRUFDQ0MsT0FERCxFQUNVO0FBQ3JCRCxNQUFJRSxLQUFKLENBQVU7QUFDVEwsZUFBWUE7QUFESCxHQUFWO0FBR0E7QUFMVyxDQUFiOztBQVFBLHdEQUFlQyxJQUFmIiwiZmlsZSI6IjgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX3Byb3BzID0ge1xuXHRpZDogU3RyaW5nLFxuXHRsYWJlbFRleHQ6IFN0cmluZ1xufTtcblxuXG5jb25zdCBJbnB1dCA9IHtcblx0cHJvcHM6IHtcblx0XHRpZDogJ2lGb28nXG5cdH0sXG5cdHJlbmRlcihoKXtcblx0XHRyZXR1cm4gaCggJ2lucHV0Jywge1xuXHRcdFx0YXR0cnM6IHtcblx0XHRcdFx0aWQ6IHRoaXMuaWQsXG5cdFx0XHR9XG5cdFx0fSApXG5cdH1cbn1cblxuY29uc3QgTGFiZWwgPSB7XG5cdGRhdGE6IHtcblx0XHRpZDogJ0xMRm9vJyxcblx0XHRsYWJlbFRleHQ6ICdMQUJFTCBURVhUJ1xuXHR9LFxuXHRyZW5kZXIoaCl7XG5cdFx0cmV0dXJuIGgoICdsYWJlbCcsIHtcblx0XHRcdGF0dHJzOiB7XG5cdFx0XHRcdGZvcjogdGhpcy5pZFxuXHRcdFx0fVxuXHRcdH0sICdkZGQnIClcblx0fVxufVxuXG5jb25zdCBwcm9wcyA9IHtcblx0aWQ6ICdmb28nLFxuXHRsYWJlbFRleHQ6ICdGb28gTGFiZWwnXG59O1xuXG5jb25zdCBJbnB1dEZpZWxkID0ge1xuXHRwcm9wcyA6IHByb3BzLFxuXHRyZW5kZXIoaCl7XG5cdFx0cmV0dXJuIGgoICdkaXYnLCB7XG5cdFx0XHRcdGF0dHJzIDp7XG5cdFx0XHRcdFx0aWQ6ICdmb28td3JhcCdcblx0XHRcdFx0fVxuXG5cdFx0XHR9LCBbIGgoSW5wdXQscHJvcHMpLCBoKExhYmVsKSBdXG5cdFx0KTtcblxuXHR9XG59O1xuXG5cbmxldCBjb21wb25lbnRzID0ge1xuXHQnY2YtaW5wdXQnOiBJbnB1dEZpZWxkXG59O1xuXG4vKipcbiAqIENyZWF0ZSBwbHVnaW5cbiAqXG4gKiBAdHlwZSB7e2luc3RhbGw6IChmdW5jdGlvbigqLCAqKTogdm9pZCl9fVxuICovXG5jb25zdCBDRlVJID0ge1xuXHRpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuXHRcdFZ1ZS5taXhpbih7XG5cdFx0XHRjb21wb25lbnRzOiBjb21wb25lbnRzXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENGVUk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3BsdWdpbnMvQ0ZVSS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})