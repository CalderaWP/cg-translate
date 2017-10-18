webpackHotUpdate(0,{

/***/ 47:
/* exports provided: MUTATIONS */
/* exports used: MUTATIONS */
/*!***********************************!*\
  !*** ./client/store/mutations.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return MUTATIONS; });\nvar maybeSetField = function maybeSetField(state) {\n\treturn state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n};\n\nvar MUTATIONS = {\n\tform: function (_form) {\n\t\tfunction form(_x, _x2) {\n\t\t\treturn _form.apply(this, arguments);\n\t\t}\n\n\t\tform.toString = function () {\n\t\t\treturn _form.toString();\n\t\t};\n\n\t\treturn form;\n\t}(function (state, value) {\n\t\tif ('string' == typeof value) {\n\t\t\tvalue = {\n\t\t\t\tID: value\n\t\t\t};\n\t\t}\n\t\tconsole.log(state, form);\n\t\tif (state.form.ID != value.ID) {\n\t\t\tstate.language = '';\n\t\t\tstate.fieldId = '';\n\t\t\tstate.field = {};\n\t\t}\n\t\tstate.form = Object.assign(state.form, value);\n\t\tif (state.form.hasOwnProperty('languages_named')) {\n\t\t\tstate.formLanguages = state.form.languages_named;\n\t\t} else {\n\t\t\tstate.formLanguages = {};\n\t\t}\n\t}),\n\tformLanguages: function formLanguages(state, value) {\n\t\tstate.formLanguages = value;\n\t},\n\tlanguage: function language(state, value) {\n\t\tstate.language = value;\n\t\tstate.field = {};\n\t\tstate.fieldId = '';\n\t\tstate.fields = state.form.fields[state.language];\n\t},\n\tfieldId: function fieldId(state, value) {\n\t\tstate.fieldId = value;\n\t\tstate.field = state.fieldId && state.language ? state.form.fields[state.language][state.fieldId] : {};\n\t},\n\tfieldValue: function fieldValue(state, value) {\n\t\tstate.field = value;\n\t\tstate.form.fields[state.language][state.fieldId] = value;\n\t},\n\tfieldOpt: function fieldOpt(state, opt) {\n\t\tstate.field.option[opt.opt] = opt.value;\n\t\tstate.form.fields[state.language][state.fieldId] = state.field;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\tif (null === state.showFormChoice) {\n\t\t\tstate.showFormChoice = true;\n\t\t} else {\n\t\t\tstate.showFormChoice = !state.showFormChoice;\n\t\t}\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null === state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t} else {\n\t\t\tstate.showAddLanguage = !state.showAddLanguage;\n\t\t}\n\t},\n\tsaving: function saving(state) {\n\t\tif (null === state.saving) {\n\t\t\tstate.saving = true;\n\t\t} else {\n\t\t\tstate.saving = !state.saving;\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9tdXRhdGlvbnMuanMiXSwibmFtZXMiOlsibWF5YmVTZXRGaWVsZCIsInN0YXRlIiwiZmllbGRJZCIsImxhbmd1YWdlIiwiZm9ybSIsImZpZWxkcyIsIk1VVEFUSU9OUyIsInZhbHVlIiwiSUQiLCJjb25zb2xlIiwibG9nIiwiZmllbGQiLCJPYmplY3QiLCJhc3NpZ24iLCJoYXNPd25Qcm9wZXJ0eSIsImZvcm1MYW5ndWFnZXMiLCJsYW5ndWFnZXNfbmFtZWQiLCJmaWVsZFZhbHVlIiwiZmllbGRPcHQiLCJvcHQiLCJvcHRpb24iLCJzaG93Rm9ybUNob2ljZSIsInNob3dBZGRMYW5ndWFnZSIsInNhdmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxJQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVVDLEtBQVYsRUFBaUI7QUFDdEMsUUFBT0EsTUFBTUMsT0FBTixJQUFpQkQsTUFBTUUsUUFBdkIsR0FBa0NGLE1BQU1HLElBQU4sQ0FBV0MsTUFBWCxDQUFrQkosTUFBTUUsUUFBeEIsRUFBa0NGLE1BQU1DLE9BQXhDLENBQWxDLEdBQXFGLEVBQTVGO0FBQ0EsQ0FGRDs7QUFJTyxJQUFNSSxZQUFZO0FBQ3hCRixLQUR3QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxhQUNuQkgsS0FEbUIsRUFDYk0sS0FEYSxFQUNQO0FBQ2hCLE1BQUksWUFBWSxPQUFRQSxLQUF4QixFQUErQjtBQUM5QkEsV0FBUTtBQUNQQyxRQUFJRDtBQURHLElBQVI7QUFHQTtBQUNERSxVQUFRQyxHQUFSLENBQWFULEtBQWIsRUFBbUJHLElBQW5CO0FBQ0EsTUFBSUgsTUFBTUcsSUFBTixDQUFXSSxFQUFYLElBQWlCRCxNQUFNQyxFQUEzQixFQUErQjtBQUM5QlAsU0FBTUUsUUFBTixHQUFpQixFQUFqQjtBQUNBRixTQUFNQyxPQUFO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RmllbGQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblx0cmV0dXJuIHN0YXRlLmZpZWxkSWQgJiYgc3RhdGUubGFuZ3VhZ2UgPyBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV1bc3RhdGUuZmllbGRJZF0gOiB7fTtcbn07XG5cbmV4cG9ydCBjb25zdCBNVVRBVElPTlMgPSB7XG5cdGZvcm0oc3RhdGUsdmFsdWUpe1xuXHRcdGlmKCAnc3RyaW5nJyA9PSB0eXBlb2YgIHZhbHVlICl7XG5cdFx0XHR2YWx1ZSA9IHtcblx0XHRcdFx0SUQ6IHZhbHVlXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyggc3RhdGUsZm9ybSApO1xuXHRcdGlmKCBzdGF0ZS5mb3JtLklEICE9IHZhbHVlLklEICl7XG5cdFx0XHRzdGF0ZS5sYW5ndWFnZSA9ICcnO1xuXHRcdFx0c3RhdGUuZmllbGRJZCA9ICcnO1xuXHRcdFx0c3RhdGUuZmllbGQgPSB7fTtcblx0XHR9XG5cdFx0c3RhdGUuZm9ybSA9IE9iamVjdC5hc3NpZ24oc3RhdGUuZm9ybSx2YWx1ZSk7XG5cdFx0aWYoIHN0YXRlLmZvcm0uaGFzT3duUHJvcGVydHkoICdsYW5ndWFnZXNfbmFtZWQnICkgKXtcblx0XHRcdHN0YXRlLmZvcm1MYW5ndWFnZXMgPSBzdGF0ZS5mb3JtLmxhbmd1YWdlc19uYW1lZDtcblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlLmZvcm1MYW5ndWFnZXMgPSB7fTtcblx0XHR9XG5cdH0sXG5cdGZvcm1MYW5ndWFnZXMoc3RhdGUsdmFsdWUgKXsgc3RhdGUuZm9ybUxhbmd1YWdlcyA9IHZhbHVlIH0sXG5cdGxhbmd1YWdlKHN0YXRlLHZhbHVlKXtcblx0XHRzdGF0ZS5sYW5ndWFnZSA9IHZhbHVlO1xuXHRcdHN0YXRlLmZpZWxkID0ge307XG5cdFx0c3RhdGUuZmllbGRJZCA9ICcnO1xuXHRcdHN0YXRlLmZpZWxkcyA9IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXTtcblxuXHR9LFxuXHRmaWVsZElkKHN0YXRlLCB2YWx1ZSl7XG5cdFx0c3RhdGUuZmllbGRJZCA9IHZhbHVlO1xuXHRcdHN0YXRlLmZpZWxkID0gc3RhdGUuZmllbGRJZCAmJiBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXVtzdGF0ZS5maWVsZElkXSA6IHt9O1xuXG5cdH0sXG5cdGZpZWxkVmFsdWUoc3RhdGUsdmFsdWUpe1xuXHRcdHN0YXRlLmZpZWxkID0gdmFsdWU7XG5cdFx0c3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdID0gdmFsdWU7XG5cblx0fSxcblx0ZmllbGRPcHQoc3RhdGUsb3B0KXtcblx0XHRzdGF0ZS5maWVsZC5vcHRpb25bb3B0Lm9wdF0gPSBvcHQudmFsdWU7XG5cdFx0c3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdW3N0YXRlLmZpZWxkSWRdID0gc3RhdGUuZmllbGQ7XG5cblx0fSxcblx0c2hvd0Zvcm1DaG9pY2Uoc3RhdGUpe1xuXHRcdGlmKCBudWxsID09PSBzdGF0ZS5zaG93Rm9ybUNob2ljZSApe1xuXHRcdFx0c3RhdGUuc2hvd0Zvcm1DaG9pY2UgPSB0cnVlO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5zaG93Rm9ybUNob2ljZSA9ICEgc3RhdGUuc2hvd0Zvcm1DaG9pY2U7XG5cdFx0fVxuXHR9LFxuXHRzaG93QWRkTGFuZ3VhZ2Uoc3RhdGUpe1xuXHRcdGlmKCBudWxsID09PSBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgKXtcblx0XHRcdHN0YXRlLnNob3dBZGRMYW5ndWFnZSA9IGZhbHNlO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgPSAhIHN0YXRlLnNob3dBZGRMYW5ndWFnZTtcblx0XHR9XG5cdH0sXG5cdHNhdmluZyhzdGF0ZSl7XG5cdFx0aWYoIG51bGwgPT09IHN0YXRlLnNhdmluZyApe1xuXHRcdFx0c3RhdGUuc2F2aW5nID0gdHJ1ZTtcblxuXHRcdH1lbHNle1xuXHRcdFx0c3RhdGUuc2F2aW5nID0gISBzdGF0ZS5zYXZpbmc7XG5cdFx0fVxuXHR9XG5cbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3JlL211dGF0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})