import React, { Component } from "react";

class About extends Component {
	render() {
		if (this.props.info) {
			var name = this.props.info.name;
			var profilepic = this.props.info.image;
			var bio = this.props.info.bio;
			var street = this.props.info.address.street;
			var city = this.props.info.address.city;
			var state = this.props.info.address.state;
			var zip = this.props.info.address.zip;
			var phone = this.props.info.phone;
			var email = this.props.info.email;
			var resumeDownload = this.props.info.resumedownload;
		}

		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img
							className="profile-pic"
							src={profilepic}
							alt="Olumide Okubanjo Profile Pic"
						/>
					</div>
					<div className="nine columns main-col">
						<h2>About Me</h2>

						<p>{bio}</p>
						<div className="row">
							<div className="columns contact-details">
								<h2>Contact Details</h2>
								<p className="address">
									<span>{name}</span>
									<br />
									<span>
										{street}
										<br />
										{city} {state}, {zip}
									</span>
									<br />
									<span>{phone}</span>
									<br />
									<span>{email}</span>
								</p>
							</div>
							<div className="columns download">
								<p>
									<a href={resumeDownload} className="button">
										<i className="fa fa-download"></i>
										Download Resume
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;