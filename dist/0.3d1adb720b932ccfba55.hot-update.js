webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined !== state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined !== state.language ? state.language : '';\n\t},\n\tformName: function formName(state) {\n\t\treturn state.form.formName;\n\t},\n\tfields: function fields(state) {\n\t\tif (undefined === state.fields) {\n\t\t\treturn {};\n\t\t}\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' !== _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t},\n\tshowChooser: function showChooser(state) {\n\t\treturn state.showChooser;\n\t},\n\tformInfo: function formInfo(state) {\n\n\t\tconsole.log(state.language);\n\t\tconsole.log(state.form.info[state.language]);\n\t\treturn state.form.info[state.language];\n\t\treturn state.form.info.hasOwnProperty(state.language) ? state.form.info[state.language] : state.form.hasOwnProperty('info') ? state.form.info : { success: '', name: '' };\n\t},\n\tfoo: function foo(state) {\n\t\treturn state.hasOwnProperty('foo') ? state.foo : 'oof';\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZm9ybU5hbWUiLCJmaWVsZHMiLCJmaWVsZCIsImZvcm1MYW5ndWFnZXMiLCJzaG93Rm9ybUNob2ljZSIsInNob3dBZGRMYW5ndWFnZSIsInNob3dMYW5ndWFnZUNob2ljZSIsInNhdmluZyIsInNob3dDaG9vc2VyIiwiZm9ybUluZm8iLCJjb25zb2xlIiwibG9nIiwiaW5mbyIsInN1Y2Nlc3MiLCJuYW1lIiwiZm9vIl0sIm1hcHBpbmdzIjoiOzs7QUFHTyxJQUFNQSxVQUFVO0FBQ3RCQyxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9DLE1BQU1DLGNBQU4sQ0FBc0IsU0FBdEIsS0FBcUNDLGNBQWNGLE1BQU1ELE9BQXpELEdBQW1FQyxNQUFNRCxPQUF6RSxHQUFtRixLQUExRjtBQUNBLEVBSHFCO0FBSXRCSSxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9ILE1BQU1HLE9BQWI7QUFDQSxFQU5xQjtBQU90QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9KLE1BQU1JLElBQWI7QUFDQSxFQVRxQjtBQVV0QkMsUUFBUSxzQkFBUztBQUNoQixTQUFPTCxNQUFNSyxLQUFiO0FBQ0EsRUFacUI7QUFhdEJDLE9BQU8scUJBQVM7QUFDZixTQUFPTixNQUFNTSxJQUFiO0FBQ0EsRUFmcUI7QUFnQnRCQyxTQUFTLHVCQUFTO0FBQ2pCLFNBQU9QLE1BQU1NLElBQU4sQ0FBV0UsRUFBbEI7QUFDQSxFQWxCcUI7QUFtQnRCQyxRQUFRLHNCQUFTO0FBQ2hCLFNBQU9ULE1BQU1TLEtBQWI7QUFDQSxFQXJCcUI7QUFzQnRCQyxZQUFZLDBCQUFTO0FBQ3BCLFNBQU9WLE1BQU1VLFNBQWI7QUFDQSxFQXhCcUI7QUF5QnRCQyxXQUFXLHlCQUFTO0FBQ25CLFNBQU9ULGNBQWNGLE1BQU1XLFFBQXBCLEdBQStCWCxNQUFNVyxRQUFyQyxHQUFnRCxFQUF2RDtBQUNBLEVBM0JxQjtBQTRCdEJDLFdBQVcseUJBQVM7QUFDbkIsU0FBT1osTUFBTU0sSUFBTixDQUFXTSxRQUFsQjtBQUNBLEVBOUJxQjtBQStCdEJDLFNBQVEsdUJBQVM7QUFDaEIsTUFBSVgsY0FBY0YsTUFBTWEsTUFBeEIsRUFBZ0M7QUFDL0IsVUFBTyxFQUFQO0FBQ0E7QUFDRCxTQUFPYixNQUFNTSxJQUFOLENBQVdPLE1BQVgsQ0FBa0JiLE1BQU1XLFFBQXhCLENBQVA7QUFDQSxFQXBDcUI7QUFxQ3RCRyxRQUFPLHNCQUFTO0FBQ2YsTUFBSSxxQkFBcUJkLE1BQU1jLEtBQTNCLENBQUosRUFBc0M7QUFDckMsVUFBTyxFQUFQO0FBQ0E7O0FBRUQsU0FBT2QsTUFBTWMsS0FBYjtBQUNBLEVBM0NxQjtBQTRDdEJDLGdCQUFlLDhCQUFTO0FBQ3ZCLFNBQU9mLE1BQU1lLGFBQWI7QUFFQSxFQS9DcUI7QUFnRHRCQyxpQkFBZ0IsK0JBQVM7QUFDeEIsU0FBT2hCLE1BQU1nQixjQUFiO0FBQ0EsRUFsRHFCO0FBbUR0QkMsa0JBQWlCLGdDQUFTO0FBQ3pCLE1BQUssU0FBU2pCLE1BQU1pQixlQUFwQixFQUFzQztBQUNyQ2pCLFNBQU1pQixlQUFOLEdBQXdCLEtBQXhCO0FBQ0E7O0FBRUQsU0FBT2pCLE1BQU1pQixlQUFiO0FBQ0EsRUF6RHFCO0FBMER0QkMscUJBQW9CLG1DQUFTO0FBQzVCLE1BQUssU0FBU2xCLE1BQU1rQixrQkFBcEIsRUFBeUM7QUFDeENsQixTQUFNa0Isa0JBQU4sR0FBMkIsS0FBM0I7QUFDQTtBQUNELFNBQU9sQixNQUFNa0Isa0JBQWI7QUFDQSxFQS9EcUI7QUFnRXRCQyxTQUFRLHVCQUFTO0FBQ2hCLFNBQU9uQixNQUFNbUIsTUFBYjtBQUNBLEVBbEVxQjtBQW1FdEJDLGNBQWEsNEJBQVM7QUFDckIsU0FBT3BCLE1BQU1vQixXQUFiO0FBQ0EsRUFyRXFCO0FBc0V0QkMsV0FBVSx5QkFBUzs7QUFHbEJDLFVBQVFDLEdBQVIsQ0FBWXZCLE1BQU1XLFFBQWxCO0FBQ0FXLFVBQVFDLEdBQVIsQ0FBY3ZCLE1BQU1NLElBQU4sQ0FBV2tCLElBQVgsQ0FBZ0J4QixNQUFNVyxRQUF0QixDQUFkO0FBQ0EsU0FBUVgsTUFBTU0sSUFBTixDQUFXa0IsSUFBWCxDQUFnQnhCLE1BQU1XLFFBQXRCLENBQVI7QUFDQSxTQUFRWCxNQUFNTSxJQUFOLENBQVdrQixJQUFYLENBQWdCdkIsY0FBaEIsQ0FBZ0NELE1BQU1XLFFBQXRDLENBQUQsR0FDSFgsTUFBTU0sSUFBTixDQUFXa0IsSUFBWCxDQUFnQnhCLE1BQU1XLFFBQXRCLENBREcsR0FFSlgsTUFBTU0sSUFBTixDQUFXTCxjQUFYLENBQTJCLE1BQTNCLElBQ0NELE1BQU1NLElBQU4sQ0FBV2tCLElBRFosR0FFQyxFQUFFQyxTQUFTLEVBQVgsRUFBZUMsTUFBTSxFQUFyQixFQUpKO0FBS0EsRUFqRnFCO0FBa0Z0QkMsTUFBSyxvQkFBUztBQUNiLFNBQU8zQixNQUFNQyxjQUFOLENBQXFCLEtBQXJCLElBQStCRCxNQUFNMkIsR0FBckMsR0FBMkMsS0FBbEQ7QUFDQTtBQXBGcUIsQ0FBaEIiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgY29uc3QgR0VUVEVSUyA9IHtcblx0ZmllbGRJZCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuaGFzT3duUHJvcGVydHkoICdmaWVsZElkJyApICYmIHVuZGVmaW5lZCAhPT0gc3RhdGUuZmllbGRJZCA/IHN0YXRlLmZpZWxkSWQgOiBmYWxzZTtcblx0fSxcblx0c3RyaW5ncyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuc3RyaW5ncztcblx0fSxcblx0ZGF0YSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZGF0YTtcblx0fSxcblx0bG9jYWwgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmxvY2FsO1xuXHR9LFxuXHRmb3JtIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtO1xuXHR9LFxuXHRmb3JtSWQgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uSUQ7XG5cdH0sXG5cdGZvcm1zIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3Jtcztcblx0fSxcblx0bGFuZ3VhZ2VzIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5sYW5ndWFnZXM7XG5cdH0sXG5cdGxhbmd1YWdlIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiB1bmRlZmluZWQgIT09IHN0YXRlLmxhbmd1YWdlID8gc3RhdGUubGFuZ3VhZ2UgOiAnJztcblx0fSxcblx0Zm9ybU5hbWUgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uZm9ybU5hbWU7XG5cdH0sXG5cdGZpZWxkczogc3RhdGUgPT4ge1xuXHRcdGlmKCB1bmRlZmluZWQgPT09IHN0YXRlLmZpZWxkcyApe1xuXHRcdFx0cmV0dXJuIHt9XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV07XG5cdH0sXG5cdGZpZWxkOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICdvYmplY3QnICE9PSB0eXBlb2YgIHN0YXRlLmZpZWxkICl7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLmZpZWxkO1xuXHR9LFxuXHRmb3JtTGFuZ3VhZ2VzOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm1MYW5ndWFnZXM7XG5cblx0fSxcblx0c2hvd0Zvcm1DaG9pY2U6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuc2hvd0Zvcm1DaG9pY2U7XG5cdH0sXG5cdHNob3dBZGRMYW5ndWFnZTogc3RhdGUgPT4ge1xuXHRcdGlmKCAgbnVsbCAhPT0gc3RhdGUuc2hvd0FkZExhbmd1YWdlICkge1xuXHRcdFx0c3RhdGUuc2hvd0FkZExhbmd1YWdlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLnNob3dBZGRMYW5ndWFnZTtcblx0fSxcblx0c2hvd0xhbmd1YWdlQ2hvaWNlOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICBudWxsICE9PSBzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2UgKSB7XG5cdFx0XHRzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2UgPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZTtcblx0fSxcblx0c2F2aW5nOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNhdmluZztcblx0fSxcblx0c2hvd0Nob29zZXI6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuc2hvd0Nob29zZXI7XG5cdH0sXG5cdGZvcm1JbmZvOiBzdGF0ZSA9PiB7XG5cblxuXHRcdGNvbnNvbGUubG9nKHN0YXRlLmxhbmd1YWdlICk7XG5cdFx0Y29uc29sZS5sb2coICBzdGF0ZS5mb3JtLmluZm9bc3RhdGUubGFuZ3VhZ2VdICk7XG5cdFx0cmV0dXJuICBzdGF0ZS5mb3JtLmluZm9bc3RhdGUubGFuZ3VhZ2VdO1xuXHRcdHJldHVybiAoc3RhdGUuZm9ybS5pbmZvLmhhc093blByb3BlcnR5KCBzdGF0ZS5sYW5ndWFnZSApKVxuXHRcdFx0PyAgc3RhdGUuZm9ybS5pbmZvW3N0YXRlLmxhbmd1YWdlXVxuXHRcdFx0OiBzdGF0ZS5mb3JtLmhhc093blByb3BlcnR5KCAnaW5mbycgKVxuXHRcdFx0XHQ/IHN0YXRlLmZvcm0uaW5mb1xuXHRcdFx0XHQ6IHsgc3VjY2VzczogJycsIG5hbWU6ICcnIH1cblx0fSxcblx0Zm9vOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmhhc093blByb3BlcnR5KCdmb28nICkgPyBzdGF0ZS5mb28gOiAnb29mJztcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})