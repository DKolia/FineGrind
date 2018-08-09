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
    //update the state pay filter differently depending on the action passed through
    if(action === 'add') {
      //add the payFilter to the state
      this.setState({
        payFilter: [...this.state.payFilter, payFilter]
      })
    } else {
      //remove the pay filter from the state
      const payFilterList = this.state.payFilter;
      const indexNumber = payFilterList.indexOf(payFilter)
      payFilterList.splice(indexNumber, 1);
      this.setState({
        payFilter: payFilterList
      })
    }
	}

	updateCategoryFilter = (categoryFilter, action) => {
    //update the state category filter differently depending on the action passed through
    if(action === 'add') {
      //add the category to the state
      this.setState({
        categoryFilter: [...this.state.categoryFilter, categoryFilter]
      })
    } else {
      //remove the category from the state
      const categoryFilterList = this.state.categoryFilter;
      const indexNumber = categoryFilterList.indexOf(categoryFilter)
      categoryFilterList.splice(indexNumber, 1);
      this.setState({
        categoryFilter: categoryFilterList
      })
    }
	}

	updateLocationFilter = (locationFilter) => {
		this.setState({
      locationFilter: locationFilter
    })

	}

  deg2rad = (deg) => {
    return deg * (Math.PI/180)
  }

	render() {
    const payFilteredJobs = this.props.allJobs.filter((j, i)=>{
      if(this.state.payFilter.length !== 0){
        for(let i = 0; i < this.state.payFilter.length; i++) {
          
          if(this.state.payFilter[i] === '$0/hr to $15/hr' && j.pay < 15 && j.pay >= 0) {
            return j
          }

          else if(this.state.payFilter[i] === '$15/hr to $30/hr' && j.pay < 30 && j.pay >= 15) {
            return j
          }

          else if(this.state.payFilter[i] === '$30/hr to $45/hr' && j.pay < 45 && j.pay >= 30) {
            return j
          }

          else if(this.state.payFilter[i] === '$45/hr to $60/hr' && j.pay < 60 && j.pay >= 45) {
            return j
          }

          else if(this.state.payFilter[i] === '$45/hr to $60/hr' && j.pay < 60 && j.pay >= 45) {
            return j
          }
          else if(this.state.payFilter[i] === '$60/hr' && j.pay >= 60) {
            return j
          }
        }  //FOR LOOP
      } else {
        return j
      }
      
    })

    //filter viewable jobs based on the categories the user has selected
    const categoryFilteredJobs = payFilteredJobs.map((j, i) => {
      if(this.state.categoryFilter.length !== 0) {
        for(let i = 0; i < this.state.categoryFilter.length; i++) {

          if(this.state.categoryFilter[i] === j.category){
            return j
          }
        }
      } else {
        return j
      }

    })

    const tempList = categoryFilteredJobs.filter(j => j !== undefined)



    const locationFilteredJobs = tempList.map(j => {
      const R = 3961; // Radius of the earth in mi

      const lat1 = this.props.userLocation.data.lat;
      const lng1 = this.props.userLocation.data.lng;

      const lat2 = j.location.lat;
      const lng2 = j.location.lng;

      const dLat = this.deg2rad(lat2-lat1);
      const dLng = this.deg2rad(lng2-lng1); 
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
        Math.sin(dLng/2) * Math.sin(dLng/2);
     
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      const d = R * c; // Distance in km

      if(this.state.locationFilter === '') {
        return <JobListing job={j} />
      } else if(d < parseInt(this.state.locationFilter)) {
        return <JobListing job={j} />
      }
    })

    //clean up the final array to remove any empty array elements
    const finalList = locationFilteredJobs.filter(j => j !== undefined)

		return (
			<div className='filterSideBar'>
        <div className='filter'>
				  <PayFilter payFilter={this.state.payFilter} updatePayFilter={this.updatePayFilter}/>
				  <LocationFilter updateLocationFilter={this.updateLocationFilter} locationFilter={this.state.locationFilter}/>
				  <CategoryFilter categoryFilter={this.state.categoryFilter} updateCategoryFilter={this.updateCategoryFilter} />
        </div><hr/>
        <div className='jobCards'>
          {finalList}
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