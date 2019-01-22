import {ConditionalState} from './state/ConditionalState';
import PropTypes from 'prop-types';
import React, { isValidElement, createElement, Fragment, Component} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {updateRows} from './util/updateRows';
import { collectFieldValues } from '@calderawp/factory';
import {applyRuleToState} from './state/applyRule';

import { CalderaGrid } from './CalderaGrid';


export class CalderaForm extends Component {
	state = {
		formRows: [],
		initialValues: {},
		conditionalState: null
	};

	onChange = (values) => {
		console.log(values);
		const {fields,rows,conditionals} = this.props.form;
		if( conditionals && conditionals.length ){
			const {conditionalState} = this.state;
			conditionalState.setState(value);
			conditionals.forEach( rule => {
				applyRuleToState(rule,conditionalState)
			});
			this.setState({
				formRows: updateRows(conditionalState,rows,fields)
			});
			this.props.onChange(conditionalState.getState());
		}else{
			this.props.onChange(values);
		}

	};

	componentDidMount(){
		const {fields,rows} = this.props.form;
		const intialValues = collectFieldValues(fields );
		const conditionalState = this.state.conditionalState ? this.state.conditionalState : new ConditionalState(intialValues);
		const formRows = updateRows( conditionalState,rows,fields );
		this.setState({intialValues,formRows})
	}


	render(){
		const {onSubmit} = this.props;
		const {formRows,initialValues} = this.state;


		return (
			<div>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					render={({
								 errors,
								 status,
								 touched,
								 isSubmitting,
								 handleChange,
								 handleBlur,
								 setFieldValue,
								 values
							 }) => (
						<Form>
							<CalderaGrid
								rows={formRows}
								onAnyChange={this.onChange}
								onAnyBlur={handleBlur}
								fieldValues={values}
								setFieldValue={setFieldValue}
								fieldErrors={errors}
								fieldTouched={touched}
							/>
							<input
								type="submit"
								className={'caldera-forms-submit'}
								disabled={isSubmitting}
								value={'Click Button'}
							/>
						</Form>
					)}
				/>
			</div>
		);
	}

}

CalderaForm.propTypes = {
	ConditionalState: PropTypes.instanceOf(ConditionalState),
	form: PropTypes.object,
	onSubmit: PropTypes.func,
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};

const noop = () => {};
CalderaForm.defaultProps = {
	onChange: noop,
	onBlur: noop
};
