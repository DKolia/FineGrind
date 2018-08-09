import React, { Component } from 'react';
import JobListing from '../JobListing';
import { Redirect } from 'react-router-dom'



class ViewAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.username,
			pass1: '',
			pass2: '',
			loginFail: false,
			submitted: false
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
	  			const updatedUser = await fetch('http://localhost:5000/api/v1/users/5b6b58ed72ce9c8b2dd56eff', {
	  				method: 'PUT',
	  				credentials: 'include',
					body: JSON.stringify(this.state),
					headers: {
						'Content-Type': 'application/json'
					}
	  			})
	  			//${this.props.userID}
	  			const updatedUserJSON = await updatedUser.json();
	  			console.log(updatedUserJSON)

	  			if(updatedUserJSON.status === 200){
	  				this.props.updateUserInfo(updatedUserJSON.data);
	  				this.setState({
	  					submitted: true
	  				})
	  			}

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
		if(this.props.loggedIn) {
			return (
				<div>
					{this.state.submitted ? <Redirect to={'/'} /> : null}
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
		} else {
			return <Redirect to={'/'} />
		}
	}
}



export default ViewAccount;