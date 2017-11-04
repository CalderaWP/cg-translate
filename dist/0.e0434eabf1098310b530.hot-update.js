webpackHotUpdate(0,{

/***/ 59:
/* exports provided: createStatePlugin */
/* exports used: createStatePlugin */
/*!**********************************!*\
  !*** ./~/vue-app-state/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__industry_factories__ = __webpack_require__(/*! ./industry/factories */ 60);\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = createStatePlugin;\n\n\n/**\n * Creates a VueJS plugin that binds state form Vuex store automatically.\n *\n * @param stateComputes {Object}\n * @returns {{install: (function(*, *): void)}}\n */\nfunction createStatePlugin(stateComputes) {\n\tlet computed = {};\n\t/** Inject two-way bindings **/\n\tstateComputes.twoWay.forEach( (key,i) => {\n\t\tcomputed[key] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__industry_factories__[\"a\" /* StateFactory */])( key, key );\n\t});\n\n\t/** Inject one-way bindings **/\n\tstateComputes.oneWay.forEach( (key,i) => {\n\t\tcomputed[key] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__industry_factories__[\"b\" /* StateFactoryReadOnly */])( key, key );\n\t});\n\n\t/** Inject two-way, asynchronous bindings **/\n\tstateComputes.dispatching.forEach( (key,i) => {\n\t\tcomputed[key] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__industry_factories__[\"c\" /* StateFactoryDispatching */])( key, key );\n\t});\n\n\treturn{\n\t\tinstall(Vue, options) {\n\t\t\tVue.mixin({\n\t\t\t\tcomputed: computed\n\t\t\t});\n\t\t}\n\t}\n\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL25vZGVfbW9kdWxlcy92dWUtYXBwLXN0YXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBIiwiZmlsZSI6IjU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0U3RhdGVGYWN0b3J5LFxuXHRTdGF0ZUZhY3RvcnlEaXNwYXRjaGluZyxcblx0U3RhdGVGYWN0b3J5UmVhZE9ubHlcbn0gZnJvbSBcIi4vaW5kdXN0cnkvZmFjdG9yaWVzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIFZ1ZUpTIHBsdWdpbiB0aGF0IGJpbmRzIHN0YXRlIGZvcm0gVnVleCBzdG9yZSBhdXRvbWF0aWNhbGx5LlxuICpcbiAqIEBwYXJhbSBzdGF0ZUNvbXB1dGVzIHtPYmplY3R9XG4gKiBAcmV0dXJucyB7e2luc3RhbGw6IChmdW5jdGlvbigqLCAqKTogdm9pZCl9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGVQbHVnaW4oc3RhdGVDb21wdXRlcykge1xuXHRsZXQgY29tcHV0ZWQgPSB7fTtcblx0LyoqIEluamVjdCB0d28td2F5IGJpbmRpbmdzICoqL1xuXHRzdGF0ZUNvbXB1dGVzLnR3b1dheS5mb3JFYWNoKCAoa2V5LGkpID0+IHtcblx0XHRjb21wdXRlZFtrZXldID0gU3RhdGVGYWN0b3J5KCBrZXksIGtleSApO1xuXHR9KTtcblxuXHQvKiogSW5qZWN0IG9uZS13YXkgYmluZGluZ3MgKiovXG5cdHN0YXRlQ29tcHV0ZXMub25lV2F5LmZvckVhY2goIChrZXksaSkgPT4ge1xuXHRcdGNvbXB1dGVkW2tleV0gPSBTdGF0ZUZhY3RvcnlSZWFkT25seSgga2V5LCBrZXkgKTtcblx0fSk7XG5cblx0LyoqIEluamVjdCB0d28td2F5LCBhc3luY2hyb25vdXMgYmluZGluZ3MgKiovXG5cdHN0YXRlQ29tcHV0ZXMuZGlzcGF0Y2hpbmcuZm9yRWFjaCggKGtleSxpKSA9PiB7XG5cdFx0Y29tcHV0ZWRba2V5XSA9IFN0YXRlRmFjdG9yeURpc3BhdGNoaW5nKCBrZXksIGtleSApO1xuXHR9KTtcblxuXHRyZXR1cm57XG5cdFx0aW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcblx0XHRcdFZ1ZS5taXhpbih7XG5cdFx0XHRcdGNvbXB1dGVkOiBjb21wdXRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtYXBwLXN0YXRlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 60:
/* exports provided: StateFactory, StateFactoryDispatching, StateFactoryReadOnly */
/* exports used: StateFactory, StateFactoryReadOnly, StateFactoryDispatching */
/*!***********************************************!*\
  !*** ./~/vue-app-state/industry/factories.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Util function for setting mutation as getter when undefiend\n *\n * @param mutation {String}\n * @param getter {String}\n * @returns {*}\n */\nconst getterToSetter = function (mutation, getter) {\n\tif (!mutation) {\n\t\tmutation = getter;\n\t}\n\treturn mutation;\n};\n\n/**\n * Create a computed getter function for a two-way binding of state to all components.\n *\n *\n * @param getter {String} Name of getter function\n * @param mutation {String} Optional. Name of mutation/ setter function. Default is name of getter.\n * @returns {*}\n * @constructor\n */\nconst StateFactory = ( getter, mutation ) => {\n\n\tmutation = getterToSetter(mutation, getter);\n\n\treturn {\n\t\tget ()  {\n\t\t\treturn this.$store.state[ getter ];\n\t\t},\n\t\tset(value) {\n\t\t\tthis.$store.commit(mutation, value);\n\t\t}\n\t}\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = StateFactory;\n\n\n\n/**\n * Create a computed getter function for a two-way asynchronous binding of state to all components.\n *\n *\n * @param getter {String} Name of getter function\n * @param action {String} Optional. Name of action to dispatch. Default is name of getter.\n * @returns {*}\n * @constructor\n */\nconst StateFactoryDispatching = ( getter, action ) => {\n\n\taction = getterToSetter(action, getter);\n\n\treturn {\n\t\tget ()  {\n\t\t\treturn this.$store.state[ getter ];\n\t\t},\n\t\tset(value) {\n\t\t\tthis.$store.dispatch(action, value);\n\t\t}\n\t}\n};\n/* harmony export (immutable) */ __webpack_exports__[\"c\"] = StateFactoryDispatching;\n\n\n\n/**\n * Create a one-way getter function for a two-way binding of state to all components.\n *\n *\n * @param getter {String} Name of getter function\n * @returns {*}\n * @constructor\n */\nconst StateFactoryReadOnly = ( getter ) => {\n\treturn {\n\t\tget ()  {\n\t\t\treturn this.$store.state[ getter ];\n\t\t},\n\t\tset(value){\n\t\t\t//You shall not pass\n\t\t}\n\t}\n};\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = StateFactoryReadOnly;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL25vZGVfbW9kdWxlcy92dWUtYXBwLXN0YXRlL2luZHVzdHJ5L2ZhY3Rvcmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLG9CQUFvQixPQUFPO0FBQzNCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGtCQUFrQixPQUFPO0FBQ3pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6IjYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVdGlsIGZ1bmN0aW9uIGZvciBzZXR0aW5nIG11dGF0aW9uIGFzIGdldHRlciB3aGVuIHVuZGVmaWVuZFxuICpcbiAqIEBwYXJhbSBtdXRhdGlvbiB7U3RyaW5nfVxuICogQHBhcmFtIGdldHRlciB7U3RyaW5nfVxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGdldHRlclRvU2V0dGVyID0gZnVuY3Rpb24gKG11dGF0aW9uLCBnZXR0ZXIpIHtcblx0aWYgKCFtdXRhdGlvbikge1xuXHRcdG11dGF0aW9uID0gZ2V0dGVyO1xuXHR9XG5cdHJldHVybiBtdXRhdGlvbjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgY29tcHV0ZWQgZ2V0dGVyIGZ1bmN0aW9uIGZvciBhIHR3by13YXkgYmluZGluZyBvZiBzdGF0ZSB0byBhbGwgY29tcG9uZW50cy5cbiAqXG4gKlxuICogQHBhcmFtIGdldHRlciB7U3RyaW5nfSBOYW1lIG9mIGdldHRlciBmdW5jdGlvblxuICogQHBhcmFtIG11dGF0aW9uIHtTdHJpbmd9IE9wdGlvbmFsLiBOYW1lIG9mIG11dGF0aW9uLyBzZXR0ZXIgZnVuY3Rpb24uIERlZmF1bHQgaXMgbmFtZSBvZiBnZXR0ZXIuXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgIGNvbnN0IFN0YXRlRmFjdG9yeSA9ICggZ2V0dGVyLCBtdXRhdGlvbiApID0+IHtcblxuXHRtdXRhdGlvbiA9IGdldHRlclRvU2V0dGVyKG11dGF0aW9uLCBnZXR0ZXIpO1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0ICgpICB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbIGdldHRlciBdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQobXV0YXRpb24sIHZhbHVlKTtcblx0XHR9XG5cdH1cbn07XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBjb21wdXRlZCBnZXR0ZXIgZnVuY3Rpb24gZm9yIGEgdHdvLXdheSBhc3luY2hyb25vdXMgYmluZGluZyBvZiBzdGF0ZSB0byBhbGwgY29tcG9uZW50cy5cbiAqXG4gKlxuICogQHBhcmFtIGdldHRlciB7U3RyaW5nfSBOYW1lIG9mIGdldHRlciBmdW5jdGlvblxuICogQHBhcmFtIGFjdGlvbiB7U3RyaW5nfSBPcHRpb25hbC4gTmFtZSBvZiBhY3Rpb24gdG8gZGlzcGF0Y2guIERlZmF1bHQgaXMgbmFtZSBvZiBnZXR0ZXIuXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgIGNvbnN0IFN0YXRlRmFjdG9yeURpc3BhdGNoaW5nID0gKCBnZXR0ZXIsIGFjdGlvbiApID0+IHtcblxuXHRhY3Rpb24gPSBnZXR0ZXJUb1NldHRlcihhY3Rpb24sIGdldHRlcik7XG5cblx0cmV0dXJuIHtcblx0XHRnZXQgKCkgIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZVsgZ2V0dGVyIF07XG5cdFx0fSxcblx0XHRzZXQodmFsdWUpIHtcblx0XHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKGFjdGlvbiwgdmFsdWUpO1xuXHRcdH1cblx0fVxufTtcblxuXG4vKipcbiAqIENyZWF0ZSBhIG9uZS13YXkgZ2V0dGVyIGZ1bmN0aW9uIGZvciBhIHR3by13YXkgYmluZGluZyBvZiBzdGF0ZSB0byBhbGwgY29tcG9uZW50cy5cbiAqXG4gKlxuICogQHBhcmFtIGdldHRlciB7U3RyaW5nfSBOYW1lIG9mIGdldHRlciBmdW5jdGlvblxuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0ICBjb25zdCBTdGF0ZUZhY3RvcnlSZWFkT25seSA9ICggZ2V0dGVyICkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGdldCAoKSAge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlWyBnZXR0ZXIgXTtcblx0XHR9LFxuXHRcdHNldCh2YWx1ZSl7XG5cdFx0XHQvL1lvdSBzaGFsbCBub3QgcGFzc1xuXHRcdH1cblx0fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWFwcC1zdGF0ZS9pbmR1c3RyeS9mYWN0b3JpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})