import React, {Fragment, Component} from 'react';
import {HorizontalForm} from './HorizontalForm';
import {TabPanel} from '@wordpress/components';
import { Row,Column } from '@calderawp/factory';

import PropTypes from 'prop-types';

export class Processor extends Component {


	state = {
		activeTab: 'settings',
	};

	onSetTab = (activeTab) => {
		this.setState({activeTab});
	};

	render() {
		const {onClose, onRemove} = this.props;
		return (
			<Fragment>
				<Row>
					<TabPanel
						className="caldera-processor"
						activeClass="active-tab"
						onSelect={this.onSetTab}
						initialTabName={'settings'}
						tabs={[
							{
								name: 'settings',
								title: 'Settings',
								className: 'caldera-processor-one',
							},
							{
								name: 'conditionals',
								title: 'Conditionals',
								className: 'caldera-processor-two',
							},
						]}>
						{
							(tab) => {
								const {name} = tab;
								if( 'settings' === name ){
									return <HorizontalForm {...this.props}/>
								}
								return <div>Conditionals</div>
							}


						}
					</TabPanel>
				</Row>
				<Row>
					<Column
						width={'1/2'}
					>
						<button
							onClick={onClose}
						>
							Close
						</button>
					</Column>
					<Column
						width={'1/2'}
					>
						<button
							onClick={onRemove}
						>
							Remove
						</button>
					</Column>
				</Row>
			</Fragment>
		)
	}
}

Processor.propTypes = {
	...HorizontalForm.propTypes,
	initialActiveTab: PropTypes.string,
	onRemove: PropTypes.func,
};
Processor.defaultProps = {
	...HorizontalForm.defaultProps,
	initialActiveTab: 'settings'
};
