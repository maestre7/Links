import React, { Component } from 'react';
import './ElementLink.css';


class ElementLink extends Component {
    constructor(props) {
        super(props);
		this.state = {name: props.data.name, href:props.data.href, del: props.del};
		this.deleteElement = this.deleteElement.bind(this);
	}
	
	deleteElement() {
		this.state.del(this.state.name);
	}
	
	render () {
		//rel = "noopener noreferrer" is to avoid a security flaw, in target='_blank'
		return (
			<li className='ElementLink'>
				<a href={this.state.href} target='_blank' rel="noopener noreferrer">
					{this.state.name}
				</a>
				<button onClick={this.deleteElement}><sup> x </sup></button>
			</li>
		)
	}
}

export default ElementLink;