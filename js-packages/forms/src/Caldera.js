import React, {Component} from 'react';
import {formClientFactory} from './components/Http/clientFactory'
import {updateRows} from './util/updateRows';
import {ConditionalState, collectFieldValues, applyRuleToState} from '@calderawp/factory';
import {CalderaForm} from './components/CalderaForm/CalderaForm';

export class Caldera extends Component {

	constructor(props) {
		super(props);
		let {
			initalValues,
			fieldsHidden,
			fieldsDisabled,
			apiRootUri,
			form
		} = props;
		const {rows, conditionals, fields} = form;
		fields.forEach(field => {
			if (!initalValues.hasOwnProperty(field.fieldId)) {
				initalValues[field.fieldId] = '';
			}
		});

		this.state = {
			conditionalState: new ConditionalState(
				initalValues,
				fieldsHidden || [],
				fieldsDisabled || []
			),
			rows,
			client: formClientFactory(form, apiRootUri),
			formRows: []

		}
	}

	componentDidMount = () => {
		this.setFormRows();
	};

	getConditionals = () => {
		return this.props.form.conditionals;
	};

	onChange = (values) => {
		const {client,conditionalState} = this.state;
		const conditionals = this.props.form.conditionals;
		const newState = conditionalState.setState(values);
		if (conditionals) {
			conditionals.forEach(conditionalRule => {
				applyRuleToState(conditionalRule, conditionalState)
			});
		}

		client.setFieldValues(conditionalState.getCurrentState());
	};

	setFormRows(){
		const {
			rows,
			conditionalState
		} = this.state;
		this.setState({formRows:updateRows(conditionalState,rows)});
	}


	render() {
		const {form} = this.props;
		const className = `${form.id} caldera-form caldera-form-${form.id}`;
		const {
			conditionalState,
			client,
			formRows
		} = this.state;
		return (
			<CalderaForm
				className={className}
				formRows={formRows}
				initialValues={conditionalState.getCurrentState()}
				onSubmit={client.submitForm}
				onChange={this.onChange}
			/>
		);
	}
}
