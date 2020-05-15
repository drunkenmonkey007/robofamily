import React, {Component} from 'react';

class errorboundary extends Component{
	constructor(props) {
		super(props);
		this.state = {
			hasError : false
		}
	}

	componentDidCatch(error,info){
	this.setstate({hasError : true})
	}

	render() {
		if(this.state.hasError){
			return <h1> OOps ,it is not good</h1>
		}
		else
		{
			return (this.props.children) ;
		}	
	}
}

export default errorboundary;