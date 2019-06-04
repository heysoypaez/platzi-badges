import React, { Component } from 'react';
import "./styles/BadgeForm.css";

class BadgeForm extends Component {


	render() {



		return (
			<section className="BadgeForm">

				<h1>New Attendant</h1>
				<form onSubmit={this.props.submit}>

					<label htmlFor="firstName">First Name</label>
					<input 
						onChange={this.props.onChange}
						type="text" 
						name="firstName" 
						value={this.props.firstName}
					/>

					<label htmlFor="lastName">Last Name</label>
					<input 
						onChange={this.props.onChange}
						type="text" 
						name="lastName" 
						value={this.props.lastName}
					/>

					<label htmlFor="email">Email</label>
					<input 
						onChange={this.props.onChange}
						type="email" 
						name="email" 
						value={this.props.email}
					/>

					<label htmlFor="jobTitle">Job Title</label>
					<input 
						onChange={this.props.onChange}
						type="text" 
						name="jobTitle" 
						value={this.props.jobTitle}
					/>

					<label htmlFor="twitterUserName">Twitter</label>
					<input 
						onChange={this.props.onChange}
						type="text" 
						name="twitterUserName" 
						value={this.props.twitterUserName}
					/>

	
					<input
					 className="BadgeForm__submit"
					 type="submit"
					 value="Save" 
					 onClick={this.props.onClick} 
					/>
					 
				</form>

				<section>
					<h1 id="testing-area"> </h1>
				</section>

			</section>
		);
	}

}

export default BadgeForm;