import React, { Component } from 'react';


class NewJob extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			category: [],
			pay: '',
			location: '',
			phone: '',
			body: '',
			ownerID: '',
			street: '',
			city: '',
			state: '', 
			country: 'USA'
		}
	}

	//used to get color of all subsequent methods correct
	placeholderFunction = () => {

	}

	//called when the user presses the submit form button
	handleSubmit = async (e) => {
		//prevent page from refreshing upon hitting the submit button
		e.preventDefault();
		//add the user's id to the body
		this.setState({
			ownerID: this.props.userID
		})

		try{
			//send the form data to the server to create new job posting
			const newJob = await fetch('http://localhost:5000/api/v1/jobs', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			//convert the response from json
			const newJobJSON = newJob.json();
			console.log(newJobJSON, 'this is the newJobsJSON');

			//if the server accepted the new job, add the job to the app.js state
			if(newJobJSON.status === 4000) {
				this.props.updateJobs(newJobJSON.data)
			}

		} catch (err) {
			console.log('Error with handleSubmit in NewJob.js')
		}

	}

	//used to handle change made to the form and log the changes in the state
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		/*
		
		This will render a form which will allow the user to input information about the job and upon submission, the information will be sent to the server to request it be added to the database.

		*/


		return (
			<div>
				<a href='/'><img alt='X' src="../Images/times-circle-regular.svg"></img></a>
				<form onSubmit={this.handleSubmit}>
					<small>Job Title</small><br/>
					<input type='text' placeholder='Title of Job' name='title' value={this.state.title} onChange={this.handleChange} /><br/>
					<small>Type of Work</small><br/>
					<select type='text' placeholder='Categories' name='category' onChange={this.handleChange}>
						<option value='Automotive'>Automotive</option>
						<option value='Bartending'>Bartending</option>
						<option value='Catering'>Catering</option>
						<option value='Child Care'>Child Care</option>
						<option value='Electrical'>Electrical</option>
						<option value='Gardening'>Gardening</option>
						<option value='Housekeeping'>Housekeeping</option>
						<option value='Pet Services'>Pet Services</option>
						<option value='Photography'>Photography</option>
						<option value='Plumbing'>Plumbing</option>
						<option value='Security'>Security</option>
						<option value='Serving'>Serving</option>
						<option value='Trash Hauling'>Trash Hauling</option>
						<option value='Yard Work'>Yard Work</option>
					</select><br/>
					<small>Job Pay ($/hr)</small><br/>
					<input type='number' name='pay' placeholder='Pay' value={this.state.pay} onChange={this.handleChange} /><br/>
					<small>Location of Job</small><br/>
					<input type='text' name='location' placeholder='Location of Job' value={this.state.location} onChange={this.handleChange} /><br/>
					<small>Phone Number</small><br/>
					<input type='number' name='phone' placeholder='Phone Number' value={this.state.phone} onChange={this.handleChange} /><br/>
					<small>Job Description</small><br/>
					<textarea name='body' placeholder='Job Description' value={this.state.body} onChange={this.handleChange} /><br/>
					<button>Create New Job</button>

				</form>
			</div>
		)
	}
}


export default NewJob;