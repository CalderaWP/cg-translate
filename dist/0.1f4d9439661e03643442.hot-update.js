webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.data.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined != state.language ? state.language : '';\n\t},\n\tfields: function fields(state) {\n\t\tif (undefined === state.fields) {\n\t\t\treturn '';\n\t\t}\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' != _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\t\tconsole.log(state.showLanguageChoice);\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZmllbGRzIiwiZmllbGQiLCJmb3JtTGFuZ3VhZ2VzIiwic2hvd0Zvcm1DaG9pY2UiLCJzaG93QWRkTGFuZ3VhZ2UiLCJzaG93TGFuZ3VhZ2VDaG9pY2UiLCJjb25zb2xlIiwibG9nIiwic2F2aW5nIl0sIm1hcHBpbmdzIjoiOzs7QUFHTyxJQUFNQSxVQUFVO0FBQ3RCQyxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9DLE1BQU1DLGNBQU4sQ0FBc0IsU0FBdEIsS0FBcUNDLGFBQWFGLE1BQU1ELE9BQXhELEdBQWtFQyxNQUFNRCxPQUF4RSxHQUFrRixLQUF6RjtBQUNBLEVBSHFCO0FBSXRCSSxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9ILE1BQU1JLElBQU4sQ0FBV0QsT0FBbEI7QUFDQSxFQU5xQjtBQU90QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9KLE1BQU1JLElBQWI7QUFDQSxFQVRxQjtBQVV0QkMsUUFBUSxzQkFBUztBQUNoQixTQUFPTCxNQUFNSyxLQUFiO0FBQ0EsRUFacUI7QUFhdEJDLE9BQU8scUJBQVM7QUFDZixTQUFPTixNQUFNTSxJQUFiO0FBQ0EsRUFmcUI7QUFnQnRCQyxTQUFTLHVCQUFTO0FBQ2pCLFNBQU9QLE1BQU1NLElBQU4sQ0FBV0UsRUFBbEI7QUFDQSxFQWxCcUI7QUFtQnRCQyxRQUFRLHNCQUFTO0FBQ2hCLFNBQU9ULE1BQU1TLEtBQWI7QUFDQSxFQXJCcUI7QUFzQnRCQyxZQUFZLDBCQUFTO0FBQ3BCLFNBQU9WLE1BQU1VLFNBQWI7QUFDQSxFQXhCcUI7QUF5QnRCQyxXQUFXLHlCQUFTO0FBQ25CLFNBQU9ULGFBQWFGLE1BQU1XLFFBQW5CLEdBQThCWCxNQUFNVyxRQUFwQyxHQUErQyxFQUF0RDtBQUNBLEVBM0JxQjtBQTRCdEJDLFNBQVEsdUJBQVM7QUFDaEIsTUFBSVYsY0FBY0YsTUFBTVksTUFBeEIsRUFBZ0M7QUFDL0IsVUFBTyxFQUFQO0FBQ0E7QUFDRCxTQUFPWixNQUFNTSxJQUFOLENBQVdNLE1BQVgsQ0FBa0JaLE1BQU1XLFFBQXhCLENBQVA7QUFDQSxFQWpDcUI7QUFrQ3RCRSxRQUFPLHNCQUFTO0FBQ2YsTUFBSSxvQkFBb0JiLE1BQU1hLEtBQTFCLENBQUosRUFBcUM7QUFDcEMsVUFBTyxFQUFQO0FBQ0E7O0FBRUQsU0FBT2IsTUFBTWEsS0FBYjtBQUNBLEVBeENxQjtBQXlDdEJDLGdCQUFlLDhCQUFTO0FBQ3ZCLFNBQU9kLE1BQU1jLGFBQWI7QUFFQSxFQTVDcUI7QUE2Q3RCQyxpQkFBZ0IsK0JBQVM7QUFDeEIsU0FBT2YsTUFBTWUsY0FBYjtBQUNBLEVBL0NxQjtBQWdEdEJDLGtCQUFpQixnQ0FBUztBQUN6QixNQUFLLFNBQVNoQixNQUFNZ0IsZUFBcEIsRUFBc0M7QUFDckNoQixTQUFNZ0IsZUFBTixHQUF3QixLQUF4QjtBQUNBOztBQUVELFNBQU9oQixNQUFNZ0IsZUFBYjtBQUNBLEVBdERxQjtBQXVEdEJDLHFCQUFvQixtQ0FBUztBQUM1QixNQUFLLFNBQVNqQixNQUFNaUIsa0JBQXBCLEVBQXlDO0FBQ3hDakIsU0FBTWlCLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0E7QUFDREMsVUFBUUMsR0FBUixDQUFZbkIsTUFBTWlCLGtCQUFsQjtBQUNBLFNBQU9qQixNQUFNaUIsa0JBQWI7QUFDQSxFQTdEcUI7QUE4RHRCRyxTQUFRLHVCQUFTO0FBQ2hCLFNBQU9wQixNQUFNb0IsTUFBYjtBQUNBO0FBaEVxQixDQUFoQiIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBjb25zdCBHRVRURVJTID0ge1xuXHRmaWVsZElkIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eSggJ2ZpZWxkSWQnICkgJiYgdW5kZWZpbmVkICE9IHN0YXRlLmZpZWxkSWQgPyBzdGF0ZS5maWVsZElkIDogZmFsc2U7XG5cdH0sXG5cdHN0cmluZ3MgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmRhdGEuc3RyaW5ncztcblx0fSxcblx0ZGF0YSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZGF0YTtcblx0fSxcblx0bG9jYWwgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmxvY2FsO1xuXHR9LFxuXHRmb3JtIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtO1xuXHR9LFxuXHRmb3JtSWQgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uSUQ7XG5cdH0sXG5cdGZvcm1zIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3Jtcztcblx0fSxcblx0bGFuZ3VhZ2VzIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5sYW5ndWFnZXM7XG5cdH0sXG5cdGxhbmd1YWdlIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiB1bmRlZmluZWQgIT0gc3RhdGUubGFuZ3VhZ2UgPyBzdGF0ZS5sYW5ndWFnZSA6ICcnO1xuXHR9LFxuXHRmaWVsZHM6IHN0YXRlID0+IHtcblx0XHRpZiggdW5kZWZpbmVkID09PSBzdGF0ZS5maWVsZHMgKXtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXTtcblx0fSxcblx0ZmllbGQ6IHN0YXRlID0+IHtcblx0XHRpZiggJ29iamVjdCcgIT0gdHlwZW9mICBzdGF0ZS5maWVsZCApe1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5maWVsZDtcblx0fSxcblx0Zm9ybUxhbmd1YWdlczogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtTGFuZ3VhZ2VzO1xuXG5cdH0sXG5cdHNob3dGb3JtQ2hvaWNlOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dGb3JtQ2hvaWNlO1xuXHR9LFxuXHRzaG93QWRkTGFuZ3VhZ2U6IHN0YXRlID0+IHtcblx0XHRpZiggIG51bGwgIT09IHN0YXRlLnNob3dBZGRMYW5ndWFnZSApIHtcblx0XHRcdHN0YXRlLnNob3dBZGRMYW5ndWFnZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2U7XG5cdH0sXG5cdHNob3dMYW5ndWFnZUNob2ljZTogc3RhdGUgPT4ge1xuXHRcdGlmKCAgbnVsbCAhPT0gc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlICkge1xuXHRcdFx0c3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSk7XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZTtcblx0fSxcblx0c2F2aW5nOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNhdmluZztcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 51:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/langChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formState__ = __webpack_require__(/*! ./states/formState */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_formLanguagesState__ = __webpack_require__(/*! ./states/formLanguagesState */ 41);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_languagesState__ = __webpack_require__(/*! ./states/languagesState */ 43);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_languageState__ = __webpack_require__(/*! ./states/languageState */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_showAddLanguageState__ = __webpack_require__(/*! ./states/showAddLanguageState */ 74);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_showLanguageChoiceState__ = __webpack_require__(/*! ./states/showLanguageChoiceState */ 75);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\t//labelText: this.$store.getters.strings.choose_lang,\n\t\t\tlabelText: 'Choose Lanaugage',\n\t\t\tlabelTextAdd: 'ADD Lanaugage',\n\t\t\tlangToAdd: 'false'\n\t\t};\n\t},\n\tmounted: function mounted() {},\n\n\tcomputed: {\n\t\tformLanguages: __WEBPACK_IMPORTED_MODULE_1__states_formLanguagesState__[\"a\" /* formLanguagesState */],\n\t\tlanguage: __WEBPACK_IMPORTED_MODULE_3__states_languageState__[\"a\" /* languageState */],\n\t\tshowAddLanguage: __WEBPACK_IMPORTED_MODULE_4__states_showAddLanguageState__[\"a\" /* showAddLanguageState */],\n\t\tshowLanguageChoice: __WEBPACK_IMPORTED_MODULE_5__states_showLanguageChoiceState__[\"a\" /* showLanguageChoiceState */],\n\t\tlanguages: function (_languages) {\n\t\t\tfunction languages() {\n\t\t\t\treturn _languages.apply(this, arguments);\n\t\t\t}\n\n\t\t\tlanguages.toString = function () {\n\t\t\t\treturn _languages.toString();\n\t\t\t};\n\n\t\t\treturn languages;\n\t\t}(function () {\n\t\t\t//let languages = this.$store.state.languages;\n\t\t\t//let formLanguages = this.$store.state.formLanguages;\n\t\t\t//@todo filter out already chosern\n\t\t\treturn languages;\n\t\t}),\n\n\t\tform: __WEBPACK_IMPORTED_MODULE_0__states_formState__[\"a\" /* formState */]\n\t},\n\twatch: {\n\t\tlanguage: function language(val) {\n\t\t\tthis.$store.commit('showLanguageChoice');\n\t\t}\n\t},\n\tmethods: {\n\t\taddLang: function addLang(ev) {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('addLanguage', {\n\t\t\t\tlanguage: this.langToAdd,\n\t\t\t\tform: this.form.ID\n\t\t\t}).then(function (r) {\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.formLanguages = _this.form.languages_named;\n\t\t\t\t_this.$store.commit('language', _this.langToAdd);\n\t\t\t\t_this.langToAdd = 'false';\n\t\t\t});\n\t\t},\n\t\tlanguageSelected: function languageSelected() {\n\t\t\tthis.$store.commit('showAddLanguage', false);\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2xhbmdDaG9vc2VyLnZ1ZT8xMDk1MDcyZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OERBRUE7dUJBRUE7O0FBRUE7Y0FDQTtpQkFDQTtjQUVBO0FBTEE7QUFNQTs2QkFDQSxDQUNBOzs7aUJBRUE7WUFDQTttQkFDQTtzQkFDQTs7QUFKQTs7Ozs7Ozs7O2dCQUtBO0FBQ0E7QUFDQTtBQUNBO1VBQ0E7QUFDQTs7UUFFQTs7O21DQUVBO3NCQUNBO0FBRUE7QUFKQTs7O0FBTUE7OzttQkFFQTtvQkFDQTtBQUZBLHdCQUdBO3dCQUNBO3FDQUNBOzBDQUNBO3NCQUNBO0FBQ0E7QUFDQTtnREFDQTt5Q0FDQTtBQUVBO0FBZkE7QUE3QkEiLCJmaWxlIjoiNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cblx0PGRpdj5cblx0XHQ8ZGl2XG5cdFx0XHR2LWlmPVwic2hvd0xhbmd1YWdlQ2hvaWNlXCJcblx0XHRcdGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIlxuXHRcdD5cblx0XHQ8bGFiZWwgZm9yPVwiY2YtdHJhbnNsYXRpb25zLWxhbmd1YWdlXCI+XG5cdFx0XHRcdHt7bGFiZWxUZXh0fX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZmllbGRcIj5cblx0XHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRcdGNsYXNzPVwiYmxvY2staW5wdXRcIlxuXHRcdFx0XHRcdGlkPVwiY2YtdHJhbnNsYXRpb25zLWxhbmd1YWdlXCJcblx0XHRcdFx0XHR2LW1vZGVsPVwibGFuZ3VhZ2VcIlxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJsYW5ndWFnZVNlbGVjdGVkXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxvcHRpb24+PC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvblxuXHRcdFx0XHRcdFx0di1mb3I9XCJsYW5ndWFnZSBpbiBmb3JtTGFuZ3VhZ2VzXCJcblx0XHRcdFx0XHRcdHYtYmluZDp2YWx1ZT1cImxhbmd1YWdlLmNvZGVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt7bGFuZ3VhZ2UubmFtZX19XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiB2LWlmPVwic2hvd0FkZExhbmd1YWdlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIj5cblx0XHRcdFx0PGxhYmVsIGZvcj1cImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZXNcIj5cblx0XHRcdFx0XHR7e2xhYmVsVGV4dEFkZH19XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1maWVsZFwiPlxuXHRcdFx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJibG9jay1pbnB1dFwiXG5cdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJsYW5nVG9BZGRcIlxuXHRcdFx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZXNcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxvcHRpb24+PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHRcdFx0di1mb3I9XCJsYW5ndWFnZSBpbiBsYW5ndWFnZXNcIlxuXHRcdFx0XHRcdFx0XHRcdHYtYmluZDp2YWx1ZT1cImxhbmd1YWdlLmNvZGVcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7e2xhbmd1YWdlLm5hbWV9fVxuXHRcdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIiB2LWlmPVwiJ2ZhbHNlJyAhPSBsYW5nVG9BZGRcIj5cblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJhZGRMYW5nXCIgY2xhc3M9XCJidXR0b25cIj5cblx0XHRcdFx0XHRBZGQgTGFuZ3VhZ2UgVG8gRm9ybSBUcmFuc2xhdGlvbnM/XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG5cdGltcG9ydCB7IGZvcm1TdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2Zvcm1TdGF0ZSc7XG5cdGltcG9ydCB7IGZvcm1MYW5ndWFnZXNTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2Zvcm1MYW5ndWFnZXNTdGF0ZSc7XG5cdGltcG9ydCB7IGxhbmd1YWdlc1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvbGFuZ3VhZ2VzU3RhdGUnO1xuXHRpbXBvcnQgeyBsYW5ndWFnZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvbGFuZ3VhZ2VTdGF0ZSc7XG5cdGltcG9ydCB7IHNob3dBZGRMYW5ndWFnZVN0YXRlIH0gZnJvbSAgJy4vc3RhdGVzL3Nob3dBZGRMYW5ndWFnZVN0YXRlJztcblx0aW1wb3J0IHsgc2hvd0xhbmd1YWdlQ2hvaWNlU3RhdGUgfSBmcm9tICAnLi9zdGF0ZXMvc2hvd0xhbmd1YWdlQ2hvaWNlU3RhdGUnO1xuXG5cdGV4cG9ydCBkZWZhdWx0e1xuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC8vbGFiZWxUZXh0OiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnN0cmluZ3MuY2hvb3NlX2xhbmcsXG5cdFx0XHRcdGxhYmVsVGV4dDogJ0Nob29zZSBMYW5hdWdhZ2UnLFxuXHRcdFx0XHRsYWJlbFRleHRBZGQ6ICdBREQgTGFuYXVnYWdlJyxcblx0XHRcdFx0bGFuZ1RvQWRkOiAnZmFsc2UnLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bW91bnRlZCgpe1xuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGZvcm1MYW5ndWFnZXM6IGZvcm1MYW5ndWFnZXNTdGF0ZSxcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZVN0YXRlLFxuXHRcdFx0c2hvd0FkZExhbmd1YWdlOiBzaG93QWRkTGFuZ3VhZ2VTdGF0ZSxcblx0XHRcdHNob3dMYW5ndWFnZUNob2ljZTogc2hvd0xhbmd1YWdlQ2hvaWNlU3RhdGUsXG5cdFx0XHRsYW5ndWFnZXMoKXtcblx0XHRcdFx0Ly9sZXQgbGFuZ3VhZ2VzID0gdGhpcy4kc3RvcmUuc3RhdGUubGFuZ3VhZ2VzO1xuXHRcdFx0XHQvL2xldCBmb3JtTGFuZ3VhZ2VzID0gdGhpcy4kc3RvcmUuc3RhdGUuZm9ybUxhbmd1YWdlcztcblx0XHRcdFx0Ly9AdG9kbyBmaWx0ZXIgb3V0IGFscmVhZHkgY2hvc2VyblxuXHRcdFx0XHRyZXR1cm4gbGFuZ3VhZ2VzO1xuXHRcdFx0fSxcblx0XHRcdGZvcm06IGZvcm1TdGF0ZSxcblx0XHR9LFxuXHRcdHdhdGNoOiB7XG5cdFx0XHRsYW5ndWFnZSh2YWwpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93TGFuZ3VhZ2VDaG9pY2UnICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRhZGRMYW5nKGV2KXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goICdhZGRMYW5ndWFnZScsIHtcblx0XHRcdFx0XHRsYW5ndWFnZTogdGhpcy5sYW5nVG9BZGQsXG5cdFx0XHRcdFx0Zm9ybTogdGhpcy5mb3JtLklEXG5cdFx0XHRcdH0pLnRoZW4oIHIgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdFx0XHR0aGlzLmZvcm1MYW5ndWFnZXMgPSB0aGlzLmZvcm0ubGFuZ3VhZ2VzX25hbWVkO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ2xhbmd1YWdlJywgdGhpcy5sYW5nVG9BZGQgKTtcblx0XHRcdFx0XHR0aGlzLmxhbmdUb0FkZCA9ICdmYWxzZSc7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0bGFuZ3VhZ2VTZWxlY3RlZCgpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93QWRkTGFuZ3VhZ2UnLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxhbmdDaG9vc2VyLnZ1ZT8xMDk1MDcyZSJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})