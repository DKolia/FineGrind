import React, { Component } from 'react';


class CategoryFilter extends Component {
	constructor(props){
		super(props);
		this.state = {
			categories: this.props.categoryFilter
		}
	}

	//used to get color of all subsequent methods correct
  	placeholderFunction = () => {

  	}

  	handleChange = (e) => {
  		for(let i = 0; i <= this.state.categories.length; i++) {
  			if(this.state.categories[i] === e.target.value) {
  				continue;
  			} else {	
  				console.log('got inside of it statement')
  				this.setState({
  					categories: [...this.state.categories, e.target.value]
  				})
  			}
  		}
  	}

	render() {
		return (
			<div>
				<h3>Filter By Category:</h3>
				<form>
					<select type='text' placeholder='Categories' name='category' onChange={this.handleChange}>
						<option disabled selected>Filter By Category</option>
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
				</form>
				{this.state.categories.map(category => <small>{category}</small>)}
			</div>
		)
	}
}

export default CategoryFilter;