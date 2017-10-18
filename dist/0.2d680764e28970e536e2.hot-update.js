webpackHotUpdate(0,{

/***/ 48:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/langChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formState__ = __webpack_require__(/*! ./states/formState */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_formLanguagesState__ = __webpack_require__(/*! ./states/formLanguagesState */ 38);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_languagesState__ = __webpack_require__(/*! ./states/languagesState */ 40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_languageState__ = __webpack_require__(/*! ./states/languageState */ 39);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\t//labelText: this.$store.getters.strings.choose_lang,\n\t\t\tlabelText: 'Choose Lanaugage',\n\t\t\tlabelTextAdd: 'ADD Lanaugage',\n\t\t\tlangToAdd: 'false'\n\t\t};\n\t},\n\tmounted: function mounted() {},\n\n\tcomputed: {\n\t\tformLanguages: __WEBPACK_IMPORTED_MODULE_1__states_formLanguagesState__[\"a\" /* formLanguagesState */],\n\t\tlanguage: __WEBPACK_IMPORTED_MODULE_3__states_languageState__[\"a\" /* languageState */],\n\t\tlanguages: function languages() {\n\t\t\tvar languages = this.$store.state.languages;\n\t\t\tvar formLanguages = this.$store.state.formLanguages;\n\t\t\t//@todo filter out already chosern\n\t\t\treturn languages;\n\t\t},\n\n\t\tform: __WEBPACK_IMPORTED_MODULE_0__states_formState__[\"a\" /* formState */]\n\t},\n\twatch: {\n\t\tlanguage: function language(val) {\n\t\t\tthis.$store.commit('language', val);\n\t\t}\n\t},\n\tmethods: {\n\t\tshowAddLang: function showAddLang() {\n\t\t\treturn this.langToAdd ? true : false;\n\t\t},\n\t\taddLang: function addLang(ev) {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('addLanguage', {\n\t\t\t\tlanguage: this.langToAdd,\n\t\t\t\tform: this.form.ID\n\t\t\t}).then(function (r) {\n\t\t\t\t_this.formLanguages = _this.form.languages_named;\n\t\t\t\t_this.$store.commit('language', _this.langToAdd);\n\t\t\t\t_this.langToAdd = 'false';\n\t\t\t});\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2xhbmdDaG9vc2VyLnZ1ZT8xMzRkNGE4MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO3VCQUVBOztBQUVBO2NBQ0E7aUJBQ0E7Y0FFQTtBQUxBO0FBTUE7NkJBQ0EsQ0FDQTs7O2lCQUVBO1lBQ0E7a0NBQ0E7cUNBQ0E7eUNBQ0E7QUFDQTtVQUNBO0FBQ0E7O1FBRUE7QUFWQTs7bUNBWUE7a0NBQ0E7QUFFQTtBQUpBOztzQ0FNQTtrQ0FDQTtBQUNBOztBQUNBOzs7bUJBRUE7b0JBQ0E7QUFGQSx3QkFHQTtxQ0FDQTswQ0FDQTtzQkFDQTtBQUNBO0FBRUE7QUFkQTtBQTNCQSIsImZpbGUiOiI0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuXHQ8ZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiPlxuXHRcdDxsYWJlbCBmb3I9XCJjZi10cmFuc2xhdGlvbnMtbGFuZ3VhZ2VcIj5cblx0XHRcdFx0e3tsYWJlbFRleHR9fVxuXHRcdFx0PC9sYWJlbD5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1maWVsZFwiPlxuXHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0Y2xhc3M9XCJibG9jay1pbnB1dFwiXG5cdFx0XHRcdFx0aWQ9XCJjZi10cmFuc2xhdGlvbnMtbGFuZ3VhZ2VcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJsYW5ndWFnZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uPjwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb25cblx0XHRcdFx0XHRcdHYtZm9yPVwibGFuZ3VhZ2UgaW4gZm9ybUxhbmd1YWdlc1wiXG5cdFx0XHRcdFx0XHR2LWJpbmQ6dmFsdWU9XCJsYW5ndWFnZS5jb2RlXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7e2xhbmd1YWdlLm5hbWV9fVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIj5cblx0XHRcdFx0PGxhYmVsIGZvcj1cImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZXNcIj5cblx0XHRcdFx0XHR7e2xhYmVsVGV4dEFkZH19XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1maWVsZFwiPlxuXHRcdFx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJibG9jay1pbnB1dFwiXG5cdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJsYW5nVG9BZGRcIlxuXHRcdFx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZXNcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxvcHRpb24+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHRcdFx0di1mb3I9XCJsYW5ndWFnZSBpbiBsYW5ndWFnZXNcIlxuXHRcdFx0XHRcdFx0XHRcdHYtYmluZDp2YWx1ZT1cImxhbmd1YWdlLmNvZGVcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7e2xhbmd1YWdlLm5hbWV9fVxuXHRcdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIiB2LWlmPVwiJ2ZhbHNlJyAhPSBsYW5nVG9BZGRcIj5cblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJhZGRMYW5nXCI+XG5cdFx0XHRcdFx0QWRkIExhbmd1YWdlIFRvIEZvcm0gVHJhbnNsYXRpb25zP1xuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuXHRpbXBvcnQgeyBmb3JtU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9mb3JtU3RhdGUnO1xuXHRpbXBvcnQgeyBmb3JtTGFuZ3VhZ2VzU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9mb3JtTGFuZ3VhZ2VzU3RhdGUnO1xuXHRpbXBvcnQgeyBsYW5ndWFnZXNTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2xhbmd1YWdlc1N0YXRlJztcblx0aW1wb3J0IHsgbGFuZ3VhZ2VTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2xhbmd1YWdlU3RhdGUnO1xuXG5cdGV4cG9ydCBkZWZhdWx0e1xuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC8vbGFiZWxUZXh0OiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0cmluZ3MuY2hvb3NlX2xhbmcsXG5cdFx0XHRcdGxhYmVsVGV4dDogJ0Nob29zZSBMYW5hdWdhZ2UnLFxuXHRcdFx0XHRsYWJlbFRleHRBZGQ6ICdBREQgTGFuYXVnYWdlJyxcblx0XHRcdFx0bGFuZ1RvQWRkOiAnZmFsc2UnLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW91bnRlZCgpe1xuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGZvcm1MYW5ndWFnZXM6IGZvcm1MYW5ndWFnZXNTdGF0ZSxcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZVN0YXRlLFxuXHRcdFx0bGFuZ3VhZ2VzKCl7XG5cdFx0XHRcdGxldCBsYW5ndWFnZXMgPSB0aGlzLiRzdG9yZS5zdGF0ZS5sYW5ndWFnZXM7XG5cdFx0XHRcdGxldCBmb3JtTGFuZ3VhZ2VzID0gdGhpcy4kc3RvcmUuc3RhdGUuZm9ybUxhbmd1YWdlcztcblx0XHRcdFx0Ly9AdG9kbyBmaWx0ZXIgb3V0IGFscmVhZHkgY2hvc2VyblxuXHRcdFx0XHRyZXR1cm4gbGFuZ3VhZ2VzO1xuXHRcdFx0fSxcblx0XHRcdGZvcm06IGZvcm1TdGF0ZSxcblx0XHR9LFxuXHRcdHdhdGNoOiB7XG5cdFx0XHRsYW5ndWFnZSh2YWwpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdsYW5ndWFnZScsIHZhbCApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0c2hvd0FkZExhbmcoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMubGFuZ1RvQWRkID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdGFkZExhbmcoZXYpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5kaXNwYXRjaCggJ2FkZExhbmd1YWdlJywge1xuXHRcdFx0XHRcdGxhbmd1YWdlOiB0aGlzLmxhbmdUb0FkZCxcblx0XHRcdFx0XHRmb3JtOiB0aGlzLmZvcm0uSURcblx0XHRcdFx0fSkudGhlbiggciA9PiB7XG5cdFx0XHRcdFx0dGhpcy5mb3JtTGFuZ3VhZ2VzID0gdGhpcy5mb3JtLmxhbmd1YWdlc19uYW1lZDtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdsYW5ndWFnZScsIHRoaXMubGFuZ1RvQWRkICk7XG5cdFx0XHRcdFx0dGhpcy5sYW5nVG9BZGQgPSAnZmFsc2UnO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxhbmdDaG9vc2VyLnZ1ZT8xMzRkNGE4MCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})