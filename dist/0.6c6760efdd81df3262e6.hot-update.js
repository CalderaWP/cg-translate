webpackHotUpdate(0,{

/***/ 51:
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formSaver.vue ***!
  \*****************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tcomputed: {\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t},\n\t\tformName: function formName() {\n\t\t\treturn this.$store.getters.formName;\n\t\t},\n\n\t\tmessage: {\n\t\t\tget: function get() {\n\t\t\t\tconsole.log(this.$store.getters.formName);\n\t\t\t\tvar name = this.formName;\n\t\t\t\tif (name) {\n\t\t\t\t\treturn this.$store.getters.strings.you_are_trans + ' ' + name;\n\t\t\t\t}\n\t\t\t\treturn '';\n\t\t\t}\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.$store.commit('showLanguageChoice', true);\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1TYXZlci52dWU/NjY0ODMwODgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7Ozs7Z0NBR0E7a0RBQ0E7QUFDQTtnQ0FDQTs4QkFDQTtBQUNBOzs7dUJBRUE7b0NBQ0E7b0JBQ0E7Y0FDQTs4REFDQTtBQUNBO1dBQ0E7QUFHQTtBQVZBO0FBUEE7OztBQW1CQTs7a0RBQ0E7d0JBQ0E7d0JBQ0E7OENBQ0E7d0JBQ0E7QUFDQTtBQUNBOzRDQUNBO3NCQUNBO0FBRUE7QUFaQTtBQW5CQSIsImZpbGUiOiI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGNmLXRyYW5zbGF0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgIGlkPVwiY2YtdHJhbnNsYXRlLXNhdmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzYXZlXCJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJzYXZlVGV4dFwiXG4gICAgICAgID5cblxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8cFxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNmLXRyYW5zbGF0ZS1pbmZvLWJsb2NrIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3ttZXNzYWdlfX1cbiAgICAgICAgPC9wPlxuICAgICAgICB7e2Zvcm1OYW1lfX1cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRzYXZlVGV4dCgpe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5zYXZpbmcgPyAnU2F2aW5nJyA6ICdTYXZlJztcblx0XHRcdH0sXG4gICAgICAgICAgICBmb3JtTmFtZSgpe1xuXHRcdFx0ICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmZvcm1OYW1lO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lc3NhZ2U6e1xuXHRcdFx0XHRnZXQoKXtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggdGhpcy4kc3RvcmUuZ2V0dGVycy5mb3JtTmFtZSApO1xuXHRcdFx0XHRcdGxldCBuYW1lID0gdGhpcy5mb3JtTmFtZTtcblx0XHRcdFx0XHRpZiggbmFtZSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc3RyaW5ncy55b3VfYXJlX3RyYW5zICsgJyAnICsgbmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiBcdFx0fSxcblx0XHRtZXRob2RzOntcblx0XHRcdHNhdmUoKXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goICdzYXZlJyApLnRoZW4oIHIgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3NhdmluZycgKTtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93QWRkTGFuZ3VhZ2UnICk7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0xhbmd1YWdlQ2hvaWNlJywgdHJ1ZSApO1xuXHRcdFx0XHRcdHRoaXMuc2hvd0Nob29zZXIgPSB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRhZGRCdXR0b25DbGljaygpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93QWRkTGFuZ3VhZ2UnICk7XG5cdFx0XHR9XG4gICAgICAgIH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmb3JtU2F2ZXIudnVlPzY2NDgzMDg4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})