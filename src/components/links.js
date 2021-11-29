import React, { Component } from 'react';
import Theme from './theme/theme';


class Links extends Component {
    constructor(props) {
        super(props);
		this.state = {...props.data};
	}

	render() {
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