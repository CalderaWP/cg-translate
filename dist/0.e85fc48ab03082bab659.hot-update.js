webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.data.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined != state.language ? state.language : '';\n\t},\n\tfields: function fields(state) {\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' != _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZmllbGRzIiwiZmllbGQiLCJmb3JtTGFuZ3VhZ2VzIiwic2hvd0Zvcm1DaG9pY2UiLCJzaG93QWRkTGFuZ3VhZ2UiLCJzYXZpbmciXSwibWFwcGluZ3MiOiI7OztBQUdPLElBQU1BLFVBQVU7QUFDdEJDLFVBQVUsd0JBQVM7QUFDbEIsU0FBT0MsTUFBTUMsY0FBTixDQUFzQixTQUF0QixLQUFxQ0MsYUFBYUYsTUFBTUQsT0FBeEQsR0FBa0VDLE1BQU1ELE9BQXhFLEdBQWtGLEtBQXpGO0FBQ0EsRUFIcUI7QUFJdEJJLFVBQVUsd0JBQVM7QUFDbEIsU0FBT0gsTUFBTUksSUFBTixDQUFXRCxPQUFsQjtBQUNBLEVBTnFCO0FBT3RCQyxPQUFPLHFCQUFTO0FBQ2YsU0FBT0osTUFBTUksSUFBYjtBQUNBLEVBVHFCO0FBVXRCQyxRQUFRLHNCQUFTO0FBQ2hCLFNBQU9MLE1BQU1LLEtBQWI7QUFDQSxFQVpxQjtBQWF0QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9OLE1BQU1NLElBQWI7QUFDQSxFQWZxQjtBQWdCdEJDLFNBQVMsdUJBQVM7QUFDakIsU0FBT1AsTUFBTU0sSUFBTixDQUFXRSxFQUFsQjtBQUNBLEVBbEJxQjtBQW1CdEJDLFFBQVEsc0JBQVM7QUFDaEIsU0FBT1QsTUFBTVMsS0FBYjtBQUNBLEVBckJxQjtBQXNCdEJDLFlBQVksMEJBQVM7QUFDcEIsU0FBT1YsTUFBTVUsU0FBYjtBQUNBLEVBeEJxQjtBQXlCdEJDLFdBQVcseUJBQVM7QUFDbkIsU0FBT1QsYUFBYUYsTUFBTVcsUUFBbkIsR0FBOEJYLE1BQU1XLFFBQXBDLEdBQStDLEVBQXREO0FBQ0EsRUEzQnFCO0FBNEJ0QkMsU0FBUSx1QkFBUztBQUNoQixTQUFPWixNQUFNTSxJQUFOLENBQVdNLE1BQVgsQ0FBa0JaLE1BQU1XLFFBQXhCLENBQVA7QUFDQSxFQTlCcUI7QUErQnRCRSxRQUFPLHNCQUFTO0FBQ2YsTUFBSSxvQkFBb0JiLE1BQU1hLEtBQTFCLENBQUosRUFBcUM7QUFDcEMsVUFBTyxFQUFQO0FBQ0E7O0FBRUQsU0FBT2IsTUFBTWEsS0FBYjtBQUNBLEVBckNxQjtBQXNDdEJDLGdCQUFlLDhCQUFTO0FBQ3ZCLFNBQU9kLE1BQU1jLGFBQWI7QUFFQSxFQXpDcUI7QUEwQ3RCQyxpQkFBZ0IsK0JBQVM7QUFDeEIsU0FBT2YsTUFBTWUsY0FBYjtBQUNBLEVBNUNxQjtBQTZDdEJDLGtCQUFpQixnQ0FBUztBQUN6QixNQUFLLFNBQVNoQixNQUFNZ0IsZUFBcEIsRUFBc0M7QUFDckNoQixTQUFNZ0IsZUFBTixHQUF3QixLQUF4QjtBQUNBO0FBQ0QsRUFqRHFCO0FBa0R0QkMsU0FBUSx1QkFBUztBQUNoQixTQUFPakIsTUFBTWlCLE1BQWI7QUFDQTtBQXBEcUIsQ0FBaEIiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgY29uc3QgR0VUVEVSUyA9IHtcblx0ZmllbGRJZCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuaGFzT3duUHJvcGVydHkoICdmaWVsZElkJyApICYmIHVuZGVmaW5lZCAhPSBzdGF0ZS5maWVsZElkID8gc3RhdGUuZmllbGRJZCA6IGZhbHNlO1xuXHR9LFxuXHRzdHJpbmdzIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5kYXRhLnN0cmluZ3M7XG5cdH0sXG5cdGRhdGEgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmRhdGE7XG5cdH0sXG5cdGxvY2FsIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5sb2NhbDtcblx0fSxcblx0Zm9ybSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybTtcblx0fSxcblx0Zm9ybUlkIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtLklEO1xuXHR9LFxuXHRmb3JtcyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybXM7XG5cdH0sXG5cdGxhbmd1YWdlcyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUubGFuZ3VhZ2VzO1xuXHR9LFxuXHRsYW5ndWFnZSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkICE9IHN0YXRlLmxhbmd1YWdlID8gc3RhdGUubGFuZ3VhZ2UgOiAnJztcblx0fSxcblx0ZmllbGRzOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXTtcblx0fSxcblx0ZmllbGQ6IHN0YXRlID0+IHtcblx0XHRpZiggJ29iamVjdCcgIT0gdHlwZW9mICBzdGF0ZS5maWVsZCApe1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5maWVsZDtcblx0fSxcblx0Zm9ybUxhbmd1YWdlczogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtTGFuZ3VhZ2VzO1xuXG5cdH0sXG5cdHNob3dGb3JtQ2hvaWNlOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dGb3JtQ2hvaWNlO1xuXHR9LFxuXHRzaG93QWRkTGFuZ3VhZ2U6IHN0YXRlID0+IHtcblx0XHRpZiggIG51bGwgIT09IHN0YXRlLnNob3dBZGRMYW5ndWFnZSApIHtcblx0XHRcdHN0YXRlLnNob3dBZGRMYW5ndWFnZSA9IGZhbHNlO1xuXHRcdH1cblx0fSxcblx0c2F2aW5nOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNhdmluZztcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})