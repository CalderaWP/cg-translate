webpackHotUpdate(0,{

/***/ 17:
/* exports provided: default */
/* exports used: default */
/*!***************************************!*\
  !*** ./client/plugins/state/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factories__ = __webpack_require__(/*! ./factories */ 43);\n\n\n/**\n * Container for factories that are created as need\n *\n * @type {{twoWay: {}, dispatching: {}, oneWay: {}}}\n */\nvar factories = {\n\ttwoWay: {},\n\tdispatching: {},\n\toneWay: {}\n\n};\n\n/**\n * Factory for creating lazy-loading state factories\n *\n * @param type {String} Type of factory\n * @param factory {Function} Callback function to create state factories with.\n * @returns {function(*=)}\n */\nvar factoryFactory = function factoryFactory(type, factory) {\n\treturn function (prop) {\n\t\tif (!factories[type].hasOwnProperty(prop)) {\n\t\t\tfactories[type][prop] = new factory(prop);\n\t\t}\n\t\treturn factories[type][prop];\n\t};\n};\n\n/** Create Factories **/\nvar twoWayFactory = factoryFactory('twoWay', __WEBPACK_IMPORTED_MODULE_0__factories__[\"a\" /* StateFactory */]);\nvar oneWayFactory = factoryFactory('oneWay', __WEBPACK_IMPORTED_MODULE_0__factories__[\"b\" /* StateFactoryReadOnly */]);\nvar dispatchingFactory = factoryFactory('dispatching', __WEBPACK_IMPORTED_MODULE_0__factories__[\"c\" /* StateFactoryDispatching */]);\n\n/**\n * The computed properties to be injected into all components\n *\n * @type {{}}\n */\nvar computed = {};\n\nvar stateComputes = {\n\ttwoWay: ['foo', 'fieldId', 'language', 'forms', 'saving', 'showAddLanguage', 'languages', 'showLanguageChoice', 'formLanguages', 'showChooser'],\n\toneWay: ['field'],\n\tdispatching: ['form']\n};\n\n/** Inject two-way bindings **/\nstateComputes.twoWay.forEach(function (key, i) {\n\tcomputed[key] = twoWayFactory(key, key);\n});\n\n/** Inject one-way bindings **/\nstateComputes.oneWay.forEach(function (key, i) {\n\tcomputed[key] = oneWayFactory(key, key);\n});\n\n/** Inject two-way, asynchronous bindings **/\nstateComputes.dispatching.forEach(function (key, i) {\n\tcomputed[key] = dispatchingFactory(key, key);\n});\n\n/**\n * Create plugin\n *\n * @type {{install: (function(*, *): void)}}\n */\nvar statePlugin = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomputed: computed\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = statePlugin;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL3N0YXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbImZhY3RvcmllcyIsInR3b1dheSIsImRpc3BhdGNoaW5nIiwib25lV2F5IiwiZmFjdG9yeUZhY3RvcnkiLCJ0eXBlIiwiZmFjdG9yeSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInR3b1dheUZhY3RvcnkiLCJvbmVXYXlGYWN0b3J5IiwiZGlzcGF0Y2hpbmdGYWN0b3J5IiwiY29tcHV0ZWQiLCJzdGF0ZUNvbXB1dGVzIiwiZm9yRWFjaCIsImtleSIsImkiLCJzdGF0ZVBsdWdpbiIsImluc3RhbGwiLCJWdWUiLCJvcHRpb25zIiwibWl4aW4iXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFNQTs7Ozs7QUFLQSxJQUFJQSxZQUFZO0FBQ2ZDLFNBQVEsRUFETztBQUVmQyxjQUFhLEVBRkU7QUFHZkMsU0FBUTs7QUFITyxDQUFoQjs7QUFPQTs7Ozs7OztBQU9BLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBRUMsSUFBRixFQUFRQyxPQUFSLEVBQXFCO0FBQzNDLFFBQU8sVUFBRUMsSUFBRixFQUFZO0FBQ2xCLE1BQUssQ0FBRVAsVUFBV0ssSUFBWCxFQUFrQkcsY0FBbEIsQ0FBa0NELElBQWxDLENBQVAsRUFBa0Q7QUFDakRQLGFBQVdLLElBQVgsRUFBa0JFLElBQWxCLElBQTBCLElBQUlELE9BQUosQ0FBWUMsSUFBWixDQUExQjtBQUNBO0FBQ0QsU0FBT1AsVUFBV0ssSUFBWCxFQUFrQkUsSUFBbEIsQ0FBUDtBQUNBLEVBTEQ7QUFNQSxDQVBEOztBQVNBO0FBQ0EsSUFBTUUsZ0JBQWdCTCxlQUFnQixRQUFoQixFQUEwQixnRUFBMUIsQ0FBdEI7QUFDQSxJQUFNTSxnQkFBZ0JOLGVBQWdCLFFBQWhCLEVBQTBCLHdFQUExQixDQUF0QjtBQUNBLElBQU1PLHFCQUFxQlAsZUFBZ0IsYUFBaEIsRUFBK0IsMkVBQS9CLENBQTNCOztBQUVBOzs7OztBQUtBLElBQUlRLFdBQVcsRUFBZjs7QUFFQSxJQUFNQyxnQkFBZ0I7QUFDckJaLFNBQVEsQ0FDUCxLQURPLEVBRVAsU0FGTyxFQUdQLFVBSE8sRUFJUCxPQUpPLEVBS1AsUUFMTyxFQU1QLGlCQU5PLEVBT1AsV0FQTyxFQVFQLG9CQVJPLEVBU1AsZUFUTyxFQVVQLGFBVk8sQ0FEYTtBQWFyQkUsU0FBUSxDQUNQLE9BRE8sQ0FiYTtBQWdCckJELGNBQWEsQ0FDWixNQURZO0FBaEJRLENBQXRCOztBQXFCQTtBQUNBVyxjQUFjWixNQUFkLENBQXFCYSxPQUFyQixDQUE4QixVQUFDQyxHQUFELEVBQUtDLENBQUwsRUFBVztBQUN4Q0osVUFBU0csR0FBVCxJQUFnQk4sY0FBZU0sR0FBZixFQUFvQkEsR0FBcEIsQ0FBaEI7QUFDQSxDQUZEOztBQUlBO0FBQ0FGLGNBQWNWLE1BQWQsQ0FBcUJXLE9BQXJCLENBQThCLFVBQUNDLEdBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQ3hDSixVQUFTRyxHQUFULElBQWdCTCxjQUFlSyxHQUFmLEVBQW9CQSxHQUFwQixDQUFoQjtBQUNBLENBRkQ7O0FBSUE7QUFDQUYsY0FBY1gsV0FBZCxDQUEwQlksT0FBMUIsQ0FBbUMsVUFBQ0MsR0FBRCxFQUFLQyxDQUFMLEVBQVc7QUFDN0NKLFVBQVNHLEdBQVQsSUFBZ0JKLG1CQUFvQkksR0FBcEIsRUFBeUJBLEdBQXpCLENBQWhCO0FBQ0EsQ0FGRDs7QUFJQTs7Ozs7QUFLQSxJQUFNRSxjQUFjO0FBQ25CQyxRQURtQixtQkFDWEMsR0FEVyxFQUNOQyxPQURNLEVBQ0c7QUFDckJELE1BQUlFLEtBQUosQ0FBVTtBQUNUVCxhQUFVQTtBQURELEdBQVY7QUFHQTtBQUxrQixDQUFwQjs7QUFRQSx3REFBZUssV0FBZiIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAge1xuXHRTdGF0ZUZhY3RvcnksXG5cdFN0YXRlRmFjdG9yeVJlYWRPbmx5LFxuXHRTdGF0ZUZhY3RvcnlEaXNwYXRjaGluZ1xufSBmcm9tICcuL2ZhY3Rvcmllcyc7XG5cbi8qKlxuICogQ29udGFpbmVyIGZvciBmYWN0b3JpZXMgdGhhdCBhcmUgY3JlYXRlZCBhcyBuZWVkXG4gKlxuICogQHR5cGUge3t0d29XYXk6IHt9LCBkaXNwYXRjaGluZzoge30sIG9uZVdheToge319fVxuICovXG5sZXQgZmFjdG9yaWVzID0ge1xuXHR0d29XYXk6IHt9LFxuXHRkaXNwYXRjaGluZzoge30sXG5cdG9uZVdheToge30sXG5cbn07XG5cbi8qKlxuICogRmFjdG9yeSBmb3IgY3JlYXRpbmcgbGF6eS1sb2FkaW5nIHN0YXRlIGZhY3Rvcmllc1xuICpcbiAqIEBwYXJhbSB0eXBlIHtTdHJpbmd9IFR5cGUgb2YgZmFjdG9yeVxuICogQHBhcmFtIGZhY3Rvcnkge0Z1bmN0aW9ufSBDYWxsYmFjayBmdW5jdGlvbiB0byBjcmVhdGUgc3RhdGUgZmFjdG9yaWVzIHdpdGguXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0pfVxuICovXG5jb25zdCBmYWN0b3J5RmFjdG9yeSA9ICggdHlwZSwgZmFjdG9yeSApID0+IHtcblx0cmV0dXJuICggcHJvcCApID0+IHtcblx0XHRpZiAoICEgZmFjdG9yaWVzWyB0eXBlIF0uaGFzT3duUHJvcGVydHkoIHByb3AgKSApIHtcblx0XHRcdGZhY3Rvcmllc1sgdHlwZSBdW3Byb3BdID0gbmV3IGZhY3RvcnkocHJvcCk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWN0b3JpZXNbIHR5cGUgXVtwcm9wXVxuXHR9O1xufTtcblxuLyoqIENyZWF0ZSBGYWN0b3JpZXMgKiovXG5jb25zdCB0d29XYXlGYWN0b3J5ID0gZmFjdG9yeUZhY3RvcnkoICd0d29XYXknLCBTdGF0ZUZhY3RvcnkgKTtcbmNvbnN0IG9uZVdheUZhY3RvcnkgPSBmYWN0b3J5RmFjdG9yeSggJ29uZVdheScsIFN0YXRlRmFjdG9yeVJlYWRPbmx5ICk7XG5jb25zdCBkaXNwYXRjaGluZ0ZhY3RvcnkgPSBmYWN0b3J5RmFjdG9yeSggJ2Rpc3BhdGNoaW5nJywgU3RhdGVGYWN0b3J5RGlzcGF0Y2hpbmcgKTtcblxuLyoqXG4gKiBUaGUgY29tcHV0ZWQgcHJvcGVydGllcyB0byBiZSBpbmplY3RlZCBpbnRvIGFsbCBjb21wb25lbnRzXG4gKlxuICogQHR5cGUge3t9fVxuICovXG5sZXQgY29tcHV0ZWQgPSB7fTtcblxuY29uc3Qgc3RhdGVDb21wdXRlcyA9IHtcblx0dHdvV2F5OiBbXG5cdFx0J2ZvbycsXG5cdFx0J2ZpZWxkSWQnLFxuXHRcdCdsYW5ndWFnZScsXG5cdFx0J2Zvcm1zJyxcblx0XHQnc2F2aW5nJyxcblx0XHQnc2hvd0FkZExhbmd1YWdlJyxcblx0XHQnbGFuZ3VhZ2VzJyxcblx0XHQnc2hvd0xhbmd1YWdlQ2hvaWNlJyxcblx0XHQnZm9ybUxhbmd1YWdlcycsXG5cdFx0J3Nob3dDaG9vc2VyJ1xuXHRdLFxuXHRvbmVXYXk6IFtcblx0XHQnZmllbGQnXG5cdF0sXG5cdGRpc3BhdGNoaW5nOiBbXG5cdFx0J2Zvcm0nLFxuXHRdXG59O1xuXG4vKiogSW5qZWN0IHR3by13YXkgYmluZGluZ3MgKiovXG5zdGF0ZUNvbXB1dGVzLnR3b1dheS5mb3JFYWNoKCAoa2V5LGkpID0+IHtcblx0Y29tcHV0ZWRba2V5XSA9IHR3b1dheUZhY3RvcnkoIGtleSwga2V5ICk7XG59KTtcblxuLyoqIEluamVjdCBvbmUtd2F5IGJpbmRpbmdzICoqL1xuc3RhdGVDb21wdXRlcy5vbmVXYXkuZm9yRWFjaCggKGtleSxpKSA9PiB7XG5cdGNvbXB1dGVkW2tleV0gPSBvbmVXYXlGYWN0b3J5KCBrZXksIGtleSApO1xufSk7XG5cbi8qKiBJbmplY3QgdHdvLXdheSwgYXN5bmNocm9ub3VzIGJpbmRpbmdzICoqL1xuc3RhdGVDb21wdXRlcy5kaXNwYXRjaGluZy5mb3JFYWNoKCAoa2V5LGkpID0+IHtcblx0Y29tcHV0ZWRba2V5XSA9IGRpc3BhdGNoaW5nRmFjdG9yeSgga2V5LCBrZXkgKTtcbn0pO1xuXG4vKipcbiAqIENyZWF0ZSBwbHVnaW5cbiAqXG4gKiBAdHlwZSB7e2luc3RhbGw6IChmdW5jdGlvbigqLCAqKTogdm9pZCl9fVxuICovXG5jb25zdCBzdGF0ZVBsdWdpbiA9IHtcblx0aW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcblx0XHRWdWUubWl4aW4oe1xuXHRcdFx0Y29tcHV0ZWQ6IGNvbXB1dGVkXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlUGx1Z2luO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wbHVnaW5zL3N0YXRlL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})