import React, { Component } from 'react';


class LocationFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: this.props.locationFilter
		}
	}

	//used to get color of all subsequent methods correct
  	placeholderFunction = () => {

  	}

  	handleChange = (e) => {
  		this.setState({
  			location: e.target.value
  		})
  		this.props.updateLocationFilter(e.target.value)
  	}

	render() {
		return (
			<div>
				<h3>Search Radius:</h3>
				<form>
					<select onChange={this.handleChange}>
						<option disabled selected>Filter By Distance</option>
						<option value='5'>&lt;5 miles</option>
						<option value='10'>&lt;10 miles</option>
						<option value='20'>&lt;20 miles</option>
						<option value='35'>&lt;35 miles</option>
						<option value=''>No Limit</option>
					</select>

				</form>
			
			</div> 
		)
	}



}

export default LocationFilter;
