import React from 'react';


const JobListing = (props) => {
	console.log('job listing')
	//Link each card with a different route that is the show page for the job or show a modal that has all the info
	return ( 
		<div className='jobCard'>
			<h3>{props.title}</h3>
			<h4>${props.pay}</h4>
			<h4>{props.category}</h4>

		</div>
	)
	
}


export default JobListing;