import React from 'react';
import { HomePage } from './features/home/home-page';
import {ContactForm} from './forms/ContactForm';
import {TopBar} from './components/TopBar';
import {PageBody} from './components/PageBody';



function Body({
	route,
	forms
			  }) {
	switch (route) {
		case 'calderaForms':
			return <PageBody pageKey={route}>
				<ContactForm
					form={forms.hasOwnProperty('contact-form') ? forms['contact-form'] : false }
				/>
			</PageBody>;
		break;
		case 'calderaPay':
			return <PageBody pageKey={route}>
				<div>Caldera Pay</div>
			</PageBody>;
			break;
		case 'home':
		default:
			return <div>Home</div>;
			break;
	}
}


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
				<Body route={route} forms={forms}/>
			</div>
		);
	}
}
