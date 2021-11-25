import React, { Component } from 'react';
import Theme from './theme'

class Links extends Component {
    constructor(props) {
        super(props);
		this.state = {...props.data};
		//this.theme = [];
		//console.log(this.state);
	}
	
	render() {
		let themee = [];
		console.log('1');
		for (let [key, value] of Object.entries(this.data)) {
			themee.push(<Theme key={key} data={value}>);	
		}
		console.log({themee});
		
		return (
		{// <div>
				// me cago en tu puta madre
		// </div>
		//)
		}
	}
}

export default Links;