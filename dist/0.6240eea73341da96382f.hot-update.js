webpackHotUpdate(0,{

/***/ 46:
/* exports provided: MUTATIONS */
/* exports used: MUTATIONS */
/*!***********************************!*\
  !*** ./client/store/mutations.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MUTATIONS; });\nvar maybeSetField = function maybeSetField(state) {\n\treturn state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n};\n\nvar MUTATIONS = {\n\tform: function form(state, value) {\n\t\tif ('string' == typeof value) {\n\t\t\tvalue = {\n\t\t\t\tID: value\n\t\t\t};\n\t\t}\n\t\tif (state.form.ID != value.ID) {\n\t\t\tstate.language = '';\n\t\t\tstate.fieldId = '';\n\t\t\tstate.field = {};\n\t\t}\n\t\tstate.form = Object.assign(state.form, value);\n\t\tif (state.form.hasOwnProperty('languages_named')) {\n\t\t\tstate.formLanguages = state.form.languages_named;\n\t\t} else {\n\t\t\tstate.formLanguages = {};\n\t\t}\n\t},\n\tformLanguages: function formLanguages(state, value) {\n\t\tstate.formLanguages = value;\n\t},\n\tlanguage: function language(state, value) {\n\t\tstate.language = value;\n\t\tstate.field = {};\n\t\tstate.fieldId = '';\n\t\tstate.fields = state.form.fields[state.language];\n\t},\n\tfieldId: function fieldId(state, value) {\n\t\tstate.fieldId = value;\n\n\t\tstate.field = state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n\t\tconsole.loig(state.field);\n\t\tif (state.field.hasOwnProperty('option') && null !== state.field.option) {\n\t\t\tObject.getOwnPropertyNames(state.field.option).forEach(function (opt) {\n\t\t\t\tstate.field.option[opt] = {\n\t\t\t\t\toptCode: opt,\n\t\t\t\t\tlabel: state.field.option[opt]\n\t\t\t\t};\n\t\t\t});\n\t\t}\n\t},\n\tfieldValue: function fieldValue(state, value) {\n\t\tstate.form.fields[state.language][state.fieldId] = value;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9tdXRhdGlvbnMuanMiXSwibmFtZXMiOlsibWF5YmVTZXRGaWVsZCIsInN0YXRlIiwiZmllbGRJZCIsImxhbmd1YWdlIiwiZm9ybSIsImZpZWxkcyIsIk1VVEFUSU9OUyIsInZhbHVlIiwiSUQiLCJmaWVsZCIsIk9iamVjdCIsImFzc2lnbiIsImhhc093blByb3BlcnR5IiwiZm9ybUxhbmd1YWdlcyIsImxhbmd1YWdlc19uYW1lZCIsImNvbnNvbGUiLCJsb2lnIiwib3B0aW9uIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvckVhY2giLCJvcHQiLCJvcHRDb2RlIiwibGFiZWwiLCJmaWVsZFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVUMsS0FBVixFQUFpQjtBQUN0QyxRQUFPQSxNQUFNQyxPQUFOLElBQWlCRCxNQUFNRSxRQUF2QixHQUFrQ0YsTUFBTUcsSUFBTixDQUFXQyxNQUFYLENBQWtCSixNQUFNRSxRQUF4QixFQUFrQ0YsTUFBTUMsT0FBeEMsQ0FBbEMsR0FBcUYsRUFBNUY7QUFDQSxDQUZEOztBQUlPLElBQU1JLFlBQVk7QUFDeEJGLEtBRHdCLGdCQUNuQkgsS0FEbUIsRUFDYk0sS0FEYSxFQUNQO0FBQ2hCLE1BQUksWUFBWSxPQUFRQSxLQUF4QixFQUErQjtBQUM5QkEsV0FBUTtBQUNQQyxRQUFJRDtBQURHLElBQVI7QUFHQTtBQUNELE1BQUlOLE1BQU1HLElBQU4sQ0FBV0ksRUFBWCxJQUFpQkQsTUFBTUMsRUFBM0IsRUFBK0I7QUFDOUJQLFNBQU1FLFFBQU4sR0FBaUIsRUFBakI7QUFDQUYsU0FBTUMsT0FBTixHQUFnQixFQUFoQjtBQUNBRCxTQUFNUSxLQUFOLEdBQWMsRUFBZDtBQUNBO0FBQ0RSLFFBQU1HLElBQU4sR0FBYU0sT0FBT0MsTUFBUCxDQUFjVixNQUFNRyxJQUFwQixFQUF5QkcsS0FBekIsQ0FBYjtBQUNBLE1BQUlOLE1BQU1HLElBQU4sQ0FBV1EsY0FBWCxDQUEyQixpQkFBM0IsQ0FBSixFQUFvRDtBQUNuRFgsU0FBTVksYUFBTixHQUFzQlosTUFBTUcsSUFBTixDQUFXVSxlQUFqQztBQUNBLEdBRkQsTUFFSztBQUNKYixTQUFNWSxhQUFOLEdBQXNCLEVBQXRCO0FBQ0E7QUFDRCxFQWxCdUI7QUFtQnhCQSxjQW5Cd0IseUJBbUJWWixLQW5CVSxFQW1CSk0sS0FuQkksRUFtQkc7QUFBRU4sUUFBTVksYUFBTixHQUFzQk4sS0FBdEI7QUFBNkIsRUFuQmxDO0FBb0J4QkosU0FwQndCLG9CQW9CZkYsS0FwQmUsRUFvQlRNLEtBcEJTLEVBb0JIO0FBQ3BCTixRQUFNRSxRQUFOLEdBQWlCSSxLQUFqQjtBQUNBTixRQUFNUSxLQUFOLEdBQWMsRUFBZDtBQUNBUixRQUFNQyxPQUFOLEdBQWdCLEVBQWhCO0FBQ0FELFFBQU1JLE1BQU4sR0FBZUosTUFBTUcsSUFBTixDQUFXQyxNQUFYLENBQWtCSixNQUFNRSxRQUF4QixDQUFmO0FBRUEsRUExQnVCO0FBMkJ4QkQsUUEzQndCLG1CQTJCaEJELEtBM0JnQixFQTJCVE0sS0EzQlMsRUEyQkg7QUFDcEJOLFFBQU1DLE9BQU4sR0FBZ0JLLEtBQWhCOztBQUVBTixRQUFNUSxLQUFOLEdBQWNSLE1BQU1DLE9BQU4sSUFBaUJELE1BQU1FLFFBQXZCLEdBQWtDRixNQUFNRyxJQUFOLENBQVdDLE1BQVgsQ0FBa0JKLE1BQU1FLFFBQXhCLEVBQWtDRixNQUFNQyxPQUF4QyxDQUFsQyxHQUFxRixFQUFuRztBQUNBYSxVQUFRQyxJQUFSLENBQWFmLE1BQU1RLEtBQW5CO0FBQ0EsTUFBSVIsTUFBTVEsS0FBTixDQUFZRyxjQUFaLENBQTJCLFFBQTNCLEtBQXdDLFNBQVNYLE1BQU1RLEtBQU4sQ0FBWVEsTUFBakUsRUFBMEU7QUFDekVQLFVBQU9RLG1CQUFQLENBQTRCakIsTUFBTVEsS0FBTixDQUFZUSxNQUF4QyxFQUFpREUsT0FBakQsQ0FBMEQsZUFBTztBQUNoRWxCLFVBQU1RLEtBQU4sQ0FBWVEsTUFBWixDQUFtQkcsR0FBbkIsSUFBeUI7QUFDeEJDLGNBQVNELEdBRGU7QUFFeEJFLFlBQU9yQixNQUFNUSxLQUFOLENBQVlRLE1BQVosQ0FBbUJHLEdBQW5CO0FBRmlCLEtBQXpCO0FBSUEsSUFMRDtBQU9BO0FBRUQsRUExQ3VCO0FBMkN4QkcsV0EzQ3dCLHNCQTJDYnRCLEtBM0NhLEVBMkNQTSxLQTNDTyxFQTJDRDtBQUN0Qk4sUUFBTUcsSUFBTixDQUFXQyxNQUFYLENBQWtCSixNQUFNRSxRQUF4QixFQUFrQ0YsTUFBTUMsT0FBeEMsSUFBbURLLEtBQW5EO0FBQ0E7QUE3Q3VCLENBQWxCIiwiZmlsZSI6IjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWF5YmVTZXRGaWVsZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGUuZmllbGRJZCAmJiBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXVtzdGF0ZS5maWVsZElkXSA6IHt9O1xufTtcblxuZXhwb3J0IGNvbnN0IE1VVEFUSU9OUyA9IHtcblx0Zm9ybShzdGF0ZSx2YWx1ZSl7XG5cdFx0aWYoICdzdHJpbmcnID09IHR5cGVvZiAgdmFsdWUgKXtcblx0XHRcdHZhbHVlID0ge1xuXHRcdFx0XHRJRDogdmFsdWVcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmKCBzdGF0ZS5mb3JtLklEICE9IHZhbHVlLklEICl7XG5cdFx0XHRzdGF0ZS5sYW5ndWFnZSA9ICcnO1xuXHRcdFx0c3RhdGUuZmllbGRJZCA9ICcnO1xuXHRcdFx0c3RhdGUuZmllbGQgPSB7fTtcblx0XHR9XG5cdFx0c3RhdGUuZm9ybSA9IE9iamVjdC5hc3NpZ24oc3RhdGUuZm9ybSx2YWx1ZSk7XG5cdFx0aWYoIHN0YXRlLmZvcm0uaGFzT3duUHJvcGVydHkoICdsYW5ndWFnZXNfbmFtZWQnICkgKXtcblx0XHRcdHN0YXRlLmZvcm1MYW5ndWFnZXMgPSBzdGF0ZS5mb3JtLmxhbmd1YWdlc19uYW1lZDtcblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLmZvcm1MYW5ndWFnZXMgPSB7fTtcblx0XHR9XG5cdH0sXG5cdGZvcm1MYW5ndWFnZXMoc3RhdGUsdmFsdWUgKXsgc3RhdGUuZm9ybUxhbmd1YWdlcyA9IHZhbHVlIH0sXG5cdGxhbmd1YWdlKHN0YXRlLHZhbHVlKXtcblx0XHRzdGF0ZS5sYW5ndWFnZSA9IHZhbHVlO1xuXHRcdHN0YXRlLmZpZWxkID0ge307XG5cdFx0c3RhdGUuZmllbGRJZCA9ICcnO1xuXHRcdHN0YXRlLmZpZWxkcyA9IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXTtcblxuXHR9LFxuXHRmaWVsZElkKHN0YXRlLCB2YWx1ZSl7XG5cdFx0c3RhdGUuZmllbGRJZCA9IHZhbHVlO1xuXG5cdFx0c3RhdGUuZmllbGQgPSBzdGF0ZS5maWVsZElkICYmIHN0YXRlLmxhbmd1YWdlID8gc3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdIDoge307XG5cdFx0Y29uc29sZS5sb2lnKHN0YXRlLmZpZWxkKTtcblx0XHRpZiggc3RhdGUuZmllbGQuaGFzT3duUHJvcGVydHkoJ29wdGlvbicpICYmIG51bGwgIT09IHN0YXRlLmZpZWxkLm9wdGlvbiAgKXtcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBzdGF0ZS5maWVsZC5vcHRpb24gKS5mb3JFYWNoKCBvcHQgPT4ge1xuXHRcdFx0XHRzdGF0ZS5maWVsZC5vcHRpb25bb3B0XSA9e1xuXHRcdFx0XHRcdG9wdENvZGU6IG9wdCxcblx0XHRcdFx0XHRsYWJlbDogc3RhdGUuZmllbGQub3B0aW9uW29wdF1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHR9XG5cblx0fSxcblx0ZmllbGRWYWx1ZShzdGF0ZSx2YWx1ZSl7XG5cdFx0c3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdID0gdmFsdWU7XG5cdH1cblxufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmUvbXV0YXRpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})