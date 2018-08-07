import React, { Component } from 'react';


class PayFilter extends Component {
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
			</div>

		)
	}



}

export default PayFilter;