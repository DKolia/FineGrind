import React from 'react';


const JobListing = (props) => {
	// console.log(props, 'this is the propslist')
	//Link each card with a different route that is the show page for the job or show a modal that has all the info
	return (
		<div className='jobCard'>
			<h3>{props.job.title}</h3>
			<h4>${props.job.pay}</h4>
			<h4>{props.job.category}</h4>
		</div>
	)
}


export default JobListing;
