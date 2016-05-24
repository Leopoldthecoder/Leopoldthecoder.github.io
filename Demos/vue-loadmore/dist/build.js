/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/example/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	!function (e, n) {
	   true ? module.exports = n() : "function" == typeof define && define.amd ? define("Spinner", [], n) : "object" == typeof exports ? exports.Spinner = n() : e.Spinner = n()
	}(this, function () {
	  return function (e) {
	    function n(t) {
	      if (i[t])return i[t].exports;
	      var o = i[t] = {exports: {}, id: t, loaded: !1};
	      return e[t].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
	    }
	    
	    var i = {};
	    return n.m = e, n.c = i, n.p = "/dist/", n(0)
	  }([function (e, n, i) {
	    e.exports = i(21)
	  }, function (e, n, i) {
	    var t, o;
	    t = i(2), e.exports = t || {}, e.exports.__esModule && (e.exports = e.exports["default"]), o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
	  }, function (e, n) {
	    "use strict";
	    Object.defineProperty(n, "__esModule", {value: !0}), n["default"] = {
	      computed: {
	        spinnerColor: function () {
	          return this.color || this.$parent.color || "#ccc"
	        }, spinnerSize: function () {
	          return (this.size || this.$parent.size || 28) + "px"
	        }
	      }, props: {size: Number, color: String}
	    }
	  }, function (e, n) {
	    e.exports = '<div class=kebab-spinner-double-bounce :style="{\n    width: spinnerSize,\n    height: spinnerSize\n  }"> <div class=kebab-spinner-double-bounce-bounce1 :style="{ backgroundColor: spinnerColor }"></div> <div class=kebab-spinner-double-bounce-bounce2 :style="{ backgroundColor: spinnerColor }"></div> </div>'
	  }, function (e, n) {
	    e.exports = '<div class="kebab-spinner-fading-circle circle-color-{{_uid}}" :style="{\n    width: spinnerSize,\n    height: spinnerSize\n  }"> <style>.circle-color-{{_uid}} > div::before { background-color: {{ spinnerColor }}; }</style> <div class="is-circle1 kebab-spinner-fading-circle-circle"></div> <div class="is-circle2 kebab-spinner-fading-circle-circle"></div> <div class="is-circle3 kebab-spinner-fading-circle-circle"></div> <div class="is-circle4 kebab-spinner-fading-circle-circle"></div> <div class="is-circle5 kebab-spinner-fading-circle-circle"></div> <div class="is-circle6 kebab-spinner-fading-circle-circle"></div> <div class="is-circle7 kebab-spinner-fading-circle-circle"></div> <div class="is-circle8 kebab-spinner-fading-circle-circle"></div> <div class="is-circle9 kebab-spinner-fading-circle-circle"></div> <div class="is-circle10 kebab-spinner-fading-circle-circle"></div> <div class="is-circle11 kebab-spinner-fading-circle-circle"></div> <div class="is-circle12 kebab-spinner-fading-circle-circle"></div> </div>'
	  }, function (e, n) {
	    e.exports = "<div class=kebab-spinner-snake :style=\"{\n  'border-top-color': spinnerColor,\n  'border-left-color': spinnerColor,\n  'border-bottom-color': spinnerColor,\n  'height': spinnerSize,\n  'width': spinnerSize\n  }\"> </div>"
	  }, function (e, n) {
	    e.exports = "<div class=kebab-spinner-three-bounce> <div class=kebab-spinner-three-bounce-bounce1 :style=bounceStyle></div> <div class=kebab-spinner-three-bounce-bounce2 :style=bounceStyle></div> <div class=kebab-spinner-three-bounce-bounce3 :style=bounceStyle></div> </div>"
	  }, function (e, n, i) {
	    var t, o;
	    i(15), t = i(11), o = i(3), e.exports = t || {}, e.exports.__esModule && (e.exports = e.exports["default"]), o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
	  }, function (e, n, i) {
	    var t, o;
	    i(16), t = i(12), o = i(4), e.exports = t || {}, e.exports.__esModule && (e.exports = e.exports["default"]), o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
	  }, function (e, n, i) {
	    var t, o;
	    i(17), t = i(13), o = i(5), e.exports = t || {}, e.exports.__esModule && (e.exports = e.exports["default"]), o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
	  }, function (e, n, i) {
	    var t, o;
	    i(18), t = i(14), o = i(6), e.exports = t || {}, e.exports.__esModule && (e.exports = e.exports["default"]), o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
	  }, function (e, n, i) {
	    "use strict";
	    function t(e) {
	      return e && e.__esModule ? e : {"default": e}
	    }
	    
	    Object.defineProperty(n, "__esModule", {value: !0});
	    var o = i(1), r = t(o);
	    n["default"] = {name: "double-bounce", mixins: [r["default"]]}
	  }, function (e, n, i) {
	    "use strict";
	    function t(e) {
	      return e && e.__esModule ? e : {"default": e}
	    }
	    
	    Object.defineProperty(n, "__esModule", {value: !0});
	    var o = i(1), r = t(o);
	    n["default"] = {
	      name: "fading-circle", created: function () {
	        console.log(this)
	      }, mixins: [r["default"]]
	    }
	  }, function (e, n, i) {
	    "use strict";
	    function t(e) {
	      return e && e.__esModule ? e : {"default": e}
	    }
	    
	    Object.defineProperty(n, "__esModule", {value: !0});
	    var o = i(1), r = t(o);
	    n["default"] = {name: "snake", mixins: [r["default"]]}
	  }, function (e, n, i) {
	    "use strict";
	    function t(e) {
	      return e && e.__esModule ? e : {"default": e}
	    }
	    
	    Object.defineProperty(n, "__esModule", {value: !0});
	    var o = i(1), r = t(o);
	    n["default"] = {
	      name: "three-bounce", mixins: [r["default"]], computed: {
	        spinnerSize: function () {
	          return (this.size || this.$parent.size || 28) / 3 + "px"
	        }, bounceStyle: function () {
	          return {width: this.spinnerSize, height: this.spinnerSize, backgroundColor: this.spinnerColor}
	        }
	      }
	    }
	  }, function (e, n) {
	  }, function (e, n) {
	  }, function (e, n) {
	  }, function (e, n) {
	  }, function (e, n) {
	    e.exports = "<span><component :is=spinner></component></span>"
	  }, function (e, n, i) {
	    var t, o;
	    t = i(22), o = i(19), e.exports = t || {}, e.exports.__esModule && (e.exports = e.exports["default"]), o && (("function" == typeof e.exports ? e.exports.options || (e.exports.options = {}) : e.exports).template = o)
	  }, function (e, n, i) {
	    "use strict";
	    function t(e) {
	      return e && e.__esModule ? e : {"default": e}
	    }
	    
	    var o = i(20), r = t(o);
	    e.exports = {
	      Spinner: r["default"], install: function (e) {
	        e.component(r["default"].name, r["default"])
	      }
	    }
	  }, function (e, n, i) {
	    "use strict";
	    Object.defineProperty(n, "__esModule", {value: !0});
	    var t = ["snake", "double-bounce", "three-bounce", "fading-circle"], o = function (e) {
	      return "[object Number]" === {}.toString.call(e) ? (t.length <= e && (console.warn("'" + e + "' spinner not found, use the default spinner."), e = 0), t[e]) : (-1 === t.indexOf(e) && (console.warn("'" + e + "' spinner not found, use the default spinner."), e = t[0]), e)
	    };
	    n["default"] = {
	      name: "kb-spinner",
	      computed: {
	        spinner: function () {
	          return "spinner-" + o(this.type)
	        }
	      },
	      components: {SpinnerSnake: i(9), SpinnerDoubleBounce: i(7), SpinnerThreeBounce: i(10), SpinnerFadingCircle: i(8)},
	      props: {
	        type: {type: String, "default": 0},
	        size: {type: Number, "default": 28},
	        color: {type: String, "default": "#ccc"}
	      }
	    }
	  }])
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"kebab-loadmore\">\n  <div class=\"kebab-loadmore-content\" :class=\"{ 'is-dropped': topDropped || bottomDropped}\" :style=\"{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }\" v-el:loadmore-content>\n    <slot name=\"top\">\n      <div class=\"kebab-loadmore-top\">\n        <kb-spinner v-if=\"topStatus === 'loading'\" class=\"kebab-loadmore-spinner\" :size=\"20\" type=\"fading-circle\"></kb-spinner>\n        <span class=\"kebab-loadmore-text\">{{ topText }}</span>\n      </div>\n    </slot>\n    <slot></slot>\n    <slot name=\"down\">\n      <div class=\"kebab-loadmore-bottom\">\n        <kb-spinner v-if=\"bottomStatus === 'loading'\" class=\"kebab-loadmore-spinner\" :size=\"20\" type=\"fading-circle\"></kb-spinner>\n        <span class=\"kebab-loadmore-text\">{{ bottomText }}</span>\n      </div>\n    </slot>\n  </div>\n</div>\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/loadmore.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(3)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/yangyi/vue-loadmore/src/loadmore.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../usr/local/lib/node_modules/cooking/node_modules/css-loader/index.js!./../../../../usr/local/lib/node_modules/cooking/.cooking/node_modules/vue-loader/lib/style-rewriter.js!./../../../../usr/local/lib/node_modules/cooking/.cooking/node_modules/vue-loader/lib/selector.js?type=style&index=0!./loadmore.vue", function() {
				var newContent = require("!!./../../../../usr/local/lib/node_modules/cooking/node_modules/css-loader/index.js!./../../../../usr/local/lib/node_modules/cooking/.cooking/node_modules/vue-loader/lib/style-rewriter.js!./../../../../usr/local/lib/node_modules/cooking/.cooking/node_modules/vue-loader/lib/selector.js?type=style&index=0!./loadmore.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(8);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new Vue({
	  el: '#example1',
	  components: {
	    'loadmore': _src2.default
	  },

	  data: function data() {
	    return {
	      list: [],
	      allLoaded: false
	    };
	  },


	  methods: {
	    loadTop: function loadTop(id) {
	      var _this = this;

	      setTimeout(function () {
	        if (_this.list[0] === 1) {
	          for (var i = 0; i >= -10; i--) {
	            _this.list.unshift(i);
	          }
	        }
	        _this.$broadcast('onTopLoaded', id);
	      }, 1500);
	    },
	    loadBottom: function loadBottom(id) {
	      var _this2 = this;

	      setTimeout(function () {
	        var lastValue = _this2.list[_this2.list.length - 1];
	        if (lastValue < 40) {
	          for (var i = 1; i <= 10; i++) {
	            _this2.list.push(lastValue + i);
	          }
	        } else {
	          _this2.allLoaded = true;
	        }
	        _this2.$broadcast('onBottomLoaded', id);
	      }, 1500);
	    }
	  },

	  compiled: function compiled() {
	    for (var i = 1; i <= 20; i++) {
	      this.list.push(i);
	    }
	  }
	});

	new Vue({
	  el: '#example2',
	  components: {
	    'loadmore': _src2.default
	  },

	  data: function data() {
	    return {
	      list2: [],
	      topStatus: ''
	    };
	  },


	  methods: {
	    loadTop2: function loadTop2(id) {
	      var _this3 = this;

	      setTimeout(function () {
	        if (_this3.list2[0] === 1) {
	          for (var i = 0; i >= -10; i--) {
	            _this3.list2.unshift(i);
	          }
	        }
	        _this3.$broadcast('onTopLoaded', id);
	      }, 1500);
	    }
	  },

	  compiled: function compiled() {
	    for (var i = 1; i <= 20; i++) {
	      this.list2.push(i);
	    }
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _loadmore = __webpack_require__(4);

	var _loadmore2 = _interopRequireDefault(_loadmore);

	var _kbSpinner = __webpack_require__(2);

	var _kbSpinner2 = _interopRequireDefault(_kbSpinner);

	__webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.use(_kbSpinner2.default);
	exports.default = _loadmore2.default;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'kb-loadmore',
	  props: {
	    topPullText: {
	      type: String,
	      default: '下拉刷新'
	    },
	    topDropText: {
	      type: String,
	      default: '释放更新'
	    },
	    topLoadingText: {
	      type: String,
	      default: '加载中...'
	    },
	    topDistance: {
	      type: Number,
	      default: 70
	    },
	    topMethod: {
	      type: Function
	    },
	    topStatus: {
	      type: String,
	      default: ''
	    },
	    bottomPullText: {
	      type: String,
	      default: '上拉刷新'
	    },
	    bottomDropText: {
	      type: String,
	      default: '释放更新'
	    },
	    bottomLoadingText: {
	      type: String,
	      default: '加载中...'
	    },
	    bottomDistance: {
	      type: Number,
	      default: 70
	    },
	    bottomMethod: {
	      type: Function
	    },
	    bottomStatus: {
	      type: String,
	      default: ''
	    },
	    bottomAllLoaded: {
	      type: Boolean,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      uuid: null,
	      translate: 0,
	      scrollEventTarget: null,
	      containerFilled: false,
	      topText: '',
	      topDropped: false,
	      bottomText: '',
	      bottomDropped: false,
	      bottomReached: false,
	      direction: '',
	      startY: 0,
	      startScrollTop: 0,
	      currentY: 0
	    };
	  },


	  watch: {
	    topStatus: function topStatus(val) {
	      switch (val) {
	        case 'pull':
	          this.topText = this.topPullText;
	          break;
	        case 'drop':
	          this.topText = this.topDropText;
	          break;
	        case 'loading':
	          this.topText = this.topLoadingText;
	          break;
	      }
	    },
	    bottomStatus: function bottomStatus(val) {
	      switch (val) {
	        case 'pull':
	          this.bottomText = this.bottomPullText;
	          break;
	        case 'drop':
	          this.bottomText = this.bottomDropText;
	          break;
	        case 'loading':
	          this.bottomText = this.bottomLoadingText;
	          break;
	      }
	    }
	  },

	  events: {
	    onTopLoaded: function onTopLoaded(id) {
	      var _this = this;

	      if (id === this.uuid) {
	        this.translate = 0;
	        setTimeout(function () {
	          _this.topStatus = 'pull';
	        }, 200);
	      }
	    },
	    onBottomLoaded: function onBottomLoaded(id) {
	      var _this2 = this;

	      this.bottomStatus = 'pull';
	      this.bottomDropped = false;
	      if (id === this.uuid) {
	        this.$nextTick(function () {
	          if (_this2.scrollEventTarget === window) {
	            document.body.scrollTop += 50;
	          } else {
	            _this2.scrollEventTarget.scrollTop += 50;
	          }
	          _this2.translate = 0;
	        });
	      }
	      if (!this.bottomAllLoaded && !this.containerFilled) {
	        this.fillContainer();
	      }
	    }
	  },

	  methods: {
	    getScrollEventTarget: function getScrollEventTarget(element) {
	      var currentNode = element;
	      while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
	        var overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
	        if (overflowY === 'scroll' || overflowY === 'auto') {
	          return currentNode;
	        }
	        currentNode = currentNode.parentNode;
	      }
	      return window;
	    },
	    getScrollTop: function getScrollTop(element) {
	      if (element === window) {
	        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
	      } else {
	        return element.scrollTop;
	      }
	    },
	    bindTouchEvents: function bindTouchEvents() {
	      this.$el.addEventListener('touchstart', this.handleTouchStart);
	      this.$el.addEventListener('touchmove', this.handleTouchMove);
	      this.$el.addEventListener('touchend', this.handleTouchEnd);
	    },
	    init: function init() {
	      this.topStatus = 'pull';
	      this.bottomStatus = 'pull';
	      this.topText = this.topPullText;
	      this.scrollEventTarget = this.getScrollEventTarget(this.$el);
	      if (typeof this.bottomMethod === 'function') {
	        this.fillContainer();
	        this.bindTouchEvents();
	      }
	      if (typeof this.topMethod === 'function') {
	        this.bindTouchEvents();
	      }
	    },
	    fillContainer: function fillContainer() {
	      var _this3 = this;

	      this.$nextTick(function () {
	        if (_this3.scrollEventTarget === window) {
	          _this3.containerFilled = _this3.$el.getBoundingClientRect().bottom >= document.documentElement.getBoundingClientRect().bottom;
	        } else {
	          _this3.containerFilled = _this3.$el.getBoundingClientRect().bottom >= _this3.scrollEventTarget.getBoundingClientRect().bottom;
	        }
	        if (!_this3.containerFilled) {
	          _this3.bottomStatus = 'loading';
	          _this3.bottomMethod(_this3.uuid);
	        }
	      });
	    },
	    checkBottomReached: function checkBottomReached() {
	      if (this.scrollEventTarget === window) {
	        return document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight;
	      } else {
	        return this.$el.getBoundingClientRect().bottom === this.scrollEventTarget.getBoundingClientRect().bottom;
	      }
	    },
	    handleTouchStart: function handleTouchStart(event) {
	      this.startY = event.touches[0].clientY;
	      this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
	      this.bottomReached = false;
	      if (this.topStatus !== 'loading') {
	        this.topStatus = 'pull';
	        this.topDropped = false;
	      }
	      if (this.bottomStatus !== 'loading') {
	        this.bottomStatus = 'pull';
	        this.bottomDropped = false;
	      }
	    },
	    handleTouchMove: function handleTouchMove(event) {
	      if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
	        return;
	      }
	      this.currentY = event.touches[0].clientY;
	      var distance = this.currentY - this.startY;
	      this.direction = distance > 0 ? 'down' : 'up';
	      if (typeof this.topMethod === 'function' && this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
	        event.preventDefault();
	        event.stopPropagation();
	        this.translate = distance - this.startScrollTop;
	        if (this.translate < 0) {
	          this.translate = 0;
	        }
	        this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
	      }

	      if (this.direction === 'up') {
	        this.bottomReached = this.bottomReached || this.checkBottomReached();
	      }
	      if (typeof this.bottomMethod === 'function' && this.direction === 'up' && this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
	        event.preventDefault();
	        event.stopPropagation();
	        this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance;
	        if (this.translate > 0) {
	          this.translate = 0;
	        }
	        this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
	      }
	    },
	    handleTouchEnd: function handleTouchEnd() {
	      if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
	        this.topDropped = true;
	        if (this.topStatus === 'drop') {
	          this.translate = '50';
	          this.topStatus = 'loading';
	          this.topMethod(this.uuid);
	        } else {
	          this.translate = '0';
	          this.topStatus = 'pull';
	        }
	      }
	      if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
	        this.bottomDropped = true;
	        this.bottomReached = false;
	        if (this.bottomStatus === 'drop') {
	          this.translate = '-50';
	          this.bottomStatus = 'loading';
	          this.bottomMethod(this.uuid);
	        } else {
	          this.translate = '0';
	          this.bottomStatus = 'pull';
	        }
	      }
	      this.direction = '';
	    }
	  },

	  ready: function ready() {
	    this.uuid = Math.random().toString(36).substring(3, 8);
	    this.init();
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".kebab-spinner-snake{-webkit-animation:kebab-spinner-rotate .8s infinite linear;animation:kebab-spinner-rotate .8s infinite linear;border:4px solid transparent;border-radius:50%}@-webkit-keyframes kebab-spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes kebab-spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.kebab-spinner-double-bounce{position:relative}.kebab-spinner-double-bounce-bounce1, .kebab-spinner-double-bounce-bounce2{width:100%;height:100%;border-radius:50%;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:kebab-spinner-double-bounce 2s infinite ease-in-out;animation:kebab-spinner-double-bounce 2s infinite ease-in-out}.kebab-spinner-double-bounce-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes kebab-spinner-double-bounce{0%, to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes kebab-spinner-double-bounce{0%, to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.kebab-spinner-three-bounce-bounce1, .kebab-spinner-three-bounce-bounce2, .kebab-spinner-three-bounce-bounce3{border-radius:100%;display:inline-block;-webkit-animation:kebab-spinner-three-bounce 1.4s infinite ease-in-out both;animation:kebab-spinner-three-bounce 1.4s infinite ease-in-out both}.kebab-spinner-three-bounce-bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s;-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes kebab-spinner-three-bounce{0%, 80%, to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes kebab-spinner-three-bounce{0%, 80%, to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.kebab-spinner-fading-circle{position:relative}.kebab-spinner-fading-circle-circle{width:100%;height:100%;position:absolute;left:0;top:0}.kebab-spinner-fading-circle-circle:before{content:\" \";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;-webkit-animation:kebab-fading-circle 1.2s infinite ease-in-out both;animation:kebab-fading-circle 1.2s infinite ease-in-out both}.kebab-spinner-fading-circle-circle.is-circle2{-webkit-transform:rotate(59deg);transform:rotate(59deg)}.kebab-spinner-fading-circle-circle.is-circle2:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.kebab-spinner-fading-circle-circle.is-circle3{-webkit-transform:rotate(89deg);transform:rotate(89deg)}.kebab-spinner-fading-circle-circle.is-circle3:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.kebab-spinner-fading-circle-circle.is-circle4{-webkit-transform:rotate(119deg);transform:rotate(119deg)}.kebab-spinner-fading-circle-circle.is-circle4:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.kebab-spinner-fading-circle-circle.is-circle5{-webkit-transform:rotate(149deg);transform:rotate(149deg)}.kebab-spinner-fading-circle-circle.is-circle5:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.kebab-spinner-fading-circle-circle.is-circle6{-webkit-transform:rotate(179deg);transform:rotate(179deg)}.kebab-spinner-fading-circle-circle.is-circle6:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.kebab-spinner-fading-circle-circle.is-circle7{-webkit-transform:rotate(209deg);transform:rotate(209deg)}.kebab-spinner-fading-circle-circle.is-circle7:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.kebab-spinner-fading-circle-circle.is-circle8{-webkit-transform:rotate(239deg);transform:rotate(239deg)}.kebab-spinner-fading-circle-circle.is-circle8:before{-webkit-animation-delay:-1s;animation-delay:-1s}.kebab-spinner-fading-circle-circle.is-circle9{-webkit-transform:rotate(269deg);transform:rotate(269deg)}.kebab-spinner-fading-circle-circle.is-circle9:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.kebab-spinner-fading-circle-circle.is-circle10{-webkit-transform:rotate(299deg);transform:rotate(299deg)}.kebab-spinner-fading-circle-circle.is-circle10:before{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.kebab-spinner-fading-circle-circle.is-circle11{-webkit-transform:rotate(329deg);transform:rotate(329deg)}.kebab-spinner-fading-circle-circle.is-circle11:before{-webkit-animation-delay:-1.3s;animation-delay:-1.3s}.kebab-spinner-fading-circle-circle.is-circle12{-webkit-transform:rotate(359deg);transform:rotate(359deg)}.kebab-spinner-fading-circle-circle.is-circle12:before{-webkit-animation-delay:-1.4s;animation-delay:-1.4s}@-webkit-keyframes kebab-fading-circle{0%, 39%, to{opacity:0}40%{opacity:1}}@keyframes kebab-fading-circle{0%, 39%, to{opacity:0}40%{opacity:1}}", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, "\n.kebab-loadmore {\n    overflow: hidden\n}\n.kebab-loadmore-content {}\n.kebab-loadmore-content.is-dropped {\n    -webkit-transition: .2s;\n    transition: .2s\n}\n.kebab-loadmore-top, .kebab-loadmore-bottom {\n    text-align: center;\n    height: 50px;\n    line-height: 50px\n}\n.kebab-loadmore-top {\n    margin-top: -50px\n}\n.kebab-loadmore-bottom {\n    margin-bottom: -50px\n}\n.kebab-loadmore-spinner {\n    display: inline-block;\n    margin-right: 5px;\n    vertical-align: middle\n}\n.kebab-loadmore-text {\n    vertical-align: middle\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../usr/local/lib/node_modules/cooking/node_modules/css-loader/index.js!./../../../../../../../usr/local/lib/node_modules/cooking/.cooking/node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../../../usr/local/lib/node_modules/cooking/node_modules/css-loader/index.js!./../../../../../../../usr/local/lib/node_modules/cooking/.cooking/node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }
/******/ ]);