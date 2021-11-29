import React, { Component } from 'react';
import ElementLink from '../elementlink/ElementLink'
import './theme.css';


class Theme extends Component {
    constructor(props) {
        super(props);
		this.state = {tittle: props.tittle, data:props.data, setShowResults: false};
	}
	
	showLinks() {
		this.state.setShowResults = !this.state.setShowResults;
	}
	
	render () {
		let elementLinks = [];
		
		for (let [index, data] of Object.entries(this.state.data)) {
			elementLinks.push(<ElementLink key={index} data={data}/>)
		}
		return (
			<div className='theme'>{this.state.tittle.toUpperCase()}<button onclick={this.showLinks}>+</button>
				{this.state.setShowResults ? elementLinks : null}
			</div>
		)
	}
}

export default Theme;