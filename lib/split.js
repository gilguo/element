module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/split/src/main.vue?vue&type=template&id=f4fa31c6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-split" }, [
    _c("div", { ref: "outerWrapper", class: _vm.wrapperClasses }, [
      _vm.isHorizontal
        ? _c("div", { class: _vm.prefix + "-horizontal" }, [
            _c(
              "div",
              {
                staticClass: "left-pane",
                class: _vm.paneClasses,
                staticStyle: { right: "50%" },
                style: { right: _vm.anotherOffset + "%" }
              },
              [_vm._t("left")],
              2
            ),
            _c(
              "div",
              {
                class: _vm.prefix + "-trigger-con",
                style: { left: _vm.offset + "%" },
                on: { mousedown: _vm.handleMousedown }
              },
              [
                _vm._t("trigger", [
                  _c("trigger", { attrs: { mode: "vertical" } })
                ])
              ],
              2
            ),
            _c(
              "div",
              {
                staticClass: "right-pane",
                class: _vm.paneClasses,
                style: { left: _vm.offset + "%" }
              },
              [_vm._t("right")],
              2
            )
          ])
        : _c("div", { class: _vm.prefix + "-vertical" }, [
            _c(
              "div",
              {
                staticClass: "top-pane",
                class: _vm.paneClasses,
                style: { bottom: _vm.anotherOffset + "%" }
              },
              [_vm._t("top")],
              2
            ),
            _c(
              "div",
              {
                class: _vm.prefix + "-trigger-con",
                style: { top: _vm.offset + "%" },
                on: { mousedown: _vm.handleMousedown }
              },
              [
                _vm._t("trigger", [
                  _c("trigger", { attrs: { mode: "horizontal" } })
                ])
              ],
              2
            ),
            _c(
              "div",
              {
                staticClass: "bottom-pane",
                class: _vm.paneClasses,
                style: { top: _vm.offset + "%" }
              },
              [_vm._t("bottom")],
              2
            )
          ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/split/src/main.vue?vue&type=template&id=f4fa31c6&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(6);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/utils/split/assist.js


var isServer = external_vue_default.a.prototype.$isServer;
// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (var i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
// For Modal scrollBar hidden
var cached = void 0;
function camelcaseToHyphen(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getScrollBarSize(fresh) {
  if (isServer) return 0;
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

// watch DOM change
var MutationObserver = isServer ? false : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;

var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
// getStyle
function getStyle(element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
}

// firstUpperCase
function firstUpperCase(str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1);
}


// Warn
function warnProp(component, prop, correctType, wrongType) {
  correctType = firstUpperCase(correctType);
  wrongType = firstUpperCase(wrongType);
  console.error('[iView warn]: Invalid prop: type check failed for prop ' + prop + '. Expected ' + correctType + ', got ' + wrongType + '. (found in component: ' + component + ')'); // eslint-disable-line
}

function typeOf(obj) {
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
  var t = typeOf(data);
  var o = void 0;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (var i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (var _i in data) {
      o[_i] = deepCopy(data[_i]);
    }
  }
  return o;
}



// scrollTop animation
function scrollTop(el) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var to = arguments[2];
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
  var endCallback = arguments[4];

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }
  var difference = Math.abs(from - to);
  var step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    var d = start + step > end ? end : start + step;
    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(function () {
      return scroll(d, end, step);
    });
  }
  scroll(from, to, step);
}

// Find components upward
function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  var parent = context.$parent;
  var name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}


// Find component downward
function findComponentDownward(context, componentName) {
  var childrens = context.$children;
  var children = null;

  if (childrens.length) {
    for (var _iterator = childrens, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i2 >= _iterator.length) break;
        _ref = _iterator[_i2++];
      } else {
        _i2 = _iterator.next();
        if (_i2.done) break;
        _ref = _i2.value;
      }

      var child = _ref;

      var name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}

// Find components downward
function findComponentsDownward(context, componentName) {
  return context.$children.reduce(function (components, child) {
    if (child.$options.name === componentName) components.push(child);
    var foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

// Find components upward
function findComponentsUpward(context, componentName) {
  var parents = [];
  var parent = context.$parent;
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
}

// Find brothers components
function findBrothersComponents(context, componentName) {
  var exceptMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var res = context.$parent.$children.filter(function (item) {
    return item.$options.name === componentName;
  });
  var index = res.findIndex(function (item) {
    return item._uid === context._uid;
  });
  if (exceptMe) res.splice(index, 1);
  return res;
}

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

var dimensionMap = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
};

function setMatchMedia() {
  if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
      return {
        media: mediaQuery,
        matches: false,
        on: function on() {},
        off: function off() {}
      };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
  }
}

var sharpMatcherRegx = /#([^#]+)$/;
// CONCATENATED MODULE: ./src/utils/split/evt.js

var evt_isServer = external_vue_default.a.prototype.$isServer;

/* istanbul ignore next */
var on = function () {
  if (!evt_isServer && document.addEventListener) {
    return function (element, event, handler) {
      var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (element && event && handler) {
        element.addEventListener(event, handler, useCapture);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = function () {
  if (!evt_isServer && document.removeEventListener) {
    return function (element, event, handler) {
      var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (element && event) {
        element.removeEventListener(event, handler, useCapture);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/split/src/trigger.vue?vue&type=template&id=0b7534f8&
var triggervue_type_template_id_0b7534f8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.classes }, [
    _c("div", { class: _vm.barConClasses }, _vm._m(0), 0)
  ])
}
var triggervue_type_template_id_0b7534f8_staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _vm._l(8, function(i) {
      return _c("i", { key: "trigger-" + i, class: _vm.prefix + "-bar" })
    })
  }
]
triggervue_type_template_id_0b7534f8_render._withStripped = true


// CONCATENATED MODULE: ./packages/split/src/trigger.vue?vue&type=template&id=0b7534f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/split/src/trigger.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var triggervue_type_script_lang_js_ = ({
  name: 'Trigger',
  props: {
    mode: String
  },
  data: function data() {
    return {
      prefix: 'el-split-trigger',
      initOffset: 0
    };
  },

  computed: {
    isVertical: function isVertical() {
      return this.mode === 'vertical';
    },
    classes: function classes() {
      return [this.prefix, this.isVertical ? this.prefix + '-vertical' : this.prefix + '-horizontal'];
    },
    barConClasses: function barConClasses() {
      return [this.prefix + '-bar-con', this.isVertical ? 'vertical' : 'horizontal'];
    }
  }
});
// CONCATENATED MODULE: ./packages/split/src/trigger.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_triggervue_type_script_lang_js_ = (triggervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/split/src/trigger.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_triggervue_type_script_lang_js_,
  triggervue_type_template_id_0b7534f8_render,
  triggervue_type_template_id_0b7534f8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/split/src/trigger.vue"
/* harmony default export */ var trigger = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/split/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'ElSplit',
  components: {
    Trigger: trigger
  },
  props: {
    value: {
      type: [Number, String],
      default: 0.5
    },
    mode: {
      validator: function validator(value) {
        return oneOf(value, ['horizontal', 'vertical']);
      },

      default: 'horizontal'
    },
    min: {
      type: [Number, String],
      default: '40px'
    },
    max: {
      type: [Number, String],
      default: '40px'
    }
  },
  /**
   * Events
   * @on-move-start
   * @on-moving 返回值：事件对象，但是在事件对象中加入了两个参数：atMin(当前是否在最小值处), atMax(当前是否在最大值处)
   * @on-move-end
   */
  data: function data() {
    return {
      prefix: 'el-split',
      offset: 0,
      oldOffset: 0,
      isMoving: false,
      computedMin: 0,
      computedMax: 0,
      currentValue: 0.5
    };
  },

  computed: {
    wrapperClasses: function wrapperClasses() {
      return [this.prefix + '-wrapper', this.isMoving ? 'no-select' : ''];
    },
    paneClasses: function paneClasses() {
      var _ref;

      return [this.prefix + '-pane', (_ref = {}, _ref[this.prefix + '-pane-moving'] = this.isMoving, _ref)];
    },
    isHorizontal: function isHorizontal() {
      return this.mode === 'horizontal';
    },
    anotherOffset: function anotherOffset() {
      return 100 - this.offset;
    },
    valueIsPx: function valueIsPx() {
      return typeof this.value === 'string';
    },
    offsetSize: function offsetSize() {
      return this.isHorizontal ? 'offsetWidth' : 'offsetHeight';
    }
  },
  methods: {
    px2percent: function px2percent(numerator, denominator) {
      return parseFloat(numerator) / parseFloat(denominator);
    },
    getComputedThresholdValue: function getComputedThresholdValue(type) {
      var size = this.$refs.outerWrapper[this.offsetSize];
      if (this.valueIsPx) return typeof this[type] === 'string' ? this[type] : size * this[type];else return typeof this[type] === 'string' ? this.px2percent(this[type], size) : this[type];
    },
    getMin: function getMin(value1, value2) {
      if (this.valueIsPx) return Math.min(parseFloat(value1), parseFloat(value2)) + 'px';else return Math.min(value1, value2);
    },
    getMax: function getMax(value1, value2) {
      if (this.valueIsPx) return Math.max(parseFloat(value1), parseFloat(value2)) + 'px';else return Math.max(value1, value2);
    },
    getAnotherOffset: function getAnotherOffset(value) {
      var res = 0;
      if (this.valueIsPx) res = this.$refs.outerWrapper[this.offsetSize] - parseFloat(value) + 'px';else res = 1 - value;
      return res;
    },
    handleMove: function handleMove(e) {
      var pageOffset = this.isHorizontal ? e.pageX : e.pageY;
      var offset = pageOffset - this.initOffset;
      var outerWidth = this.$refs.outerWrapper[this.offsetSize];
      var value = this.valueIsPx ? parseFloat(this.oldOffset) + offset + 'px' : this.px2percent(outerWidth * this.oldOffset + offset, outerWidth);
      var anotherValue = this.getAnotherOffset(value);
      if (parseFloat(value) <= parseFloat(this.computedMin)) value = this.getMax(value, this.computedMin);
      if (parseFloat(anotherValue) <= parseFloat(this.computedMax)) value = this.getAnotherOffset(this.getMax(anotherValue, this.computedMax));
      e.atMin = this.value === this.computedMin;
      e.atMax = this.valueIsPx ? this.getAnotherOffset(this.value) === this.computedMax : this.getAnotherOffset(this.value).toFixed(5) === this.computedMax.toFixed(5);
      this.$emit('input', value);
      this.$emit('on-moving', e);
    },
    handleUp: function handleUp() {
      this.isMoving = false;
      off(document, 'mousemove', this.handleMove);
      off(document, 'mouseup', this.handleUp);
      this.$emit('on-move-end');
    },
    handleMousedown: function handleMousedown(e) {
      this.initOffset = this.isHorizontal ? e.pageX : e.pageY;
      this.oldOffset = this.value;
      this.isMoving = true;
      on(document, 'mousemove', this.handleMove);
      on(document, 'mouseup', this.handleUp);
      this.$emit('on-move-start');
    },
    computeOffset: function computeOffset() {
      var _this = this;

      this.$nextTick(function () {
        _this.computedMin = _this.getComputedThresholdValue('min');
        _this.computedMax = _this.getComputedThresholdValue('max');
        var value = _this.valueIsPx ? _this.px2percent(_this.value, _this.$refs.outerWrapper[_this.offsetSize]) : _this.value;
        var anotherValue = _this.getAnotherOffset(value);
        if (parseFloat(value) <= parseFloat(_this.computedMin)) value = _this.getMax(value, _this.computedMin);
        if (parseFloat(anotherValue) <= parseFloat(_this.computedMax)) value = _this.getAnotherOffset(_this.getMax(anotherValue, _this.computedMax));
        _this.offset = value * 10000 / 100;
        _this.currentValue = value;
        _this.$emit('input', value);
      });
    }
  },
  watch: {
    value: function value(val) {
      if (val !== this.currentValue) {
        this.currentValue = val;
        this.computeOffset();
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.computeOffset();
    });
    on(window, 'resize', this.computeOffset);
  },
  beforeDestroy: function beforeDestroy() {
    off(window, 'resize', this.computeOffset);
  }
});
// CONCATENATED MODULE: ./packages/split/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/split/src/main.vue





/* normalize component */

var main_component = Object(componentNormalizer["a" /* default */])(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var main_api; }
main_component.options.__file = "packages/split/src/main.vue"
/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./packages/split/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var split = __webpack_exports__["default"] = (main);

/***/ })

/******/ });