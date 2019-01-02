import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export function PageBody({
							 pageKey,
							 children
						 }) {
	return (
		<div className={classNames('caldera-page-body', `caldera-page-body-${pageKey}`)}>{children}</div>

	)


}

PageBody.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	pageKey: PropTypes.string.isRequired,
}
