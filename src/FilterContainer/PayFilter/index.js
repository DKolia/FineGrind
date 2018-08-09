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
  		for(let i = 0; i < this.props.payFilter.length; i++) {
  			if(this.props.payFilter[i] === e.target.value) {
  				repeatFilter = true;
  			} 
  		}

  		if(repeatFilter === false) {
  			this.setState({
  				pay: [...this.state.pay, e.target.value]
  			})
  			this.props.updatePayFilter(e.target.value, 'add')
  		}
  	}

  	handleClick = (e) => {
  		const newPayList = this.state.pay.filter(pay => pay !== e.target.id);
  		this.setState({
  			pay: newPayList
  		})
  		this.props.updatePayFilter(e.target.id, 'del')
  	}

	render() {
		console.log(this.state.pay, 'THIS IS PAY INSIDE PAYFILTER')
		return (
			<div>
				<h3>Filter By Pay:</h3>
				<form>
					<select onChange={this.handleChange}>
						<option selected disabled>Filter By Pay</option>
						<option value='$0/hr to $15/hr'>$0/hr to $15/hr</option>
						<option value='$15/hr to $30/hr'>$15/hr to $30/hr</option>
						<option value='$30/hr to $45/hr'>$30/hr to $45/hr</option>
						<option value='$45/hr to $60/hr'>$45/hr to $60/hr</option>
						<option value='> $60/hr'>&gt;$60/hr</option>
					</select>
				</form>
				{this.state.pay.map((pay, i) => <h4 id={pay} onClick={this.handleClick} key={i}>{pay}</h4>)}
			</div>

		)
	}



}

export default PayFilter;