webpackHotUpdate(0,{

/***/ 46:
/* exports provided: GETTERS */
/* exports used: GETTERS */
/*!*********************************!*\
  !*** ./client/store/getters.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GETTERS; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar GETTERS = {\n\tfieldId: function fieldId(state) {\n\t\treturn state.hasOwnProperty('fieldId') && undefined != state.fieldId ? state.fieldId : false;\n\t},\n\tstrings: function strings(state) {\n\t\tconsole.log(state.data);\n\t\treturn state.data.strings;\n\t},\n\tdata: function data(state) {\n\t\treturn state.data;\n\t},\n\tlocal: function local(state) {\n\t\treturn state.local;\n\t},\n\tform: function form(state) {\n\t\treturn state.form;\n\t},\n\tformId: function formId(state) {\n\t\treturn state.form.ID;\n\t},\n\tforms: function forms(state) {\n\t\treturn state.forms;\n\t},\n\tlanguages: function languages(state) {\n\t\treturn state.languages;\n\t},\n\tlanguage: function language(state) {\n\t\treturn undefined != state.language ? state.language : '';\n\t},\n\tfields: function fields(state) {\n\t\treturn state.form.fields[state.language];\n\t},\n\tfield: function field(state) {\n\t\tif ('object' != _typeof(state.field)) {\n\t\t\treturn {};\n\t\t}\n\n\t\treturn state.field;\n\t},\n\tformLanguages: function formLanguages(state) {\n\t\treturn state.formLanguages;\n\t},\n\tshowFormChoice: function showFormChoice(state) {\n\t\treturn state.showFormChoice;\n\t},\n\tshowAddLanguage: function showAddLanguage(state) {\n\t\tif (null !== state.showAddLanguage) {\n\t\t\tstate.showAddLanguage = false;\n\t\t}\n\n\t\treturn state.showAddLanguage;\n\t},\n\tshowLanguageChoice: function showLanguageChoice(state) {\n\t\tif (null !== state.showLanguageChoice) {\n\t\t\tstate.showLanguageChoice = false;\n\t\t}\n\t\tconsole.log(state.showLanguageChoice);\n\t\treturn state.showLanguageChoice;\n\t},\n\tsaving: function saving(state) {\n\t\treturn state.saving;\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9zdG9yZS9nZXR0ZXJzLmpzIl0sIm5hbWVzIjpbIkdFVFRFUlMiLCJmaWVsZElkIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsInN0cmluZ3MiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxvY2FsIiwiZm9ybSIsImZvcm1JZCIsIklEIiwiZm9ybXMiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsImZpZWxkcyIsImZpZWxkIiwiZm9ybUxhbmd1YWdlcyIsInNob3dGb3JtQ2hvaWNlIiwic2hvd0FkZExhbmd1YWdlIiwic2hvd0xhbmd1YWdlQ2hvaWNlIiwic2F2aW5nIl0sIm1hcHBpbmdzIjoiOzs7QUFHTyxJQUFNQSxVQUFVO0FBQ3RCQyxVQUFVLHdCQUFTO0FBQ2xCLFNBQU9DLE1BQU1DLGNBQU4sQ0FBc0IsU0FBdEIsS0FBcUNDLGFBQWFGLE1BQU1ELE9BQXhELEdBQWtFQyxNQUFNRCxPQUF4RSxHQUFrRixLQUF6RjtBQUNBLEVBSHFCO0FBSXRCSSxVQUFVLHdCQUFTO0FBQ2xCQyxVQUFRQyxHQUFSLENBQWFMLE1BQU1NLElBQW5CO0FBQ0EsU0FBT04sTUFBTU0sSUFBTixDQUFXSCxPQUFsQjtBQUNBLEVBUHFCO0FBUXRCRyxPQUFPLHFCQUFTO0FBQ2YsU0FBT04sTUFBTU0sSUFBYjtBQUNBLEVBVnFCO0FBV3RCQyxRQUFRLHNCQUFTO0FBQ2hCLFNBQU9QLE1BQU1PLEtBQWI7QUFDQSxFQWJxQjtBQWN0QkMsT0FBTyxxQkFBUztBQUNmLFNBQU9SLE1BQU1RLElBQWI7QUFDQSxFQWhCcUI7QUFpQnRCQyxTQUFTLHVCQUFTO0FBQ2pCLFNBQU9ULE1BQU1RLElBQU4sQ0FBV0UsRUFBbEI7QUFDQSxFQW5CcUI7QUFvQnRCQyxRQUFRLHNCQUFTO0FBQ2hCLFNBQU9YLE1BQU1XLEtBQWI7QUFDQSxFQXRCcUI7QUF1QnRCQyxZQUFZLDBCQUFTO0FBQ3BCLFNBQU9aLE1BQU1ZLFNBQWI7QUFDQSxFQXpCcUI7QUEwQnRCQyxXQUFXLHlCQUFTO0FBQ25CLFNBQU9YLGFBQWFGLE1BQU1hLFFBQW5CLEdBQThCYixNQUFNYSxRQUFwQyxHQUErQyxFQUF0RDtBQUNBLEVBNUJxQjtBQTZCdEJDLFNBQVEsdUJBQVM7QUFDaEIsU0FBT2QsTUFBTVEsSUFBTixDQUFXTSxNQUFYLENBQWtCZCxNQUFNYSxRQUF4QixDQUFQO0FBQ0EsRUEvQnFCO0FBZ0N0QkUsUUFBTyxzQkFBUztBQUNmLE1BQUksb0JBQW9CZixNQUFNZSxLQUExQixDQUFKLEVBQXFDO0FBQ3BDLFVBQU8sRUFBUDtBQUNBOztBQUVELFNBQU9mLE1BQU1lLEtBQWI7QUFDQSxFQXRDcUI7QUF1Q3RCQyxnQkFBZSw4QkFBUztBQUN2QixTQUFPaEIsTUFBTWdCLGFBQWI7QUFFQSxFQTFDcUI7QUEyQ3RCQyxpQkFBZ0IsK0JBQVM7QUFDeEIsU0FBT2pCLE1BQU1pQixjQUFiO0FBQ0EsRUE3Q3FCO0FBOEN0QkMsa0JBQWlCLGdDQUFTO0FBQ3pCLE1BQUssU0FBU2xCLE1BQU1rQixlQUFwQixFQUFzQztBQUNyQ2xCLFNBQU1rQixlQUFOLEdBQXdCLEtBQXhCO0FBQ0E7O0FBRUQsU0FBT2xCLE1BQU1rQixlQUFiO0FBQ0EsRUFwRHFCO0FBcUR0QkMscUJBQW9CLG1DQUFTO0FBQzVCLE1BQUssU0FBU25CLE1BQU1tQixrQkFBcEIsRUFBeUM7QUFDeENuQixTQUFNbUIsa0JBQU4sR0FBMkIsS0FBM0I7QUFDQTtBQUNEZixVQUFRQyxHQUFSLENBQVlMLE1BQU1tQixrQkFBbEI7QUFDQSxTQUFPbkIsTUFBTW1CLGtCQUFiO0FBQ0EsRUEzRHFCO0FBNER0QkMsU0FBUSx1QkFBUztBQUNoQixTQUFPcEIsTUFBTW9CLE1BQWI7QUFDQTtBQTlEcUIsQ0FBaEIiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgY29uc3QgR0VUVEVSUyA9IHtcblx0ZmllbGRJZCA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuaGFzT3duUHJvcGVydHkoICdmaWVsZElkJyApICYmIHVuZGVmaW5lZCAhPSBzdGF0ZS5maWVsZElkID8gc3RhdGUuZmllbGRJZCA6IGZhbHNlO1xuXHR9LFxuXHRzdHJpbmdzIDogc3RhdGUgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCBzdGF0ZS5kYXRhICk7XG5cdFx0cmV0dXJuIHN0YXRlLmRhdGEuc3RyaW5ncztcblx0fSxcblx0ZGF0YSA6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZGF0YTtcblx0fSxcblx0bG9jYWwgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmxvY2FsO1xuXHR9LFxuXHRmb3JtIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3JtO1xuXHR9LFxuXHRmb3JtSWQgOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm0uSUQ7XG5cdH0sXG5cdGZvcm1zIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5mb3Jtcztcblx0fSxcblx0bGFuZ3VhZ2VzIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5sYW5ndWFnZXM7XG5cdH0sXG5cdGxhbmd1YWdlIDogc3RhdGUgPT4ge1xuXHRcdHJldHVybiB1bmRlZmluZWQgIT0gc3RhdGUubGFuZ3VhZ2UgPyBzdGF0ZS5sYW5ndWFnZSA6ICcnO1xuXHR9LFxuXHRmaWVsZHM6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZm9ybS5maWVsZHNbc3RhdGUubGFuZ3VhZ2VdO1xuXHR9LFxuXHRmaWVsZDogc3RhdGUgPT4ge1xuXHRcdGlmKCAnb2JqZWN0JyAhPSB0eXBlb2YgIHN0YXRlLmZpZWxkICl7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLmZpZWxkO1xuXHR9LFxuXHRmb3JtTGFuZ3VhZ2VzOiBzdGF0ZSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmZvcm1MYW5ndWFnZXM7XG5cblx0fSxcblx0c2hvd0Zvcm1DaG9pY2U6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuc2hvd0Zvcm1DaG9pY2U7XG5cdH0sXG5cdHNob3dBZGRMYW5ndWFnZTogc3RhdGUgPT4ge1xuXHRcdGlmKCAgbnVsbCAhPT0gc3RhdGUuc2hvd0FkZExhbmd1YWdlICkge1xuXHRcdFx0c3RhdGUuc2hvd0FkZExhbmd1YWdlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLnNob3dBZGRMYW5ndWFnZTtcblx0fSxcblx0c2hvd0xhbmd1YWdlQ2hvaWNlOiBzdGF0ZSA9PiB7XG5cdFx0aWYoICBudWxsICE9PSBzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2UgKSB7XG5cdFx0XHRzdGF0ZS5zaG93TGFuZ3VhZ2VDaG9pY2UgPSBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlKTtcblx0XHRyZXR1cm4gc3RhdGUuc2hvd0xhbmd1YWdlQ2hvaWNlO1xuXHR9LFxuXHRzYXZpbmc6IHN0YXRlID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuc2F2aW5nO1xuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3N0b3JlL2dldHRlcnMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})