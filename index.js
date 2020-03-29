"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parse = _interopRequireWildcard(require("./parse"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  parse: _parse["default"],
  match: _parse.match
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.match = void 0;
var regex = /^#?([0-9A-Fa-f]{2})?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/; // a simple test without capturing

var match = function match(color) {
  return !!color.match(regex);
}; // captures hex values into an RGB object


exports.match = match;

var parse = function parse(color) {
  var captures = color.match(regex);

  if (!captures || captures.length !== 5) {
    return null;
  }

  var r = parseInt(captures[2], 16);
  var g = parseInt(captures[3], 16);
  var b = parseInt(captures[4], 16);
  var a = captures[1] ? parseInt(captures[1], 16) : 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
};

var _default = parse;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isLuminous", {
  enumerable: true,
  get: function get() {
    return _luminance["default"];
  }
});

var _luminance = _interopRequireDefault(require("./luminance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parser = _interopRequireDefault(require("./parser"));

var _options = require("./options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var calculate = function calculate(color) {
  var colorArray = [color.r / 255, color.g / 255, color.b / 255].map(function (v) {
    if (v <= 0.03928) {
      return v / 12.92;
    }

    return Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * colorArray[0] + 0.7152 * colorArray[1] + 0.0722 * colorArray[2];
};

var isLuminous = function isLuminous(color, options) {
  var override = (0, _options.isOverriden)(color, options);

  if (override !== null) {
    return !!override;
  }

  var rgba = (0, _parser["default"])(color);

  if (!rgba) {
    return false;
  } // alpha is luminance


  if (rgba.a <= 75) {
    return true;
  }

  return calculate(rgba) > 0.170;
};

var _default = isLuminous;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOverriden = void 0;

var isOverriden = function isOverriden(color, options) {
  if (!options || !options.override) {
    return null;
  }

  var normalizedColor = color.toLowerCase();
  var overrideColors = Object.keys(options.override);
  var option = overrideColors.find(function (k) {
    return k.toLowerCase() === normalizedColor;
  });
  return option ? !!options.override[option] : null;
};

exports.isOverriden = isOverriden;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hex = _interopRequireDefault(require("./hex"));

var _rgb = _interopRequireDefault(require("./rgb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var parsers = [_hex["default"].parse, _rgb["default"].parse];

var parse = function parse(color) {
  var _iterator = _createForOfIteratorHelper(parsers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var parser = _step.value;
      var result = parser(color);

      if (result !== null) {
        return result;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
};

var _default = parse;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parse = _interopRequireWildcard(require("./parse"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  parse: _parse["default"],
  match: _parse.match
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.match = void 0;
// handles rgb bytes between 0-255 with additional alpha floating point format between 0-1
var regex = /^(?:rgba?)?\s*\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*(?:,\s*((?:[01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])|0*\.\d+|1\.0+)\s*)?\)$/;
var alphaRegex = /^0+\.?\d*$|^1\.?0*$|^\.\d+$/; // a simple test for an RGB string without capturing

var match = function match(color) {
  return !!color.match(regex);
};

exports.match = match;

var parseAlpha = function parseAlpha(value) {
  if (value.match(alphaRegex)) {
    return Math.floor(parseFloat(value) * 255);
  }

  return parseInt(value);
}; // parses rgb string into and RGB object


var parse = function parse(color) {
  var captures = color.match(regex);

  if (!captures || captures.length !== 5) {
    return null;
  }

  var r = parseInt(captures[1]);
  var g = parseInt(captures[2]);
  var b = parseInt(captures[3]);
  var a = captures[4] ? parseAlpha(captures[4]) : 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
};

var _default = parse;
exports["default"] = _default;
"use strict";
"use strict";
"use strict";
