import React from 'react';
import PropTypes from 'prop-types';
import {Row,Column} from '@caldera-labs/factory'
export function Forms({
							 pageKey,
							 children
						 }) {
	return (
		<div>
			<Row>
				<Column width={2/3}>
					Column One
				</Column>
				<Column width={1/3}>
					Column Two
				</Column>
			</Row>
		</div>

	)


}

Forms.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	pageKey: PropTypes.string.isRequired,
}
