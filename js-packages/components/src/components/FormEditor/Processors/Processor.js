import React, { Fragment, Component } from 'react';
import { HorizontalForm } from '../../HorizontalForm/HorizontalForm';
import { TabPanel } from '@wordpress/components';
import { Row, Column } from '@calderawp/factory';

import PropTypes from 'prop-types';

export class Processor extends Component {
	state = {
		activeTab: 'settings'
	};

	onSetTab = activeTab => {
		this.setState({ activeTab });
	};

	tabs = [
		{
			name: 'settings',
			title: 'Settings',
			className: 'caldera-processor-settings-tab-btn'
		},
		{
			name: 'conditionals',
			title: 'Conditionals',
			className:
				'caldera-processor-conditionals-tab-btn'
		}
	];
	render() {
		const { onClose, onRemove } = this.props;
		return (
			<Fragment>
				<Row>
					<TabPanel
						className="caldera-processor"
						activeClass="active-tab"
						onSelect={this.onSetTab}
						initialTabName={'settings'}
						tabs={this.tabs}
					>
						{() => {
							const {activeTab} = this.state;
							const tab =  this.tabs.find( t => t.name === activeTab );
							const { name } = tab;
							if ('settings' === name) {
								return (
									<HorizontalForm
										{...this.props}
										className={'caldera-processor-settings'}
									/>
								);
							}
							return (
								<div
									className={'caldera-processor-conditionals'}
								>
									Conditionals
								</div>
							);
						}}
					</TabPanel>
				</Row>
				<Row>
					<Column width={'1/2'}>
						<button
							className={'caldera-processor-close'}
							onClick={onClose}>
							Close
						</button>
					</Column>
					<Column width={'1/2'}>
						<button
							className={'caldera-processor-remove'}
							onClick={onRemove}>
							Remove
						</button>
					</Column>
				</Row>
			</Fragment>
		);
	}
}

//should have label!
Processor.propTypes = {
	...HorizontalForm.propTypes,
	initialActiveTab: PropTypes.string,
	onRemove: PropTypes.func,
	type: PropTypes.string,
	id: PropTypes.string,
};

Processor.defaultProps = {
	...HorizontalForm.defaultProps,
	initialActiveTab: 'settings'
};
