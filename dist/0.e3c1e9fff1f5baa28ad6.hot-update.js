webpackHotUpdate(0,{

/***/ 87:
/* exports provided: propsFactory */
/* exports used: propsFactory */
/*!*********************************************!*\
  !*** ./client/plugins/CFUI/propsFactory.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return propsFactory; });\n/**\n * All preset component prop sets go here to be accesed through propsFactory\n * @param prop\n * @returns {{}}\n */\nvar factory = function factory(prop) {\n\tvar props = {\n\t\tlabel: {\n\t\t\ttype: String,\n\t\t\trequired: true\n\t\t},\n\t\tid: {\n\t\t\ttype: String,\n\t\t\trequired: true\n\t\t},\n\t\tvalue: {\n\t\t\ttype: String,\n\t\t\trequired: false\n\t\t}\n\t};\n\n\treturn props.hasOwnProperty(prop) ? props[prop] : {};\n};\n\nvar propsFactory = function propsFactory(propArray) {\n\tvar props = {};\n\tpropArray.forEach(function (key, i) {\n\t\tprops[key] = factory(key);\n\t});\n\n\treturn props;\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL0NGVUkvcHJvcHNGYWN0b3J5LmpzIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJwcm9wIiwicHJvcHMiLCJsYWJlbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImlkIiwidmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3BzRmFjdG9yeSIsInByb3BBcnJheSIsImZvckVhY2giLCJrZXkiLCJpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7OztBQUtBLElBQU1BLFVBQVUsU0FBVkEsT0FBVSxDQUFFQyxJQUFGLEVBQVk7QUFDM0IsS0FBTUMsUUFBUTtBQUNiQyxTQUFPO0FBQ05DLFNBQU1DLE1BREE7QUFFTkMsYUFBUztBQUZILEdBRE07QUFLYkMsTUFBSTtBQUNISCxTQUFNQyxNQURIO0FBRUhDLGFBQVM7QUFGTixHQUxTO0FBU2JFLFNBQVE7QUFDUEosU0FBTUMsTUFEQztBQUVQQyxhQUFTO0FBRkY7QUFUSyxFQUFkOztBQWVBLFFBQU9KLE1BQU1PLGNBQU4sQ0FBcUJSLElBQXJCLElBQTZCQyxNQUFNRCxJQUFOLENBQTdCLEdBQTJDLEVBQWxEO0FBQ0EsQ0FqQkQ7O0FBbUJPLElBQU1TLGVBQWUsU0FBZkEsWUFBZSxDQUFFQyxTQUFGLEVBQWlCO0FBQzVDLEtBQUlULFFBQVEsRUFBWjtBQUNBUyxXQUFVQyxPQUFWLENBQW1CLFVBQUNDLEdBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQzdCWixRQUFNVyxHQUFOLElBQWFiLFFBQVFhLEdBQVIsQ0FBYjtBQUNBLEVBRkQ7O0FBSUEsUUFBT1gsS0FBUDtBQUdBLENBVE0iLCJmaWxlIjoiODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFsbCBwcmVzZXQgY29tcG9uZW50IHByb3Agc2V0cyBnbyBoZXJlIHRvIGJlIGFjY2VzZWQgdGhyb3VnaCBwcm9wc0ZhY3RvcnlcbiAqIEBwYXJhbSBwcm9wXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmNvbnN0IGZhY3RvcnkgPSAoIHByb3AgKSA9PiB7XG5cdGNvbnN0IHByb3BzID0ge1xuXHRcdGxhYmVsOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDp0cnVlLFxuXHRcdH0sXG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdHJlcXVpcmVkOnRydWUsXG5cdFx0fSxcblx0XHR2YWx1ZSA6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdHJlcXVpcmVkOmZhbHNlLFxuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gcHJvcHMuaGFzT3duUHJvcGVydHkocHJvcCkgPyBwcm9wc1twcm9wXSA6IHt9O1xufVxuXG5leHBvcnQgY29uc3QgcHJvcHNGYWN0b3J5ID0gKCBwcm9wQXJyYXkgKSA9PiB7XG5cdGxldCBwcm9wcyA9IHt9O1xuXHRwcm9wQXJyYXkuZm9yRWFjaCggKGtleSxpKSA9PiB7XG5cdFx0cHJvcHNba2V5XSA9IGZhY3Rvcnkoa2V5KTtcblx0fSk7XG5cblx0cmV0dXJuIHByb3BzO1xuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGx1Z2lucy9DRlVJL3Byb3BzRmFjdG9yeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})