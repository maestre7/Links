import React, { Component } from 'react';

class Theme extends Component {
    constructor(props) {
        super(props);
		this.state = {name: props.key, data:props.data}
	}
	render () {
		return (
			<div>{this.state.name.toUpperCase()}
			</div>
		)
	}
}