import React, { Component } from 'react';


class ElementLink extends Component {
    constructor(props) {
        super(props);
		this.state = {name: props.data.name, href:props.data.href};
	}
	
	render () {
		//rel = "noopener noreferrer" is to avoid a security flaw, in target='_blank'
		return (
			<li className='ElementLink'>
				<a href={this.state.href} target='_blank' rel="noopener noreferrer">
					{this.state.name}
				</a>
			</li>
		)
	}
}

export default ElementLink;