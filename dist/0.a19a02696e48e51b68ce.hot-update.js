webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\treturn state.data.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined != state.language ? state.language : '';\n\t},\n\tfields: function fields(state) {\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' != _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\t\tconsole.log(state.showLanguageChoice);\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJkYXRhIiwibG9jYWwiLCJmb3JtIiwiZm9ybUlkIiwiSUQiLCJmb3JtcyIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiZmllbGRzIiwiZmllbGQiLCJmb3JtTGFuZ3VhZ2VzIiwic2hvd0Zvcm1DaG9pY2UiLCJzaG93QWRkTGFuZ3VhZ2UiLCJzaG93TGFuZ3VhZ2VDaG9pY2UiLCJjb25zb2xlIiwibG9nIiwic2F2aW5nIl0sIm1hcHBpbmdzIjoiOzs7QUFHTyxJQUFNQSxVQUFVO0FBQ3RCQyxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9DLE1BQU1DLGNBQU4sQ0FBc0IsU0FBdEIsS0FBcUNDLGFBQWFGLE1BQU1ELE9BQXhELEdBQWtFQyxNQUFNRCxPQUF4RSxHQUFrRixLQUF6RjtBQUNBLEVBSHFCO0FBSXRCSSxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9ILE1BQU1JLElBQU4sQ0FBV0QsT0FBbEI7QUFDQSxFQU5xQjtBQU90QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9KLE1BQU1JLElBQWI7QUFDQSxFQVRxQjtBQVV0QkMsUUFBUSxzQkFBUztBQUNoQixTQUFPTCxNQUFNSyxLQUFiO0FBQ0EsRUFacUI7QUFhdEJDLE9BQU8scUJBQVM7QUFDZixTQUFPTixNQUFNTSxJQUFiO0FBQ0EsRUFmcUI7QUFnQnRCQyxTQUFTLHVCQUFTO0FBQ2pCLFNBQU9QLE1BQU1NLElBQU4sQ0FBV0UsRUFBbEI7QUFDQSxFQWxCcUI7QUFtQnRCQyxRQUFRLHNCQUFTO0FBQ2hCLFNBQU9ULE1BQU1TLEtBQWI7QUFDQSxFQXJCcUI7QUFzQnRCQyxZQUFZLDBCQUFTO0FBQ3BCLFNBQU9WLE1BQU1VLFNBQWI7QUFDQSxFQXhCcUI7QUF5QnRCQyxXQUFXLHlCQUFTO0FBQ25CLFNBQU9ULGFBQWFGLE1BQU1XLFFBQW5CLEdBQThCWCxNQUFNVyxRQUFwQyxHQUErQyxFQUF0RDtBQUNBLEVBM0JxQjtBQTRCdEJDLFNBQVEsdUJBQVM7QUFDaEIsU0FBT1osTUFBTU0sSUFBTixDQUFXTSxNQUFYLENBQWtCWixNQUFNVyxRQUF4QixDQUFQO0FBQ0EsRUE5QnFCO0FBK0J0QkUsUUFBTyxzQkFBUztBQUNmLE1BQUksb0JBQW9CYixNQUFNYSxLQUExQixDQUFKLEVBQXFDO0FBQ3BDLFVBQU8sRUFBUDtBQUNBOztBQUVELFNBQU9iLE1BQU1hLEtBQWI7QUFDQSxFQXJDcUI7QUFzQ3RCQyxnQkFBZSw4QkFBUztBQUN2QixTQUFPZCxNQUFNYyxhQUFiO0FBRUEsRUF6Q3FCO0FBMEN0QkMsaUJBQWdCLCtCQUFTO0FBQ3hCLFNBQU9mLE1BQU1lLGNBQWI7QUFDQSxFQTVDcUI7QUE2Q3RCQyxrQkFBaUIsZ0NBQVM7QUFDekIsTUFBSyxTQUFTaEIsTUFBTWdCLGVBQXBCLEVBQXNDO0FBQ3JDaEIsU0FBTWdCLGVBQU4sR0FBd0IsS0FBeEI7QUFDQTs7QUFFRCxTQUFPaEIsTUFBTWdCLGVBQWI7QUFDQSxFQW5EcUI7QUFvRHRCQyxxQkFBb0IsbUNBQVM7QUFDNUIsTUFBSyxTQUFTakIsTUFBTWlCLGtCQUFwQixFQUF5QztBQUN4Q2pCLFNBQU1pQixrQkFBTixHQUEyQixLQUEzQjtBQUNBO0FBQ0RDLFVBQVFDLEdBQVIsQ0FBWW5CLE1BQU1pQixrQkFBbEI7QUFDQSxTQUFPakIsTUFBTWlCLGtCQUFiO0FBQ0EsRUExRHFCO0FBMkR0QkcsU0FBUSx1QkFBUztBQUNoQixTQUFPcEIsTUFBTW9CLE1BQWI7QUFDQTtBQTdEcUIsQ0FBaEIiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgY29uc3QgR0VUVEVSUyA9IHtcblx0ZmllbGRJZCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuaGFzT3duUHJvcGVydHkoICdmaWVsZElkJyApICYmIHVuZGVmaW5lZCAhPSBzdGF0ZS5maWVsZElkID8gc3RhdGUuZmllbGRJZCA6IGZhbHNlO1xuXHR9LFxuXHRzdHJpbmdzIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5kYXRhLnN0cmluZ3M7XG5cdH0sXG5cdGRhdGEgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmRhdGE7XG5cdH0sXG5cdGxvY2FsIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5sb2NhbDtcblx0fSxcblx0Zm9ybSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybTtcblx0fSxcblx0Zm9ybUlkIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtLklEO1xuXHR9LFxuXHRmb3JtcyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybXM7XG5cdH0sXG5cdGxhbmd1YWdlcyA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUubGFuZ3VhZ2VzO1xuXHR9LFxuXHRsYW5ndWFnZSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkICE9IHN0YXRlLmxhbmd1YWdlID8gc3RhdGUubGFuZ3VhZ2UgOiAnJztcblx0fSxcblx0ZmllbGRzOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uZmllbGRzW3N0YXRlLmxhbmd1YWdlXTtcblx0fSxcblx0ZmllbGQ6IHN0YXRlID0+IHtcblx0XHRpZiggJ29iamVjdCcgIT0gdHlwZW9mICBzdGF0ZS5maWVsZCApe1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5maWVsZDtcblx0fSxcblx0Zm9ybUxhbmd1YWdlczogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtTGFuZ3VhZ2VzO1xuXG5cdH0sXG5cdHNob3dGb3JtQ2hvaWNlOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dGb3JtQ2hvaWNlO1xuXHR9LFxuXHRzaG93QWRkTGFuZ3VhZ2U6IHN0YXRlID0+IHtcblx0XHRpZiggIG51bGwgIT09IHN0YXRlLnNob3dBZGRMYW5ndWFnZSApIHtcblx0XHRcdHN0YXRlLnNob3dBZGRMYW5ndWFnZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5zaG93QWRkTGFuZ3VhZ2U7XG5cdH0sXG5cdHNob3dMYW5ndWFnZUNob2ljZTogc3RhdGUgPT4ge1xuXHRcdGlmKCAgbnVsbCAhPT0gc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlICkge1xuXHRcdFx0c3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZSk7XG5cdFx0cmV0dXJuIHN0YXRlLnNob3dMYW5ndWFnZUNob2ljZTtcblx0fSxcblx0c2F2aW5nOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLnNhdmluZztcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})