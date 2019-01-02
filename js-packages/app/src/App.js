import React from 'react';
import { Header  } from '@caldera-labs/components';
import { HomePage } from './features/home/home-page';
import calderaWpLogoDark from './logos/Logo-CalderaWP-DarkBG.svg';
import calderaFormsIcon from './logos/icons/Icon-CalderaForms.svg';
import {ContactForm} from './forms/ContactForm';
const uuidv1 = require('uuid/v1');
function rowFactory(columns = [],rowId=null) {
	rowId = ! rowId ? uuidv1() : rowId;
	return {
		rowId,
		columns
	}
}

function columnFactory(fields = [], columnId=null ) {
	columnId = ! columnId ? uuidv1() : columnId;
	return {
		columnId,
		fields
	}
}
export class App extends React.Component {

	state = {
		formsLoaded:false,
		forms : {

		}
	};
	componentDidMount(){
		fetch('/wp-json/caldera-api/v1/forms' ).then(r => r.json() )
			.then( forms => this.setState({forms}))
			.catch( e => console.log(e))
			.then(() => this.setState({formsLoaded:true}));
	}
	render() {
		const {
			forms,
			formsLoaded
		} = this.state;

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
					{formsLoaded &&
						<ContactForm
							form={forms.hasOwnProperty('contact-form') ? forms['contact-form'] : false }
						/>
					}
				</HomePage>
			</div>
		);
	}
}
