webpackHotUpdate(0,{

/***/ 48:
/* exports provided: default */
/* all exports used */
/*!**********************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./client/components/fieldTranslate.vue ***!
  \**********************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_fieldState__ = __webpack_require__(/*! ./states/fieldState */ 15);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar optInput = {\n\tprops: ['opt'],\n\ttemplate: '<input\\n\\t\\t\\t\\tv-bind:id=\"\\'cf-translations-\\' + opt\"\\n\\t\\t\\t\\ttype=\"text\"\\n\\t\\t\\t\\t:value=\"label\"\\n\\t\\t\\t\\tclass=\"block-input\"\\n\\t\\t\\t\\t@change=\"changed\"\\n\\t\\t\\t/>',\n\tmethods: {\n\t\tchanged: function changed(ev) {\n\t\t\tconsole.log(ev.target.value);\n\t\t\tthis.$store.state.commit('fieldOpt', { opt: opt, value: ev.target.value });\n\t\t}\n\t}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = {\n\tcomponents: {\n\t\t'opt-input': optInput\n\t},\n\tdata: function data() {\n\t\treturn {\n\t\t\tID: this.fieldId,\n\t\t\tlabelText: {\n\t\t\t\tlabel: 'Field Label',\n\t\t\t\tdescription: 'Feild Description',\n\t\t\t\ttheDefault: 'Feild theDefault',\n\t\t\t\toption: 'Translate Option ',\n\t\t\t\toptions: 'Field Options'\n\n\t\t\t},\n\t\t\t//labelText: this.$store.get.strings.choose_lang,\n\t\t\thasOptions: false\n\t\t};\n\t},\n\tmounted: function mounted() {\n\t\tthis.hasOptions = null !== this.field.option;\n\t},\n\n\tcomputed: {\n\t\tfield: __WEBPACK_IMPORTED_MODULE_0__states_fieldState__[\"a\" /* fieldState */]\n\t},\n\tmethods: {\n\t\tchanged: function changed(ev) {}\n\t}\n\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvd3AyL3d3dy9jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2ZpZWxkVHJhbnNsYXRlLnZ1ZT8wYzc0YjVlNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFDQTtTQUVBO0FBT0E7O2dDQUVBO3lCQUNBO3FFQUNBO0FBRUE7QUFMQTtBQVRBO0FBZUE7O2VBSUE7QUFGQTt1QkFHQTs7WUFFQTs7V0FFQTtpQkFDQTtnQkFDQTtZQUNBO2FBR0E7O0FBUEE7QUFRQTtlQUVBO0FBWkE7QUFhQTs2QkFDQTt3Q0FDQTtBQUNBOzs7U0FHQTtBQUZBOztnQ0FLQSxDQUdBO0FBTEE7O0FBekJBIiwiZmlsZSI6IjQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG5cdDxkaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNmLXRyYW5zbGF0ZS1sZWZ0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZ3JvdXBcIj5cblx0XHRcdFx0PGxhYmVsIGZvcj1cImNmLXRyYW5zbGF0aW9ucy1sYWJlbFwiPlxuXHRcdFx0XHRcdHt7bGFiZWxUZXh0LmxhYmVsfX1cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWZpZWxkXCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0aW9ucy1sYWJlbFwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwiZmllbGQubGFiZWxcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWdyb3VwXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJjZi10cmFuc2xhdGlvbnMtZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHR7e2xhYmVsVGV4dC5kZXNjcmlwdGlvbn19XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1maWVsZFwiPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0aWQ9XCJjZi10cmFuc2xhdGlvbnMtZGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0di1tb2RlbD1cImZpZWxkLmRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiPlxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwiY2YtdHJhbnNsYXRpb25zLXRoZURlZmF1bHRcIj5cblx0XHRcdFx0XHR7e2xhYmVsVGV4dC50aGVEZWZhdWx0fX1cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNhbGRlcmEtY29uZmlnLWZpZWxkXCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRpZD1cImNmLXRyYW5zbGF0aW9ucy10aGVEZWZhdWx0XCJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJmaWVsZC5kZWZhdWx0XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjZi10cmFuc2xhdGUtcmlnaHRcIj5cblxuXG5cdFx0XHQ8ZmllbGRzZXQgdi1pZj1cImhhc09wdGlvbnNcIj5cblx0XHRcdFx0PGxlZ2VuZD5cblx0XHRcdFx0XHR7e2xhYmVsVGV4dC5vcHRpb25zfX1cblx0XHRcdFx0PC9sZWdlbmQ+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHR2LWlmPVwiaGFzT3B0aW9uc1wiXG5cdFx0XHRcdFx0di1mb3I9XCIobGFiZWwsIG9wdCApIGluIGZpZWxkLm9wdGlvblwiXG5cdFx0XHRcdD5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYWxkZXJhLWNvbmZpZy1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsXG5cdFx0XHRcdFx0XHRcdHYtYmluZDpmb3I9XCInY2YtdHJhbnNsYXRpb25zLScgKyBvcHRcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cInNjcmVlbi1yZWFkZXItdGV4dFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHt7bGFiZWxUZXh0Lm9wdGlvbn19IHt7b3B0fX1cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FsZGVyYS1jb25maWctZmllbGRcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0di1iaW5kOmlkPVwiJ2NmLXRyYW5zbGF0aW9ucy0nICsgb3B0XCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0OnZhbHVlPVwibGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiYmxvY2staW5wdXRcIlxuXHRcdFx0XHRcdFx0XHRcdEBjaGFuZ2U9XCJjaGFuZ2VkXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZmllbGRzZXQ+XG5cblxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0aW1wb3J0IHsgZmllbGRTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2ZpZWxkU3RhdGUnO1xuXHRjb25zdCBvcHRJbnB1dCA9IHtcblx0XHRwcm9wczogWydvcHQnXSxcblx0XHR0ZW1wbGF0ZTpgPGlucHV0XG5cdFx0XHRcdFx0di1iaW5kOmlkPVwiJ2NmLXRyYW5zbGF0aW9ucy0nICsgb3B0XCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0OnZhbHVlPVwibGFiZWxcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYmxvY2staW5wdXRcIlxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJjaGFuZ2VkXCJcblx0XHRcdFx0Lz5gLFxuXHRcdG1ldGhvZHMgOiB7XG5cdFx0XHRjaGFuZ2VkKGV2KXtcblx0XHRcdFx0Y29uc29sZS5sb2coZXYudGFyZ2V0LnZhbHVlKVxuXHRcdFx0XHR0aGlzLiRzdG9yZS5zdGF0ZS5jb21taXQoJ2ZpZWxkT3B0Jyx7b3B0Om9wdCx2YWx1ZTpldi50YXJnZXQudmFsdWV9KVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0ZXhwb3J0IGRlZmF1bHR7XG5cdFx0Y29tcG9uZW50czp7XG5cdFx0XHQnb3B0LWlucHV0JyA6IG9wdElucHV0XG5cdFx0fSxcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRJRDogdGhpcy5maWVsZElkLFxuXHRcdFx0XHRsYWJlbFRleHQ6IHtcblx0XHRcdFx0XHRsYWJlbDogJ0ZpZWxkIExhYmVsJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ0ZlaWxkIERlc2NyaXB0aW9uJyxcblx0XHRcdFx0XHR0aGVEZWZhdWx0OiAnRmVpbGQgdGhlRGVmYXVsdCcsXG5cdFx0XHRcdFx0b3B0aW9uOiAnVHJhbnNsYXRlIE9wdGlvbiAnLFxuXHRcdFx0XHRcdG9wdGlvbnM6ICdGaWVsZCBPcHRpb25zJ1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8vbGFiZWxUZXh0OiB0aGlzLiRzdG9yZS5nZXQuc3RyaW5ncy5jaG9vc2VfbGFuZyxcblx0XHRcdFx0aGFzT3B0aW9uczogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKSAge1xuXHRcdFx0dGhpcy5oYXNPcHRpb25zID0gbnVsbCAhPT0gdGhpcy5maWVsZC5vcHRpb247XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0ZmllbGQ6IGZpZWxkU3RhdGUsXG5cdFx0fSxcblx0XHRtZXRob2RzOntcblx0XHRcdGNoYW5nZWQoZXYpe1xuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmaWVsZFRyYW5zbGF0ZS52dWU/MGM3NGI1ZTUiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})