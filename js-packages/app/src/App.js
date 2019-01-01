import React from 'react';
import { Header  } from '@caldera-labs/components';
import { HomePage } from './features/home/home-page';
import calderaWpLogoDark from './logos/Logo-CalderaWP-DarkBG.svg';
import calderaFormsIcon from './logos/icons/Icon-CalderaForms.svg';
import {ContactForm} from './forms/ContactForm';
export class App extends React.Component {

	componentDidMount(){
		fetch('/wp-json/caldera-api/v1/forms' ).then(r => r.json() )
			.then( r => console.log(r))
			.catch( e => console.log(e))
	}
	render() {
		return (
			<div>
				<Header
					styles={{
						header: {
							fontFamily: 'Signika',
							backgroundColor: '#333333',
							color: "#FF3721",
							borderBottom: '#cfcfcf'
						}
					}}
				>
					<nav>
						<img style={{
							width: '200px',
							height: '75px',
							padding: '15px',
						}} src={calderaWpLogoDark} alt={'CalderaWP logo'} />

						<img style={{
							width: '200px',
							height: '75px',
							padding: '15px',
						}} src={calderaFormsIcon} alt={'Caldera Forms logo'} />
					</nav>



				</Header>
				<HomePage>
					<ContactForm/>
				</HomePage>
			</div>
		);
	}
}
