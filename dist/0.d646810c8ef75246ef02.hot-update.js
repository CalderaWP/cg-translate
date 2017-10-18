webpackHotUpdate(0,{

/***/ 47:
/* exports provided: MUTATIONS */
/* exports used: MUTATIONS */
/*!***********************************!*\
  !*** ./client/store/mutations.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MUTATIONS; });\nvar maybeSetField = function maybeSetField(state) {\n\treturn state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n};\n\nvar MUTATIONS = {\n\tform: function form(state, value) {\n\t\tif ('string' == typeof value) {\n\t\t\tvalue = {\n\t\t\t\tID: value\n\t\t\t};\n\t\t}\n\t\tif (state.form.ID != value.ID) {\n\t\t\tstate.language = '';\n\t\t\tstate.fieldId = '';\n\t\t\tstate.field = {};\n\t\t}\n\t\tstate.form = Object.assign(state.form, value);\n\t\tif (state.form.hasOwnProperty('languages_named')) {\n\t\t\tstate.formLanguages = state.form.languages_named;\n\t\t} else {\n\t\t\tstate.formLanguages = {};\n\t\t}\n\t},\n\tformLanguages: function formLanguages(state, value) {\n\t\tstate.formLanguages = value;\n\t},\n\tlanguage: function language(state, value) {\n\t\tstate.language = value;\n\t\tstate.field = {};\n\t\tstate.fieldId = '';\n\t\tstate.fields = state.form.fields[state.language];\n\t},\n\tfieldId: function fieldId(state, value) {\n\t\tstate.fieldId = value;\n\t\tstate.field = state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n\t},\n\tfieldValue: function fieldValue(state, value) {\n\t\tstate.field = value;\n\t\tstate.form.fields[state.language][state.fieldId] = value;\n\t},\n\tfieldOpt: function fieldOpt(state, opt) {\n\t\tstate.field.option[opt.opt] = opt.value;\n\t\tstate.form.fields[state.language][state.fieldId] = state.field;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\tif (null === state.showFormChoice) {\n\t\t\tstate.showFormChoice = true;\n\t\t} else {\n\t\t\tstate.showFormChoice = !state.showFormChoice;\n\t\t}\n\t},\n\tshowAddLanguage: function showAddLanguage(state, value) {\n\t\tif (null === state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\tif (undefined == value) {\n\t\t\tstate.showAddLanguage = !state.showAddLanguage;\n\t\t} else {\n\t\t\tstate.showAddLanguage = value;\n\t\t}\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state, value) {\n\t\tif (null === state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\n\t\tif (undefined == value) {\n\t\t\tstate.showLanguageChoice = !state.showLanguageChoice;\n\t\t} else {\n\t\t\tstate.showLanguageChoice = value;\n\t\t}\n\t},\n\tsaving: function saving(state) {\n\t\tif (null === state.saving) {\n\t\t\tstate.saving = true;\n\t\t} else {\n\t\t\tstate.saving = !state.saving;\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9tdXRhdGlvbnMuanMiXSwibmFtZXMiOlsibWF5YmVTZXRGaWVsZCIsInN0YXRlIiwiZmllbGRJZCIsImxhbmd1YWdlIiwiZm9ybSIsImZpZWxkcyIsIk1VVEFUSU9OUyIsInZhbHVlIiwiSUQiLCJmaWVsZCIsIk9iamVjdCIsImFzc2lnbiIsImhhc093blByb3BlcnR5IiwiZm9ybUxhbmd1YWdlcyIsImxhbmd1YWdlc19uYW1lZCIsImZpZWxkVmFsdWUiLCJmaWVsZE9wdCIsIm9wdCIsIm9wdGlvbiIsInNob3dGb3JtQ2hvaWNlIiwic2hvd0FkZExhbmd1YWdlIiwidW5kZWZpbmVkIiwic2hvd0xhbmd1YWdlQ2hvaWNlIiwic2F2aW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVUMsS0FBVixFQUFpQjtBQUN0QyxRQUFPQSxNQUFNQyxPQUFOLElBQWlCRCxNQUFNRSxRQUF2QixHQUFrQ0YsTUFBTUcsSUFBTixDQUFXQyxNQUFYLENBQWtCSixNQUFNRSxRQUF4QixFQUFrQ0YsTUFBTUMsT0FBeEMsQ0FBbEMsR0FBcUYsRUFBNUY7QUFDQSxDQUZEOztBQUlPLElBQU1JLFlBQVk7QUFDeEJGLEtBRHdCLGdCQUNuQkgsS0FEbUIsRUFDYk0sS0FEYSxFQUNQO0FBQ2hCLE1BQUksWUFBWSxPQUFRQSxLQUF4QixFQUErQjtBQUM5QkEsV0FBUTtBQUNQQyxRQUFJRDtBQURHLElBQVI7QUFHQTtBQUNELE1BQUlOLE1BQU1HLElBQU4sQ0FBV0ksRUFBWCxJQUFpQkQsTUFBTUMsRUFBM0IsRUFBK0I7QUFDOUJQLFNBQU1FLFFBQU4sR0FBaUIsRUFBakI7QUFDQUYsU0FBTUMsT0FBTixHQUFnQixFQUFoQjtBQUNBRCxTQUFNUSxLQUFOLEdBQWMsRUFBZDtBQUNBO0FBQ0RSLFFBQU1HLElBQU4sR0FB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ckIsU0FBTXFCLGtCQUFOLEdBQTJCZixLQUEzQjtBQUNBO0FBQ0QsRUF4RXVCO0FBeUV4QmdCLE9BekV3QixrQkF5RWpCdEIsS0F6RWlCLEVBeUVYO0FBQ1osTUFBSSxTQUFTQSxNQUFNc0IsTUFBbkIsRUFBMkI7QUFDMUJ0QixTQUFNc0IsTUFBTixHQUFlLElBQWY7QUFFQSxHQUhELE1BR0s7QUFDSnRCLFNBQU1zQixNQUFOLEdBQWUsQ0FBRXRCLE1BQU1zQixNQUF2QjtBQUNBO0FBQ0Q7QUFoRnVCLENBQWxCIiwiZmlsZSI6IjQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWF5YmVTZXRGaWVsZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGUuZmllbGRJZCAmJiBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXVtzdGF0ZS5maWVsZElkXSA6IHt9O1xufTtcblxuZXhwb3J0IGNvbnN0IE1VVEFUSU9OUyA9IHtcblx0Zm9ybShzdGF0ZSx2YWx1ZSl7XG5cdFx0aWYoICdzdHJpbmcnID09IHR5cGVvZiAgdmFsdWUgKXtcblx0XHRcdHZhbHVlID0ge1xuXHRcdFx0XHRJRDogdmFsdWVcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmKCBzdGF0ZS5mb3JtLklEICE9IHZhbHVlLklEICl7XG5cdFx0XHRzdGF0ZS5sYW5ndWFnZSA9ICcnO1xuXHRcdFx0c3RhdGUuZmllbGRJZCA9ICcnO1xuXHRcdFx0c3RhdGUuZmllbGQgPSB7fTtcblx0XHR9XG5cdFx0c3RhdGUuZm9ybSA9IE9iamVjdC5hc3NpZ24oc3RhdGUuZm9ybSx2YWx1ZSk7XG5cdFx0aWYoIHN0YXRlLmZvcm0uaGFzT3duUHJvcGVydHkoICdsYW5ndWFnZXNfbmFtZWQnICkgKXtcblx0XHRcdHN0YXRlLmZvcm1MYW5ndWFnZXMgPSBzdGF0ZS5mb3JtLmxhbmd1YWdlc19uYW1lZDtcblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLmZvcm1MYW5ndWFnZXMgPSB7fTtcblx0XHR9XG5cdH0sXG5cdGZvcm1MYW5ndWFnZXMoc3RhdGUsdmFsdWUgKXsgc3RhdGUuZm9ybUxhbmd1YWdlcyA9IHZhbHVlIH0sXG5cdGxhbmd1YWdlKHN0YXRlLHZhbHVlKXtcblx0XHRzdGF0ZS5sYW5ndWFnZSA9IHZhbHVlO1xuXHRcdHN0YXRlLmZpZWxkID0ge307XG5cdFx0c3RhdGUuZmllbGRJZCA9ICcnO1xuXHRcdHN0YXRlLmZpZWxkcyA9IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXTtcblxuXHR9LFxuXHRmaWVsZElkKHN0YXRlLCB2YWx1ZSl7XG5cdFx0c3RhdGUuZmllbGRJZCA9IHZhbHVlO1xuXHRcdHN0YXRlLmZpZWxkID0gc3RhdGUuZmllbGRJZCAmJiBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXVtzdGF0ZS5maWVsZElkXSA6IHt9O1xuXG5cdH0sXG5cdGZpZWxkVmFsdWUoc3RhdGUsdmFsdWUpe1xuXHRcdHN0YXRlLmZpZWxkID0gdmFsdWU7XG5cdFx0c3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdID0gdmFsdWU7XG5cblx0fSxcblx0ZmllbGRPcHQoc3RhdGUsb3B0KXtcblx0XHRzdGF0ZS5maWVsZC5vcHRpb25bb3B0Lm9wdF0gPSBvcHQudmFsdWU7XG5cdFx0c3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdID0gc3RhdGUuZmllbGQ7XG5cblx0fSxcblx0c2hvd0Zvcm1DaG9pY2Uoc3RhdGUpe1xuXHRcdGlmKCBudWxsID09PSBzdGF0ZS5zaG93Rm9ybUNob2ljZSApe1xuXHRcdFx0c3RhdGUuc2hvd0Zvcm1DaG9pY2UgPSB0cnVlO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5zaG93Rm9ybUNob2ljZSA9ICEgc3RhdGUuc2hvd0Zvcm1DaG9pY2U7XG5cdFx0fVxuXHR9LFxuXHRzaG93QWRkTGFuZ3VhZ2Uoc3RhdGUsdmFsdWUpe1xuXHRcdGlmKCBudWxsID09PSBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgKXtcblx0XHRcdHN0YXRlLnNob3dBZGRMYW5ndWFnZSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdFx0aWYoIHVuZGVmaW5lZCA9PSB2YWx1ZSApe1xuXHRcdFx0c3RhdGUuc2hvd0FkZExhbmd1YWdlID0gISBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2U7XG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgPSB2YWx1ZTtcblx0XHR9XG5cdH0sXG5cdHNob3dMYW5ndWFnZUNob2ljZShzdGF0ZSx2YWx1ZSl7XG5cdFx0aWYoIG51bGwgPT09IHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSApe1xuXHRcdFx0c3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIHVuZGVmaW5lZCA9PSB2YWx1ZSApe1xuXHRcdFx0c3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlID0gISBzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2U7XG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2UgPSB2YWx1ZTtcblx0XHR9XG5cdH0sXG5cdHNhdmluZyhzdGF0ZSl7XG5cdFx0aWYoIG51bGwgPT09IHN0YXRlLnNhdmluZyApe1xuXHRcdFx0c3RhdGUuc2F2aW5nID0gdHJ1ZTtcblxuXHRcdH1lbHNle1xuXHRcdFx0c3RhdGUuc2F2aW5nID0gISBzdGF0ZS5zYXZpbmc7XG5cdFx0fVxuXHR9XG5cbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3JlL211dGF0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})