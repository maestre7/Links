import React, { Component } from 'react';
import ElementLink from './ElementLink'


class Theme extends Component {
    constructor(props) {
        super(props);
		this.state = {tittle: props.tittle, data:props.data};
	}
	
	render () {
		let elementLinks = [];
		
		for (let [index, data] of Object.entries(this.state.data)) {
			elementLinks.push(<ElementLink key={index} data={data}/>)
		}
		return (
			<div>{this.state.tittle.toUpperCase()}
				{elementLinks}
			</div>
		)
	}
}

export default Theme;