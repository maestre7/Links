import React, { Component } from 'react';
import Theme from './theme';
import axios from 'axios';

class Links extends Component {
    constructor(props) {
        super(props);
		this.state = {...props.data};
	}

	async teto() {
		const resp1 = await axios.get('https://dog.ceo/api/breeds/list/all');
		const resp2 = await axios.get('https://rickandmortyapi.com/api/character');
	}

	render() {
		//this.teto();
		let theme = [];
		
		for (let [index, [tittle, value]] of Object.entries(Object.entries(this.state))) {
			theme.push(<Theme key={index} tittle={tittle} data={value} />);	
		}
		
		return (
			<>
				{theme}
			</>
		)	
	}
}

export default Links;