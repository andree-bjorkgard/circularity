'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _monolithic = require('cxs/monolithic');

var _monolithic2 = _interopRequireDefault(_monolithic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = {
  link: {
    path: {
      transition: 'fill 200ms ease',
      ':hover': {
        fill: '#30C0FF'
      }
    }
  }
};

var getPieData = function getPieData(radius, startAngle, endAngle) {
  // Radius is always gonna be the same as the center of the cirle
  var x1 = radius + radius * Math.cos(Math.PI * (startAngle / 180));
  var y1 = radius + radius * Math.sin(Math.PI * (startAngle / 180));
  var x2 = radius + radius * Math.cos(Math.PI * (endAngle / 180));
  var y2 = radius + radius * Math.sin(Math.PI * (endAngle / 180));

  return 'M' + radius + ',' + radius + ' L' + x1 + ',' + y1 + ' A' + radius + ',' + radius + ' 0 0 1 ' + x2 + ',' + y2 + ' z';
};

var RadialItem = function RadialItem(_ref) {
  var item = _ref.item,
      radius = _ref.radius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle;
  return _react2.default.createElement(
    'a',
    { className: (0, _monolithic2.default)(s.link), href: item.route },
    _react2.default.createElement('path', { d: getPieData(radius, startAngle, endAngle), fill: '#E0E0E0', stroke: '#cecece', strokeWidth: '1' })
  );
};

RadialItem.propTypes = {
  item: _react2.default.PropTypes.object,
  radius: _react2.default.PropTypes.number,
  startAngle: _react2.default.PropTypes.number,
  endAngle: _react2.default.PropTypes.number
};

exports.default = RadialItem;