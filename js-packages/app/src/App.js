import React from 'react';
import { Header } from '@caldera-labs/components';
import { HomePage } from './features/home/home-page';

export class App extends React.Component {
	render() {
		return (
			<div>
				<Header
					styles={{
						header: {
							backgroundColor: '#ff7e30',
							color: '#fff'
						}
					}}
				>
					Caldera Pro
				</Header>
				<HomePage />
			</div>
		);
	}
}
