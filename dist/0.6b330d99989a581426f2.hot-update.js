webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.data.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined != state.language ? state.language : '';\n\t},\n\tfields: function fields(state) {\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' != _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = true;\n\t\t}\n\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZmllbGRzIiwiZmllbGQiLCJmb3JtTGFuZ3VhZ2VzIiwic2hvd0Zvcm1DaG9pY2UiLCJzaG93QWRkTGFuZ3VhZ2UiLCJzaG93TGFuZ3VhZ2VDaG9pY2UiLCJzYXZpbmciXSwibWFwcGluZ3MiOiI7OztBQUdPLElBQU1BLFVBQVU7QUFDdEJDLFVBQVUsd0JBQVM7QUFDbEIsU0FBT0MsTUFBTUMsY0FBTixDQUFzQixTQUF0QixLQUFxQ0MsYUFBYUYsTUFBTUQsT0FBeEQsR0FBa0VDLE1BQU1ELE9BQXhFLEdBQWtGLEtBQXpGO0FBQ0EsRUFIcUI7QUFJdEJJLFVBQVUsd0JBQVM7QUFDbEIsU0FBT0gsTUFBTUksSUFBTixDQUFXRCxPQUFsQjtBQUNBLEVBTnFCO0FBT3RCQyxPQUFPLHFCQUFTO0FBQ2YsU0FBT0osTUFBTUksSUFBYjtBQUNBLEVBVHFCO0FBVXRCQyxRQUFRLHNCQUFTO0FBQ2hCLFNBQU9MLE1BQU1LLEtBQWI7QUFDQSxFQVpxQjtBQWF0QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9OLE1BQU1NLElBQWI7QUFDQSxFQWZxQjtBQWdCdEJDLFNBQVMsdUJBQVM7QUFDakIsU0FBT1AsTUFBTU0sSUFBTixDQUFXRSxFQUFsQjtBQUNBLEVBbEJxQjtBQW1CdEJDLFFBQVEsc0JBQVM7QUFDaEIsU0FBT1QsTUFBTVMsS0FBYjtBQUNBLEVBckJxQjtBQXNCdEJDLFlBQVksMEJBQVM7QUFDcEIsU0FBT1YsTUFBTVUsU0FBYjtBQUNBLEVBeEJxQjtBQXlCdEJDLFdBQVcseUJBQVM7QUFDbkIsU0FBT1QsYUFBYUYsTUFBTVcsUUFBbkIsR0FBOEJYLE1BQU1XLFFBQXBDLEdBQStDLEVBQXREO0FBQ0EsRUEzQnFCO0FBNEJ0QkMsU0FBUSx1QkFBUztBQUNoQixTQUFPWixNQUFNTSxJQUFOLENBQVdNLE1BQVgsQ0FBa0JaLE1BQU1XLFFBQXhCLENBQVA7QUFDQSxFQTlCcUI7QUErQnRCRSxRQUFPLHNCQUFTO0FBQ2YsTUFBSSxvQkFBb0JiLE1BQU1hLEtBQTFCLENBQUosRUFBcUM7QUFDcEMsVUFBTyxFQUFQO0FBQ0E7O0FBRUQsU0FBT2IsTUFBTWEsS0FBYjtBQUNBLEVBckNxQjtBQXNDdEJDLGdCQUFlLDhCQUFTO0FBQ3ZCLFNBQU9kLE1BQU1jLGFBQWI7QUFFQSxFQXpDcUI7QUEwQ3RCQyxpQkFBZ0IsK0JBQVM7QUFDeEIsU0FBT2YsTUFBTWUsY0FBYjtBQUNBLEVBNUNxQjtBQTZDdEJDLGtCQUFpQixnQ0FBUztBQUN6QixNQUFLLFNBQVNoQixNQUFNZ0IsZUFBcEIsRUFBc0M7QUFDckNoQixTQUFNZ0IsZUFBTixHQUF3QixLQUF4QjtBQUNBOztBQUVELFNBQU9oQixNQUFNZ0IsZUFBYjtBQUNBLEVBbkRxQjtBQW9EdEJDLHFCQUFvQixtQ0FBUztBQUM1QixNQUFLLFNBQVNqQixNQUFNaUIsa0JBQXBCLEVBQXlDO0FBQ3hDakIsU0FBTWlCLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0E7O0FBRUQsU0FBT2pCLE1BQU1pQixrQkFBYjtBQUNBLEVBMURxQjtBQTJEdEJDLFNBQVEsdUJBQVM7QUFDaEIsU0FBT2xCLE1BQU1rQixNQUFiO0FBQ0E7QUE3RHFCLENBQWhCIiwiZmlsZSI6IjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuZXhwb3J0IGNvbnN0IEdFVFRFUlMgPSB7XG5cdGZpZWxkSWQgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmhhc093blByb3BlcnR5KCAnZmllbGRJZCcgKSAmJiB1bmRlZmluZWQgIT0gc3RhdGUuZmllbGRJZCA/IHN0YXRlLmZpZWxkSWQgOiBmYWxzZTtcblx0fSxcblx0c3RyaW5ncyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZGF0YS5zdHJpbmdzO1xuXHR9LFxuXHRkYXRhIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5kYXRhO1xuXHR9LFxuXHRsb2NhbCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUubG9jYWw7XG5cdH0sXG5cdGZvcm0gOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm07XG5cdH0sXG5cdGZvcm1JZCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybS5JRDtcblx0fSxcblx0Zm9ybXMgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm1zO1xuXHR9LFxuXHRsYW5ndWFnZXMgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmxhbmd1YWdlcztcblx0fSxcblx0bGFuZ3VhZ2UgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZCAhPSBzdGF0ZS5sYW5ndWFnZSA/IHN0YXRlLmxhbmd1YWdlIDogJyc7XG5cdH0sXG5cdGZpZWxkczogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtLmZpZWxkc1tzdGF0ZS5sYW5ndWFnZV07XG5cdH0sXG5cdGZpZWxkOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICdvYmplY3QnICE9IHR5cGVvZiAgc3RhdGUuZmllbGQgKXtcblx0XHRcdHJldHVybiB7fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUuZmllbGQ7XG5cdH0sXG5cdGZvcm1MYW5ndWFnZXM6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybUxhbmd1YWdlcztcblxuXHR9LFxuXHRzaG93Rm9ybUNob2ljZTogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5zaG93Rm9ybUNob2ljZTtcblx0fSxcblx0c2hvd0FkZExhbmd1YWdlOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICBudWxsICE9PSBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgKSB7XG5cdFx0XHRzdGF0ZS5zaG93QWRkTGFuZ3VhZ2UgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUuc2hvd0FkZExhbmd1YWdlO1xuXHR9LFxuXHRzaG93TGFuZ3VhZ2VDaG9pY2U6IHN0YXRlID0+IHtcblx0XHRpZiggIG51bGwgIT09IHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSApIHtcblx0XHRcdHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZTtcblx0fSxcblx0c2F2aW5nOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNhdmluZztcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})