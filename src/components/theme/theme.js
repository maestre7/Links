import React, { Component } from 'react';
import ElementLink from '../elementlink/ElementLink'
import './theme.css';


class Theme extends Component {
    constructor(props) {
		super(props);
		this.state = {tittle: props.tittle, data:props.data, setShowResults: true};
		this.showLinks = this.showLinks.bind(this);
		this.deleteElementLink = this.deleteElementLink.bind(this);
	}
	
	showLinks() {
		this.setState({setShowResults: !this.state.setShowResults});
	}
	
	deleteElementLink(name) {
		let dataTemp = {};
		
		for (let [index, data] of Object.entries(this.state.data)){
			if (data['name'] !== name){
				dataTemp[index] = {...data};
			}
		}
		this.setState({data: dataTemp})
	}
	
	render () {
		let elementLinks = [];
		
		for (let [index, data] of Object.entries(this.state.data)) {
			elementLinks.push(<ElementLink key={index} data={data} del={this.deleteElementLink} />)
		}
		return (
			<div className='theme'>{this.state.tittle.toUpperCase()}
				<button onClick={this.showLinks}>{this.state.setShowResults ? '-': '+'}</button>
				{this.state.setShowResults ? elementLinks : null }
			</div>
		)
	}
}

export default Theme;