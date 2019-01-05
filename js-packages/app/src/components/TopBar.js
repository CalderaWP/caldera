import React, { Component, Fragment } from 'react';
import calderaWpLogo from './logos/Logo-CalderaWP-DarkBG.svg';
import calderaWpIcon from './logos/icons/Icon-CalderaWP-DarkBG.svg';

import calderaFormsLogo from './logos/Logo-CalderaForms-DarkBG.svg';
import calderaFormsIcon from './logos/icons/Icon-CalderaForms-DarkBG-Alt.svg';

import calderaPayLogo from './logos/Logo-CalderaPay-DarkBG.svg';
import calderaPayIcon from './logos/icons/Icon-CalderaPay-DarkBG-Alt.svg';

import calderaSocialLogo from './logos/Logo-CalderaSocial-DarkBG.svg';
import calderaSocialIcon from './logos/icons/Icon-Social-DarkBG-Alt.svg';

import PropTypes from 'prop-types';
const merge = require('deepmerge');

export class TopBar extends Component {
	state = {
		activeItem: 'home'
	};

	menuItems = [
		{
			key: 'home',
			title: 'CalderaWP',
			icon: calderaWpIcon,
			logo: calderaWpLogo
		},
		{
			key: 'calderaForms',
			title: 'Caldera Forms',
			icon: calderaFormsIcon,
			logo: calderaFormsLogo
		},
		{
			key: 'calderaPay',
			title: 'Caldera Pay',
			icon: calderaPayIcon,
			logo: calderaPayLogo
		},
		{
			key: 'calderaSocial',
			title: 'Caldera Social',
			icon: calderaSocialIcon,
			logo: calderaSocialLogo
		}
	];

	styles = merge(
		{
			header: {
				height: 54,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				padding: 8,
				backgroundColor: '#333333',
				color: '#ffffff'
			},
			heading: {
				fontSize: 20,
				fontWeight: 'normal'
			}
		},
		this.props.styles || {}
	);

	setActive(activeItem) {
		this.props.onChangeActive(activeItem);
		this.setState({ activeItem });
	}

	activeItem() {
		return this.menuItems.find(item => this.state.activeItem === item.key);
	}

	render() {
		const activeItem = this.activeItem();

		return (
			<div style={this.styles.header}>
				<img
					key={'active-item'}
					style={{
						width: '200px',
						height: '75px',
						padding: '15px'
					}}
					src={activeItem.logo}
					alt={`${activeItem.title} Logo`}
				/>

				<nav
					key={'main-nav'}
				>
					{this.menuItems.map(menuItem => {
						const { icon, title, key } = menuItem;
						if (activeItem.key === key) {
							return <Fragment key={key} />;
						}
						return (
							<a
								key={key}
								onClick={() => {
									this.setActive(key);
								}}
							>
								<img
									style={{
										width: '200px',
										height: '75px',
										padding: '15px'
									}}
									src={icon}
									alt={`${title} Icon`}
								/>
							</a>
						);
					})}
				</nav>
			</div>
		);
	}
}

TopBar.propTypes = {
	onChangeActive: PropTypes.func
};
const noop = () => {};

TopBar.defaultProps = {
	onChangeActive: noop
};
