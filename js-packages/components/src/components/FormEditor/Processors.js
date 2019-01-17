import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Processor} from "./Processor";


export class Processors extends Component {


	state = {
		activeProcessorId: ''
	};

	setActive = (activeProcessorId) => {
		this.setState({activeProcessorId});
	};

	isActiveProcessor = (processorId) => {
		const {activeProcessorId} = this.state;
		return activeProcessorId && processorId === activeProcessorId;
	};

	handleProcessorChange = (processorId, updatedProcessor) => {
		const {processors,updateProcessors} = this.props;
		let processorIndex = processors.findIndex(processor => {
			return processorId === processor.id
		});
		if( -1 !== processorIndex ){
			let processor = processors[processorIndex];
			let update = [
				...processors.splice(processorIndex-1,1),
				{
					...processor,
					...updatedProcessor
				}
			];
			updateProcessors(update);
		}


	};

	handleRemoveProcessor = (processorId) => {
		const {processors,updateProcessors} = this.props;
		updateProcessors( [...processors.filter(processor => {
			return processorId !== processor.id
		})]);
	};

	render() {
		const {activeProcessor} = this.state;
		const {processors} = this.props;
		return (
			<div>
				<div>
					{processors.map(processor => {
						if (this.isActiveProcessor(processor.id)) {
							const {
								id,
								fields,
								config,
								type,
								label
							} = processor;
							return (
								<Fragment key={id}>
									<Processor
										fields={fields}
										initialValues={config}
										label={label}
										type={type}
										onChange={(fieldValues) => this.handleProcessorChange(id, fieldValues)}
										onRemove={() => this.handleRemoveProcessor(id)}
									/>
								</Fragment>
							)
						}
						return (
							<button
								onClick={() => this.setActive(processor.id)}
							>
								{processor.type}
							</button>
						)
					})}
				</div>
			</div>
		);
	}
}

Processors.propTypes = {
	processors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			label: PropTypes.string,
			type: PropTypes.string,
			fields: PropTypes.array,
			config: PropTypes.object
		})
	),
	updateProcessors: PropTypes.func,
	form: PropTypes.object,
	formFields: PropTypes.object
};

Processors.defaultProps = {
	processors: []
};
