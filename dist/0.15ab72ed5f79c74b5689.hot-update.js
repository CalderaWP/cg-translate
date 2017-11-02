webpackHotUpdate(0,{

/***/ 80:
/* exports provided: default */
/* exports used: default */
/*!**************************************!*\
  !*** ./client/plugins/CFUI/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _props = {\n\tid: String,\n\tlabelText: String\n};\n\nvar Input = {\n\tprops: {\n\t\tid: 'iFoo'\n\t},\n\trender: function render(h) {\n\t\treturn h('input', {\n\t\t\tattrs: {\n\t\t\t\tid: this.id\n\t\t\t}\n\t\t});\n\t}\n};\n\nvar Label = {\n\tprops: {\n\t\tid: 'LLFoo',\n\t\tlabelText: 'LABEL TEXT'\n\t},\n\trender: function render(h) {\n\t\treturn h('label', {\n\t\t\tattrs: {\n\t\t\t\tfor: this.id\n\t\t\t}\n\t\t}, 'ddd');\n\t}\n};\n\nvar props = {\n\tid: 'foo',\n\tlabelText: 'Foo Label'\n};\n\nvar InputField = {\n\tprops: props,\n\trender: function render(h) {\n\t\treturn h('div', {\n\t\t\tattrs: {\n\t\t\t\tid: 'foo-wrap'\n\t\t\t}\n\n\t\t}, [h(Input, props), h(Label, props)]);\n\t}\n};\n\nvar components = {\n\t'cf-input': InputField\n};\n\n/**\n * Create plugin\n *\n * @type {{install: (function(*, *): void)}}\n */\nvar CFUI = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomponents: components\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = CFUI;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL0NGVUkvaW5kZXguanMiXSwibmFtZXMiOlsiX3Byb3BzIiwiaWQiLCJTdHJpbmciLCJsYWJlbFRleHQiLCJJbnB1dCIsInByb3BzIiwicmVuZGVyIiwiaCIsImF0dHJzIiwiTGFiZWwiLCJmb3IiLCJJbnB1dEZpZWxkIiwiY29tcG9uZW50cyIsIkNGVUkiLCJpbnN0YWxsIiwiVnVlIiwib3B0aW9ucyIsIm1peGluIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxTQUFTO0FBQ2RDLEtBQUlDLE1BRFU7QUFFZEMsWUFBV0Q7QUFGRyxDQUFmOztBQU1BLElBQU1FLFFBQVE7QUFDYkMsUUFBTztBQUNOSixNQUFJO0FBREUsRUFETTtBQUliSyxPQUphLGtCQUlOQyxDQUpNLEVBSUo7QUFDUixTQUFPQSxFQUFHLE9BQUgsRUFBWTtBQUNsQkMsVUFBTztBQUNOUCxRQUFJLEtBQUtBO0FBREg7QUFEVyxHQUFaLENBQVA7QUFLQTtBQVZZLENBQWQ7O0FBYUEsSUFBTVEsUUFBUTtBQUNiSixRQUFPO0FBQ05KLE1BQUksT0FERTtBQUVORSxhQUFXO0FBRkwsRUFETTtBQUtiRyxPQUxhLGtCQUtOQyxDQUxNLEVBS0o7QUFDUixTQUFPQSxFQUFHLE9BQUgsRUFBWTtBQUNsQkMsVUFBTztBQUNORSxTQUFLLEtBQUtUO0FBREo7QUFEVyxHQUFaLEVBSUosS0FKSSxDQUFQO0FBS0E7QUFYWSxDQUFkOztBQWNBLElBQU1JLFFBQVE7QUFDYkosS0FBSSxLQURTO0FBRWJFLFlBQVc7QUFGRSxDQUFkOztBQUtBLElBQU1RLGFBQWE7QUFDbEJOLFFBQVFBLEtBRFU7QUFFbEJDLE9BRmtCLGtCQUVYQyxDQUZXLEVBRVQ7QUFDUixTQUFPQSxFQUFHLEtBQUgsRUFBVTtBQUNmQyxVQUFPO0FBQ05QLFFBQUk7QUFERTs7QUFEUSxHQUFWLEVBS0gsQ0FBRU0sRUFBRUgsS0FBRixFQUFRQyxLQUFSLENBQUYsRUFBa0JFLEVBQUVFLEtBQUYsRUFBUUosS0FBUixDQUFsQixDQUxHLENBQVA7QUFRQTtBQVhpQixDQUFuQjs7QUFlQSxJQUFJTyxhQUFhO0FBQ2hCLGFBQVlEO0FBREksQ0FBakI7O0FBSUE7Ozs7O0FBS0EsSUFBTUUsT0FBTztBQUNaQyxRQURZLG1CQUNKQyxHQURJLEVBQ0NDLE9BREQsRUFDVTtBQUNyQkQsTUFBSUUsS0FBSixDQUFVO0FBQ1RMLGVBQVlBO0FBREgsR0FBVjtBQUdBO0FBTFcsQ0FBYjs7QUFRQSx3REFBZUMsSUFBZiIsImZpbGUiOiI4MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9wcm9wcyA9IHtcblx0aWQ6IFN0cmluZyxcblx0bGFiZWxUZXh0OiBTdHJpbmdcbn07XG5cblxuY29uc3QgSW5wdXQgPSB7XG5cdHByb3BzOiB7XG5cdFx0aWQ6ICdpRm9vJ1xuXHR9LFxuXHRyZW5kZXIoaCl7XG5cdFx0cmV0dXJuIGgoICdpbnB1dCcsIHtcblx0XHRcdGF0dHJzOiB7XG5cdFx0XHRcdGlkOiB0aGlzLmlkLFxuXHRcdFx0fVxuXHRcdH0gKVxuXHR9XG59XG5cbmNvbnN0IExhYmVsID0ge1xuXHRwcm9wczoge1xuXHRcdGlkOiAnTExGb28nLFxuXHRcdGxhYmVsVGV4dDogJ0xBQkVMIFRFWFQnXG5cdH0sXG5cdHJlbmRlcihoKXtcblx0XHRyZXR1cm4gaCggJ2xhYmVsJywge1xuXHRcdFx0YXR0cnM6IHtcblx0XHRcdFx0Zm9yOiB0aGlzLmlkXG5cdFx0XHR9XG5cdFx0fSwgJ2RkZCcgKVxuXHR9XG59XG5cbmNvbnN0IHByb3BzID0ge1xuXHRpZDogJ2ZvbycsXG5cdGxhYmVsVGV4dDogJ0ZvbyBMYWJlbCdcbn07XG5cbmNvbnN0IElucHV0RmllbGQgPSB7XG5cdHByb3BzIDogcHJvcHMsXG5cdHJlbmRlcihoKXtcblx0XHRyZXR1cm4gaCggJ2RpdicsIHtcblx0XHRcdFx0YXR0cnMgOntcblx0XHRcdFx0XHRpZDogJ2Zvby13cmFwJ1xuXHRcdFx0XHR9XG5cblx0XHRcdH0sIFsgaChJbnB1dCxwcm9wcyksIGgoTGFiZWwscHJvcHMpIF1cblx0XHQpO1xuXG5cdH1cbn07XG5cblxubGV0IGNvbXBvbmVudHMgPSB7XG5cdCdjZi1pbnB1dCc6IElucHV0RmllbGRcbn07XG5cbi8qKlxuICogQ3JlYXRlIHBsdWdpblxuICpcbiAqIEB0eXBlIHt7aW5zdGFsbDogKGZ1bmN0aW9uKCosICopOiB2b2lkKX19XG4gKi9cbmNvbnN0IENGVUkgPSB7XG5cdGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG5cdFx0VnVlLm1peGluKHtcblx0XHRcdGNvbXBvbmVudHM6IGNvbXBvbmVudHNcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ0ZVSTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGx1Z2lucy9DRlVJL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})