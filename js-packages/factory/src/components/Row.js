import React, {Fragment} from 'react';
import {Fields} from './Fields';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Flex, Box} from '@rebass/grid'


/**
 * Render a row of fields with a shared onChange/onBlur event for all values
 * @param columns
 * @param onChange
 * @param onBlur
 * @param className
 * @param rowId
 * @return {*}
 * @constructor
 */
export const Row = ({
						columns, onChange, onBlur, className, rowId
					}) => (
	<Flex
		className={classNames('caldera-row', className)}
		id={rowId}
	>
		{columns.map(column => {
			let {
				width,
				padding,
				columnId,
				fields,
			} = column;

			padding = padding ? padding : 8;

			return (
				<Box
					key={columnId}
					id={columnId}
					width={width}
					px={padding}
					py={padding}
				>
					<Fields
						fields={fields}
						onChange={onChange}
						onBlur={onBlur}
					/>
				</Box>

			)
		})}
	</Flex>

);

/**
 * Row prop types
 *
 * @type {{columns: shim, rowId: *, onChange: *, onBlur: shim, className: shim}}
 */
export const rowPropTypes = {
	columns: PropTypes.arrayOf(PropTypes.shape({
		fields: PropTypes.array.isRequired,
		width: PropTypes.string.isRequired,
		columnId: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		])
		//input propTypes?
	})),
	rowId: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
	className: PropTypes.string
};
Row.propTypes = rowPropTypes;
