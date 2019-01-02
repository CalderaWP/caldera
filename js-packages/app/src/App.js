import React from 'react';
import { Forms } from './features/forms/Forms';
import {ContactForm} from './forms/ContactForm';
import {TopBar} from './components/TopBar';
import AppBody from './components/AppBody';





export class App extends React.Component {

	state = {
		formsLoaded:false,
		forms : {

		},
		route: '/'
	};
	componentDidMount(){
		fetch('/wp-json/caldera-api/v1/forms' ).then(r => r.json() )
			.then( forms => this.setState({forms}))
			.catch( e => console.log(e))
			.then(() => this.setState({formsLoaded:true}));
	}

	setRoute(route){
		this.setState({route});
	}
	render() {
		const {
			forms,
			formsLoaded,
			route
		} = this.state;

		return (
			<div>
				<TopBar
					onChangeActive={(route) => this.setRoute(route)}
				/>
				<AppBody route={route} forms={forms}/>
			</div>
		);
	}
}
