import React, { Component } from 'react';
import JobListing from '../JobListing';
import PayFilter from './PayFilter';
import LocationFilter from './LocationFilter';
import CategoryFilter from './CategoryFilter';


class FilterContainer extends Component {
	constructor(props) {
		super(props);
    console.log(props, " props in constructor in FilterContainer")
    console.log(this.props, " this.props in constructor in FilterContainer")
		this.state = {
			filteredList: [],
			payFilter: [],
			locationFilter: '',
			categoryFilter: []
		}
	}

	//used to get color of all subsequent methods correct
  	placeholderFunction = () => {

  	}

  	payFilter = () => {
  		//make a new array that holds only jobs that match the pay filtering set by user
  		//only run operations if payFilter array isn't empty
  		if(this.state.payFilter.length !== 0){
	  		const tempList = this.state.filteredList.filter(job => {
	  			//loop over all pay filters and compare with job pay
	  			for(let i = 0; i < this.state.payFilter.length; i += 2) {
	  				if(this.state.payFilter[i] < job.pay && this.state.payFilter[i+1] > job.pay) {
	  					return job
	  				} else {
	  					return 
	  				}
	  			}
	  		})
	  		//save the new list to the state for the next method to use
	  		this.setState({
	  			filteredList: tempList
	  		})
  		}
  	}

  	categoryFilter = () => {
  		if(this.state.categoryFilter.length !== 0) {
  			const tempList = this.state.filteredList.filter(job => {
  				//loop over all category filters and compare with job category
  				for(let i = 0; i < this.state.categoryFilter.length; i++) {
  					if(this.state.categoryFilter[i] === job.category) {
  						return job
  					} else {
  						return
  					}
  				}
  	
  			})
  			//save the new list to the state for the next method to use
  			this.setState({
  				filteredList: tempList
  			})
  		}
  	}

  	locationFilter = () => {
  		if(this.state.locationFilter !== '') {
  			//do filtering here
  		}

  	}

    componentDidMount(){
      // this.setState({
      //   filteredList: this.props.allJobs
      // })
      // this.categoryFilter();
      // this.payFilter();
    }

  	render() {
      // console.log(this.state.filteredList, 'this is the filtered list')
      console.log(this.props.allJobs, " this.props.alljaobs on render in filter contaoner")
      const jobs = this.props.allJobs.map((j, i)=>{
        // filter pay
        return <JobListing job={j} key={i} />
      })
      // .filter(() => {
      //   // filter category
      // }).filter(() => {
      //   // filter location
      // })
  		return (
  			<div className='filterSideBar'>
          <div className='filter'>
  				  <PayFilter payFilter={this.state.payFilter} />
  				  <LocationFilter locationFilter={this.state.locationFilter} />
  				  <CategoryFilter categoryFilter={this.state.categoryFilter} />
          </div><hr/>
          <div className='jobCards'>
            {jobs}
          </div>
  				
  			</div>
  		)
  	}
}


export default FilterContainer;




// this.payFilter();
//       this.categoryFilter();
//       this.locationFilter();
//