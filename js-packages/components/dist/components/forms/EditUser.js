'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EditUser = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formik = require('formik');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EditUserDialog.js
var EditUser = exports.EditUser = function EditUser(_ref) {
	var user = _ref.user,
	    updateUser = _ref.updateUser;

	var validateEmail = function validateEmail(value) {
		var errorMessage = void 0;
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			errorMessage = 'Invalid email address';
		}
		return errorMessage;
	};
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'Edit User'
		),
		_react2.default.createElement(_formik.Formik, {
			initialValues: { name: '', friends: ['jared', 'ian', 'brent'] },
			onSubmit: function onSubmit(values, actions) {
				setTimeout(function () {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);
			},
			render: function render(_ref2) {
				var values = _ref2.values,
				    errors = _ref2.errors,
				    status = _ref2.status,
				    touched = _ref2.touched,
				    isSubmitting = _ref2.isSubmitting;
				return _react2.default.createElement(
					_formik.Form,
					null,
					_react2.default.createElement(_formik.Field, { name: 'name', type: 'text', required: true }),
					_react2.default.createElement(_formik.Field, {
						validate: validateEmail,
						name: 'email',
						type: 'email'
					}),
					_react2.default.createElement(_formik.FieldArray, {
						name: 'friends',
						render: function render(arrayHelpers) {
							return _react2.default.createElement(
								'div',
								null,
								values.friends && values.friends.length > 0 ? values.friends.map(function (friend, index) {
									return _react2.default.createElement(
										'div',
										{ key: index },
										errors && errors.friends && errors.friends[index] && touched.friends[index] ? _react2.default.createElement(
											'div',
											null,
											errors.friends[index]
										) : null,
										_react2.default.createElement(_formik.Field, {
											name: 'friends.' + index,
											validate: validateEmail
										}),
										_react2.default.createElement(
											'button',
											{
												type: 'button',
												onClick: function onClick() {
													return arrayHelpers.remove(index);
												} // remove a friend from the list
											},
											'-'
										),
										_react2.default.createElement(
											'button',
											{
												type: 'button',
												onClick: function onClick() {
													return arrayHelpers.insert(index, '');
												} // insert an empty string at a position
											},
											'+'
										)
									);
								}) : _react2.default.createElement(
									'button',
									{
										type: 'button',
										onClick: function onClick() {
											return arrayHelpers.push('');
										}
									},
									'Add a friend'
								)
							);
						}
					}),
					_react2.default.createElement(
						'button',
						{ type: 'submit', disabled: isSubmitting },
						'Submit'
					)
				);
			}
		})
	);
};