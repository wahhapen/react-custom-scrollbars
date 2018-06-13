'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actualBarWidth = actualBarWidth;
exports.default = getScrollbarWidth;

var _domCss = require('dom-css');

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollbarWidth = false;

function actualBarWidth() {
  var result = 0;
  /* istanbul ignore else */
  if (typeof document !== 'undefined') {
    var div = document.createElement('div');
    (0, _domCss2.default)(div, {
      width: 100,
      height: 100,
      position: 'absolute',
      top: -9999,
      overflow: 'scroll',
      MsOverflowStyle: 'scrollbar'
    });
    document.body.appendChild(div);
    result = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }
  return result;
}

function getScrollbarWidth() {
  if (scrollbarWidth !== false) return scrollbarWidth;
  return scrollbarWidth = actualBarWidth() || 20;
}