import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class ViewJob extends Component {
	constructor() {
		super();
		this.state = {
			submitted: false

		}
	}

	//used to get color of all subsequent methods correct
  	placeholderFunction = () => {

	}

	exit = (e) => {
    	this.setState({
      		submitted: true
    	})
 	 }


	render() {
		if(this.state.submitted || this.props.job === ''){
  			return <Redirect to={'/'} />
		} else {
			return(
				<div>
					<a onClick={this.exit}><img alt='X' src="../Images/times-circle-regular.svg"></img></a>
					<div>
						<h3>Job: {this.props.job[0].title}</h3>
						<h3>Type of Work: {this.props.job[0].category}</h3>
						<h3>${this.props.job[0].pay}/hr</h3>
						<h3>Phone Number: {this.props.job[0].phone}</h3>
						<h4>Details:</h4>
						<p>{this.props.job[0].body}</p>

					</div>
				</div>
			)
		}
	
	}
}


export default ViewJob