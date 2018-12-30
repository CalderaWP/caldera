/**
 *
 * @param {Object} attributes
 * @param {Array} allowed
 */
export const parseAttributes = ( attributes, allowed ) => {
	return require('lodash.pick')(attributes,allowed);
};
