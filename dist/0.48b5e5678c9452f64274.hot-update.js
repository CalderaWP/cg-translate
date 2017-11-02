webpackHotUpdate(0,{

/***/ 80:
/* exports provided: default */
/* exports used: default */
/*!**************************************!*\
  !*** ./client/plugins/CFUI/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _props = {\n\tid: String,\n\tlabelText: String\n};\n\nvar Input = {\n\tprops: {\n\t\tid: 'iFoo'\n\t},\n\trender: function render(h) {\n\t\treturn h('input', {\n\t\t\tattrs: {\n\t\t\t\tid: this.id\n\t\t\t}\n\t\t});\n\t}\n};\n\nvar Label = {\n\tprops: function props() {\n\t\treturn {\n\t\t\tlabelText: \"ldsaf\"\n\t\t};\n\t},\n\trender: function render(h) {\n\t\treturn h('label', {\n\t\t\tattrs: {\n\t\t\t\tfor: this.id\n\t\t\t}\n\t\t}, this.labelText);\n\t}\n};\n\nvar props = {\n\tid: 'foo',\n\tlabelText: 'Foo Label'\n};\n\nvar InputField = {\n\tprops: props,\n\trender: function render(h) {\n\t\treturn h('div', {\n\t\t\tattrs: {\n\t\t\t\tid: 'foo-wrap'\n\t\t\t}\n\n\t\t}, [h(Input, props), h(Label)]);\n\t}\n};\n\nvar components = {\n\t'cf-input': InputField\n};\n\n/**\n * Create plugin\n *\n * @type {{install: (function(*, *): void)}}\n */\nvar CFUI = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomponents: components\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = CFUI;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL0NGVUkvaW5kZXguanMiXSwibmFtZXMiOlsiX3Byb3BzIiwiaWQiLCJTdHJpbmciLCJsYWJlbFRleHQiLCJJbnB1dCIsInByb3BzIiwicmVuZGVyIiwiaCIsImF0dHJzIiwiTGFiZWwiLCJmb3IiLCJJbnB1dEZpZWxkIiwiY29tcG9uZW50cyIsIkNGVUkiLCJpbnN0YWxsIiwiVnVlIiwib3B0aW9ucyIsIm1peGluIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxTQUFTO0FBQ2RDLEtBQUlDLE1BRFU7QUFFZEMsWUFBV0Q7QUFGRyxDQUFmOztBQU1BLElBQU1FLFFBQVE7QUFDYkMsUUFBTztBQUNOSixNQUFJO0FBREUsRUFETTtBQUliSyxPQUphLGtCQUlOQyxDQUpNLEVBSUo7QUFDUixTQUFPQSxFQUFHLE9BQUgsRUFBWTtBQUNsQkMsVUFBTztBQUNOUCxRQUFJLEtBQUtBO0FBREg7QUFEVyxHQUFaLENBQVA7QUFLQTtBQVZZLENBQWQ7O0FBYUEsSUFBTVEsUUFBUTtBQUNiSixNQURhLG1CQUNMO0FBQ1AsU0FBTztBQUNORixjQUFXO0FBREwsR0FBUDtBQUdBLEVBTFk7QUFNYkcsT0FOYSxrQkFNTkMsQ0FOTSxFQU1KO0FBQ1IsU0FBT0EsRUFBRyxPQUFILEVBQVk7QUFDbEJDLFVBQU87QUFDTkUsU0FBSyxLQUFLVDtBQURKO0FBRFcsR0FBWixFQUlKLEtBQUtFLFNBSkQsQ0FBUDtBQUtBO0FBWlksQ0FBZDs7QUFlQSxJQUFNRSxRQUFRO0FBQ2JKLEtBQUksS0FEUztBQUViRSxZQUFXO0FBRkUsQ0FBZDs7QUFLQSxJQUFNUSxhQUFhO0FBQ2xCTixRQUFRQSxLQURVO0FBRWxCQyxPQUZrQixrQkFFWEMsQ0FGVyxFQUVUO0FBQ1IsU0FBT0EsRUFBRyxLQUFILEVBQVU7QUFDZkMsVUFBTztBQUNOUCxRQUFJO0FBREU7O0FBRFEsR0FBVixFQUtILENBQUVNLEVBQUVILEtBQUYsRUFBUUMsS0FBUixDQUFGLEVBQWtCRSxFQUFFRSxLQUFGLENBQWxCLENBTEcsQ0FBUDtBQVFBO0FBWGlCLENBQW5COztBQWVBLElBQUlHLGFBQWE7QUFDaEIsYUFBWUQ7QUFESSxDQUFqQjs7QUFJQTs7Ozs7QUFLQSxJQUFNRSxPQUFPO0FBQ1pDLFFBRFksbUJBQ0pDLEdBREksRUFDQ0MsT0FERCxFQUNVO0FBQ3JCRCxNQUFJRSxLQUFKLENBQVU7QUFDVEwsZUFBWUE7QUFESCxHQUFWO0FBR0E7QUFMVyxDQUFiOztBQVFBLHdEQUFlQyxJQUFmIiwiZmlsZSI6IjgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX3Byb3BzID0ge1xuXHRpZDogU3RyaW5nLFxuXHRsYWJlbFRleHQ6IFN0cmluZ1xufTtcblxuXG5jb25zdCBJbnB1dCA9IHtcblx0cHJvcHM6IHtcblx0XHRpZDogJ2lGb28nXG5cdH0sXG5cdHJlbmRlcihoKXtcblx0XHRyZXR1cm4gaCggJ2lucHV0Jywge1xuXHRcdFx0YXR0cnM6IHtcblx0XHRcdFx0aWQ6IHRoaXMuaWQsXG5cdFx0XHR9XG5cdFx0fSApXG5cdH1cbn1cblxuY29uc3QgTGFiZWwgPSB7XG5cdHByb3BzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbFRleHQ6IFwibGRzYWZcIlxuXHRcdH1cblx0fSxcblx0cmVuZGVyKGgpe1xuXHRcdHJldHVybiBoKCAnbGFiZWwnLCB7XG5cdFx0XHRhdHRyczoge1xuXHRcdFx0XHRmb3I6IHRoaXMuaWRcblx0XHRcdH1cblx0XHR9LCB0aGlzLmxhYmVsVGV4dCApXG5cdH1cbn1cblxuY29uc3QgcHJvcHMgPSB7XG5cdGlkOiAnZm9vJyxcblx0bGFiZWxUZXh0OiAnRm9vIExhYmVsJ1xufTtcblxuY29uc3QgSW5wdXRGaWVsZCA9IHtcblx0cHJvcHMgOiBwcm9wcyxcblx0cmVuZGVyKGgpe1xuXHRcdHJldHVybiBoKCAnZGl2Jywge1xuXHRcdFx0XHRhdHRycyA6e1xuXHRcdFx0XHRcdGlkOiAnZm9vLXdyYXAnXG5cdFx0XHRcdH1cblxuXHRcdFx0fSwgWyBoKElucHV0LHByb3BzKSwgaChMYWJlbCkgXVxuXHRcdCk7XG5cblx0fVxufTtcblxuXG5sZXQgY29tcG9uZW50cyA9IHtcblx0J2NmLWlucHV0JzogSW5wdXRGaWVsZFxufTtcblxuLyoqXG4gKiBDcmVhdGUgcGx1Z2luXG4gKlxuICogQHR5cGUge3tpbnN0YWxsOiAoZnVuY3Rpb24oKiwgKik6IHZvaWQpfX1cbiAqL1xuY29uc3QgQ0ZVSSA9IHtcblx0aW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcblx0XHRWdWUubWl4aW4oe1xuXHRcdFx0Y29tcG9uZW50czogY29tcG9uZW50c1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDRlVJO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wbHVnaW5zL0NGVUkvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})