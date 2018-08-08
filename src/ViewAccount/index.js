import React, { Component } from 'react';
import JobListing from '../JobListing';
import { Redirect } from 'react-router-dom'



class ViewAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.username,
			password: '',
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
  				loginFail: false, 
  				password: this.state.pass1
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

	  			const updatedUserJSON = await updatedUser.json();

	  			if(updatedUserJSON.status === 200){
	  				this.props.updateUserInfo(updatedUserJSON.data);
	  				this.setState({
	  					submitted: true
	  				})
	  			} else {
	  				this.setState({
	  					loginFail: true
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

  	handleDelete = async (e) => {
  		e.preventDefault()
  		try{
  			const deletedUser = await fetch(`http://localhost:5000/api/v1/users/${this.props.userID}`, {
  				method: 'DELETE',
	  			credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
  			})

  			const deletedUserJSON = await deletedUser.json();

  			if(deletedUserJSON.status === 200) {
  				//this will refresh the page
  				window.location.href = "http://localhost:3000/";
  			}

  		} catch (err) {
  			console.log('Error trying to delete user')
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

					<form onSubmit={this.handleDelete}>
						<button>Delete User</button>
					</form>

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