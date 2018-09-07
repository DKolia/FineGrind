import React from 'react';

function SplashPage(props) {
	return(
		<div className='splash'>
			<h3>Welcome to fine Grind!</h3>

			<p>fine Grind is a platform that allows connects people to get a job done.</p>

			<h4>If you're looking for help for a project:</h4>
			<p>Simply create an account and add a job that you're looking for someone to do. Add some information about the job and you're all set! Just wait for someone to contact you about the listing. All jobs are live for 48 hours and then they automatically expire.</p>

			<h4>If you have some free time and want some extra cash:</h4>
			<p>No need to create an account! Simply browse the jobs page. The map will auto populate with all jobs that are nearby. Use the search to find the perfect job for you! Filter by distance from you, pay, and type of job. Click the filter to reset it and click a job to get some more information about it.</p>
			<p>All jobs expire after 48 hours so you can be sure that all jobs you see are fresh!</p>


			<button onClick={props.enterSite}>Click here to enter the site</button>

		</div>
	)
}


export default SplashPage;