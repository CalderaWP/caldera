import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Processor} from "./Processor";

export class Processors extends Component {

	state = {
		activeProcessorId: ''
	};

	/**
	 * Set which processor is active
	 * @param activeProcessorId
	 */
	setActive = (activeProcessorId) => {
		this.setState({activeProcessorId});
	};

	/**
	 * Check if a processor is active by ID
	 * @param processorId
	 * @return {string|boolean}
	 */
	isActiveProcessor = (processorId) => {
		const {activeProcessorId} = this.state;
		return activeProcessorId && processorId === activeProcessorId;
	};

	/**
	 * When a change in value for a processor is received, send all processors up.
	 *
	 * @param processorId
	 * @param updatedProcessor
	 */
	handleProcessorChange = (processorId, updatedProcessor) => {
		const {processors, updateProcessors} = this.props;
		let processorIndex = processors.findIndex(processor => {
			return processorId === processor.id
		});
		if (-1 !== processorIndex) {
			let processor = processors[processorIndex];
			let update = [
				...processors.splice(processorIndex - 1, 1),
				{
					...processor,
					...updatedProcessor
				}
			];
			updateProcessors(update);
		}


	};

	/**
	 * When a processor is removed, send updated list to change handler.
	 *
	 * @param processorId
	 */
	handleRemoveProcessor = (processorId) => {
		const {processors, updateProcessors} = this.props;
		updateProcessors([...processors.filter(processor => {
			return processorId !== processor.id
		})]);
	};

	/** @inheritDoc **/
	render() {
		const {activeProcessor} = this.state;
		const {processors} = this.props;
		return (
			<div>
				<div>
					{processors.map(processor => {
						const {
							id,
							fields,
							config,
							type,
							label
						} = processor;
						if (this.isActiveProcessor(id)) {

							return (
								<Fragment key={id}>
									<Processor
										className={`caldera-forms-active-processor-${id}`}
										fields={fields}
										initialValues={config}
										label={label}
										type={type}
										onChange={(fieldValues) => this.handleProcessorChange(id, fieldValues)}
										onRemove={() => this.handleRemoveProcessor(id)}
										onClose={() => this.setActive('')}
									/>
								</Fragment>
							)
						}
						return (
							<Fragment>
								<button
									className={`caldera-forms-choose-processor caldera-forms-choose-processor-${id}`}
									onClick={() => this.setActive(id)}
								>
									{label ? label : type}
								</button>
							</Fragment>

						)
					})}
				</div>
			</div>
		);
	}
}

export const processorsCollectionPropType = PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.string,
		label: PropTypes.string,
		type: PropTypes.string,
		fields: PropTypes.array,
		config: PropTypes.object
	})
);

Processors.propTypes = {
	processors: processorsCollectionPropType,
	updateProcessors: PropTypes.func,
	form: PropTypes.object,
	formFields: PropTypes.object
};

Processors.defaultProps = {
	processors: []
};
