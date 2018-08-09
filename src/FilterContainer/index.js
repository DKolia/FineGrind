import React, { Component } from 'react';
import JobListing from '../JobListing';
import PayFilter from './PayFilter';
import LocationFilter from './LocationFilter';
import CategoryFilter from './CategoryFilter';


class FilterContainer extends Component {
	constructor(props) {
		super(props);
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

  	updatePayFilter = (payFilter, action) => {
  		//make a new array that holds only jobs that match the pay filtering set by user
  		//only run operations if payFilter array isn't empty

      if(action === 'add') {
        this.setState({
          payFilter: [...this.state.payFilter, payFilter]
        })
      } else {
        const payFilterList = this.state.payFilter;
        const indexNumber = payFilterList.indexOf(payFilter)
        payFilterList.splice(indexNumber, 1);
        this.setState({
          payFilter: payFilterList
        })
      }

  		// if(this.state.payFilter.length !== 0){
	  	// 	const tempList = this.state.filteredList.filter(job => {
	  	// 		//loop over all pay filters and compare with job pay
	  	// 		for(let i = 0; i < this.state.payFilter.length; i += 2) {
	  	// 			if(this.state.payFilter[i] < job.pay && this.state.payFilter[i+1] > job.pay) {
	  	// 				return job
	  	// 			} else {
	  	// 				return 
	  	// 			}
	  	// 		}
	  	// 	})
	  	// 	//save the new list to the state for the next method to use
	  	// 	this.setState({
	  	// 		filteredList: tempList
	  	// 	})
  		// }
  	}

  	updateCategoryFilter = (categoryFilter, action) => {

      if(action === 'add') {
        this.setState({
          categoryFilter: [...this.state.categoryFilter, categoryFilter]
        })
      } else {
        const categoryFilterList = this.state.categoryFilter;
        const indexNumber = categoryFilterList.indexOf(categoryFilter)
        categoryFilterList.splice(indexNumber, 1);
        this.setState({
          categoryFilter: categoryFilterList
        })
      }





  		// if(this.state.categoryFilter.length !== 0) {
  		// 	const tempList = this.state.filteredList.filter(job => {
  		// 		//loop over all category filters and compare with job category
  		// 		for(let i = 0; i < this.state.categoryFilter.length; i++) {
  		// 			if(this.state.categoryFilter[i] === job.category) {
  		// 				return job
  		// 			} else {
  		// 				return
  		// 			}
  		// 		}
  	
  		// 	})
  		// 	//save the new list to the state for the next method to use
  		// 	this.setState({
  		// 		filteredList: tempList
  		// 	})
  		// }
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
      console.log(this.state.categoryFilter, '\nthis is the category filter');
      console.log(this.state.locationFilter, '\nthis is the location filter')
      // console.log(this.state.filteredList, 'this is the filtered list')
      const jobs = this.props.allJobs.map((j, i)=>{
        if(this.state.payFilter.length !== 0){
          for(let i = 0; i < this.state.payFilter.length; i++) {
            
            if(this.state.payFilter[i] === '$0/hr to $15/hr' && j.pay < 15 && j.pay >= 0) {
              return <JobListing job={j} />
            }

            else if(this.state.payFilter[i] === '$15/hr to $30/hr' && j.pay < 30 && j.pay >= 15) {
              return <JobListing job={j} />
            }

            else if(this.state.payFilter[i] === '$30/hr to $45/hr' && j.pay < 45 && j.pay >= 30) {
              return <JobListing job={j} />
            }

            else if(this.state.payFilter[i] === '$45/hr to $60/hr' && j.pay < 60 && j.pay >= 45) {
              return <JobListing job={j} />
            }

            else if(this.state.payFilter[i] === '$45/hr to $60/hr' && j.pay < 60 && j.pay >= 45) {
              return <JobListing job={j} />
            }
            else if(this.state.payFilter[i] === '$60/hr' && j.pay >= 60) {
              return <JobListing job={j} />
            }
          }  //FOR LOOP
        } else {
          return <JobListing job={j} />
        }
        
      }).map((j, i) => {
        if(this.state.categoryFilter.length !== 0) {

        } else {
          
        }







      })
      // .filter(() => {
      //   // filter category
      // }).filter(() => {
      //   // filter location
      // })
  		return (
  			<div className='filterSideBar'>
          <div className='filter'>
  				  <PayFilter payFilter={this.state.payFilter} updatePayFilter={this.updatePayFilter}/>
  				  <LocationFilter locationFilter={this.state.locationFilter} />
  				  <CategoryFilter categoryFilter={this.state.categoryFilter} updateCategoryFilter={this.updateCategoryFilter} />
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