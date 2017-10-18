webpackHotUpdate(0,{

/***/ 51:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/langChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formState__ = __webpack_require__(/*! ./states/formState */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_formLanguagesState__ = __webpack_require__(/*! ./states/formLanguagesState */ 41);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_languagesState__ = __webpack_require__(/*! ./states/languagesState */ 43);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_languageState__ = __webpack_require__(/*! ./states/languageState */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_showAddLanguageState__ = __webpack_require__(/*! ./states/showAddLanguageState */ 74);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_showLanguageChoiceState__ = __webpack_require__(/*! ./states/showLanguageChoiceState */ 75);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\t//labelText: this.$store.getters.strings.choose_lang,\n\t\t\tlabelText: 'Choose Lanaugage',\n\t\t\tlabelTextAdd: 'ADD Lanaugage',\n\t\t\tlangToAdd: 'false'\n\t\t};\n\t},\n\tmounted: function mounted() {},\n\n\tcomputed: {\n\t\tformLanguages: __WEBPACK_IMPORTED_MODULE_1__states_formLanguagesState__[\"a\" /* formLanguagesState */],\n\t\tlanguage: __WEBPACK_IMPORTED_MODULE_3__states_languageState__[\"a\" /* languageState */],\n\t\tshowAddLanguage: __WEBPACK_IMPORTED_MODULE_4__states_showAddLanguageState__[\"a\" /* showAddLanguageState */],\n\t\tshowLanguageChoice: __WEBPACK_IMPORTED_MODULE_5__states_showLanguageChoiceState__[\"a\" /* showLanguageChoiceState */],\n\t\tlanguages: function languages() {\n\t\t\tvar languages = this.$store.state.languages;\n\t\t\tvar formLanguages = this.$store.state.formLanguages;\n\t\t\t//@todo filter out already chosern\n\t\t\treturn languages;\n\t\t},\n\n\t\tform: __WEBPACK_IMPORTED_MODULE_0__states_formState__[\"a\" /* formState */]\n\t},\n\twatch: {\n\t\tlanguage: function language(val) {\n\t\t\tthis.$store.commit('showLanguageChoice');\n\t\t}\n\t},\n\tmethods: {\n\t\tshowAddLang: function showAddLang() {\n\t\t\treturn this.langToAdd ? true : false;\n\t\t},\n\t\taddLang: function addLang(ev) {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('addLanguage', {\n\t\t\t\tlanguage: this.langToAdd,\n\t\t\t\tform: this.form.ID\n\t\t\t}).then(function (r) {\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.formLanguages = _this.form.languages_named;\n\t\t\t\t_this.$store.commit('language', _this.langToAdd);\n\t\t\t\t_this.langToAdd = 'false';\n\t\t\t});\n\t\t},\n\t\tlanguageSelected: function languageSelected() {\n\t\t\tthis.$store.commit('showAddLanguage', false);\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2xhbmdDaG9vc2VyLnZ1ZT82MGYzOGRjZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzhEQUVBO3VCQUVBOztBQUVBO2NBQ0E7aUJBQ0E7Y0FFQTtBQUxBO0FBTUE7NkJBQ0EsQ0FDQTs7O2lCQUVBO1lBQ0E7bUJBQ0E7c0JBQ0E7a0NBQ0E7cUNBQ0E7eUNBQ0E7QUFDQTtVQUNBO0FBQ0E7O1FBRUE7QUFaQTs7bUNBY0E7c0JBQ0E7QUFFQTtBQUpBOztzQ0FNQTtrQ0FDQTtBQUNBOztBQUNBOzs7bUJBRUE7b0JBQ0E7QUFGQSx3QkFHQTt3QkFDQTtxQ0FDQTswQ0FDQTtzQkFDQTtBQUNBO0FBQ0E7Z0RBQ0E7eUNBQ0E7QUFFQTtBQWxCQTtBQTdCQSIsImZpbGUiOiI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuXHQ8ZGl2PlxuXHRcdHt7c2hvd0xhbmd1YWdlQ2hvaWNlfX1cblx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIiB2LWlmPVwic2hvd0xhbmd1YWdlQ2hvaWNlXCI+XG5cdFx0PGxhYmVsIGZvcj1cImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZVwiPlxuXHRcdFx0XHR7e2xhYmVsVGV4dH19XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWZpZWxkXCI+XG5cdFx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0XHRjbGFzcz1cImJsb2NrLWlucHV0XCJcblx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZVwiXG5cdFx0XHRcdFx0di1tb2RlbD1cImxhbmd1YWdlXCJcblx0XHRcdFx0XHRAY2hhbmdlPVwibGFuZ3VhZ2VTZWxlY3RlZFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uPjwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb25cblx0XHRcdFx0XHRcdHYtZm9yPVwibGFuZ3VhZ2UgaW4gZm9ybUxhbmd1YWdlc1wiXG5cdFx0XHRcdFx0XHR2LWJpbmQ6dmFsdWU9XCJsYW5ndWFnZS5jb2RlXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7e2xhbmd1YWdlLm5hbWV9fVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgdi1pZj1cInNob3dBZGRMYW5ndWFnZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWdyb3VwXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJjZi10cmFuc2xhdGlvbnMtbGFuZ3VhZ2VzXCI+XG5cdFx0XHRcdFx0e3tsYWJlbFRleHRBZGR9fVxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZmllbGRcIj5cblx0XHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYmxvY2staW5wdXRcIlxuXHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwibGFuZ1RvQWRkXCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJjZi10cmFuc2xhdGlvbnMtbGFuZ3VhZ2VzXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvblxuXHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwibGFuZ3VhZ2UgaW4gbGFuZ3VhZ2VzXCJcblx0XHRcdFx0XHRcdFx0XHR2LWJpbmQ6dmFsdWU9XCJsYW5ndWFnZS5jb2RlXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3tsYW5ndWFnZS5uYW1lfX1cblx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWdyb3VwXCIgdi1pZj1cIidmYWxzZScgIT0gbGFuZ1RvQWRkXCI+XG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiYWRkTGFuZ1wiIGNsYXNzPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0QWRkIExhbmd1YWdlIFRvIEZvcm0gVHJhbnNsYXRpb25zP1xuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuXHRpbXBvcnQgeyBmb3JtU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9mb3JtU3RhdGUnO1xuXHRpbXBvcnQgeyBmb3JtTGFuZ3VhZ2VzU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9mb3JtTGFuZ3VhZ2VzU3RhdGUnO1xuXHRpbXBvcnQgeyBsYW5ndWFnZXNTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2xhbmd1YWdlc1N0YXRlJztcblx0aW1wb3J0IHsgbGFuZ3VhZ2VTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2xhbmd1YWdlU3RhdGUnO1xuXHRpbXBvcnQgeyBzaG93QWRkTGFuZ3VhZ2VTdGF0ZSB9IGZyb20gICcuL3N0YXRlcy9zaG93QWRkTGFuZ3VhZ2VTdGF0ZSc7XG5cdGltcG9ydCB7IHNob3dMYW5ndWFnZUNob2ljZVN0YXRlIH0gZnJvbSAgJy4vc3RhdGVzL3Nob3dMYW5ndWFnZUNob2ljZVN0YXRlJztcblxuXHRleHBvcnQgZGVmYXVsdHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQvL2xhYmVsVGV4dDogdGhpcy4kc3RvcmUuZ2V0dGVycy5zdHJpbmdzLmNob29zZV9sYW5nLFxuXHRcdFx0XHRsYWJlbFRleHQ6ICdDaG9vc2UgTGFuYXVnYWdlJyxcblx0XHRcdFx0bGFiZWxUZXh0QWRkOiAnQUREIExhbmF1Z2FnZScsXG5cdFx0XHRcdGxhbmdUb0FkZDogJ2ZhbHNlJyxcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKXtcblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRmb3JtTGFuZ3VhZ2VzOiBmb3JtTGFuZ3VhZ2VzU3RhdGUsXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2VTdGF0ZSxcblx0XHRcdHNob3dBZGRMYW5ndWFnZTogc2hvd0FkZExhbmd1YWdlU3RhdGUsXG5cdFx0XHRzaG93TGFuZ3VhZ2VDaG9pY2U6IHNob3dMYW5ndWFnZUNob2ljZVN0YXRlLFxuXHRcdFx0bGFuZ3VhZ2VzKCl7XG5cdFx0XHRcdGxldCBsYW5ndWFnZXMgPSB0aGlzLiRzdG9yZS5zdGF0ZS5sYW5ndWFnZXM7XG5cdFx0XHRcdGxldCBmb3JtTGFuZ3VhZ2VzID0gdGhpcy4kc3RvcmUuc3RhdGUuZm9ybUxhbmd1YWdlcztcblx0XHRcdFx0Ly9AdG9kbyBmaWx0ZXIgb3V0IGFscmVhZHkgY2hvc2VyblxuXHRcdFx0XHRyZXR1cm4gbGFuZ3VhZ2VzO1xuXHRcdFx0fSxcblx0XHRcdGZvcm06IGZvcm1TdGF0ZSxcblx0XHR9LFxuXHRcdHdhdGNoOiB7XG5cdFx0XHRsYW5ndWFnZSh2YWwpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93TGFuZ3VhZ2VDaG9pY2UnICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRzaG93QWRkTGFuZygpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5sYW5nVG9BZGQgPyB0cnVlIDogZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0YWRkTGFuZyhldil7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCAnYWRkTGFuZ3VhZ2UnLCB7XG5cdFx0XHRcdFx0bGFuZ3VhZ2U6IHRoaXMubGFuZ1RvQWRkLFxuXHRcdFx0XHRcdGZvcm06IHRoaXMuZm9ybS5JRFxuXHRcdFx0XHR9KS50aGVuKCByID0+IHtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93QWRkTGFuZ3VhZ2UnICk7XG5cdFx0XHRcdFx0dGhpcy5mb3JtTGFuZ3VhZ2VzID0gdGhpcy5mb3JtLmxhbmd1YWdlc19uYW1lZDtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdsYW5ndWFnZScsIHRoaXMubGFuZ1RvQWRkICk7XG5cdFx0XHRcdFx0dGhpcy5sYW5nVG9BZGQgPSAnZmFsc2UnO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGxhbmd1YWdlU2VsZWN0ZWQoKXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJywgZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsYW5nQ2hvb3Nlci52dWU/NjBmMzhkY2UiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})