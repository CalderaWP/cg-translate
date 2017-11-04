webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined != state.language ? state.language : '';\n\t},\n\tfields: function fields(state) {\n\t\tif (undefined === state.fields) {\n\t\t\treturn {};\n\t\t}\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' != _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t},\n\tshowChooser: function showChooser(state) {\n\t\treturn state.showChooser;\n\t},\n\tformInfo: function formInfo(state) {\n\t\tif (undefined === state.form.info) {\n\t\t\treturn {};\n\t\t}\n\t\treturn state.form.info[state.language] ? state.form.info[state.language] : state.form.info;\n\t},\n\tfoo: function foo(state) {\n\t\treturn state.hasOwnProperty('foo') ? state.foo : 'oof';\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZmllbGRzIiwiZmllbGQiLCJmb3JtTGFuZ3VhZ2VzIiwic2hvd0Zvcm1DaG9pY2UiLCJzaG93QWRkTGFuZ3VhZ2UiLCJzaG93TGFuZ3VhZ2VDaG9pY2UiLCJzYXZpbmciLCJzaG93Q2hvb3NlciIsImZvcm1JbmZvIiwiaW5mbyIsImZvbyJdLCJtYXBwaW5ncyI6Ijs7O0FBR08sSUFBTUEsVUFBVTtBQUN0QkMsVUFBVSx3QkFBUztBQUNsQixTQUFPQyxNQUFNQyxjQUFOLENBQXNCLFNBQXRCLEtBQXFDQyxhQUFhRixNQUFNRCxPQUF4RCxHQUFrRUMsTUFBTUQsT0FBeEUsR0FBa0YsS0FBekY7QUFDQSxFQUhxQjtBQUl0QkksVUFBVSx3QkFBUztBQUNsQixTQUFPSCxNQUFNRyxPQUFiO0FBQ0EsRUFOcUI7QUFPdEJDLE9BQU8scUJBQVM7QUFDZixTQUFPSixNQUFNSSxJQUFiO0FBQ0EsRUFUcUI7QUFVdEJDLFFBQVEsc0JBQVM7QUFDaEIsU0FBT0wsTUFBTUssS0FBYjtBQUNBLEVBWnFCO0FBYXRCQyxPQUFPLHFCQUFTO0FBQ2YsU0FBT04sTUFBTU0sSUFBYjtBQUNBLEVBZnFCO0FBZ0J0QkMsU0FBUyx1QkFBUztBQUNqQixTQUFPUCxNQUFNTSxJQUFOLENBQVdFLEVBQWxCO0FBQ0EsRUFsQnFCO0FBbUJ0QkMsUUFBUSxzQkFBUztBQUNoQixTQUFPVCxNQUFNUyxLQUFiO0FBQ0EsRUFyQnFCO0FBc0J0QkMsWUFBWSwwQkFBUztBQUNwQixTQUFPVixNQUFNVSxTQUFiO0FBQ0EsRUF4QnFCO0FBeUJ0QkMsV0FBVyx5QkFBUztBQUNuQixTQUFPVCxhQUFhRixNQUFNVyxRQUFuQixHQUE4QlgsTUFBTVcsUUFBcEMsR0FBK0MsRUFBdEQ7QUFDQSxFQTNCcUI7QUE0QnRCQyxTQUFRLHVCQUFTO0FBQ2hCLE1BQUlWLGNBQWNGLE1BQU1ZLE1BQXhCLEVBQWdDO0FBQy9CLFVBQU8sRUFBUDtBQUNBO0FBQ0QsU0FBT1osTUFBTU0sSUFBTixDQUFXTSxNQUFYLENBQWtCWixNQUFNVyxRQUF4QixDQUFQO0FBQ0EsRUFqQ3FCO0FBa0N0QkUsUUFBTyxzQkFBUztBQUNmLE1BQUksb0JBQW9CYixNQUFNYSxLQUExQixDQUFKLEVBQXFDO0FBQ3BDLFVBQU8sRUFBUDtBQUNBOztBQUVELFNBQU9iLE1BQU1hLEtBQWI7QUFDQSxFQXhDcUI7QUF5Q3RCQyxnQkFBZSw4QkFBUztBQUN2QixTQUFPZCxNQUFNYyxhQUFiO0FBRUEsRUE1Q3FCO0FBNkN0QkMsaUJBQWdCLCtCQUFTO0FBQ3hCLFNBQU9mLE1BQU1lLGNBQWI7QUFDQSxFQS9DcUI7QUFnRHRCQyxrQkFBaUIsZ0NBQVM7QUFDekIsTUFBSyxTQUFTaEIsTUFBTWdCLGVBQXBCLEVBQXNDO0FBQ3JDaEIsU0FBTWdCLGVBQU4sR0FBd0IsS0FBeEI7QUFDQTs7QUFFRCxTQUFPaEIsTUFBTWdCLGVBQWI7QUFDQSxFQXREcUI7QUF1RHRCQyxxQkFBb0IsbUNBQVM7QUFDNUIsTUFBSyxTQUFTakIsTUFBTWlCLGtCQUFwQixFQUF5QztBQUN4Q2pCLFNBQU1pQixrQkFBTixHQUEyQixLQUEzQjtBQUNBO0FBQ0QsU0FBT2pCLE1BQU1pQixrQkFBYjtBQUNBLEVBNURxQjtBQTZEdEJDLFNBQVEsdUJBQVM7QUFDaEIsU0FBT2xCLE1BQU1rQixNQUFiO0FBQ0EsRUEvRHFCO0FBZ0V0QkMsY0FBYSw0QkFBUztBQUNyQixTQUFPbkIsTUFBTW1CLFdBQWI7QUFDQSxFQWxFcUI7QUFtRXRCQyxXQUFVLHlCQUFTO0FBQ2xCLE1BQUlsQixjQUFjRixNQUFNTSxJQUFOLENBQVdlLElBQTdCLEVBQW1DO0FBQ2xDLFVBQU8sRUFBUDtBQUNBO0FBQ0QsU0FBUXJCLE1BQU1NLElBQU4sQ0FBV2UsSUFBWCxDQUFnQnJCLE1BQU1XLFFBQXRCLENBQUQsR0FBcUNYLE1BQU1NLElBQU4sQ0FBV2UsSUFBWCxDQUFnQnJCLE1BQU1XLFFBQXRCLENBQXJDLEdBQXVFWCxNQUFNTSxJQUFOLENBQVdlLElBQXpGO0FBQ0EsRUF4RXFCO0FBeUV0QkMsTUFBSyxvQkFBUztBQUNiLFNBQU90QixNQUFNQyxjQUFOLENBQXFCLEtBQXJCLElBQStCRCxNQUFNc0IsR0FBckMsR0FBMkMsS0FBbEQ7QUFDQTtBQTNFcUIsQ0FBaEIiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgY29uc3QgR0VUVEVSUyA9IHtcblx0ZmllbGRJZCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuaGFzT3duUHJvcGVydHkoICdmaWVsZElkJyApICYmIHVuZGVmaW5lZCAhPSBzdGF0ZS5maWVsZElkID8gc3RhdGUuZmllbGRJZCA6IGZhbHNlO1xuXHR9LFxuXHRzdHJpbmdzIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zdHJpbmdzO1xuXHR9LFxuXHRkYXRhIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5kYXRhO1xuXHR9LFxuXHRsb2NhbCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUubG9jYWw7XG5cdH0sXG5cdGZvcm0gOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm07XG5cdH0sXG5cdGZvcm1JZCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybS5JRDtcblx0fSxcblx0Zm9ybXMgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm1zO1xuXHR9LFxuXHRsYW5ndWFnZXMgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmxhbmd1YWdlcztcblx0fSxcblx0bGFuZ3VhZ2UgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZCAhPSBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmxhbmd1YWdlIDogJyc7XG5cdH0sXG5cdGZpZWxkczogc3RhdGUgPT4ge1xuXHRcdGlmKCB1bmRlZmluZWQgPT09IHN0YXRlLmZpZWxkcyApe1xuXHRcdFx0cmV0dXJuIHt9XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV07XG5cdH0sXG5cdGZpZWxkOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICdvYmplY3QnICE9IHR5cGVvZiAgc3RhdGUuZmllbGQgKXtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUuZmllbGQ7XG5cdH0sXG5cdGZvcm1MYW5ndWFnZXM6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybUxhbmd1YWdlcztcblxuXHR9LFxuXHRzaG93Rm9ybUNob2ljZTogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zaG93Rm9ybUNob2ljZTtcblx0fSxcblx0c2hvd0FkZExhbmd1YWdlOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICBudWxsICE9PSBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgKSB7XG5cdFx0XHRzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUuc2hvd0FkZExhbmd1YWdlO1xuXHR9LFxuXHRzaG93TGFuZ3VhZ2VDaG9pY2U6IHN0YXRlID0+IHtcblx0XHRpZiggIG51bGwgIT09IHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSApIHtcblx0XHRcdHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlO1xuXHR9LFxuXHRzYXZpbmc6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuc2F2aW5nO1xuXHR9LFxuXHRzaG93Q2hvb3Nlcjogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zaG93Q2hvb3Nlcjtcblx0fSxcblx0Zm9ybUluZm86IHN0YXRlID0+IHtcblx0XHRpZiggdW5kZWZpbmVkID09PSBzdGF0ZS5mb3JtLmluZm8gKXtcblx0XHRcdHJldHVybiB7fVxuXHRcdH1cblx0XHRyZXR1cm4gKHN0YXRlLmZvcm0uaW5mb1tzdGF0ZS5sYW5ndWFnZV0pID8gIHN0YXRlLmZvcm0uaW5mb1tzdGF0ZS5sYW5ndWFnZV0gOiBzdGF0ZS5mb3JtLmluZm87XG5cdH0sXG5cdGZvbzogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eSgnZm9vJyApID8gc3RhdGUuZm9vIDogJ29vZic7XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmUvZ2V0dGVycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})