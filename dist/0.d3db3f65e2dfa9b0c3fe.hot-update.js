webpackHotUpdate(0,{

/***/ 50:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formState__ = __webpack_require__(/*! ./states/formState */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_formsState__ = __webpack_require__(/*! ./states/formsState */ 42);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_savingState__ = __webpack_require__(/*! ./states/savingState */ 73);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\n\t\t\tshowSpinner: false,\n\t\t\tshowChooser: true,\n\t\t\t//labelText: this.$store.getters.strings.choose_form,\n\t\t\tlabelText: 'Fix This Label'\n\n\t\t};\n\t},\n\n\tcomputed: {\n\t\tform: __WEBPACK_IMPORTED_MODULE_0__states_formState__[\"a\" /* formState */],\n\t\tforms: __WEBPACK_IMPORTED_MODULE_1__states_formsState__[\"a\" /* formsState */],\n\t\tsaving: __WEBPACK_IMPORTED_MODULE_2__states_savingState__[\"a\" /* savingState */],\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\tchange: function change() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t\tthis.showChooser = false;\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1DaG9vc2VyLnZ1ZT9jMzUyMDBkMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBO0FBQ0E7QUFDQTs7QUFFQTt1QkFFQTs7O2dCQUdBO2dCQUNBO0FBQ0E7Y0FHQTs7QUFOQTtBQU9BOzs7UUFFQTtTQUNBO1VBQ0E7Z0NBQ0E7a0RBQ0E7QUFFQTtBQVBBOzs7QUFTQTs7a0RBQ0E7d0JBQ0E7d0JBQ0E7d0JBRUE7QUFDQTtBQUNBOzRCQUNBO3NCQUNBO3NCQUNBO0FBQ0E7NENBQ0E7c0JBQ0E7QUFFQTtBQWhCQTtBQW5CQSIsImZpbGUiOiI1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzcz1cImNhbGRlcmEtY29uZmlnLWdyb3VwXCJcblx0XHRcdCB2LWlmPVwiIHNob3dDaG9vc2VyXCJcblx0XHQ+XG5cdFx0XHQ8bGFiZWwgZm9yPVwiY2YtdHJhbnNsYXRpb25zLWZvcm1cIj5cblx0XHRcdFx0e3tsYWJlbFRleHR9fVxuXHRcdFx0PC9sYWJlbD5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1maWVsZFwiPlxuXHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0Y2xhc3M9XCJibG9jay1pbnB1dFwiXG5cdFx0XHRcdFx0aWQ9XCJjZi10cmFuc2xhdGlvbnMtZm9ybVwiXG5cdFx0XHRcdFx0di1tb2RlbD1cImZvcm1cIlxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJjaGFuZ2VcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG9wdGlvbj48L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHR2LWZvcj1cImZvcm0gaW4gZm9ybXNcIlxuXHRcdFx0XHRcdFx0di1iaW5kOnZhbHVlPVwiZm9ybS5JRFwiXG5cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7e2Zvcm0ubmFtZX19XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0di1pZj1cIiEgc2hvd0Nob29zZXJcIlxuXHRcdD5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgY2YtdHJhbnNsYXRlLWJ1dHRvblwiXG5cdFx0XHRcdFx0aWQ9XCJjZi10cmFuc2xhdGUtc2F2ZS1idXR0b25cIlxuXHRcdFx0XHRcdEBjbGljaz1cInNhdmVcIlxuXHRcdFx0PlxuXHRcdFx0XHRTYXZlXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR2LWlmPVwiISBzaG93XCJcblx0XHRcdFx0XHRzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgY2YtdHJhbnNsYXRlLWJ1dHRvblwiXG5cdFx0XHRcdFx0QGNsaWNrPVwiYWRkQnV0dG9uQ2xpY2tcIlxuXHRcdFx0PlxuXHRcdFx0XHRBZGQgTGFuZ3VhZ2UgVG8gVGhpcyBGb3JtXG5cdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0PHA+XHRZb3UgQXJlIFRyYW5zbGF0aW5nIHt7Zm9ybS5JRH19PC9wPlxuXG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZm9ybVN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvZm9ybVN0YXRlJztcblx0aW1wb3J0IHsgZm9ybXNTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2Zvcm1zU3RhdGUnO1xuXHRpbXBvcnQgeyBzYXZpbmdTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3NhdmluZ1N0YXRlJztcblxuXHRleHBvcnQgZGVmYXVsdHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXG5cdFx0XHRcdHNob3dTcGlubmVyOiBmYWxzZSxcblx0XHRcdFx0c2hvd0Nob29zZXI6IHRydWUsXG5cdFx0XHRcdC8vbGFiZWxUZXh0OiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0cmluZ3MuY2hvb3NlX2Zvcm0sXG5cdFx0XHRcdGxhYmVsVGV4dDogJ0ZpeCBUaGlzIExhYmVsJyxcblxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGZvcm06IGZvcm1TdGF0ZSxcblx0XHRcdGZvcm1zOiAgZm9ybXNTdGF0ZSxcblx0XHRcdHNhdmluZzogc2F2aW5nU3RhdGUsXG5cdFx0XHRzYXZlVGV4dCgpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zYXZpbmcgPyAnU2F2aW5nJyA6ICdTYXZlJztcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0c2F2ZSgpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCggJ3NhdmUnICkudGhlbiggciA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2F2aW5nJyApO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdFx0XHR0aGlzLnNob3dDaG9vc2VyID0gdHJ1ZTtcblxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRjaGFuZ2UoKXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0XHR0aGlzLnNob3dDaG9vc2VyID0gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0YWRkQnV0dG9uQ2xpY2soKXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZvcm1DaG9vc2VyLnZ1ZT9jMzUyMDBkMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})