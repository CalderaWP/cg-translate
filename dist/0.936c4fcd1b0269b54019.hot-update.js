webpackHotUpdate(0,{

/***/ 37:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.data.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined != state.language ? state.language : '';\n\t},\n\tfields: function fields(state) {\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' != _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\t\tconsole.log(state.field.option);\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZmllbGRzIiwiZmllbGQiLCJjb25zb2xlIiwibG9nIiwib3B0aW9uIiwiZm9ybUxhbmd1YWdlcyJdLCJtYXBwaW5ncyI6Ijs7O0FBR08sSUFBTUEsVUFBVTtBQUN0QkMsVUFBVSx3QkFBUztBQUNsQixTQUFPQyxNQUFNQyxjQUFOLENBQXNCLFNBQXRCLEtBQXFDQyxhQUFhRixNQUFNRCxPQUF4RCxHQUFrRUMsTUFBTUQsT0FBeEUsR0FBa0YsS0FBekY7QUFDQSxFQUhxQjtBQUl0QkksVUFBVSx3QkFBUztBQUNsQixTQUFPSCxNQUFNSSxJQUFOLENBQVdELE9BQWxCO0FBQ0EsRUFOcUI7QUFPdEJDLE9BQU8scUJBQVM7QUFDZixTQUFPSixNQUFNSSxJQUFiO0FBQ0EsRUFUcUI7QUFVdEJDLFFBQVEsc0JBQVM7QUFDaEIsU0FBT0wsTUFBTUssS0FBYjtBQUNBLEVBWnFCO0FBYXRCQyxPQUFPLHFCQUFTO0FBQ2YsU0FBT04sTUFBTU0sSUFBYjtBQUNBLEVBZnFCO0FBZ0J0QkMsU0FBUyx1QkFBUztBQUNqQixTQUFPUCxNQUFNTSxJQUFOLENBQVdFLEVBQWxCO0FBQ0EsRUFsQnFCO0FBbUJ0QkMsUUFBUSxzQkFBUztBQUNoQixTQUFPVCxNQUFNUyxLQUFiO0FBQ0EsRUFyQnFCO0FBc0J0QkMsWUFBWSwwQkFBUztBQUNwQixTQUFPVixNQUFNVSxTQUFiO0FBQ0EsRUF4QnFCO0FBeUJ0QkMsV0FBVyx5QkFBUztBQUNuQixTQUFPVCxhQUFhRixNQUFNVyxRQUFuQixHQUE4QlgsTUFBTVcsUUFBcEMsR0FBK0MsRUFBdEQ7QUFDQSxFQTNCcUI7QUE0QnRCQyxTQUFRLHVCQUFTO0FBQ2hCLFNBQU9aLE1BQU1NLElBQU4sQ0FBV00sTUFBWCxDQUFrQlosTUFBTVcsUUFBeEIsQ0FBUDtBQUNBLEVBOUJxQjtBQStCdEJFLFFBQU8sc0JBQVM7QUFDZixNQUFJLG9CQUFvQmIsTUFBTWEsS0FBMUIsQ0FBSixFQUFxQztBQUNwQyxVQUFPLEVBQVA7QUFDQTtBQUNEQyxVQUFRQyxHQUFSLENBQVlmLE1BQU1hLEtBQU4sQ0FBWUcsTUFBeEI7QUFDQSxTQUFPaEIsTUFBTWEsS0FBYjtBQUNBLEVBckNxQjtBQXNDdEJJLGdCQUFlLDhCQUFTO0FBQ3ZCLFNBQU9qQixNQUFNaUIsYUFBYjtBQUVBO0FBekNxQixDQUFoQiIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmV4cG9ydCBjb25zdCBHRVRURVJTID0ge1xuXHRmaWVsZElkIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eSggJ2ZpZWxkSWQnICkgJiYgdW5kZWZpbmVkICE9IHN0YXRlLmZpZWxkSWQgPyBzdGF0ZS5maWVsZElkIDogZmFsc2U7XG5cdH0sXG5cdHN0cmluZ3MgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmRhdGEuc3RyaW5ncztcblx0fSxcblx0ZGF0YSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZGF0YTtcblx0fSxcblx0bG9jYWwgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmxvY2FsO1xuXHR9LFxuXHRmb3JtIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtO1xuXHR9LFxuXHRmb3JtSWQgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uSUQ7XG5cdH0sXG5cdGZvcm1zIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3Jtcztcblx0fSxcblx0bGFuZ3VhZ2VzIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5sYW5ndWFnZXM7XG5cdH0sXG5cdGxhbmd1YWdlIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiB1bmRlZmluZWQgIT0gc3RhdGUubGFuZ3VhZ2UgPyBzdGF0ZS5sYW5ndWFnZSA6ICcnO1xuXHR9LFxuXHRmaWVsZHM6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdO1xuXHR9LFxuXHRmaWVsZDogc3RhdGUgPT4ge1xuXHRcdGlmKCAnb2JqZWN0JyAhPSB0eXBlb2YgIHN0YXRlLmZpZWxkICl7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHN0YXRlLmZpZWxkLm9wdGlvbiApO1xuXHRcdHJldHVybiBzdGF0ZS5maWVsZDtcblx0fSxcblx0Zm9ybUxhbmd1YWdlczogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtTGFuZ3VhZ2VzO1xuXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmUvZ2V0dGVycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 38:
/* exports provided: MUTATIONS */
/* exports used: MUTATIONS */
/*!***********************************!*\
  !*** ./client/store/mutations.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MUTATIONS; });\nvar maybeSetField = function maybeSetField(state) {\n\treturn state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n};\n\nvar MUTATIONS = {\n\tform: function form(state, value) {\n\t\tif ('string' == typeof value) {\n\t\t\tvalue = {\n\t\t\t\tID: value\n\t\t\t};\n\t\t}\n\t\tif (state.form.ID != value.ID) {\n\t\t\tstate.language = '';\n\t\t\tstate.fieldId = '';\n\t\t\tstate.field = {};\n\t\t}\n\t\tstate.form = Object.assign(state.form, value);\n\t\tif (state.form.hasOwnProperty('languages_named')) {\n\t\t\tstate.formLanguages = state.form.languages_named;\n\t\t} else {\n\t\t\tstate.formLanguages = {};\n\t\t}\n\t},\n\tformLanguages: function formLanguages(state, value) {\n\t\tstate.formLanguages = value;\n\t},\n\tlanguage: function language(state, value) {\n\t\tstate.language = value;\n\t\tstate.field = {};\n\t\tstate.fieldId = '';\n\t\tstate.fields = state.form.fields[state.language];\n\t},\n\tfieldId: function fieldId(state, value) {\n\t\tstate.fieldId = value;\n\t\tstate.field = state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n\t\tif (state.field.hasOwnProperty('option') && null !== state.field.option) {\n\n\t\t\tObject.getOwnPropertyNames(state.field.option).forEach(function (opt) {\n\t\t\t\tstate.field.option[opt] = {\n\t\t\t\t\topt: opt,\n\t\t\t\t\tlabel: state.field.option[opt]\n\t\t\t\t};\n\t\t\t});\n\t\t}\n\t},\n\tfieldValue: function fieldValue(state, value) {\n\t\tstate.form.fields[state.language][state.fieldId] = value;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9tdXRhdGlvbnMuanMiXSwibmFtZXMiOlsibWF5YmVTZXRGaWVsZCIsInN0YXRlIiwiZmllbGRJZCIsImxhbmd1YWdlIiwiZm9ybSIsImZpZWxkcyIsIk1VVEFUSU9OUyIsInZhbHVlIiwiSUQiLCJmaWVsZCIsIk9iamVjdCIsImFzc2lnbiIsImhhc093blByb3BlcnR5IiwiZm9ybUxhbmd1YWdlcyIsImxhbmd1YWdlc19uYW1lZCIsIm9wdGlvbiIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JFYWNoIiwib3B0IiwibGFiZWwiLCJmaWVsZFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVUMsS0FBVixFQUFpQjtBQUN0QyxRQUFPQSxNQUFNQyxPQUFOLElBQWlCRCxNQUFNRSxRQUF2QixHQUFrQ0YsTUFBTUcsSUFBTixDQUFXQyxNQUFYLENBQWtCSixNQUFNRSxRQUF4QixFQUFrQ0YsTUFBTUMsT0FBeEMsQ0FBbEMsR0FBcUYsRUFBNUY7QUFDQSxDQUZEOztBQUlPLElBQU1JLFlBQVk7QUFDeEJGLEtBRHdCLGdCQUNuQkgsS0FEbUIsRUFDYk0sS0FEYSxFQUNQO0FBQ2hCLE1BQUksWUFBWSxPQUFRQSxLQUF4QixFQUErQjtBQUM5QkEsV0FBUTtBQUNQQyxRQUFJRDtBQURHLElBQVI7QUFHQTtBQUNELE1BQUlOLE1BQU1HLElBQU4sQ0FBV0ksRUFBWCxJQUFpQkQsTUFBTUMsRUFBM0IsRUFBK0I7QUFDOUJQLFNBQU1FLFFBQU4sR0FBaUIsRUFBakI7QUFDQUYsU0FBTUMsT0FBTixHQUFnQixFQUFoQjtBQUNBRCxTQUFNUSxLQUFOLEdBQWMsRUFBZDtBQUNBO0FBQ0RSLFFBQU1HLElBQU4sR0FBYU0sT0FBT0MsTUFBUCxDQUFjVixNQUFNRyxJQUFwQixFQUF5QkcsS0FBekIsQ0FBYjtBQUNBLE1BQUlOLE1BQU1HLElBQU4sQ0FBV1EsY0FBWCxDQUEyQixpQkFBM0IsQ0FBSixFQUFvRDtBQUNuRFgsU0FBTVksYUFBTixHQUFzQlosTUFBTUcsSUFBTixDQUFXVSxlQUFqQztBQUNBLEdBRkQsTUFFSztBQUNKYixTQUFNWSxhQUFOLEdBQXNCLEVBQXRCO0FBQ0E7QUFDRCxFQWxCdUI7QUFtQnhCQSxjQW5Cd0IseUJBbUJWWixLQW5CVSxFQW1CSk0sS0FuQkksRUFtQkc7QUFBRU4sUUFBTVksYUFBTixHQUFzQk4sS0FBdEI7QUFBNkIsRUFuQmxDO0FBb0J4QkosU0FwQndCLG9CQW9CZkYsS0FwQmUsRUFvQlRNLEtBcEJTLEVBb0JIO0FBQ3BCTixRQUFNRSxRQUFOLEdBQWlCSSxLQUFqQjtBQUNBTixRQUFNUSxLQUFOLEdBQWMsRUFBZDtBQUNBUixRQUFNQyxPQUFOLEdBQWdCLEVBQWhCO0FBQ0FELFFBQU1JLE1BQU4sR0FBZUosTUFBTUcsSUFBTixDQUFXQyxNQUFYLENBQWtCSixNQUFNRSxRQUF4QixDQUFmO0FBRUEsRUExQnVCO0FBMkJ4QkQsUUEzQndCLG1CQTJCaEJELEtBM0JnQixFQTJCVE0sS0EzQlMsRUEyQkg7QUFDcEJOLFFBQU1DLE9BQU4sR0FBZ0JLLEtBQWhCO0FBQ0FOLFFBQU1RLEtBQU4sR0FBY1IsTUFBTUMsT0FBTixJQUFpQkQsTUFBTUUsUUFBdkIsR0FBa0NGLE1BQU1HLElBQU4sQ0FBV0MsTUFBWCxDQUFrQkosTUFBTUUsUUFBeEIsRUFBa0NGLE1BQU1DLE9BQXhDLENBQWxDLEdBQXFGLEVBQW5HO0FBQ0EsTUFBSUQsTUFBTVEsS0FBTixDQUFZRyxjQUFaLENBQTJCLFFBQTNCLEtBQXdDLFNBQVNYLE1BQU1RLEtBQU4sQ0FBWU0sTUFBakUsRUFBMEU7O0FBRXpFTCxVQUFPTSxtQkFBUCxDQUE0QmYsTUFBTVEsS0FBTixDQUFZTSxNQUF4QyxFQUFpREUsT0FBakQsQ0FBMEQsZUFBTztBQUNoRWhCLFVBQU1RLEtBQU4sQ0FBWU0sTUFBWixDQUFtQkcsR0FBbkIsSUFBeUI7QUFDeEJBLFVBQUtBLEdBRG1CO0FBRXhCQyxZQUFPbEIsTUFBTVEsS0FBTixDQUFZTSxNQUFaLENBQW1CRyxHQUFuQjtBQUZpQixLQUF6QjtBQUlBLElBTEQ7QUFPQTtBQUVELEVBekN1QjtBQTBDeEJFLFdBMUN3QixzQkEwQ2JuQixLQTFDYSxFQTBDUE0sS0ExQ08sRUEwQ0Q7QUFDdEJOLFFBQU1HLElBQU4sQ0FBV0MsTUFBWCxDQUFrQkosTUFBTUUsUUFBeEIsRUFBa0NGLE1BQU1DLE9BQXhDLElBQW1ESyxLQUFuRDtBQUNBO0FBNUN1QixDQUFsQiIsImZpbGUiOiIzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1heWJlU2V0RmllbGQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblx0cmV0dXJuIHN0YXRlLmZpZWxkSWQgJiYgc3RhdGUubGFuZ3VhZ2UgPyBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV1bc3RhdGUuZmllbGRJZF0gOiB7fTtcbn07XG5cbmV4cG9ydCBjb25zdCBNVVRBVElPTlMgPSB7XG5cdGZvcm0oc3RhdGUsdmFsdWUpe1xuXHRcdGlmKCAnc3RyaW5nJyA9PSB0eXBlb2YgIHZhbHVlICl7XG5cdFx0XHR2YWx1ZSA9IHtcblx0XHRcdFx0SUQ6IHZhbHVlXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiggc3RhdGUuZm9ybS5JRCAhPSB2YWx1ZS5JRCApe1xuXHRcdFx0c3RhdGUubGFuZ3VhZ2UgPSAnJztcblx0XHRcdHN0YXRlLmZpZWxkSWQgPSAnJztcblx0XHRcdHN0YXRlLmZpZWxkID0ge307XG5cdFx0fVxuXHRcdHN0YXRlLmZvcm0gPSBPYmplY3QuYXNzaWduKHN0YXRlLmZvcm0sdmFsdWUpO1xuXHRcdGlmKCBzdGF0ZS5mb3JtLmhhc093blByb3BlcnR5KCAnbGFuZ3VhZ2VzX25hbWVkJyApICl7XG5cdFx0XHRzdGF0ZS5mb3JtTGFuZ3VhZ2VzID0gc3RhdGUuZm9ybS5sYW5ndWFnZXNfbmFtZWQ7XG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5mb3JtTGFuZ3VhZ2VzID0ge307XG5cdFx0fVxuXHR9LFxuXHRmb3JtTGFuZ3VhZ2VzKHN0YXRlLHZhbHVlICl7IHN0YXRlLmZvcm1MYW5ndWFnZXMgPSB2YWx1ZSB9LFxuXHRsYW5ndWFnZShzdGF0ZSx2YWx1ZSl7XG5cdFx0c3RhdGUubGFuZ3VhZ2UgPSB2YWx1ZTtcblx0XHRzdGF0ZS5maWVsZCA9IHt9O1xuXHRcdHN0YXRlLmZpZWxkSWQgPSAnJztcblx0XHRzdGF0ZS5maWVsZHMgPSBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV07XG5cblx0fSxcblx0ZmllbGRJZChzdGF0ZSwgdmFsdWUpe1xuXHRcdHN0YXRlLmZpZWxkSWQgPSB2YWx1ZTtcblx0XHRzdGF0ZS5maWVsZCA9IHN0YXRlLmZpZWxkSWQgJiYgc3RhdGUubGFuZ3VhZ2UgPyBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV1bc3RhdGUuZmllbGRJZF0gOiB7fTtcblx0XHRpZiggc3RhdGUuZmllbGQuaGFzT3duUHJvcGVydHkoJ29wdGlvbicpICYmIG51bGwgIT09IHN0YXRlLmZpZWxkLm9wdGlvbiAgKXtcblxuXHRcdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoIHN0YXRlLmZpZWxkLm9wdGlvbiApLmZvckVhY2goIG9wdCA9PiB7XG5cdFx0XHRcdHN0YXRlLmZpZWxkLm9wdGlvbltvcHRdID17XG5cdFx0XHRcdFx0b3B0OiBvcHQsXG5cdFx0XHRcdFx0bGFiZWw6IHN0YXRlLmZpZWxkLm9wdGlvbltvcHRdXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fVxuXG5cdH0sXG5cdGZpZWxkVmFsdWUoc3RhdGUsdmFsdWUpe1xuXHRcdHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXVtzdGF0ZS5maWVsZElkXSA9IHZhbHVlO1xuXHR9XG5cbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3JlL211dGF0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})