import React, { Component } from 'react';
import "./styles/BadgeForm.css";

class BadgeForm extends Component {


	render() {



		return (
			<section className="BadgeForm">

				<h1>{this.props.title}</h1>
				<form onSubmit={this.props.onSubmit}>

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

					<label htmlFor="twitter">Twitter</label>
					<input 
						onChange={this.props.onChange}
						type="text" 
						name="twitter" 
						value={this.props.twitter}
					/>

	
					<input
					 className="BadgeForm__submit"
					 type="submit"
					 value="Save" 
					 onClick={this.props.onClick} 
					/>
					 
					{this.props.error && (

							<p>{this.props.error.message}</p>

						)

					} 


				</form>

			</section>
		);
	}

}

export default BadgeForm;