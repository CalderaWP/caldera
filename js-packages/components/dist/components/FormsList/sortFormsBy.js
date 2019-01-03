'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var sortBy = require('lodash.sortby');
/**
 * Sort forms by a key of the form's config
 * @param {String} sortFormsBy Key to sort by
 * @param {Object} forms Forms to sort
 */
var sortFormsBy = exports.sortFormsBy = function sortFormsBy(_sortFormsBy, forms) {
	var sortedArray = sortBy(Object.values(forms), [function (form) {
		return form[_sortFormsBy];
	}]);
	var sortedForms = {};
	sortedArray.forEach(function (sortedForm) {
		sortedForms[sortedForm.ID] = sortedForm;
	});

	return sortedForms;
};