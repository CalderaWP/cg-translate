webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.data.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined != state.language ? state.language : '';\n\t},\n\tfields: function fields(state) {\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' != _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\treturn state.showAddLanguage;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZmllbGRzIiwiZmllbGQiLCJmb3JtTGFuZ3VhZ2VzIiwic2hvd0Zvcm1DaG9pY2UiLCJzaG93QWRkTGFuZ3VhZ2UiLCJzYXZpbmciXSwibWFwcGluZ3MiOiI7OztBQUdPLElBQU1BLFVBQVU7QUFDdEJDLFVBQVUsd0JBQVM7QUFDbEIsU0FBT0MsTUFBTUMsY0FBTixDQUFzQixTQUF0QixLQUFxQ0MsYUFBYUYsTUFBTUQsT0FBeEQsR0FBa0VDLE1BQU1ELE9BQXhFLEdBQWtGLEtBQXpGO0FBQ0EsRUFIcUI7QUFJdEJJLFVBQVUsd0JBQVM7QUFDbEIsU0FBT0gsTUFBTUksSUFBTixDQUFXRCxPQUFsQjtBQUNBLEVBTnFCO0FBT3RCQyxPQUFPLHFCQUFTO0FBQ2YsU0FBT0osTUFBTUksSUFBYjtBQUNBLEVBVHFCO0FBVXRCQyxRQUFRLHNCQUFTO0FBQ2hCLFNBQU9MLE1BQU1LLEtBQWI7QUFDQSxFQVpxQjtBQWF0QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9OLE1BQU1NLElBQWI7QUFDQSxFQWZxQjtBQWdCdEJDLFNBQVMsdUJBQVM7QUFDakIsU0FBT1AsTUFBTU0sSUFBTixDQUFXRSxFQUFsQjtBQUNBLEVBbEJxQjtBQW1CdEJDLFFBQVEsc0JBQVM7QUFDaEIsU0FBT1QsTUFBTVMsS0FBYjtBQUNBLEVBckJxQjtBQXNCdEJDLFlBQVksMEJBQVM7QUFDcEIsU0FBT1YsTUFBTVUsU0FBYjtBQUNBLEVBeEJxQjtBQXlCdEJDLFdBQVcseUJBQVM7QUFDbkIsU0FBT1QsYUFBYUYsTUFBTVcsUUFBbkIsR0FBOEJYLE1BQU1XLFFBQXBDLEdBQStDLEVBQXREO0FBQ0EsRUEzQnFCO0FBNEJ0QkMsU0FBUSx1QkFBUztBQUNoQixTQUFPWixNQUFNTSxJQUFOLENBQVdNLE1BQVgsQ0FBa0JaLE1BQU1XLFFBQXhCLENBQVA7QUFDQSxFQTlCcUI7QUErQnRCRSxRQUFPLHNCQUFTO0FBQ2YsTUFBSSxvQkFBb0JiLE1BQU1hLEtBQTFCLENBQUosRUFBcUM7QUFDcEMsVUFBTyxFQUFQO0FBQ0E7O0FBRUQsU0FBT2IsTUFBTWEsS0FBYjtBQUNBLEVBckNxQjtBQXNDdEJDLGdCQUFlLDhCQUFTO0FBQ3ZCLFNBQU9kLE1BQU1jLGFBQWI7QUFFQSxFQXpDcUI7QUEwQ3RCQyxpQkFBZ0IsK0JBQVM7QUFDeEIsU0FBT2YsTUFBTWUsY0FBYjtBQUNBLEVBNUNxQjtBQTZDdEJDLGtCQUFpQixnQ0FBUztBQUN6QixTQUFPaEIsTUFBTWdCLGVBQWI7QUFDQSxFQS9DcUI7QUFnRHRCQyxTQUFRLHVCQUFTO0FBQ2hCLFNBQU9qQixNQUFNaUIsTUFBYjtBQUNBO0FBbERxQixDQUFoQiIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBjb25zdCBHRVRURVJTID0ge1xuXHRmaWVsZElkIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eSggJ2ZpZWxkSWQnICkgJiYgdW5kZWZpbmVkICE9IHN0YXRlLmZpZWxkSWQgPyBzdGF0ZS5maWVsZElkIDogZmFsc2U7XG5cdH0sXG5cdHN0cmluZ3MgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmRhdGEuc3RyaW5ncztcblx0fSxcblx0ZGF0YSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZGF0YTtcblx0fSxcblx0bG9jYWwgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmxvY2FsO1xuXHR9LFxuXHRmb3JtIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtO1xuXHR9LFxuXHRmb3JtSWQgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uSUQ7XG5cdH0sXG5cdGZvcm1zIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3Jtcztcblx0fSxcblx0bGFuZ3VhZ2VzIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5sYW5ndWFnZXM7XG5cdH0sXG5cdGxhbmd1YWdlIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiB1bmRlZmluZWQgIT0gc3RhdGUubGFuZ3VhZ2UgPyBzdGF0ZS5sYW5ndWFnZSA6ICcnO1xuXHR9LFxuXHRmaWVsZHM6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdO1xuXHR9LFxuXHRmaWVsZDogc3RhdGUgPT4ge1xuXHRcdGlmKCAnb2JqZWN0JyAhPSB0eXBlb2YgIHN0YXRlLmZpZWxkICl7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLmZpZWxkO1xuXHR9LFxuXHRmb3JtTGFuZ3VhZ2VzOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm1MYW5ndWFnZXM7XG5cblx0fSxcblx0c2hvd0Zvcm1DaG9pY2U6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuc2hvd0Zvcm1DaG9pY2U7XG5cdH0sXG5cdHNob3dBZGRMYW5ndWFnZTogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2U7XG5cdH0sXG5cdHNhdmluZzogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zYXZpbmc7XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmUvZ2V0dGVycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 47:
/* exports provided: MUTATIONS */
/* exports used: MUTATIONS */
/*!***********************************!*\
  !*** ./client/store/mutations.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MUTATIONS; });\nvar maybeSetField = function maybeSetField(state) {\n\treturn state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n};\n\nvar MUTATIONS = {\n\tform: function form(state, value) {\n\t\tif ('string' == typeof value) {\n\t\t\tvalue = {\n\t\t\t\tID: value\n\t\t\t};\n\t\t}\n\t\tif (state.form.ID != value.ID) {\n\t\t\tstate.language = '';\n\t\t\tstate.fieldId = '';\n\t\t\tstate.field = {};\n\t\t}\n\t\tstate.form = Object.assign(state.form, value);\n\t\tif (state.form.hasOwnProperty('languages_named')) {\n\t\t\tstate.formLanguages = state.form.languages_named;\n\t\t} else {\n\t\t\tstate.formLanguages = {};\n\t\t}\n\t},\n\tformLanguages: function formLanguages(state, value) {\n\t\tstate.formLanguages = value;\n\t},\n\tlanguage: function language(state, value) {\n\t\tstate.language = value;\n\t\tstate.field = {};\n\t\tstate.fieldId = '';\n\t\tstate.fields = state.form.fields[state.language];\n\t},\n\tfieldId: function fieldId(state, value) {\n\t\tstate.fieldId = value;\n\t\tstate.field = state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n\t},\n\tfieldValue: function fieldValue(state, value) {\n\t\tstate.field = value;\n\t\tstate.form.fields[state.language][state.fieldId] = value;\n\t},\n\tfieldOpt: function fieldOpt(state, opt) {\n\t\tstate.field.option[opt.opt] = opt.value;\n\t\tstate.form.fields[state.language][state.fieldId] = state.field;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\tif (null === state.state.showFormChoice) {\n\t\t\tstate.state.showFormChoice = true;\n\t\t} else {\n\t\t\tstate.showFormChoice = !state.state.showFormChoice;\n\t\t}\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null === state.state.showAddLanguage) {\n\t\t\tstate.state.showAddLanguage = true;\n\t\t} else {\n\t\t\tstate.showAddLanguage = !state.state.showAddLanguage;\n\t\t}\n\t\treturn state.showAddLanguage;\n\t},\n\tsaving: function saving(state) {\n\t\tif (null === state.state.saving) {\n\t\t\tstate.state.saving = true;\n\t\t} else {\n\t\t\tstate.saving = !state.state.saving;\n\t\t}\n\t\treturn state.saving;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9tdXRhdGlvbnMuanMiXSwibmFtZXMiOlsibWF5YmVTZXRGaWVsZCIsInN0YXRlIiwiZmllbGRJZCIsImxhbmd1YWdlIiwiZm9ybSIsImZpZWxkcyIsIk1VVEFUSU9OUyIsInZhbHVlIiwiSUQiLCJmaWVsZCIsIk9iamVjdCIsImFzc2lnbiIsImhhc093blByb3BlcnR5IiwiZm9ybUxhbmd1YWdlcyIsImxhbmd1YWdlc19uYW1lZCIsImZpZWxkVmFsdWUiLCJmaWVsZE9wdCIsIm9wdCIsIm9wdGlvbiIsInNob3dGb3JtQ2hvaWNlIiwic2hvd0FkZExhbmd1YWdlIiwic2F2aW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVUMsS0FBVixFQUFpQjtBQUN0QyxRQUFPQSxNQUFNQyxPQUFOLElBQWlCRCxNQUFNRSxRQUF2QixHQUFrQ0YsTUFBTUcsSUFBTixDQUFXQyxNQUFYLENBQWtCSixNQUFNRSxRQUF4QixFQUFrQ0YsTUFBTUMsT0FBeEMsQ0FBbEMsR0FBcUYsRUFBNUY7QUFDQSxDQUZEOztBQUlPLElBQU1JLFlBQVk7QUFDeEJGLEtBRHdCLGdCQUNuQkgsS0FEbUIsRUFDYk0sS0FEYSxFQUNQO0FBQ2hCLE1BQUksWUFBWSxPQUFRQSxLQUF4QixFQUErQjtBQUM5QkEsV0FBUTtBQUNQQyxRQUFJRDtBQURHLElBQVI7QUFHQTtBQUNELE1BQUlOLE1BQU1HLElBQU4sQ0FBV0ksRUFBWCxJQUFpQkQsTUFBTUMsRUFBM0IsRUFBK0I7QUFDOUJQLFNBQU1FLFFBQU4sR0FBaUIsRUFBakI7QUFDQUYsU0FBTUMsT0FBTixHQUFnQixFQUFoQjtBQUNBRCxTQUFNUSxLQUFOLEdBQWMsRUFBZDtBQUNBO0FBQ0RSLFFBQU1HLElBQU4sR0FBYU0sT0FBT0MsTUFBUCxDQUFjVixNQUFNRyxJQUFwQixF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LE1BQWI7QUFDQTtBQXBFdUIsQ0FBbEIiLCJmaWxlIjoiNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXliZVNldEZpZWxkID0gZnVuY3Rpb24gKHN0YXRlKSB7XG5cdHJldHVybiBzdGF0ZS5maWVsZElkICYmIHN0YXRlLmxhbmd1YWdlID8gc3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdIDoge307XG59O1xuXG5leHBvcnQgY29uc3QgTVVUQVRJT05TID0ge1xuXHRmb3JtKHN0YXRlLHZhbHVlKXtcblx0XHRpZiggJ3N0cmluZycgPT0gdHlwZW9mICB2YWx1ZSApe1xuXHRcdFx0dmFsdWUgPSB7XG5cdFx0XHRcdElEOiB2YWx1ZVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYoIHN0YXRlLmZvcm0uSUQgIT0gdmFsdWUuSUQgKXtcblx0XHRcdHN0YXRlLmxhbmd1YWdlID0gJyc7XG5cdFx0XHRzdGF0ZS5maWVsZElkID0gJyc7XG5cdFx0XHRzdGF0ZS5maWVsZCA9IHt9O1xuXHRcdH1cblx0XHRzdGF0ZS5mb3JtID0gT2JqZWN0LmFzc2lnbihzdGF0ZS5mb3JtLHZhbHVlKTtcblx0XHRpZiggc3RhdGUuZm9ybS5oYXNPd25Qcm9wZXJ0eSggJ2xhbmd1YWdlc19uYW1lZCcgKSApe1xuXHRcdFx0c3RhdGUuZm9ybUxhbmd1YWdlcyA9IHN0YXRlLmZvcm0ubGFuZ3VhZ2VzX25hbWVkO1xuXHRcdH1lbHNle1xuXHRcdFx0c3RhdGUuZm9ybUxhbmd1YWdlcyA9IHt9O1xuXHRcdH1cblx0fSxcblx0Zm9ybUxhbmd1YWdlcyhzdGF0ZSx2YWx1ZSApeyBzdGF0ZS5mb3JtTGFuZ3VhZ2VzID0gdmFsdWUgfSxcblx0bGFuZ3VhZ2Uoc3RhdGUsdmFsdWUpe1xuXHRcdHN0YXRlLmxhbmd1YWdlID0gdmFsdWU7XG5cdFx0c3RhdGUuZmllbGQgPSB7fTtcblx0XHRzdGF0ZS5maWVsZElkID0gJyc7XG5cdFx0c3RhdGUuZmllbGRzID0gc3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdO1xuXG5cdH0sXG5cdGZpZWxkSWQoc3RhdGUsIHZhbHVlKXtcblx0XHRzdGF0ZS5maWVsZElkID0gdmFsdWU7XG5cdFx0c3RhdGUuZmllbGQgPSBzdGF0ZS5maWVsZElkICYmIHN0YXRlLmxhbmd1YWdlID8gc3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdIDoge307XG5cblx0fSxcblx0ZmllbGRWYWx1ZShzdGF0ZSx2YWx1ZSl7XG5cdFx0c3RhdGUuZmllbGQgPSB2YWx1ZTtcblx0XHRzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV1bc3RhdGUuZmllbGRJZF0gPSB2YWx1ZTtcblxuXHR9LFxuXHRmaWVsZE9wdChzdGF0ZSxvcHQpe1xuXHRcdHN0YXRlLmZpZWxkLm9wdGlvbltvcHQub3B0XSA9IG9wdC52YWx1ZTtcblx0XHRzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV1bc3RhdGUuZmllbGRJZF0gPSBzdGF0ZS5maWVsZDtcblxuXHR9LFxuXHRzaG93Rm9ybUNob2ljZShzdGF0ZSl7XG5cdFx0aWYoIG51bGwgPT09IHN0YXRlLnN0YXRlLnNob3dGb3JtQ2hvaWNlICl7XG5cdFx0XHRzdGF0ZS5zdGF0ZS5zaG93Rm9ybUNob2ljZSA9IHRydWU7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLnNob3dGb3JtQ2hvaWNlID0gISBzdGF0ZS5zdGF0ZS5zaG93Rm9ybUNob2ljZTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dGb3JtQ2hvaWNlO1xuXHR9LFxuXHRzaG93QWRkTGFuZ3VhZ2Uoc3RhdGUpe1xuXHRcdGlmKCBudWxsID09PSBzdGF0ZS5zdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgKXtcblx0XHRcdHN0YXRlLnN0YXRlLnNob3dBZGRMYW5ndWFnZSA9IHRydWU7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLnNob3dBZGRMYW5ndWFnZSA9ICEgc3RhdGUuc3RhdGUuc2hvd0FkZExhbmd1YWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGUuc2hvd0FkZExhbmd1YWdlO1xuXHR9LFxuXHRzYXZpbmcoc3RhdGUpe1xuXHRcdGlmKCBudWxsID09PSBzdGF0ZS5zdGF0ZS5zYXZpbmcgKXtcblx0XHRcdHN0YXRlLnN0YXRlLnNhdmluZyA9IHRydWU7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLnNhdmluZyA9ICEgc3RhdGUuc3RhdGUuc2F2aW5nO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGUuc2F2aW5nO1xuXHR9XG5cbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3JlL211dGF0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})