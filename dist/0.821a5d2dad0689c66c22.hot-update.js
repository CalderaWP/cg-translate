webpackHotUpdate(0,{

/***/ 50:
/* exports provided: default */
/* all exports used */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/formChooser.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_formState__ = __webpack_require__(/*! ./states/formState */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_formsState__ = __webpack_require__(/*! ./states/formsState */ 42);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_savingState__ = __webpack_require__(/*! ./states/savingState */ 73);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_showAddLanguageState__ = __webpack_require__(/*! ./states/showAddLanguageState */ 74);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_showLanguageChoiceState__ = __webpack_require__(/*! ./states/showLanguageChoiceState */ 75);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tdata: function data() {\n\t\treturn {\n\t\t\tshowChooser: true\n\t\t};\n\t},\n\n\tcomputed: {\n\t\tform: __WEBPACK_IMPORTED_MODULE_0__states_formState__[\"a\" /* formState */],\n\t\tforms: __WEBPACK_IMPORTED_MODULE_1__states_formsState__[\"a\" /* formsState */],\n\t\tsaving: __WEBPACK_IMPORTED_MODULE_2__states_savingState__[\"a\" /* savingState */],\n\t\tshowAddLanguage: __WEBPACK_IMPORTED_MODULE_3__states_showAddLanguageState__[\"a\" /* showAddLanguageState */],\n\t\tsaveText: function saveText() {\n\t\t\treturn this.$store.getters.saving ? 'Saving' : 'Save';\n\t\t},\n\t\tstrings: function strings() {\n\t\t\treturn this.$store.getters.strings;\n\t\t}\n\t},\n\tmethods: {\n\t\tsave: function save() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.$store.dispatch('save').then(function (r) {\n\t\t\t\t_this.$store.commit('saving');\n\t\t\t\t_this.$store.commit('showAddLanguage');\n\t\t\t\t_this.$store.commit('showLanguageChoice', true);\n\n\t\t\t\t_this.showChooser = true;\n\t\t\t});\n\t\t},\n\t\tchange: function change() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t\tthis.$store.commit('showLanguageChoice', true);\n\t\t\tthis.showChooser = false;\n\t\t},\n\t\taddButtonClick: function addButtonClick() {\n\t\t\tthis.$store.commit('showAddLanguage');\n\t\t}\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2Zvcm1DaG9vc2VyLnZ1ZT82NzBhNGIwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzhEQUVBO3VCQUVBOztnQkFHQTtBQUZBO0FBR0E7OztRQUVBO1NBQ0E7VUFDQTttQkFDQTtnQ0FDQTtrREFDQTtBQUNBOzhCQUNBOzhCQUNBO0FBRUE7QUFYQTs7O0FBYUE7O2tEQUNBO3dCQUNBO3dCQUNBOzhDQUVBOzt3QkFFQTtBQUNBO0FBQ0E7NEJBQ0E7c0JBQ0E7NENBQ0E7c0JBQ0E7QUFDQTs0Q0FDQTtzQkFDQTtBQUVBO0FBbkJBO0FBbEJBIiwiZmlsZSI6IjUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxkaXZcblx0XHRcdGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIlxuXHRcdFx0IHYtaWY9XCJzaG93Q2hvb3NlclwiXG5cdFx0PlxuXHRcdFx0PGxhYmVsIGZvcj1cImNmLXRyYW5zbGF0aW9ucy1mb3JtXCI+XG5cdFx0XHRcdHt7bGFiZWxUZXh0fX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZmllbGRcIj5cblx0XHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRcdGNsYXNzPVwiYmxvY2staW5wdXRcIlxuXHRcdFx0XHRcdGlkPVwiY2YtdHJhbnNsYXRpb25zLWZvcm1cIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJmb3JtXCJcblx0XHRcdFx0XHRAY2hhbmdlPVwiY2hhbmdlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxvcHRpb24+PC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvblxuXHRcdFx0XHRcdFx0di1mb3I9XCJmb3JtIGluIGZvcm1zXCJcblx0XHRcdFx0XHRcdHYtYmluZDp2YWx1ZT1cImZvcm0uSURcIlxuXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3tmb3JtLm5hbWV9fVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCIhIHNob3dDaG9vc2VyXCJcblx0XHQ+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0c3R5bGU9XCJkaXNwbGF5OiBpbmxpbmVcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGNmLXRyYW5zbGF0ZS1idXR0b25cIlxuXHRcdFx0XHRcdGlkPVwiY2YtdHJhbnNsYXRlLXNhdmUtYnV0dG9uXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJzYXZlXCJcblx0XHRcdFx0XHR2LWh0bWw9XCJzYXZlVGV4dFwiXG5cdFx0XHQ+XG5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdHYtaWY9XCIhIHNob3dBZGRMYW5ndWFnZVwiXG5cdFx0XHRcdFx0c3R5bGU9XCJkaXNwbGF5OiBpbmxpbmVcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYnV0dG9uIGNmLXRyYW5zbGF0ZS1idXR0b25cIlxuXHRcdFx0XHRcdEBjbGljaz1cImFkZEJ1dHRvbkNsaWNrXCJcblx0XHRcdD5cblx0XHRcdFx0QWRkIExhbmd1YWdlIFRvIFRoaXMgRm9ybVxuXHRcdFx0PC9idXR0b24+XG5cblx0XHRcdDxwXG5cdFx0XHRcdHN0eWxlPVwiZGlzcGxheTogaW5saW5lXCJcblxuXHRcdFx0Plx0WW91IEFyZSBUcmFuc2xhdGluZyB7e2Zvcm0uaW5mby5uYW1lfX08L3A+XG5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHRpbXBvcnQgeyBmb3JtU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9mb3JtU3RhdGUnO1xuXHRpbXBvcnQgeyBmb3Jtc1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvZm9ybXNTdGF0ZSc7XG5cdGltcG9ydCB7IHNhdmluZ1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvc2F2aW5nU3RhdGUnO1xuXHRpbXBvcnQgeyBzaG93QWRkTGFuZ3VhZ2VTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3Nob3dBZGRMYW5ndWFnZVN0YXRlJztcblx0aW1wb3J0IHsgc2hvd0xhbmd1YWdlQ2hvaWNlU3RhdGUgfSBmcm9tICAnLi9zdGF0ZXMvc2hvd0xhbmd1YWdlQ2hvaWNlU3RhdGUnO1xuXG5cdGV4cG9ydCBkZWZhdWx0e1xuXHRcdGRhdGEoKXtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHNob3dDaG9vc2VyOiB0cnVlLFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGZvcm06IGZvcm1TdGF0ZSxcblx0XHRcdGZvcm1zOiAgZm9ybXNTdGF0ZSxcblx0XHRcdHNhdmluZzogc2F2aW5nU3RhdGUsXG5cdFx0XHRzaG93QWRkTGFuZ3VhZ2U6IHNob3dBZGRMYW5ndWFnZVN0YXRlLFxuXHRcdFx0c2F2ZVRleHQoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc2F2aW5nID8gJ1NhdmluZycgOiAnU2F2ZSc7XG5cdFx0XHR9LFxuXHRcdFx0c3RyaW5ncyAoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuc3RyaW5nc1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczp7XG5cdFx0XHRzYXZlKCl7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKCAnc2F2ZScgKS50aGVuKCByID0+IHtcblx0XHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzYXZpbmcnICk7XG5cdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCAnc2hvd0FkZExhbmd1YWdlJyApO1xuXHRcdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dMYW5ndWFnZUNob2ljZScsIHRydWUgKTtcblxuXHRcdFx0XHRcdHRoaXMuc2hvd0Nob29zZXIgPSB0cnVlO1xuXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGNoYW5nZSgpe1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzaG93QWRkTGFuZ3VhZ2UnICk7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dMYW5ndWFnZUNob2ljZScsIHRydWUgKTtcblx0XHRcdFx0dGhpcy5zaG93Q2hvb3NlciA9IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdGFkZEJ1dHRvbkNsaWNrKCl7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3Nob3dBZGRMYW5ndWFnZScgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmb3JtQ2hvb3Nlci52dWU/NjcwYTRiMGYiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 63:
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-4cc5f576"}!./~/vue-loader/lib/selector.js?type=template&index=0!./client/components/formChooser.vue ***!
  \**************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', [(_vm.showChooser) ? _c('div', {\n    staticClass: \"caldera-config-group\"\n  }, [_c('label', {\n    attrs: {\n      \"for\": \"cf-translations-form\"\n    }\n  }, [_vm._v(\"\\n\\t\\t\\t\" + _vm._s(_vm.labelText) + \"\\n\\t\\t\")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"caldera-config-field\"\n  }, [_c('select', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: (_vm.form),\n      expression: \"form\"\n    }],\n    staticClass: \"block-input\",\n    attrs: {\n      \"id\": \"cf-translations-form\"\n    },\n    on: {\n      \"change\": [function($event) {\n        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {\n          return o.selected\n        }).map(function(o) {\n          var val = \"_value\" in o ? o._value : o.value;\n          return val\n        });\n        _vm.form = $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n      }, _vm.change]\n    }\n  }, [_c('option'), _vm._v(\" \"), _vm._l((_vm.forms), function(form) {\n    return _c('option', {\n      domProps: {\n        \"value\": form.ID\n      }\n    }, [_vm._v(\"\\n\\t\\t\\t\\t\\t\" + _vm._s(form.name) + \"\\n\\t\\t\\t\\t\")])\n  })], 2)])]) : _vm._e(), _vm._v(\" \"), (!_vm.showChooser) ? _c('div', [_c('button', {\n    staticClass: \"button button-primary cf-translate-button\",\n    staticStyle: {\n      \"display\": \"inline\"\n    },\n    attrs: {\n      \"id\": \"cf-translate-save-button\"\n    },\n    domProps: {\n      \"innerHTML\": _vm._s(_vm.saveText)\n    },\n    on: {\n      \"click\": _vm.save\n    }\n  }), _vm._v(\" \"), (!_vm.showAddLanguage) ? _c('button', {\n    staticClass: \"button cf-translate-button\",\n    staticStyle: {\n      \"display\": \"inline\"\n    },\n    on: {\n      \"click\": _vm.addButtonClick\n    }\n  }, [_vm._v(\"\\n\\t\\t\\tAdd Language To This Form\\n\\t\\t\")]) : _vm._e(), _vm._v(\" \"), _c('p', {\n    staticStyle: {\n      \"display\": \"inline\"\n    }\n  }, [_vm._v(\"\\tYou Are Translating \" + _vm._s(_vm.form.info.name))])]) : _vm._e()])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(/*! vue-hot-reload-api */ 1).rerender(\"data-v-4cc5f576\", module.exports)\n  }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL2Zvcm1DaG9vc2VyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI2My5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgWyhfdm0uc2hvd0Nob29zZXIpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiY2YtdHJhbnNsYXRpb25zLWZvcm1cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFwiICsgX3ZtLl9zKF92bS5sYWJlbFRleHQpICsgXCJcXG5cXHRcXHRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYWxkZXJhLWNvbmZpZy1maWVsZFwiXG4gIH0sIFtfYygnc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm0pLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJibG9jay1pbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiY2YtdHJhbnNsYXRpb25zLWZvcm1cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS5mb3JtID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICB9LCBfdm0uY2hhbmdlXVxuICAgIH1cbiAgfSwgW19jKCdvcHRpb24nKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0uZm9ybXMpLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IGZvcm0uSURcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoZm9ybS5uYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXSlcbiAgfSldLCAyKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uc2hvd0Nob29zZXIpID8gX2MoJ2RpdicsIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeSBjZi10cmFuc2xhdGUtYnV0dG9uXCIsXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZGlzcGxheVwiOiBcImlubGluZVwiXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNmLXRyYW5zbGF0ZS1zYXZlLWJ1dHRvblwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5zYXZlVGV4dClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5zYXZlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uc2hvd0FkZExhbmd1YWdlKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGNmLXRyYW5zbGF0ZS1idXR0b25cIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5hZGRCdXR0b25DbGlja1xuICAgIH1cbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdEFkZCBMYW5ndWFnZSBUbyBUaGlzIEZvcm1cXG5cXHRcXHRcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXHRZb3UgQXJlIFRyYW5zbGF0aW5nIFwiICsgX3ZtLl9zKF92bS5mb3JtLmluZm8ubmFtZSkpXSldKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGNjNWY1NzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00Y2M1ZjU3NlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2xpZW50L2NvbXBvbmVudHMvZm9ybUNob29zZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})