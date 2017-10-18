webpackHotUpdate(0,{

/***/ 38:
/* exports provided: MUTATIONS */
/* exports used: MUTATIONS */
/*!***********************************!*\
  !*** ./client/store/mutations.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MUTATIONS; });\nvar maybeSetField = function maybeSetField(state) {\n\treturn state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n};\n\nvar MUTATIONS = {\n\tform: function form(state, value) {\n\t\tif ('string' == typeof value) {\n\t\t\tvalue = {\n\t\t\t\tID: value\n\t\t\t};\n\t\t}\n\t\tif (state.form.ID != value.ID) {\n\t\t\tstate.language = '';\n\t\t\tstate.fieldId = '';\n\t\t\tstate.field = {};\n\t\t}\n\t\tstate.form = Object.assign(state.form, value);\n\t\tif (state.form.hasOwnProperty('languages_named')) {\n\t\t\tstate.formLanguages = state.form.languages_named;\n\t\t} else {\n\t\t\tstate.formLanguages = {};\n\t\t}\n\t},\n\tformLanguages: function formLanguages(state, value) {\n\t\tstate.formLanguages = value;\n\t},\n\tlanguage: function language(state, value) {\n\t\tstate.language = value;\n\t\tstate.field = {};\n\t\tstate.fieldId = '';\n\t\tstate.fields = state.form.fields[state.language];\n\t},\n\tfieldId: function fieldId(state, value) {\n\t\tstate.fieldId = value;\n\t\tstate.field = state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n\t},\n\tfieldValue: function fieldValue(state, value) {\n\t\tstate.form.fields[state.language][state.fieldId] = value;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9tdXRhdGlvbnMuanMiXSwibmFtZXMiOlsibWF5YmVTZXRGaWVsZCIsInN0YXRlIiwiZmllbGRJZCIsImxhbmd1YWdlIiwiZm9ybSIsImZpZWxkcyIsIk1VVEFUSU9OUyIsInZhbHVlIiwiSUQiLCJmaWVsZCIsIk9iamVjdCIsImFzc2lnbiIsImhhc093blByb3BlcnR5IiwiZm9ybUxhbmd1YWdlcyIsImxhbmd1YWdlc19uYW1lZCIsImZpZWxkVmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsSUFBTUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxLQUFWLEVBQWlCO0FBQ3RDLFFBQU9BLE1BQU1DLE9BQU4sSUFBaUJELE1BQU1FLFFBQXZCLEdBQWtDRixNQUFNRyxJQUFOLENBQVdDLE1BQVgsQ0FBa0JKLE1BQU1FLFFBQXhCLEVBQWtDRixNQUFNQyxPQUF4QyxDQUFsQyxHQUFxRixFQUE1RjtBQUNBLENBRkQ7O0FBSU8sSUFBTUksWUFBWTtBQUN4QkYsS0FEd0IsZ0JBQ25CSCxLQURtQixFQUNiTSxLQURhLEVBQ1A7QUFDaEIsTUFBSSxZQUFZLE9BQVFBLEtBQXhCLEVBQStCO0FBQzlCQSxXQUFRO0FBQ1BDLFFBQUlEO0FBREcsSUFBUjtBQUdBO0FBQ0QsTUFBSU4sTUFBTUcsSUFBTixDQUFXSSxFQUFYLElBQWlCRCxNQUFNQyxFQUEzQixFQUErQjtBQUM5QlAsU0FBTUUsUUFBTixHQUFpQixFQUFqQjtBQUNBRixTQUFNQyxPQUFOLEdBQWdCLEVBQWhCO0FBQ0FELFNBQU1RLEtBQU4sR0FBYyxFQUFkO0FBQ0E7QUFDRFIsUUFBTUcsSUFBTixHQUFhTSxPQUFPQyxNQUFQLENBQWNWLE1BQU1HLElBQXBCLEVBQXlCRyxLQUF6QixDQUFiO0FBQ0EsTUFBSU4sTUFBTUcsSUFBTixDQUFXUSxjQUFYLENBQTJCLGlCQUEzQixDQUFKLEVBQW9EO0FBQ25EWCxTQUFNWSxhQUFOLEdBQXNCWixNQUFNRyxJQUFOLENBQVdVLGVBQWpDO0FBQ0EsR0FGRCxNQUVLO0FBQ0piLFNBQU1ZLGFBQU4sR0FBc0IsRUFBdEI7QUFDQTtBQUNELEVBbEJ1QjtBQW1CeEJBLGNBbkJ3Qix5QkFtQlZaLEtBbkJVLEVBbUJKTSxLQW5CSSxFQW1CRztBQUFFTixRQUFNWSxhQUFOLEdBQXNCTixLQUF0QjtBQUE2QixFQW5CbEM7QUFvQnhCSixTQXBCd0Isb0JBb0JmRixLQXBCZSxFQW9CVE0sS0FwQlMsRUFvQkg7QUFDcEJOLFFBQU1FLFFBQU4sR0FBaUJJLEtBQWpCO0FBQ0FOLFFBQU1RLEtBQU4sR0FBYyxFQUFkO0FBQ0FSLFFBQU1DLE9BQU4sR0FBZ0IsRUFBaEI7QUFDQUQsUUFBTUksTUFBTixHQUFlSixNQUFNRyxJQUFOLENBQVdDLE1BQVgsQ0FBa0JKLE1BQU1FLFFBQXhCLENBQWY7QUFFQSxFQTFCdUI7QUEyQnhCRCxRQTNCd0IsbUJBMkJoQkQsS0EzQmdCLEVBMkJUTSxLQTNCUyxFQTJCSDtBQUNwQk4sUUFBTUMsT0FBTixHQUFnQkssS0FBaEI7QUFDQU4sUUFBTVEsS0FBTixHQUFjUixNQUFNQyxPQUFOLElBQWlCRCxNQUFNRSxRQUF2QixHQUFrQ0YsTUFBTUcsSUFBTixDQUFXQyxNQUFYLENBQWtCSixNQUFNRSxRQUF4QixFQUFrQ0YsTUFBTUMsT0FBeEMsQ0FBbEMsR0FBcUYsRUFBbkc7QUFFQSxFQS9CdUI7QUFnQ3hCYSxXQWhDd0Isc0JBZ0NiZCxLQWhDYSxFQWdDUE0sS0FoQ08sRUFnQ0Q7QUFDdEJOLFFBQU1HLElBQU4sQ0FBV0MsTUFBWCxDQUFrQkosTUFBTUUsUUFBeEIsRUFBa0NGLE1BQU1DLE9BQXhDLElBQW1ESyxLQUFuRDtBQUNBO0FBbEN1QixDQUFsQiIsImZpbGUiOiIzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1heWJlU2V0RmllbGQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblx0cmV0dXJuIHN0YXRlLmZpZWxkSWQgJiYgc3RhdGUubGFuZ3VhZ2UgPyBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV1bc3RhdGUuZmllbGRJZF0gOiB7fTtcbn07XG5cbmV4cG9ydCBjb25zdCBNVVRBVElPTlMgPSB7XG5cdGZvcm0oc3RhdGUsdmFsdWUpe1xuXHRcdGlmKCAnc3RyaW5nJyA9PSB0eXBlb2YgIHZhbHVlICl7XG5cdFx0XHR2YWx1ZSA9IHtcblx0XHRcdFx0SUQ6IHZhbHVlXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiggc3RhdGUuZm9ybS5JRCAhPSB2YWx1ZS5JRCApe1xuXHRcdFx0c3RhdGUubGFuZ3VhZ2UgPSAnJztcblx0XHRcdHN0YXRlLmZpZWxkSWQgPSAnJztcblx0XHRcdHN0YXRlLmZpZWxkID0ge307XG5cdFx0fVxuXHRcdHN0YXRlLmZvcm0gPSBPYmplY3QuYXNzaWduKHN0YXRlLmZvcm0sdmFsdWUpO1xuXHRcdGlmKCBzdGF0ZS5mb3JtLmhhc093blByb3BlcnR5KCAnbGFuZ3VhZ2VzX25hbWVkJyApICl7XG5cdFx0XHRzdGF0ZS5mb3JtTGFuZ3VhZ2VzID0gc3RhdGUuZm9ybS5sYW5ndWFnZXNfbmFtZWQ7XG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5mb3JtTGFuZ3VhZ2VzID0ge307XG5cdFx0fVxuXHR9LFxuXHRmb3JtTGFuZ3VhZ2VzKHN0YXRlLHZhbHVlICl7IHN0YXRlLmZvcm1MYW5ndWFnZXMgPSB2YWx1ZSB9LFxuXHRsYW5ndWFnZShzdGF0ZSx2YWx1ZSl7XG5cdFx0c3RhdGUubGFuZ3VhZ2UgPSB2YWx1ZTtcblx0XHRzdGF0ZS5maWVsZCA9IHt9O1xuXHRcdHN0YXRlLmZpZWxkSWQgPSAnJztcblx0XHRzdGF0ZS5maWVsZHMgPSBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV07XG5cblx0fSxcblx0ZmllbGRJZChzdGF0ZSwgdmFsdWUpe1xuXHRcdHN0YXRlLmZpZWxkSWQgPSB2YWx1ZTtcblx0XHRzdGF0ZS5maWVsZCA9IHN0YXRlLmZpZWxkSWQgJiYgc3RhdGUubGFuZ3VhZ2UgPyBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV1bc3RhdGUuZmllbGRJZF0gOiB7fTtcblxuXHR9LFxuXHRmaWVsZFZhbHVlKHN0YXRlLHZhbHVlKXtcblx0XHRzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV1bc3RhdGUuZmllbGRJZF0gPSB2YWx1ZTtcblx0fVxuXG59O1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9tdXRhdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})