import React, { Component } from 'react';
import JobList from '../JobListing'

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filteredList: this.props.allJobs,
			payFilter: [],
			locationFilter: '',
			categoryFilter: ''
		}
	}

	//used to get color of all subsequent methods correct
  	placeholderFunction = () => {

  	}

  	payFilter = () => {
  		//make a new array that holds only jobs that match the pay filtering set by user
  		//only run operations if payfilter array isn't empty
  		if(this.state.payFilter.length !== 0){
	  		const filteredList = this.state.filteredList.filter(job => {
	  			for(let i = 0; i < this.state.payFilter.length; i+=2) {
	  				if(this.state.payFilter[i] < job.pay && this.state.payFilter[i+1] > job.pay) {
	  					return job
	  				} else {
	  					return 
	  				}
	  			}
	  		})
	  		//save the new list to the state for the next method to use
	  		this.setState({
	  			filteredList: filteredList
	  		})
  		}
  	}

  	categoryFilter = () => {

  	}

  	locationFilter = () => {

  	}

  	render() {
  		this.payFilter();
  		this.categoryFilter();
  		this.locationFilter();
  		console.log(this.state.filteredList)
  		return (
  			<div className='filter'>
  				

  				{this.state.filteredList.map(job => <JobList job={job}/>)}
  			</div>
  		)
  	}
}


export default Filter;