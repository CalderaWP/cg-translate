webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.data.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined != state.language ? state.language : '';\n\t},\n\tfields: function fields(state) {\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' != _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZmllbGRzIiwiZmllbGQiLCJmb3JtTGFuZ3VhZ2VzIiwic2hvd0Zvcm1DaG9pY2UiLCJzaG93QWRkTGFuZ3VhZ2UiLCJzaG93TGFuZ3VhZ2VDaG9pY2UiLCJzYXZpbmciXSwibWFwcGluZ3MiOiI7OztBQUdPLElBQU1BLFVBQVU7QUFDdEJDLFVBQVUsd0JBQVM7QUFDbEIsU0FBT0MsTUFBTUMsY0FBTixDQUFzQixTQUF0QixLQUFxQ0MsYUFBYUYsTUFBTUQsT0FBeEQsR0FBa0VDLE1BQU1ELE9BQXhFLEdBQWtGLEtBQXpGO0FBQ0EsRUFIcUI7QUFJdEJJLFVBQVUsd0JBQVM7QUFDbEIsU0FBT0gsTUFBTUksSUFBTixDQUFXRCxPQUFsQjtBQUNBLEVBTnFCO0FBT3RCQyxPQUFPLHFCQUFTO0FBQ2YsU0FBT0osTUFBTUksSUFBYjtBQUNBLEVBVHFCO0FBVXRCQyxRQUFRLHNCQUFTO0FBQ2hCLFNBQU9MLE1BQU1LLEtBQWI7QUFDQSxFQVpxQjtBQWF0QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9OLE1BQU1NLElBQWI7QUFDQSxFQWZxQjtBQWdCdEJDLFNBQVMsdUJBQVM7QUFDakIsU0FBT1AsTUFBTU0sSUFBTixDQUFXRSxFQUFsQjtBQUNBLEVBbEJxQjtBQW1CdEJDLFFBQVEsc0JBQVM7QUFDaEIsU0FBT1QsTUFBTVMsS0FBYjtBQUNBLEVBckJxQjtBQXNCdEJDLFlBQVksMEJBQVM7QUFDcEIsU0FBT1YsTUFBTVUsU0FBYjtBQUNBLEVBeEJxQjtBQXlCdEJDLFdBQVcseUJBQVM7QUFDbkIsU0FBT1QsYUFBYUYsTUFBTVcsUUFBbkIsR0FBOEJYLE1BQU1XLFFBQXBDLEdBQStDLEVBQXREO0FBQ0EsRUEzQnFCO0FBNEJ0QkMsU0FBUSx1QkFBUztBQUNoQixTQUFPWixNQUFNTSxJQUFOLENBQVdNLE1BQVgsQ0FBa0JaLE1BQU1XLFFBQXhCLENBQVA7QUFDQSxFQTlCcUI7QUErQnRCRSxRQUFPLHNCQUFTO0FBQ2YsTUFBSSxvQkFBb0JiLE1BQU1hLEtBQTFCLENBQUosRUFBcUM7QUFDcEMsVUFBTyxFQUFQO0FBQ0E7O0FBRUQsU0FBT2IsTUFBTWEsS0FBYjtBQUNBLEVBckNxQjtBQXNDdEJDLGdCQUFlLDhCQUFTO0FBQ3ZCLFNBQU9kLE1BQU1jLGFBQWI7QUFFQSxFQXpDcUI7QUEwQ3RCQyxpQkFBZ0IsK0JBQVM7QUFDeEIsU0FBT2YsTUFBTWUsY0FBYjtBQUNBLEVBNUNxQjtBQTZDdEJDLGtCQUFpQixnQ0FBUztBQUN6QixNQUFLLFNBQVNoQixNQUFNZ0IsZUFBcEIsRUFBc0M7QUFDckNoQixTQUFNZ0IsZUFBTixHQUF3QixLQUF4QjtBQUNBOztBQUVELFNBQU9oQixNQUFNZ0IsZUFBYjtBQUNBLEVBbkRxQjtBQW9EdEJDLHFCQUFvQixtQ0FBUztBQUM1QixNQUFLLFNBQVNqQixNQUFNaUIsa0JBQXBCLEVBQXlDO0FBQ3hDakIsU0FBTWlCLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0E7O0FBRUQsU0FBT2pCLE1BQU1pQixrQkFBYjtBQUNBLEVBMURxQjtBQTJEdEJDLFNBQVEsdUJBQVM7QUFDaEIsU0FBT2xCLE1BQU1rQixNQUFiO0FBQ0E7QUE3RHFCLENBQWhCIiwiZmlsZSI6IjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuZXhwb3J0IGNvbnN0IEdFVFRFUlMgPSB7XG5cdGZpZWxkSWQgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmhhc093blByb3BlcnR5KCAnZmllbGRJZCcgKSAmJiB1bmRlZmluZWQgIT0gc3RhdGUuZmllbGRJZCA/IHN0YXRlLmZpZWxkSWQgOiBmYWxzZTtcblx0fSxcblx0c3RyaW5ncyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZGF0YS5zdHJpbmdzO1xuXHR9LFxuXHRkYXRhIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5kYXRhO1xuXHR9LFxuXHRsb2NhbCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUubG9jYWw7XG5cdH0sXG5cdGZvcm0gOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm07XG5cdH0sXG5cdGZvcm1JZCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybS5JRDtcblx0fSxcblx0Zm9ybXMgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm1zO1xuXHR9LFxuXHRsYW5ndWFnZXMgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmxhbmd1YWdlcztcblx0fSxcblx0bGFuZ3VhZ2UgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZCAhPSBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmxhbmd1YWdlIDogJyc7XG5cdH0sXG5cdGZpZWxkczogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV07XG5cdH0sXG5cdGZpZWxkOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICdvYmplY3QnICE9IHR5cGVvZiAgc3RhdGUuZmllbGQgKXtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUuZmllbGQ7XG5cdH0sXG5cdGZvcm1MYW5ndWFnZXM6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybUxhbmd1YWdlcztcblxuXHR9LFxuXHRzaG93Rm9ybUNob2ljZTogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zaG93Rm9ybUNob2ljZTtcblx0fSxcblx0c2hvd0FkZExhbmd1YWdlOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICBudWxsICE9PSBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgKSB7XG5cdFx0XHRzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUuc2hvd0FkZExhbmd1YWdlO1xuXHR9LFxuXHRzaG93TGFuZ3VhZ2VDaG9pY2U6IHN0YXRlID0+IHtcblx0XHRpZiggIG51bGwgIT09IHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSApIHtcblx0XHRcdHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2U7XG5cdH0sXG5cdHNhdmluZzogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zYXZpbmc7XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmUvZ2V0dGVycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 47:
/* exports provided: MUTATIONS */
/* exports used: MUTATIONS */
/*!***********************************!*\
  !*** ./client/store/mutations.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MUTATIONS; });\nvar maybeSetField = function maybeSetField(state) {\n\treturn state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n};\n\nvar MUTATIONS = {\n\tform: function form(state, value) {\n\t\tif ('string' == typeof value) {\n\t\t\tvalue = {\n\t\t\t\tID: value\n\t\t\t};\n\t\t}\n\t\tif (state.form.ID != value.ID) {\n\t\t\tstate.language = '';\n\t\t\tstate.fieldId = '';\n\t\t\tstate.field = {};\n\t\t}\n\t\tstate.form = Object.assign(state.form, value);\n\t\tif (state.form.hasOwnProperty('languages_named')) {\n\t\t\tstate.formLanguages = state.form.languages_named;\n\t\t} else {\n\t\t\tstate.formLanguages = {};\n\t\t}\n\t},\n\tformLanguages: function formLanguages(state, value) {\n\t\tstate.formLanguages = value;\n\t},\n\tlanguage: function language(state, value) {\n\t\tstate.language = value;\n\t\tstate.field = {};\n\t\tstate.fieldId = '';\n\t\tstate.fields = state.form.fields[state.language];\n\t},\n\tfieldId: function fieldId(state, value) {\n\t\tstate.fieldId = value;\n\t\tstate.field = state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n\t},\n\tfieldValue: function fieldValue(state, value) {\n\t\tstate.field = value;\n\t\tstate.form.fields[state.language][state.fieldId] = value;\n\t},\n\tfieldOpt: function fieldOpt(state, opt) {\n\t\tstate.field.option[opt.opt] = opt.value;\n\t\tstate.form.fields[state.language][state.fieldId] = state.field;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\tif (null === state.showFormChoice) {\n\t\t\tstate.showFormChoice = true;\n\t\t} else {\n\t\t\tstate.showFormChoice = !state.showFormChoice;\n\t\t}\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null === state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t} else {\n\t\t\tstate.showAddLanguage = !state.showAddLanguage;\n\t\t}\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null === state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t} else {\n\t\t\tstate.showLanguageChoice = !state.showLanguageChoice;\n\t\t}\n\t},\n\tsaving: function saving(state) {\n\t\tif (null === state.saving) {\n\t\t\tstate.saving = true;\n\t\t} else {\n\t\t\tstate.saving = !state.saving;\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9tdXRhdGlvbnMuanMiXSwibmFtZXMiOlsibWF5YmVTZXRGaWVsZCIsInN0YXRlIiwiZmllbGRJZCIsImxhbmd1YWdlIiwiZm9ybSIsImZpZWxkcyIsIk1VVEFUSU9OUyIsInZhbHVlIiwiSUQiLCJmaWVsZCIsIk9iamVjdCIsImFzc2lnbiIsImhhc093blByb3BlcnR5IiwiZm9ybUxhbmd1YWdlcyIsImxhbmd1YWdlc19uYW1lZCIsImZpZWxkVmFsdWUiLCJmaWVsZE9wdCIsIm9wdCIsIm9wdGlvbiIsInNob3dGb3JtQ2hvaWNlIiwic2hvd0FkZExhbmd1YWdlIiwic2hvd0xhbmd1YWdlQ2hvaWNlIiwic2F2aW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVUMsS0FBVixFQUFpQjtBQUN0QyxRQUFPQSxNQUFNQyxPQUFOLElBQWlCRCxNQUFNRSxRQUF2QixHQUFrQ0YsTUFBTUcsSUFBTixDQUFXQyxNQUFYLENBQWtCSixNQUFNRSxRQUF4QixFQUFrQ0YsTUFBTUMsT0FBeEMsQ0FBbEMsR0FBcUYsRUFBNUY7QUFDQSxDQUZEOztBQUlPLElBQU1JLFlBQVk7QUFDeEJGLEtBRHdCLGdCQUNuQkgsS0FEbUIsRUFDYk0sS0FEYSxFQUNQO0FBQ2hCLE1BQUksWUFBWSxPQUFRQSxLQUF4QixFQUErQjtBQUM5QkEsV0FBUTtBQUNQQyxRQUFJRDtBQURHLElBQVI7QUFHQTtBQUNELE1BQUlOLE1BQU1HLElBQU4sQ0FBV0ksRUFBWCxJQUFpQkQsTUFBTUMsRUFBM0IsRUFBK0I7QUFDOUJQLFNBQU1FLFFBQU4sR0FBaUIsRUFBakI7QUFDQUYsU0FBTUMsT0FBTixHQUFnQixFQUFoQjtBQUNBRCxTQUFNUSxLQUFOLEdBQWMsRUFBZDtBQUNBO0FBQ0RSLFFBQU1HLElBQU4sR0FBYU0sT0FBT0MsTUFB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QU1xQixNQUFOLEdBQWUsQ0FBRXJCLE1BQU1xQixNQUF2QjtBQUNBO0FBQ0Q7QUF6RXVCLENBQWxCIiwiZmlsZSI6IjQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWF5YmVTZXRGaWVsZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGUuZmllbGRJZCAmJiBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXVtzdGF0ZS5maWVsZElkXSA6IHt9O1xufTtcblxuZXhwb3J0IGNvbnN0IE1VVEFUSU9OUyA9IHtcblx0Zm9ybShzdGF0ZSx2YWx1ZSl7XG5cdFx0aWYoICdzdHJpbmcnID09IHR5cGVvZiAgdmFsdWUgKXtcblx0XHRcdHZhbHVlID0ge1xuXHRcdFx0XHRJRDogdmFsdWVcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmKCBzdGF0ZS5mb3JtLklEICE9IHZhbHVlLklEICl7XG5cdFx0XHRzdGF0ZS5sYW5ndWFnZSA9ICcnO1xuXHRcdFx0c3RhdGUuZmllbGRJZCA9ICcnO1xuXHRcdFx0c3RhdGUuZmllbGQgPSB7fTtcblx0XHR9XG5cdFx0c3RhdGUuZm9ybSA9IE9iamVjdC5hc3NpZ24oc3RhdGUuZm9ybSx2YWx1ZSk7XG5cdFx0aWYoIHN0YXRlLmZvcm0uaGFzT3duUHJvcGVydHkoICdsYW5ndWFnZXNfbmFtZWQnICkgKXtcblx0XHRcdHN0YXRlLmZvcm1MYW5ndWFnZXMgPSBzdGF0ZS5mb3JtLmxhbmd1YWdlc19uYW1lZDtcblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLmZvcm1MYW5ndWFnZXMgPSB7fTtcblx0XHR9XG5cdH0sXG5cdGZvcm1MYW5ndWFnZXMoc3RhdGUsdmFsdWUgKXsgc3RhdGUuZm9ybUxhbmd1YWdlcyA9IHZhbHVlIH0sXG5cdGxhbmd1YWdlKHN0YXRlLHZhbHVlKXtcblx0XHRzdGF0ZS5sYW5ndWFnZSA9IHZhbHVlO1xuXHRcdHN0YXRlLmZpZWxkID0ge307XG5cdFx0c3RhdGUuZmllbGRJZCA9ICcnO1xuXHRcdHN0YXRlLmZpZWxkcyA9IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXTtcblxuXHR9LFxuXHRmaWVsZElkKHN0YXRlLCB2YWx1ZSl7XG5cdFx0c3RhdGUuZmllbGRJZCA9IHZhbHVlO1xuXHRcdHN0YXRlLmZpZWxkID0gc3RhdGUuZmllbGRJZCAmJiBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXVtzdGF0ZS5maWVsZElkXSA6IHt9O1xuXG5cdH0sXG5cdGZpZWxkVmFsdWUoc3RhdGUsdmFsdWUpe1xuXHRcdHN0YXRlLmZpZWxkID0gdmFsdWU7XG5cdFx0c3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdID0gdmFsdWU7XG5cblx0fSxcblx0ZmllbGRPcHQoc3RhdGUsb3B0KXtcblx0XHRzdGF0ZS5maWVsZC5vcHRpb25bb3B0Lm9wdF0gPSBvcHQudmFsdWU7XG5cdFx0c3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdID0gc3RhdGUuZmllbGQ7XG5cblx0fSxcblx0c2hvd0Zvcm1DaG9pY2Uoc3RhdGUpe1xuXHRcdGlmKCBudWxsID09PSBzdGF0ZS5zaG93Rm9ybUNob2ljZSApe1xuXHRcdFx0c3RhdGUuc2hvd0Zvcm1DaG9pY2UgPSB0cnVlO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5zaG93Rm9ybUNob2ljZSA9ICEgc3RhdGUuc2hvd0Zvcm1DaG9pY2U7XG5cdFx0fVxuXHR9LFxuXHRzaG93QWRkTGFuZ3VhZ2Uoc3RhdGUpe1xuXHRcdGlmKCBudWxsID09PSBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgKXtcblx0XHRcdHN0YXRlLnNob3dBZGRMYW5ndWFnZSA9IGZhbHNlO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgPSAhIHN0YXRlLnNob3dBZGRMYW5ndWFnZTtcblx0XHR9XG5cdH0sXG5cdHNob3dMYW5ndWFnZUNob2ljZShzdGF0ZSl7XG5cdFx0aWYoIG51bGwgPT09IHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSApe1xuXHRcdFx0c3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlID0gZmFsc2U7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSA9ICEgc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlO1xuXHRcdH1cblx0fSxcblx0c2F2aW5nKHN0YXRlKXtcblx0XHRpZiggbnVsbCA9PT0gc3RhdGUuc2F2aW5nICl7XG5cdFx0XHRzdGF0ZS5zYXZpbmcgPSB0cnVlO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5zYXZpbmcgPSAhIHN0YXRlLnNhdmluZztcblx0XHR9XG5cdH1cblxufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmUvbXV0YXRpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})