webpackHotUpdate(0,{

/***/ 23:
false,

/***/ 77:
/* exports provided: default */
/* exports used: default */
/*!***************************************!*\
  !*** ./client/plugins/state/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__factories__ = __webpack_require__(/*! ./factories */ 78);\n\n\n/**\n * Container for factories that are created as need\n *\n * @type {{twoWay: {}, dispatching: {}, oneWay: {}}}\n */\nvar factories = {\n\ttwoWay: {},\n\tdispatching: {},\n\toneWay: {}\n\n};\n\n/**\n * Factory for creating\n * @param type\n * @param factory\n * @returns {function(*=)}\n */\nvar factoryFactory = function factoryFactory(type, factory) {\n\treturn function (prop) {\n\t\tif (!factories[type].hasOwnProperty(prop)) {\n\t\t\tfactories[type][prop] = new factory(prop);\n\t\t}\n\t\treturn factories[type][prop];\n\t};\n};\n\nvar twoWayFactory = factoryFactory('twoWay', __WEBPACK_IMPORTED_MODULE_0__factories__[\"a\" /* StateFactory */]);\nvar oneWayFactory = factoryFactory('oneWay', __WEBPACK_IMPORTED_MODULE_0__factories__[\"b\" /* StateFactoryReadOnly */]);\nvar dispatchingFactory = factoryFactory('dispatching', __WEBPACK_IMPORTED_MODULE_0__factories__[\"c\" /* StateFactoryDispatching */]);\n\nvar computed = {};\n\nvar stateComputes = {\n\ttwoWay: ['foo', 'fieldId', 'language', 'forms', 'saving', 'showAddLanguage', 'languages', 'showLanguageChoice', 'formLanguages'],\n\toneWay: ['field'],\n\tdispatching: ['form']\n};\n\nstateComputes.twoWay.forEach(function (key, i) {\n\tcomputed[key] = twoWayFactory(key, key);\n});\n\nstateComputes.oneWay.forEach(function (key, i) {\n\tcomputed[key] = oneWayFactory(key, key);\n});\n\nstateComputes.dispatching.forEach(function (key, i) {\n\tcomputed[key] = dispatchingFactory(key, key);\n});\n\nvar statePlugin = {\n\tinstall: function install(Vue, options) {\n\t\tVue.mixin({\n\t\t\tcomputed: computed\n\t\t});\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = statePlugin;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2gvc2l0ZXMvY2YtZGV2L3dlYi93cC1jb250ZW50L3BsdWdpbnMvY2YtdHJhbnNsYXRlL2NsaWVudC9wbHVnaW5zL3N0YXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbImZhY3RvcmllcyIsInR3b1dheSIsImRpc3BhdGNoaW5nIiwib25lV2F5IiwiZmFjdG9yeUZhY3RvcnkiLCJ0eXBlIiwiZmFjdG9yeSIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInR3b1dheUZhY3RvcnkiLCJvbmVXYXlGYWN0b3J5IiwiZGlzcGF0Y2hpbmdGYWN0b3J5IiwiY29tcHV0ZWQiLCJzdGF0ZUNvbXB1dGVzIiwiZm9yRWFjaCIsImtleSIsImkiLCJzdGF0ZVBsdWdpbiIsImluc3RhbGwiLCJWdWUiLCJvcHRpb25zIiwibWl4aW4iXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFNQTs7Ozs7QUFLQSxJQUFJQSxZQUFZO0FBQ2ZDLFNBQVEsRUFETztBQUVmQyxjQUFhLEVBRkU7QUFHZkMsU0FBUTs7QUFITyxDQUFoQjs7QUFPQTs7Ozs7O0FBTUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFFQyxJQUFGLEVBQVFDLE9BQVIsRUFBcUI7QUFDM0MsUUFBTyxVQUFFQyxJQUFGLEVBQVk7QUFDbEIsTUFBSyxDQUFFUCxVQUFXSyxJQUFYLEVBQWtCRyxjQUFsQixDQUFrQ0QsSUFBbEMsQ0FBUCxFQUFrRDtBQUNqRFAsYUFBV0ssSUFBWCxFQUFrQkUsSUFBbEIsSUFBMEIsSUFBSUQsT0FBSixDQUFZQyxJQUFaLENBQTFCO0FBQ0E7QUFDRCxTQUFPUCxVQUFXSyxJQUFYLEVBQWtCRSxJQUFsQixDQUFQO0FBQ0EsRUFMRDtBQU1BLENBUEQ7O0FBVUEsSUFBTUUsZ0JBQWdCTCxlQUFnQixRQUFoQixFQUEwQixnRUFBMUIsQ0FBdEI7QUFDQSxJQUFNTSxnQkFBZ0JOLGVBQWdCLFFBQWhCLEVBQTBCLHdFQUExQixDQUF0QjtBQUNBLElBQU1PLHFCQUFxQlAsZUFBZ0IsYUFBaEIsRUFBK0IsMkVBQS9CLENBQTNCOztBQUVBLElBQUlRLFdBQVcsRUFBZjs7QUFFQSxJQUFNQyxnQkFBZ0I7QUFDckJaLFNBQVEsQ0FDUCxLQURPLEVBRVAsU0FGTyxFQUdQLFVBSE8sRUFJUCxPQUpPLEVBS1AsUUFMTyxFQU1QLGlCQU5PLEVBT1AsV0FQTyxFQVFQLG9CQVJPLEVBU1AsZUFUTyxDQURhO0FBWXJCRSxTQUFRLENBQ1AsT0FETyxDQVphO0FBZXJCRCxjQUFhLENBQ1osTUFEWTtBQWZRLENBQXRCOztBQW9CQVcsY0FBY1osTUFBZCxDQUFxQmEsT0FBckIsQ0FBOEIsVUFBQ0MsR0FBRCxFQUFLQyxDQUFMLEVBQVc7QUFDeENKLFVBQVNHLEdBQVQsSUFBZ0JOLGNBQWVNLEdBQWYsRUFBb0JBLEdBQXBCLENBQWhCO0FBQ0EsQ0FGRDs7QUFJQUYsY0FBY1YsTUFBZCxDQUFxQlcsT0FBckIsQ0FBOEIsVUFBQ0MsR0FBRCxFQUFLQyxDQUFMLEVBQVc7QUFDeENKLFVBQVNHLEdBQVQsSUFBZ0JMLGNBQWVLLEdBQWYsRUFBb0JBLEdBQXBCLENBQWhCO0FBQ0EsQ0FGRDs7QUFJQUYsY0FBY1gsV0FBZCxDQUEwQlksT0FBMUIsQ0FBbUMsVUFBQ0MsR0FBRCxFQUFLQyxDQUFMLEVBQVc7QUFDN0NKLFVBQVNHLEdBQVQsSUFBZ0JKLG1CQUFvQkksR0FBcEIsRUFBeUJBLEdBQXpCLENBQWhCO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNRSxjQUFjO0FBQ25CQyxRQURtQixtQkFDWEMsR0FEVyxFQUNOQyxPQURNLEVBQ0c7QUFDckJELE1BQUlFLEtBQUosQ0FBVTtBQUNUVCxhQUFVQTtBQURELEdBQVY7QUFHQTtBQUxrQixDQUFwQjs7QUFRQSx3REFBZUssV0FBZiIsImZpbGUiOiI3Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAge1xuXHRTdGF0ZUZhY3RvcnksXG5cdFN0YXRlRmFjdG9yeVJlYWRPbmx5LFxuXHRTdGF0ZUZhY3RvcnlEaXNwYXRjaGluZ1xufSBmcm9tICcuL2ZhY3Rvcmllcyc7XG5cbi8qKlxuICogQ29udGFpbmVyIGZvciBmYWN0b3JpZXMgdGhhdCBhcmUgY3JlYXRlZCBhcyBuZWVkXG4gKlxuICogQHR5cGUge3t0d29XYXk6IHt9LCBkaXNwYXRjaGluZzoge30sIG9uZVdheToge319fVxuICovXG5sZXQgZmFjdG9yaWVzID0ge1xuXHR0d29XYXk6IHt9LFxuXHRkaXNwYXRjaGluZzoge30sXG5cdG9uZVdheToge30sXG5cbn07XG5cbi8qKlxuICogRmFjdG9yeSBmb3IgY3JlYXRpbmdcbiAqIEBwYXJhbSB0eXBlXG4gKiBAcGFyYW0gZmFjdG9yeVxuICogQHJldHVybnMge2Z1bmN0aW9uKCo9KX1cbiAqL1xuY29uc3QgZmFjdG9yeUZhY3RvcnkgPSAoIHR5cGUsIGZhY3RvcnkgKSA9PiB7XG5cdHJldHVybiAoIHByb3AgKSA9PiB7XG5cdFx0aWYgKCAhIGZhY3Rvcmllc1sgdHlwZSBdLmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XG5cdFx0XHRmYWN0b3JpZXNbIHR5cGUgXVtwcm9wXSA9IG5ldyBmYWN0b3J5KHByb3ApO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFjdG9yaWVzWyB0eXBlIF1bcHJvcF1cblx0fTtcbn07XG5cblxuY29uc3QgdHdvV2F5RmFjdG9yeSA9IGZhY3RvcnlGYWN0b3J5KCAndHdvV2F5JywgU3RhdGVGYWN0b3J5ICk7XG5jb25zdCBvbmVXYXlGYWN0b3J5ID0gZmFjdG9yeUZhY3RvcnkoICdvbmVXYXknLCBTdGF0ZUZhY3RvcnlSZWFkT25seSApO1xuY29uc3QgZGlzcGF0Y2hpbmdGYWN0b3J5ID0gZmFjdG9yeUZhY3RvcnkoICdkaXNwYXRjaGluZycsIFN0YXRlRmFjdG9yeURpc3BhdGNoaW5nICk7XG5cbmxldCBjb21wdXRlZCA9IHt9O1xuXG5jb25zdCBzdGF0ZUNvbXB1dGVzID0ge1xuXHR0d29XYXk6IFtcblx0XHQnZm9vJyxcblx0XHQnZmllbGRJZCcsXG5cdFx0J2xhbmd1YWdlJyxcblx0XHQnZm9ybXMnLFxuXHRcdCdzYXZpbmcnLFxuXHRcdCdzaG93QWRkTGFuZ3VhZ2UnLFxuXHRcdCdsYW5ndWFnZXMnLFxuXHRcdCdzaG93TGFuZ3VhZ2VDaG9pY2UnLFxuXHRcdCdmb3JtTGFuZ3VhZ2VzJ1xuXHRdLFxuXHRvbmVXYXk6IFtcblx0XHQnZmllbGQnXG5cdF0sXG5cdGRpc3BhdGNoaW5nOiBbXG5cdFx0J2Zvcm0nXG5cdF1cbn07XG5cbnN0YXRlQ29tcHV0ZXMudHdvV2F5LmZvckVhY2goIChrZXksaSkgPT4ge1xuXHRjb21wdXRlZFtrZXldID0gdHdvV2F5RmFjdG9yeSgga2V5LCBrZXkgKTtcbn0pO1xuXG5zdGF0ZUNvbXB1dGVzLm9uZVdheS5mb3JFYWNoKCAoa2V5LGkpID0+IHtcblx0Y29tcHV0ZWRba2V5XSA9IG9uZVdheUZhY3RvcnkoIGtleSwga2V5ICk7XG59KTtcblxuc3RhdGVDb21wdXRlcy5kaXNwYXRjaGluZy5mb3JFYWNoKCAoa2V5LGkpID0+IHtcblx0Y29tcHV0ZWRba2V5XSA9IGRpc3BhdGNoaW5nRmFjdG9yeSgga2V5LCBrZXkgKTtcbn0pO1xuXG5jb25zdCBzdGF0ZVBsdWdpbiA9IHtcblx0aW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcblx0XHRWdWUubWl4aW4oe1xuXHRcdFx0Y29tcHV0ZWQ6IGNvbXB1dGVkXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlUGx1Z2luO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wbHVnaW5zL3N0YXRlL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})