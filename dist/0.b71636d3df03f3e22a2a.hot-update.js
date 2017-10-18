webpackHotUpdate(0,{

/***/ 50:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formState__ = __webpack_require__(/*! ./states/formState */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_formsState__ = __webpack_require__(/*! ./states/formsState */ 42);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_savingState__ = __webpack_require__(/*! ./states/savingState */ 73);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_showAddLanguageState__ = __webpack_require__(/*! ./states/showAddLanguageState */ 74);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_showLanguageChoiceState__ = __webpack_require__(/*! ./states/showLanguageChoiceState */ 75);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\tshowChooser: true,\n\t\t\t//labelText: this.$store.getters.strings.choose_form,\n\t\t\tlabelText: 'Fix This Label'\n\n\t\t};\n\t},\n\n\tcomputed: {\n\t\tform: __WEBPACK_IMPORTED_MODULE_0__states_formState__[\"a\" /* formState */],\n\t\tforms: __WEBPACK_IMPORTED_MODULE_1__states_formsState__[\"a\" /* formsState */],\n\t\tsaving: __WEBPACK_IMPORTED_MODULE_2__states_savingState__[\"a\" /* savingState */],\n\t\tshowAddLanguage: __WEBPACK_IMPORTED_MODULE_3__states_showAddLanguageState__[\"a\" /* showAddLanguageState */],\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.$store.commit('showLanguageChoice', true);\n\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\tchange: function change() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t\tthis.$store.commit('showLanguageChoice', true);\n\t\t\tthis.showChooser = false;\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1DaG9vc2VyLnZ1ZT83OWU1OGMwMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OERBRUE7dUJBRUE7O2dCQUVBO0FBQ0E7Y0FHQTs7QUFMQTtBQU1BOzs7UUFFQTtTQUNBO1VBQ0E7bUJBQ0E7Z0NBQ0E7a0RBQ0E7QUFFQTtBQVJBOzs7QUFVQTs7a0RBQ0E7d0JBQ0E7d0JBQ0E7OENBRUE7O3dCQUVBO0FBQ0E7QUFDQTs0QkFDQTtzQkFDQTs0Q0FDQTtzQkFDQTtBQUNBOzRDQUNBO3NCQUNBO0FBRUE7QUFuQkE7QUFsQkEiLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiXG5cdFx0XHQgdi1pZj1cInNob3dDaG9vc2VyXCJcblx0XHQ+XG5cdFx0XHQ8bGFiZWwgZm9yPVwiY2YtdHJhbnNsYXRpb25zLWZvcm1cIj5cblx0XHRcdFx0e3tsYWJlbFRleHR9fVxuXHRcdFx0PC9sYWJlbD5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1maWVsZFwiPlxuXHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0Y2xhc3M9XCJibG9jay1pbnB1dFwiXG5cdFx0XHRcdFx0aWQ9XCJjZi10cmFuc2xhdGlvbnMtZm9ybVwiXG5cdFx0XHRcdFx0di1tb2RlbD1cImZvcm1cIlxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJjaGFuZ2VcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG9wdGlvbj48L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHR2LWZvcj1cImZvcm0gaW4gZm9ybXNcIlxuXHRcdFx0XHRcdFx0di1iaW5kOnZhbHVlPVwiZm9ybS5JRFwiXG5cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7e2Zvcm0ubmFtZX19XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0di1pZj1cIiEgc2hvd0Nob29zZXJcIlxuXHRcdD5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgY2YtdHJhbnNsYXRlLWJ1dHRvblwiXG5cdFx0XHRcdFx0aWQ9XCJjZi10cmFuc2xhdGUtc2F2ZS1idXR0b25cIlxuXHRcdFx0XHRcdEBjbGljaz1cInNhdmVcIlxuXHRcdFx0PlxuXHRcdFx0XHRTYXZlXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR2LWlmPVwiISBzaG93QWRkTGFuZ3VhZ2VcIlxuXHRcdFx0XHRcdHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCJcblx0XHRcdFx0XHRjbGFzcz1cImJ1dHRvbiBjZi10cmFuc2xhdGUtYnV0dG9uXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJhZGRCdXR0b25DbGlja1wiXG5cdFx0XHQ+XG5cdFx0XHRcdEFkZCBMYW5ndWFnZSBUbyBUaGlzIEZvcm1cblx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHQ8cFxuXHRcdFx0XHRzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiXG5cblx0XHRcdD5cdFlvdSBBcmUgVHJhbnNsYXRpbmcge3tmb3JtLmluZm8ubmFtZX19PC9wPlxuXG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZm9ybVN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvZm9ybVN0YXRlJztcblx0aW1wb3J0IHsgZm9ybXNTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2Zvcm1zU3RhdGUnO1xuXHRpbXBvcnQgeyBzYXZpbmdTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3NhdmluZ1N0YXRlJztcblx0aW1wb3J0IHsgc2hvd0FkZExhbmd1YWdlU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9zaG93QWRkTGFuZ3VhZ2VTdGF0ZSc7XG5cdGltcG9ydCB7IHNob3dMYW5ndWFnZUNob2ljZVN0YXRlIH0gZnJvbSAgJy4vc3RhdGVzL3Nob3dMYW5ndWFnZUNob2ljZVN0YXRlJztcblxuXHRleHBvcnQgZGVmYXVsdHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzaG93Q2hvb3NlcjogdHJ1ZSxcblx0XHRcdFx0Ly9sYWJlbFRleHQ6IHRoaXMuJHN0b3JlLmdldHRlcnMuc3RyaW5ncy5jaG9vc2VfZm9ybSxcblx0XHRcdFx0bGFiZWxUZXh0OiAnRml4IFRoaXMgTGFiZWwnLFxuXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Zm9ybTogZm9ybVN0YXRlLFxuXHRcdFx0Zm9ybXM6ICBmb3Jtc1N0YXRlLFxuXHRcdFx0c2F2aW5nOiBzYXZpbmdTdGF0ZSxcblx0XHRcdHNob3dBZGRMYW5ndWFnZTogc2hvd0FkZExhbmd1YWdlU3RhdGUsXG5cdFx0XHRzYXZlVGV4dCgpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zYXZpbmcgPyAnU2F2aW5nJyA6ICdTYXZlJztcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0c2F2ZSgpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCggJ3NhdmUnICkudGhlbiggciA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2F2aW5nJyApO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93TGFuZ3VhZ2VDaG9pY2UnLCB0cnVlICk7XG5cblx0XHRcdFx0XHR0aGlzLnNob3dDaG9vc2VyID0gdHJ1ZTtcblxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRjaGFuZ2UoKXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93TGFuZ3VhZ2VDaG9pY2UnLCB0cnVlICk7XG5cdFx0XHRcdHRoaXMuc2hvd0Nob29zZXIgPSBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRhZGRCdXR0b25DbGljaygpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93QWRkTGFuZ3VhZ2UnICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZm9ybUNob29zZXIudnVlPzc5ZTU4YzAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})