webpackHotUpdate(0,{

/***/ 51:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/langChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formState__ = __webpack_require__(/*! ./states/formState */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_formLanguagesState__ = __webpack_require__(/*! ./states/formLanguagesState */ 41);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_languagesState__ = __webpack_require__(/*! ./states/languagesState */ 43);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_languageState__ = __webpack_require__(/*! ./states/languageState */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_showAddLanguageState__ = __webpack_require__(/*! ./states/showAddLanguageState */ 74);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_showLanguageChoiceState__ = __webpack_require__(/*! ./states/showLanguageChoiceState */ 75);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\t//labelText: this.$store.getters.strings.choose_lang,\n\t\t\tlabelText: 'Choose Lanaugage',\n\t\t\tlabelTextAdd: 'ADD Lanaugage',\n\t\t\tlangToAdd: 'false'\n\t\t};\n\t},\n\tmounted: function mounted() {},\n\n\tcomputed: {\n\t\tformLanguages: __WEBPACK_IMPORTED_MODULE_1__states_formLanguagesState__[\"a\" /* formLanguagesState */],\n\t\tlanguage: __WEBPACK_IMPORTED_MODULE_3__states_languageState__[\"a\" /* languageState */],\n\t\tshowAddLanguage: __WEBPACK_IMPORTED_MODULE_4__states_showAddLanguageState__[\"a\" /* showAddLanguageState */],\n\t\tshowLanguageChoice: __WEBPACK_IMPORTED_MODULE_5__states_showLanguageChoiceState__[\"a\" /* showLanguageChoiceState */],\n\t\tlanguages: function languages() {\n\t\t\tvar languages = this.$store.state.languages;\n\t\t\tvar formLanguages = this.$store.state.formLanguages;\n\t\t\t//@todo filter out already chosern\n\t\t\treturn languages;\n\t\t},\n\n\t\tform: __WEBPACK_IMPORTED_MODULE_0__states_formState__[\"a\" /* formState */]\n\t},\n\twatch: {\n\t\tlanguage: function language(val) {\n\t\t\tthis.$store.commit('showLanguageChoice');\n\t\t}\n\t},\n\tmethods: {\n\t\taddLang: function addLang(ev) {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('addLanguage', {\n\t\t\t\tlanguage: this.langToAdd,\n\t\t\t\tform: this.form.ID\n\t\t\t}).then(function (r) {\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.formLanguages = _this.form.languages_named;\n\t\t\t\t_this.$store.commit('language', _this.langToAdd);\n\t\t\t\t_this.langToAdd = 'false';\n\t\t\t});\n\t\t},\n\t\tlanguageSelected: function languageSelected() {\n\t\t\tthis.$store.commit('showAddLanguage', false);\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2xhbmdDaG9vc2VyLnZ1ZT8xYmIzZDIyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OERBRUE7dUJBRUE7O0FBRUE7Y0FDQTtpQkFDQTtjQUVBO0FBTEE7QUFNQTs2QkFDQSxDQUNBOzs7aUJBRUE7WUFDQTttQkFDQTtzQkFDQTtrQ0FDQTtxQ0FDQTt5Q0FDQTtBQUNBO1VBQ0E7QUFDQTs7UUFFQTtBQVpBOzttQ0FjQTtzQkFDQTtBQUVBO0FBSkE7OztBQU1BOzs7bUJBRUE7b0JBQ0E7QUFGQSx3QkFHQTt3QkFDQTtxQ0FDQTswQ0FDQTtzQkFDQTtBQUNBO0FBQ0E7Z0RBQ0E7eUNBQ0E7QUFFQTtBQWZBO0FBN0JBIiwiZmlsZSI6IjUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG5cdDxkaXY+XG5cdFx0PGRpdlxuXHRcdFx0di1pZj1cInNob3dMYW5ndWFnZUNob2ljZVwiXG5cdFx0XHRjbGFzcz1cImNhbGRlcmEtY29uZmlnLWdyb3VwXCJcblx0XHQ+XG5cdFx0PGxhYmVsIGZvcj1cImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZVwiPlxuXHRcdFx0XHR7e2xhYmVsVGV4dH19XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWZpZWxkXCI+XG5cdFx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0XHRjbGFzcz1cImJsb2NrLWlucHV0XCJcblx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZVwiXG5cdFx0XHRcdFx0di1tb2RlbD1cImxhbmd1YWdlXCJcblx0XHRcdFx0XHRAY2hhbmdlPVwibGFuZ3VhZ2VTZWxlY3RlZFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uPjwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb25cblx0XHRcdFx0XHRcdHYtZm9yPVwibGFuZ3VhZ2UgaW4gZm9ybUxhbmd1YWdlc1wiXG5cdFx0XHRcdFx0XHR2LWJpbmQ6dmFsdWU9XCJsYW5ndWFnZS5jb2RlXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7e2xhbmd1YWdlLm5hbWV9fVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgdi1pZj1cInNob3dBZGRMYW5ndWFnZVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWdyb3VwXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJjZi10cmFuc2xhdGlvbnMtbGFuZ3VhZ2VzXCI+XG5cdFx0XHRcdFx0e3tsYWJlbFRleHRBZGR9fVxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZmllbGRcIj5cblx0XHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYmxvY2staW5wdXRcIlxuXHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwibGFuZ1RvQWRkXCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJjZi10cmFuc2xhdGlvbnMtbGFuZ3VhZ2VzXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uPjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PG9wdGlvblxuXHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwibGFuZ3VhZ2UgaW4gbGFuZ3VhZ2VzXCJcblx0XHRcdFx0XHRcdFx0XHR2LWJpbmQ6dmFsdWU9XCJsYW5ndWFnZS5jb2RlXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3tsYW5ndWFnZS5uYW1lfX1cblx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWdyb3VwXCIgdi1pZj1cIidmYWxzZScgIT0gbGFuZ1RvQWRkXCI+XG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiYWRkTGFuZ1wiIGNsYXNzPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0QWRkIExhbmd1YWdlIFRvIEZvcm0gVHJhbnNsYXRpb25zP1xuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuXHRpbXBvcnQgeyBmb3JtU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9mb3JtU3RhdGUnO1xuXHRpbXBvcnQgeyBmb3JtTGFuZ3VhZ2VzU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9mb3JtTGFuZ3VhZ2VzU3RhdGUnO1xuXHRpbXBvcnQgeyBsYW5ndWFnZXNTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2xhbmd1YWdlc1N0YXRlJztcblx0aW1wb3J0IHsgbGFuZ3VhZ2VTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2xhbmd1YWdlU3RhdGUnO1xuXHRpbXBvcnQgeyBzaG93QWRkTGFuZ3VhZ2VTdGF0ZSB9IGZyb20gICcuL3N0YXRlcy9zaG93QWRkTGFuZ3VhZ2VTdGF0ZSc7XG5cdGltcG9ydCB7IHNob3dMYW5ndWFnZUNob2ljZVN0YXRlIH0gZnJvbSAgJy4vc3RhdGVzL3Nob3dMYW5ndWFnZUNob2ljZVN0YXRlJztcblxuXHRleHBvcnQgZGVmYXVsdHtcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQvL2xhYmVsVGV4dDogdGhpcy4kc3RvcmUuZ2V0dGVycy5zdHJpbmdzLmNob29zZV9sYW5nLFxuXHRcdFx0XHRsYWJlbFRleHQ6ICdDaG9vc2UgTGFuYXVnYWdlJyxcblx0XHRcdFx0bGFiZWxUZXh0QWRkOiAnQUREIExhbmF1Z2FnZScsXG5cdFx0XHRcdGxhbmdUb0FkZDogJ2ZhbHNlJyxcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKXtcblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRmb3JtTGFuZ3VhZ2VzOiBmb3JtTGFuZ3VhZ2VzU3RhdGUsXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2VTdGF0ZSxcblx0XHRcdHNob3dBZGRMYW5ndWFnZTogc2hvd0FkZExhbmd1YWdlU3RhdGUsXG5cdFx0XHRzaG93TGFuZ3VhZ2VDaG9pY2U6IHNob3dMYW5ndWFnZUNob2ljZVN0YXRlLFxuXHRcdFx0bGFuZ3VhZ2VzKCl7XG5cdFx0XHRcdGxldCBsYW5ndWFnZXMgPSB0aGlzLiRzdG9yZS5zdGF0ZS5sYW5ndWFnZXM7XG5cdFx0XHRcdGxldCBmb3JtTGFuZ3VhZ2VzID0gdGhpcy4kc3RvcmUuc3RhdGUuZm9ybUxhbmd1YWdlcztcblx0XHRcdFx0Ly9AdG9kbyBmaWx0ZXIgb3V0IGFscmVhZHkgY2hvc2VyblxuXHRcdFx0XHRyZXR1cm4gbGFuZ3VhZ2VzO1xuXHRcdFx0fSxcblx0XHRcdGZvcm06IGZvcm1TdGF0ZSxcblx0XHR9LFxuXHRcdHdhdGNoOiB7XG5cdFx0XHRsYW5ndWFnZSh2YWwpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93TGFuZ3VhZ2VDaG9pY2UnICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRhZGRMYW5nKGV2KXtcblx0XHRcdFx0dGhpcy4kc3RvcmUuZGlzcGF0Y2goICdhZGRMYW5ndWFnZScsIHtcblx0XHRcdFx0XHRsYW5ndWFnZTogdGhpcy5sYW5nVG9BZGQsXG5cdFx0XHRcdFx0Zm9ybTogdGhpcy5mb3JtLklEXG5cdFx0XHRcdH0pLnRoZW4oIHIgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdFx0XHR0aGlzLmZvcm1MYW5ndWFnZXMgPSB0aGlzLmZvcm0ubGFuZ3VhZ2VzX25hbWVkO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ2xhbmd1YWdlJywgdGhpcy5sYW5nVG9BZGQgKTtcblx0XHRcdFx0XHR0aGlzLmxhbmdUb0FkZCA9ICdmYWxzZSc7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0bGFuZ3VhZ2VTZWxlY3RlZCgpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93QWRkTGFuZ3VhZ2UnLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxhbmdDaG9vc2VyLnZ1ZT8xYmIzZDIyOSJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 67:
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-9b2afc4a"}!./~/vue-loader/lib/selector.js?type=template&index=0!./client/components/langChooser.vue ***!
  \**************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', [(_vm.showLanguageChoice) ? _c('div', {\n    staticClass: \"caldera-config-group\"\n  }, [_c('label', {\n    attrs: {\n      \"for\": \"cf-translations-language\"\n    }\n  }, [_vm._v(\"\\n\\t\\t\\t\" + _vm._s(_vm.labelText) + \"\\n\\t\\t\")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"caldera-config-field\"\n  }, [_c('select', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: (_vm.language),\n      expression: \"language\"\n    }],\n    staticClass: \"block-input\",\n    attrs: {\n      \"id\": \"cf-translations-language\"\n    },\n    on: {\n      \"change\": [function($event) {\n        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {\n          return o.selected\n        }).map(function(o) {\n          var val = \"_value\" in o ? o._value : o.value;\n          return val\n        });\n        _vm.language = $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n      }, _vm.languageSelected]\n    }\n  }, [_c('option'), _vm._v(\" \"), _vm._l((_vm.formLanguages), function(language) {\n    return _c('option', {\n      domProps: {\n        \"value\": language.code\n      }\n    }, [_vm._v(\"\\n\\t\\t\\t\\t\\t\" + _vm._s(language.name) + \"\\n\\t\\t\\t\\t\")])\n  })], 2)])]) : _vm._e(), _vm._v(\" \"), (_vm.showAddLanguage) ? _c('div', [_c('div', {\n    staticClass: \"caldera-config-group\"\n  }, [_c('label', {\n    attrs: {\n      \"for\": \"cf-translations-languages\"\n    }\n  }, [_vm._v(\"\\n\\t\\t\\t\\t\" + _vm._s(_vm.labelTextAdd) + \"\\n\\t\\t\\t\")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"caldera-config-field\"\n  }, [_c('select', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: (_vm.langToAdd),\n      expression: \"langToAdd\"\n    }],\n    staticClass: \"block-input\",\n    attrs: {\n      \"id\": \"cf-translations-languages\"\n    },\n    on: {\n      \"change\": function($event) {\n        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {\n          return o.selected\n        }).map(function(o) {\n          var val = \"_value\" in o ? o._value : o.value;\n          return val\n        });\n        _vm.langToAdd = $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n      }\n    }\n  }, [_c('option'), _vm._v(\" \"), _vm._l((_vm.languages), function(language) {\n    return _c('option', {\n      domProps: {\n        \"value\": language.code\n      }\n    }, [_vm._v(\"\\n\\t\\t\\t\\t\\t\\t\" + _vm._s(language.name) + \"\\n\\t\\t\\t\\t\\t\")])\n  })], 2)])]), _vm._v(\" \"), ('false' != _vm.langToAdd) ? _c('div', {\n    staticClass: \"caldera-config-group\"\n  }, [_c('button', {\n    staticClass: \"button\",\n    on: {\n      \"click\": _vm.addLang\n    }\n  }, [_vm._v(\"\\n\\t\\t\\t\\tAdd Language To Form Translations?\\n\\t\\t\\t\")])]) : _vm._e()]) : _vm._e()])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(/*! vue-hot-reload-api */ 1).rerender(\"data-v-9b2afc4a\", module.exports)\n  }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL2xhbmdDaG9vc2VyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbKF92bS5zaG93TGFuZ3VhZ2VDaG9pY2UpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiY2YtdHJhbnNsYXRpb25zLWxhbmd1YWdlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcIiArIF92bS5fcyhfdm0ubGFiZWxUZXh0KSArIFwiXFxuXFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FsZGVyYS1jb25maWctZmllbGRcIlxuICB9LCBbX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sYW5ndWFnZSksXG4gICAgICBleHByZXNzaW9uOiBcImxhbmd1YWdlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJibG9jay1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiY2YtdHJhbnNsYXRpb25zLWxhbmd1YWdlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0ubGFuZ3VhZ2UgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH0sIF92bS5sYW5ndWFnZVNlbGVjdGVkXVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZm9ybUxhbmd1YWdlcyksIGZ1bmN0aW9uKGxhbmd1YWdlKSB7XG4gICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IGxhbmd1YWdlLmNvZGVcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MobGFuZ3VhZ2UubmFtZSkgKyBcIlxcblxcdFxcdFxcdFxcdFwiKV0pXG4gIH0pXSwgMildKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uc2hvd0FkZExhbmd1YWdlKSA/IF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiY2YtdHJhbnNsYXRpb25zLWxhbmd1YWdlc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmxhYmVsVGV4dEFkZCkgKyBcIlxcblxcdFxcdFxcdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhbGRlcmEtY29uZmlnLWZpZWxkXCJcbiAgfSwgW19jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubGFuZ1RvQWRkKSxcbiAgICAgIGV4cHJlc3Npb246IFwibGFuZ1RvQWRkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJibG9jay1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiY2YtdHJhbnNsYXRpb25zLWxhbmd1YWdlc1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0ubGFuZ1RvQWRkID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5sYW5ndWFnZXMpLCBmdW5jdGlvbihsYW5ndWFnZSkge1xuICAgIHJldHVybiBfYygnb3B0aW9uJywge1xuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBsYW5ndWFnZS5jb2RlXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKGxhbmd1YWdlLm5hbWUpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIildKVxuICB9KV0sIDIpXSldKSwgX3ZtLl92KFwiIFwiKSwgKCdmYWxzZScgIT0gX3ZtLmxhbmdUb0FkZCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhbGRlcmEtY29uZmlnLWdyb3VwXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmFkZExhbmdcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRBZGQgTGFuZ3VhZ2UgVG8gRm9ybSBUcmFuc2xhdGlvbnM/XFxuXFx0XFx0XFx0XCIpXSldKSA6IF92bS5fZSgpXSkgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTliMmFmYzRhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOWIyYWZjNGFcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NsaWVudC9jb21wb25lbnRzL2xhbmdDaG9vc2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})