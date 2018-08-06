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
			ownerID: ''
		}
	}

	placeholderFunction = () => {

	}

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({
			ownerID: this.props.userID
		})
		try{
			const newJob = await fetch('http://localhost:5000/api/v1/jobs', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const newJobJSON = newJob.json();
			console.log(newJobJSON, 'this is the newJobsAPI');

			if(newJobJSON.status === 4000) {
				this.props.updateJobs(newJobJSON.data)
			}

		} catch (err) {
			console.log('Error with handleSubmit in NewJob.js')
		}

	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
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
		)
	}
}


export default NewJob;