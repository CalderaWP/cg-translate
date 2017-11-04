webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined !== state.language ? state.language : '';\n\t},\n\tformName: function formName(state) {\n\t\treturn state.form.formName;\n\t},\n\tfields: function fields(state) {\n\t\tif (undefined === state.fields) {\n\t\t\treturn {};\n\t\t}\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' !== _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t},\n\tshowChooser: function showChooser(state) {\n\t\treturn state.showChooser;\n\t},\n\tformInfo: function formInfo(state) {\n\n\t\tif (undefined === state.form.info) {\n\t\t\treturn {};\n\t\t}\n\t\treturn state.form.info.hasOwnProperty(state.language) ? state.form.info[state.language] : state.form.hasOwnProperty('info') ? state.form.info : { success: '', name: '' };\n\t},\n\tfoo: function foo(state) {\n\t\treturn state.hasOwnProperty('foo') ? state.foo : 'oof';\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZm9ybU5hbWUiLCJmaWVsZHMiLCJmaWVsZCIsImZvcm1MYW5ndWFnZXMiLCJzaG93Rm9ybUNob2ljZSIsInNob3dBZGRMYW5ndWFnZSIsInNob3dMYW5ndWFnZUNob2ljZSIsInNhdmluZyIsInNob3dDaG9vc2VyIiwiZm9ybUluZm8iLCJpbmZvIiwic3VjY2VzcyIsIm5hbWUiLCJmb28iXSwibWFwcGluZ3MiOiI7OztBQUdPLElBQU1BLFVBQVU7QUFDdEJDLFVBQVUsd0JBQVM7QUFDbEIsU0FBT0MsTUFBTUMsY0FBTixDQUFzQixTQUF0QixLQUFxQ0MsYUFBYUYsTUFBTUQsT0FBeEQsR0FBa0VDLE1BQU1ELE9BQXhFLEdBQWtGLEtBQXpGO0FBQ0EsRUFIcUI7QUFJdEJJLFVBQVUsd0JBQVM7QUFDbEIsU0FBT0gsTUFBTUcsT0FBYjtBQUNBLEVBTnFCO0FBT3RCQyxPQUFPLHFCQUFTO0FBQ2YsU0FBT0osTUFBTUksSUFBYjtBQUNBLEVBVHFCO0FBVXRCQyxRQUFRLHNCQUFTO0FBQ2hCLFNBQU9MLE1BQU1LLEtBQWI7QUFDQSxFQVpxQjtBQWF0QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9OLE1BQU1NLElBQWI7QUFDQSxFQWZxQjtBQWdCdEJDLFNBQVMsdUJBQVM7QUFDakIsU0FBT1AsTUFBTU0sSUFBTixDQUFXRSxFQUFsQjtBQUNBLEVBbEJxQjtBQW1CdEJDLFFBQVEsc0JBQVM7QUFDaEIsU0FBT1QsTUFBTVMsS0FBYjtBQUNBLEVBckJxQjtBQXNCdEJDLFlBQVksMEJBQVM7QUFDcEIsU0FBT1YsTUFBTVUsU0FBYjtBQUNBLEVBeEJxQjtBQXlCdEJDLFdBQVcseUJBQVM7QUFDbkIsU0FBT1QsY0FBY0YsTUFBTVcsUUFBcEIsR0FBK0JYLE1BQU1XLFFBQXJDLEdBQWdELEVBQXZEO0FBQ0EsRUEzQnFCO0FBNEJ0QkMsV0FBVyx5QkFBUztBQUNuQixTQUFPWixNQUFNTSxJQUFOLENBQVdNLFFBQWxCO0FBQ0EsRUE5QnFCO0FBK0J0QkMsU0FBUSx1QkFBUztBQUNoQixNQUFJWCxjQUFjRixNQUFNYSxNQUF4QixFQUFnQztBQUMvQixVQUFPLEVBQVA7QUFDQTtBQUNELFNBQU9iLE1BQU1NLElBQU4sQ0FBV08sTUFBWCxDQUFrQmIsTUFBTVcsUUFBeEIsQ0FBUDtBQUNBLEVBcENxQjtBQXFDdEJHLFFBQU8sc0JBQVM7QUFDZixNQUFJLHFCQUFxQmQsTUFBTWMsS0FBM0IsQ0FBSixFQUFzQztBQUNyQyxVQUFPLEVBQVA7QUFDQTs7QUFFRCxTQUFPZCxNQUFNYyxLQUFiO0FBQ0EsRUEzQ3FCO0FBNEN0QkMsZ0JBQWUsOEJBQVM7QUFDdkIsU0FBT2YsTUFBTWUsYUFBYjtBQUVBLEVBL0NxQjtBQWdEdEJDLGlCQUFnQiwrQkFBUztBQUN4QixTQUFPaEIsTUFBTWdCLGNBQWI7QUFDQSxFQWxEcUI7QUFtRHRCQyxrQkFBaUIsZ0NBQVM7QUFDekIsTUFBSyxTQUFTakIsTUFBTWlCLGVBQXBCLEVBQXNDO0FBQ3JDakIsU0FBTWlCLGVBQU4sR0FBd0IsS0FBeEI7QUFDQTs7QUFFRCxTQUFPakIsTUFBTWlCLGVBQWI7QUFDQSxFQXpEcUI7QUEwRHRCQyxxQkFBb0IsbUNBQVM7QUFDNUIsTUFBSyxTQUFTbEIsTUFBTWtCLGtCQUFwQixFQUF5QztBQUN4Q2xCLFNBQU1rQixrQkFBTixHQUEyQixLQUEzQjtBQUNBO0FBQ0QsU0FBT2xCLE1BQU1rQixrQkFBYjtBQUNBLEVBL0RxQjtBQWdFdEJDLFNBQVEsdUJBQVM7QUFDaEIsU0FBT25CLE1BQU1tQixNQUFiO0FBQ0EsRUFsRXFCO0FBbUV0QkMsY0FBYSw0QkFBUztBQUNyQixTQUFPcEIsTUFBTW9CLFdBQWI7QUFDQSxFQXJFcUI7QUFzRXRCQyxXQUFVLHlCQUFTOztBQUVsQixNQUFJbkIsY0FBY0YsTUFBTU0sSUFBTixDQUFXZ0IsSUFBN0IsRUFBbUM7QUFDbEMsVUFBTyxFQUFQO0FBQ0E7QUFDRCxTQUFRdEIsTUFBTU0sSUFBTixDQUFXZ0IsSUFBWCxDQUFnQnJCLGNBQWhCLENBQWdDRCxNQUFNVyxRQUF0QyxDQUFELEdBQ0hYLE1BQU1NLElBQU4sQ0FBV2dCLElBQVgsQ0FBZ0J0QixNQUFNVyxRQUF0QixDQURHLEdBRUpYLE1BQU1NLElBQU4sQ0FBV0wsY0FBWCxDQUEyQixNQUEzQixJQUNDRCxNQUFNTSxJQUFOLENBQVdnQixJQURaLEdBRUMsRUFBRUMsU0FBUyxFQUFYLEVBQWVDLE1BQU0sRUFBckIsRUFKSjtBQUtBLEVBaEZxQjtBQWlGdEJDLE1BQUssb0JBQVM7QUFDYixTQUFPekIsTUFBTUMsY0FBTixDQUFxQixLQUFyQixJQUErQkQsTUFBTXlCLEdBQXJDLEdBQTJDLEtBQWxEO0FBQ0E7QUFuRnFCLENBQWhCIiwiZmlsZSI6IjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuZXhwb3J0IGNvbnN0IEdFVFRFUlMgPSB7XG5cdGZpZWxkSWQgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmhhc093blByb3BlcnR5KCAnZmllbGRJZCcgKSAmJiB1bmRlZmluZWQgIT0gc3RhdGUuZmllbGRJZCA/IHN0YXRlLmZpZWxkSWQgOiBmYWxzZTtcblx0fSxcblx0c3RyaW5ncyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuc3RyaW5ncztcblx0fSxcblx0ZGF0YSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZGF0YTtcblx0fSxcblx0bG9jYWwgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmxvY2FsO1xuXHR9LFxuXHRmb3JtIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtO1xuXHR9LFxuXHRmb3JtSWQgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uSUQ7XG5cdH0sXG5cdGZvcm1zIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3Jtcztcblx0fSxcblx0bGFuZ3VhZ2VzIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5sYW5ndWFnZXM7XG5cdH0sXG5cdGxhbmd1YWdlIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiB1bmRlZmluZWQgIT09IHN0YXRlLmxhbmd1YWdlID8gc3RhdGUubGFuZ3VhZ2UgOiAnJztcblx0fSxcblx0Zm9ybU5hbWUgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uZm9ybU5hbWVcblx0fSxcblx0ZmllbGRzOiBzdGF0ZSA9PiB7XG5cdFx0aWYoIHVuZGVmaW5lZCA9PT0gc3RhdGUuZmllbGRzICl7XG5cdFx0XHRyZXR1cm4ge31cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXTtcblx0fSxcblx0ZmllbGQ6IHN0YXRlID0+IHtcblx0XHRpZiggJ29iamVjdCcgIT09IHR5cGVvZiAgc3RhdGUuZmllbGQgKXtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUuZmllbGQ7XG5cdH0sXG5cdGZvcm1MYW5ndWFnZXM6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybUxhbmd1YWdlcztcblxuXHR9LFxuXHRzaG93Rm9ybUNob2ljZTogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zaG93Rm9ybUNob2ljZTtcblx0fSxcblx0c2hvd0FkZExhbmd1YWdlOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICBudWxsICE9PSBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgKSB7XG5cdFx0XHRzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUuc2hvd0FkZExhbmd1YWdlO1xuXHR9LFxuXHRzaG93TGFuZ3VhZ2VDaG9pY2U6IHN0YXRlID0+IHtcblx0XHRpZiggIG51bGwgIT09IHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSApIHtcblx0XHRcdHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlO1xuXHR9LFxuXHRzYXZpbmc6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuc2F2aW5nO1xuXHR9LFxuXHRzaG93Q2hvb3Nlcjogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zaG93Q2hvb3Nlcjtcblx0fSxcblx0Zm9ybUluZm86IHN0YXRlID0+IHtcblxuXHRcdGlmKCB1bmRlZmluZWQgPT09IHN0YXRlLmZvcm0uaW5mbyApe1xuXHRcdFx0cmV0dXJuIHt9XG5cdFx0fVxuXHRcdHJldHVybiAoc3RhdGUuZm9ybS5pbmZvLmhhc093blByb3BlcnR5KCBzdGF0ZS5sYW5ndWFnZSApKVxuXHRcdFx0PyAgc3RhdGUuZm9ybS5pbmZvW3N0YXRlLmxhbmd1YWdlXVxuXHRcdFx0OiBzdGF0ZS5mb3JtLmhhc093blByb3BlcnR5KCAnaW5mbycgKVxuXHRcdFx0XHQ/IHN0YXRlLmZvcm0uaW5mb1xuXHRcdFx0XHQ6IHsgc3VjY2VzczogJycsIG5hbWU6ICcnIH1cblx0fSxcblx0Zm9vOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmhhc093blByb3BlcnR5KCdmb28nICkgPyBzdGF0ZS5mb28gOiAnb29mJztcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})