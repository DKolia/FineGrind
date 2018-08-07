import React, { Component } from 'react';


class PayFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pay: this.props.payFilter
		}
	}

	//used to get color of all subsequent methods correct
  	placeholderFunction = () => {

  	}

  	handleChange = (e) => {
  		//only add the new filter, if it isn't already in the filterlist
  		let repeatFilter = false;
  		for(let i = 0; i < this.state.pay.length; i++) {
  			if(this.state.pay[i] === e.target.value) {
  				repeatFilter = true;
  			} 
  		}

  		if(repeatFilter === false) {
  			this.setState({
  				pay: [...this.state.pay, e.target.value]
  			})
  		}
  	}

	render() {
		return (
			<div>
				<h3>Filter By Pay:</h3>
				<form>
					<select onChange={this.handleChange}>
						<option selected disabled>Filter By Pay</option>
						<option value='15'>$0/hr to $15/hr</option>
						<option value='30'>$15/hr to $30/hr</option>
						<option value='45'>$30/hr to $45/hr</option>
						<option value='60'>$45/hr to $60/hr</option>
						<option value='1000'>&gt;$60/hr</option>
					</select>
				</form>
				{this.state.pay.map((pay, i) => <small key={i}>{pay}</small>)}
			</div>

		)
	}



}

export default PayFilter;