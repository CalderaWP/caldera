import React from 'react';
//import { Header } from '@caldera-labs/components';
//import { HomePage } from './features/home/home-page';

export class App extends React.Component {

	componentDidMount(){
		fetch('/wp-json/caldera-api/v1/' ).then(r => r.json() )
			.then( r => console.log(r))
			.catch( e => console.log(e))
	}
	render() {
		return (
			<div>
				The Ap@p
			</div>
		);
	}
}
