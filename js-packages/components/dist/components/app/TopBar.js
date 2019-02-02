'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TopBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LogoCalderaWPDarkBG = require('./logos/Logo-CalderaWP-DarkBG.svg');

var _LogoCalderaWPDarkBG2 = _interopRequireDefault(_LogoCalderaWPDarkBG);

var _IconCalderaWPDarkBG = require('./logos/icons/Icon-CalderaWP-DarkBG.svg');

var _IconCalderaWPDarkBG2 = _interopRequireDefault(_IconCalderaWPDarkBG);

var _LogoCalderaFormsDarkBG = require('./logos/Logo-CalderaForms-DarkBG.svg');

var _LogoCalderaFormsDarkBG2 = _interopRequireDefault(_LogoCalderaFormsDarkBG);

var _IconCalderaFormsDarkBGAlt = require('./logos/icons/Icon-CalderaForms-DarkBG-Alt.svg');

var _IconCalderaFormsDarkBGAlt2 = _interopRequireDefault(_IconCalderaFormsDarkBGAlt);

var _LogoCalderaPayDarkBG = require('./logos/Logo-CalderaPay-DarkBG.svg');

var _LogoCalderaPayDarkBG2 = _interopRequireDefault(_LogoCalderaPayDarkBG);

var _IconCalderaPayDarkBGAlt = require('./logos/icons/Icon-CalderaPay-DarkBG-Alt.svg');

var _IconCalderaPayDarkBGAlt2 = _interopRequireDefault(_IconCalderaPayDarkBGAlt);

var _LogoCalderaSocialDarkBG = require('./logos/Logo-CalderaSocial-DarkBG.svg');

var _LogoCalderaSocialDarkBG2 = _interopRequireDefault(_LogoCalderaSocialDarkBG);

var _IconSocialDarkBGAlt = require('./logos/icons/Icon-Social-DarkBG-Alt.svg');

var _IconSocialDarkBGAlt2 = _interopRequireDefault(_IconSocialDarkBGAlt);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var merge = require('deepmerge');

var TopBar = exports.TopBar = function (_Component) {
	_inherits(TopBar, _Component);

	function TopBar() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TopBar);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			activeItem: 'home'
		}, _this.menuItems = [{
			key: 'home',
			title: 'CalderaWP',
			icon: _IconCalderaWPDarkBG2.default,
			logo: _LogoCalderaWPDarkBG2.default
		}, {
			key: 'calderaForms',
			title: 'Caldera Forms',
			icon: _IconCalderaFormsDarkBGAlt2.default,
			logo: _LogoCalderaFormsDarkBG2.default
		}, {
			key: 'calderaPay',
			title: 'Caldera Pay',
			icon: _IconCalderaPayDarkBGAlt2.default,
			logo: _LogoCalderaPayDarkBG2.default
		}, {
			key: 'calderaSocial',
			title: 'Caldera Social',
			icon: _IconSocialDarkBGAlt2.default,
			logo: _LogoCalderaSocialDarkBG2.default
		}], _this.styles = merge({
			header: {
				height: 54,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				padding: 8,
				backgroundColor: '#333333',
				color: '#ffffff'
			},
			heading: {
				fontSize: 20,
				fontWeight: 'normal'
			}
		}, _this.props.styles || {}), _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TopBar, [{
		key: 'setActive',
		value: function setActive(activeItem) {
			this.props.onChangeActive(activeItem);
			this.setState({ activeItem: activeItem });
		}
	}, {
		key: 'activeItem',
		value: function activeItem() {
			var _this2 = this;

			return this.menuItems.find(function (item) {
				return _this2.state.activeItem === item.key;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var activeItem = this.activeItem();

			return _react2.default.createElement(
				'div',
				{ style: this.styles.header },
				_react2.default.createElement('img', {
					key: 'active-item',
					style: {
						width: '200px',
						height: '75px',
						padding: '15px'
					},
					src: activeItem.logo,
					alt: activeItem.title + ' Logo'
				}),
				_react2.default.createElement(
					'nav',
					{ key: 'main-nav' },
					this.menuItems.map(function (menuItem) {
						var icon = menuItem.icon,
						    title = menuItem.title,
						    key = menuItem.key;

						if (activeItem.key === key) {
							return _react2.default.createElement(_react.Fragment, { key: key });
						}
						return _react2.default.createElement(
							'a',
							{
								key: key,
								onClick: function onClick() {
									_this3.setActive(key);
								}
							},
							_react2.default.createElement('img', {
								style: {
									width: '200px',
									height: '75px',
									padding: '15px'
								},
								src: icon,
								alt: title + ' Icon'
							})
						);
					})
				)
			);
		}
	}]);

	return TopBar;
}(_react.Component);

TopBar.propTypes = {
	onChangeActive: _propTypes2.default.func
};
var noop = function noop() {};

TopBar.defaultProps = {
	onChangeActive: noop
};