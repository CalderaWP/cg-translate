webpackHotUpdate(0,{

/***/ 50:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formState__ = __webpack_require__(/*! ./states/formState */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_formsState__ = __webpack_require__(/*! ./states/formsState */ 42);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\tsaving: false,\n\t\t\tshowSpinner: false,\n\t\t\tshowChooser: true,\n\t\t\t//labelText: this.$store.getters.strings.choose_form,\n\t\t\tlabelText: 'Fix This Label'\n\n\t\t};\n\t},\n\n\tcomputed: {\n\t\tform: __WEBPACK_IMPORTED_MODULE_0__states_formState__[\"a\" /* formState */],\n\t\tforms: __WEBPACK_IMPORTED_MODULE_1__states_formsState__[\"a\" /* formsState */],\n\t\tsaveText: function saveText() {\n\t\t\treturn this.saving ? 'Saving' : 'Save';\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.saving = true;\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.saving = false;\n\t\t\t});\n\t\t},\n\t\tchange: function change() {\n\n\t\t\tthis.showChooser = false;\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1DaG9vc2VyLnZ1ZT83NjdiZjIxOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBO0FBQ0E7O0FBRUE7dUJBRUE7O1dBRUE7Z0JBQ0E7Z0JBQ0E7QUFDQTtjQUdBOztBQVBBO0FBUUE7OztRQUVBO1NBQ0E7Z0NBQ0E7bUNBQ0E7QUFFQTtBQU5BOzs7QUFRQTs7aUJBQ0E7a0RBQ0E7bUJBQ0E7QUFDQTtBQUNBOzRCQUVBOztzQkFDQTtBQUVBO0FBWEE7QUFsQkEiLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiXG5cdFx0XHQgdi1pZj1cIiBzaG93Q2hvb3NlclwiXG5cdFx0PlxuXHRcdFx0PGxhYmVsIGZvcj1cImNmLXRyYW5zbGF0aW9ucy1mb3JtXCI+XG5cdFx0XHRcdHt7bGFiZWxUZXh0fX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZmllbGRcIj5cblx0XHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRcdGNsYXNzPVwiYmxvY2staW5wdXRcIlxuXHRcdFx0XHRcdGlkPVwiY2YtdHJhbnNsYXRpb25zLWZvcm1cIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJmb3JtXCJcblx0XHRcdFx0XHRAY2hhbmdlPVwiY2hhbmdlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxvcHRpb24+PC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvblxuXHRcdFx0XHRcdFx0di1mb3I9XCJmb3JtIGluIGZvcm1zXCJcblx0XHRcdFx0XHRcdHYtYmluZDp2YWx1ZT1cImZvcm0uSURcIlxuXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3tmb3JtLm5hbWV9fVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCIhIHNob3dDaG9vc2VyXCJcblx0XHQ+XG5cdFx0XHQ8YnV0dG9uICBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBjZi10cmFuc2xhdGUtc2F2ZS1idXR0b25cIiAgQGNsaWNrPVwic2F2ZVwiID5TYXZlPC9idXR0b24+XG5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHRpbXBvcnQgeyBmb3JtU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9mb3JtU3RhdGUnO1xuXHRpbXBvcnQgeyBmb3Jtc1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvZm9ybXNTdGF0ZSc7XG5cblx0ZXhwb3J0IGRlZmF1bHR7XG5cdFx0ZGF0YSgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2F2aW5nOiBmYWxzZSxcblx0XHRcdFx0c2hvd1NwaW5uZXI6IGZhbHNlLFxuXHRcdFx0XHRzaG93Q2hvb3NlcjogdHJ1ZSxcblx0XHRcdFx0Ly9sYWJlbFRleHQ6IHRoaXMuJHN0b3JlLmdldHRlcnMuc3RyaW5ncy5jaG9vc2VfZm9ybSxcblx0XHRcdFx0bGFiZWxUZXh0OiAnRml4IFRoaXMgTGFiZWwnLFxuXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Zm9ybTogZm9ybVN0YXRlLFxuXHRcdFx0Zm9ybXM6ICBmb3Jtc1N0YXRlLFxuXHRcdFx0c2F2ZVRleHQoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2F2aW5nID8gJ1NhdmluZycgOiAnU2F2ZSc7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOntcblx0XHRcdHNhdmUoKXtcblx0XHRcdFx0dGhpcy5zYXZpbmcgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCggJ3NhdmUnICkudGhlbiggciA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zYXZpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0Y2hhbmdlKCl7XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnNob3dDaG9vc2VyID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZm9ybUNob29zZXIudnVlPzc2N2JmMjE5Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})