import React, { Component } from 'react';
import JobListing from '../JobListing';



class ViewAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.username,
			pass1: '',
			pass2: '',
			loginFail: false
		}
	}
	//used to get color of all subsequent methods correct
  	placeholderFunction = () => {

  	}

  	handleChange = (e) => {
  		this.setState({
			[e.target.name]: e.target.value
		})
  	}

  	handleSubmit = async (e) => {
  		e.preventDefault();
  		if(this.state.pass1 === this.state.pass2 && this.state.pass1 !== ''){
  			this.setState({
  				loginFail: false
  			})
	  		try{
	  			const updatedUser = await fetch(`http://localhost:5000/api/v1/users/${this.props.userID}`, {
	  				method: 'PUT',
	  				credentials: 'include',
					body: JSON.stringify(this.state),
					headers: {
						'Content-Type': 'application/json'
					}
	  			})
	  			const updatedUserJSON= updatedUser.json();
	  			this.props.updateUserInfo(updatedUserJSON.data);

	  		} catch (err) {
	  			console.log('Error with handleSubmit in ViewAccount', err)
	  		}
  		} else {
  			this.setState({
  				loginFail: true
  			})
  		}

  	}


	render() {
		return (
			<div>
				<a href='/'><img alt='X' src="../Images/times-circle-regular.svg"></img></a>
				<form onSubmit={this.handleSubmit}>
					<small>Email:</small> <br/>
					<input type='email' name='username' value={this.state.username} onChange={this.handleChange} /><br/>
					<small>Password:</small><br/>
					<input type='password' name='pass1' value={this.state.pass1} onChange={this.handleChange} /><br/>
					<small>Confirm Password</small><br/>
					<input type='password' name='pass2' value={this.state.pass2} onChange={this.handleChange} /><br/>
					<button>Save Changes</button><br/>
					{(this.state.loginFail) ? <small>Passwords do not match. Please try again</small> : null}
				</form><br/>

				<div>
					<h2>Test</h2>
					{this.props.allJobs.map((userJob, i) => {
						if(userJob._id === this.props.userID) {
							return <JobListing key={i}/> 
						} 
						return null
					})}
				</div>
			</div>
		)
	}
}



export default ViewAccount;