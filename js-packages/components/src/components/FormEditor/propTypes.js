import PropTypes from "prop-types";

export const processorTypesPropType = PropTypes.arrayOf(PropTypes.shape({
	type: PropTypes.string,
}));
