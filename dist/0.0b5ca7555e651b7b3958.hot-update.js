webpackHotUpdate(0,{

/***/ 57:
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-9b2afc4a"}!./~/vue-loader/lib/selector.js?type=template&index=0!./client/components/langChooser.vue ***!
  \**************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', [_c('div', {\n    staticClass: \"caldera-config-group\"\n  }, [_c('label', {\n    attrs: {\n      \"for\": \"cf-translations-language\"\n    }\n  }, [_vm._v(\"\\n\\t\\t\\t\" + _vm._s(_vm.labelText) + \"\\n\\t\\t\")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"caldera-config-field\"\n  }, [_c('select', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: (_vm.language),\n      expression: \"language\"\n    }],\n    staticClass: \"block-input\",\n    attrs: {\n      \"id\": \"cf-translations-language\"\n    },\n    on: {\n      \"change\": function($event) {\n        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {\n          return o.selected\n        }).map(function(o) {\n          var val = \"_value\" in o ? o._value : o.value;\n          return val\n        });\n        _vm.language = $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n      }\n    }\n  }, [_c('option'), _vm._v(\" \"), _vm._l((_vm.formLanguages), function(language) {\n    return _c('option', {\n      domProps: {\n        \"value\": language.code\n      }\n    }, [_vm._v(\"\\n\\t\\t\\t\\t\\t\" + _vm._s(language.name) + \"\\n\\t\\t\\t\\t\")])\n  })], 2)])]), _vm._v(\" \"), _c('div', [_c('div', {\n    staticClass: \"caldera-config-group\"\n  }, [_c('label', {\n    attrs: {\n      \"for\": \"cf-translations-languages\"\n    }\n  }, [_vm._v(\"\\n\\t\\t\\t\\t\" + _vm._s(_vm.labelTextAdd) + \"\\n\\t\\t\\t\")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"caldera-config-field\"\n  }, [_c('select', {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: (_vm.langToAdd),\n      expression: \"langToAdd\"\n    }],\n    staticClass: \"block-input\",\n    attrs: {\n      \"id\": \"cf-translations-languages\"\n    },\n    on: {\n      \"change\": function($event) {\n        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {\n          return o.selected\n        }).map(function(o) {\n          var val = \"_value\" in o ? o._value : o.value;\n          return val\n        });\n        _vm.langToAdd = $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n      }\n    }\n  }, [_c('option'), _vm._v(\" \"), _vm._l((_vm.languages), function(language) {\n    return _c('option', {\n      domProps: {\n        \"value\": language.code\n      }\n    }, [_vm._v(\"\\n\\t\\t\\t\\t\\t\\t\" + _vm._s(language.name) + \"\\n\\t\\t\\t\\t\\t\")])\n  })], 2)])]), _vm._v(\" \"), ('false' != _vm.langToAdd) ? _c('div', {\n    staticClass: \"caldera-config-group\"\n  }, [_c('button', {\n    staticClass: \"button\",\n    on: {\n      \"click\": _vm.addLang\n    }\n  }, [_vm._v(\"\\n\\t\\t\\t\\tAdd Language To Form Translations?\\n\\t\\t\\t\")])]) : _vm._e()])])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(/*! vue-hot-reload-api */ 1).rerender(\"data-v-9b2afc4a\", module.exports)\n  }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9jb21wb25lbnRzL2xhbmdDaG9vc2VyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FsZGVyYS1jb25maWctZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmxhYmVsVGV4dCkgKyBcIlxcblxcdFxcdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhbGRlcmEtY29uZmlnLWZpZWxkXCJcbiAgfSwgW19jKCdzZWxlY3QnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubGFuZ3VhZ2UpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsYW5ndWFnZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2staW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNmLXRyYW5zbGF0aW9ucy1sYW5ndWFnZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH0pO1xuICAgICAgICBfdm0ubGFuZ3VhZ2UgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJyksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmZvcm1MYW5ndWFnZXMpLCBmdW5jdGlvbihsYW5ndWFnZSkge1xuICAgIHJldHVybiBfYygnb3B0aW9uJywge1xuICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBsYW5ndWFnZS5jb2RlXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKGxhbmd1YWdlLm5hbWUpICsgXCJcXG5cXHRcXHRcXHRcXHRcIildKVxuICB9KV0sIDIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhbGRlcmEtY29uZmlnLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJjZi10cmFuc2xhdGlvbnMtbGFuZ3VhZ2VzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcIiArIF92bS5fcyhfdm0ubGFiZWxUZXh0QWRkKSArIFwiXFxuXFx0XFx0XFx0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FsZGVyYS1jb25maWctZmllbGRcIlxuICB9LCBbX2MoJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5sYW5nVG9BZGQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsYW5nVG9BZGRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjZi10cmFuc2xhdGlvbnMtbGFuZ3VhZ2VzXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfSk7XG4gICAgICAgIF92bS5sYW5nVG9BZGQgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnb3B0aW9uJyksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLmxhbmd1YWdlcyksIGZ1bmN0aW9uKGxhbmd1YWdlKSB7XG4gICAgcmV0dXJuIF9jKCdvcHRpb24nLCB7XG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IGxhbmd1YWdlLmNvZGVcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MobGFuZ3VhZ2UubmFtZSkgKyBcIlxcblxcdFxcdFxcdFxcdFxcdFwiKV0pXG4gIH0pXSwgMildKV0pLCBfdm0uX3YoXCIgXCIpLCAoJ2ZhbHNlJyAhPSBfdm0ubGFuZ1RvQWRkKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FsZGVyYS1jb25maWctZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uYWRkTGFuZ1xuICAgIH1cbiAgfSwgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdEFkZCBMYW5ndWFnZSBUbyBGb3JtIFRyYW5zbGF0aW9ucz9cXG5cXHRcXHRcXHRcIildKV0pIDogX3ZtLl9lKCldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTliMmFmYzRhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOWIyYWZjNGFcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NsaWVudC9jb21wb25lbnRzL2xhbmdDaG9vc2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})