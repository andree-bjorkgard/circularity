'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _monolithic = require('cxs/monolithic');

var _monolithic2 = _interopRequireDefault(_monolithic);

var _RadialItem = require('./RadialItem');

var _RadialItem2 = _interopRequireDefault(_RadialItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = {
  innerCircle: {
    fill: '#fff',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#404040',
    h3: {
      letterSpacing: '1px',
      fontWeight: 300
    }
  }
};

var getItems = function getItems(items, diameter) {
  var initialAngle = -90;
  var angle = 1 / items.length * 360;
  var radius = diameter / 2;

  return items.map(function (item, index) {
    return _react2.default.createElement(_RadialItem2.default, { key: index, item: item, radius: radius, startAngle: angle * index + initialAngle, endAngle: angle * index + angle + initialAngle });
  });
};

var RadialMenu = function RadialMenu(_ref) {
  var items = _ref.items,
      diameter = _ref.diameter;
  return _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: diameter, height: diameter },
    getItems(items, diameter),
    _react2.default.createElement('circle', { className: (0, _monolithic2.default)(s.innerCircle), cx: diameter / 2, cy: diameter / 2, r: diameter / 2 * 0.57 })
  );
};

RadialMenu.propTypes = {
  items: _react2.default.PropTypes.array,
  diameter: _react2.default.PropTypes.number
};

exports.default = RadialMenu;