'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollBarAlwaysShow;

var _getScrollbarWidth = require('./getScrollbarWidth');

function scrollBarAlwaysShow() {
  return !!(0, _getScrollbarWidth.actualBarWidth)();
}