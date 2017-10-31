webpackHotUpdate(0,{

/***/ 54:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formState__ = __webpack_require__(/*! ./states/formState */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_formsState__ = __webpack_require__(/*! ./states/formsState */ 45);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_savingState__ = __webpack_require__(/*! ./states/savingState */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_showAddLanguageState__ = __webpack_require__(/*! ./states/showAddLanguageState */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_showLanguageChoiceState__ = __webpack_require__(/*! ./states/showLanguageChoiceState */ 19);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\tshowChooser: true\n\t\t};\n\t},\n\n\tcomputed: {\n\t\tform: function form() {\n\t\t\treturn this.$store.getters.stateFactory('form', 'form');\n\t\t},\n\n\t\tforms: __WEBPACK_IMPORTED_MODULE_1__states_formsState__[\"a\" /* formsState */],\n\t\tsaving: __WEBPACK_IMPORTED_MODULE_2__states_savingState__[\"a\" /* savingState */],\n\t\tshowAddLanguage: __WEBPACK_IMPORTED_MODULE_3__states_showAddLanguageState__[\"a\" /* showAddLanguageState */],\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t},\n\t\tstrings: function strings() {\n\t\t\treturn this.$store.getters.strings;\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.$store.commit('showLanguageChoice', true);\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\tchange: function change() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t\tthis.$store.commit('showLanguageChoice', true);\n\t\t\tthis.showChooser = false;\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1DaG9vc2VyLnZ1ZT8yN2U1MzczYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTt1QkFFQTs7Z0JBR0E7QUFGQTtBQUdBOzs7OztBQUVBOztTQUNBO1VBQ0E7bUJBQ0E7Z0NBQ0E7a0RBQ0E7QUFDQTs4QkFDQTs4QkFDQTtBQUVBO0FBWEE7OztBQWFBOztrREFDQTt3QkFDQTt3QkFDQTs4Q0FDQTt3QkFDQTtBQUNBO0FBQ0E7NEJBQ0E7c0JBQ0E7NENBQ0E7c0JBQ0E7QUFDQTs0Q0FDQTtzQkFDQTtBQUVBO0FBakJBO0FBbEJBIiwiZmlsZSI6IjU0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxkaXZcblx0XHRcdGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIlxuXHRcdFx0IHYtaWY9XCJzaG93Q2hvb3NlclwiXG5cdFx0PlxuXHRcdFx0PGxhYmVsIGZvcj1cImNmLXRyYW5zbGF0aW9ucy1mb3JtXCI+XG5cdFx0XHRcdHt7c3RyaW5ncy5jaG9vc2VfZm9ybX19XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWZpZWxkXCI+XG5cdFx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0XHRjbGFzcz1cImJsb2NrLWlucHV0XCJcblx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0aW9ucy1mb3JtXCJcblx0XHRcdFx0XHR2LW1vZGVsPVwiZm9ybVwiXG5cdFx0XHRcdFx0QGNoYW5nZT1cImNoYW5nZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uPjwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb25cblx0XHRcdFx0XHRcdHYtZm9yPVwiZm9ybSBpbiBmb3Jtc1wiXG5cdFx0XHRcdFx0XHR2LWJpbmQ6dmFsdWU9XCJmb3JtLklEXCJcblxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt7Zm9ybS5uYW1lfX1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHR2LWlmPVwiISBzaG93Q2hvb3NlclwiXG5cdFx0PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCJcblx0XHRcdFx0XHRjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBjZi10cmFuc2xhdGUtYnV0dG9uXCJcblx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0ZS1zYXZlLWJ1dHRvblwiXG5cdFx0XHRcdFx0QGNsaWNrPVwic2F2ZVwiXG5cdFx0XHRcdFx0di1odG1sPVwic2F2ZVRleHRcIlxuXHRcdFx0PlxuXG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR2LWlmPVwiISBzaG93QWRkTGFuZ3VhZ2VcIlxuXHRcdFx0XHRcdHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCJcblx0XHRcdFx0XHRjbGFzcz1cImJ1dHRvbiBjZi10cmFuc2xhdGUtYnV0dG9uXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJhZGRCdXR0b25DbGlja1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7c3RyaW5ncy5hZGRfbGFuZ19mb3JtfX1cblx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHQ8cFxuXHRcdFx0XHRzdHlsZT1cImRpc3BsYXk6IGlubGluZVwiXG5cblx0XHRcdD5cblx0XHRcdFx0e3tzdHJpbmdzLnlvdV9hcmVfdHJhbnN9fSB7e2Zvcm0uaW5mby5uYW1lfX1cblx0XHRcdDwvcD5cblxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZvcm1TdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2Zvcm1TdGF0ZSc7XG5cdGltcG9ydCB7IGZvcm1zU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9mb3Jtc1N0YXRlJztcblx0aW1wb3J0IHsgc2F2aW5nU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9zYXZpbmdTdGF0ZSc7XG5cdGltcG9ydCB7IHNob3dBZGRMYW5ndWFnZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvc2hvd0FkZExhbmd1YWdlU3RhdGUnO1xuXHRpbXBvcnQgeyBzaG93TGFuZ3VhZ2VDaG9pY2VTdGF0ZSB9IGZyb20gICcuL3N0YXRlcy9zaG93TGFuZ3VhZ2VDaG9pY2VTdGF0ZSc7XG5cblx0ZXhwb3J0IGRlZmF1bHR7XG5cdFx0ZGF0YSgpe1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2hvd0Nob29zZXI6IHRydWUsXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Zm9ybSgpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc3RhdGVGYWN0b3J5KCAnZm9ybScsICdmb3JtJykgfSxcblx0XHRcdGZvcm1zOiAgZm9ybXNTdGF0ZSxcblx0XHRcdHNhdmluZzogc2F2aW5nU3RhdGUsXG5cdFx0XHRzaG93QWRkTGFuZ3VhZ2U6IHNob3dBZGRMYW5ndWFnZVN0YXRlLFxuXHRcdFx0c2F2ZVRleHQoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc2F2aW5nID8gJ1NhdmluZycgOiAnU2F2ZSc7XG5cdFx0XHR9LFxuXHRcdFx0c3RyaW5ncyAoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc3RyaW5nc1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczp7XG5cdFx0XHRzYXZlKCl7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCAnc2F2ZScgKS50aGVuKCByID0+IHtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzYXZpbmcnICk7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dMYW5ndWFnZUNob2ljZScsIHRydWUgKTtcblx0XHRcdFx0XHR0aGlzLnNob3dDaG9vc2VyID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0Y2hhbmdlKCl7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0xhbmd1YWdlQ2hvaWNlJywgdHJ1ZSApO1xuXHRcdFx0XHR0aGlzLnNob3dDaG9vc2VyID0gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0YWRkQnV0dG9uQ2xpY2soKXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZvcm1DaG9vc2VyLnZ1ZT8yN2U1MzczYSJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})