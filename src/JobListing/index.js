gitimport React , { Component }from 'react';


class JobListing extends Component {
	constructor() {
		super();
		this.state = {

		}
	}
	//used to get color of all subsequent methods correct
	placeholderFunction = () => {

	}

	handleClick = (e) => {
		this.props.viewJobPage(e.currentTarget.id)
	}

	//Link each card with a different route that is the show page for the job or show a modal that has all the info
	render() {
		return (
			<div className='jobCard' id={this.props.job._id} onClick={this.handleClick}>
				<h3>{this.props.job.title}</h3>
				<h4>${this.props.job.pay}/hr</h4>
				<h4>{this.props.job.category}</h4>
				{this.props.owner ? <button>Delete Job Posting</button> : null}
			</div>
		)
	}
}


export default JobListing;
