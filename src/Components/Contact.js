import React, { Component } from "react";
import * as emailjs from "emailjs-com";

class Contact extends Component {
	// You'll need to set up state here for sending the emaisl to your personal email.
	state = {
		userName: "",
		userEmail: "",
		userSubject: "",
		userMessage: "",
		sucessMessage: "",
	};

	updateSucessMessage = () => {
		this.setState({
			sucessMessage: "Message was sent. Please don't sent send another",
		});
	};

	handleSubmit = (event) => {
		if (
			!this.stateuserName &&
			!this.state.userEmail &&
			!this.state.userSubject &&
			!this.state.userMessage
		) {
			return;
		}

		event.preventDefault();
		var template_params = {
			subject: this.state.userSubject,
			to_name: "Olumide Okubanjo",
			from_name: this.state.userName,
			from_email: this.state.userEmail,
			message_html: this.state.userMessage,
		};

		var service_id = "default_service";
		var template_id = "template_tHXej4iH";
		var userId = "user_nUcYDzTYGIEngdUDm9pdH";
		emailjs.send(service_id, template_id, template_params, userId).then(
			(response) => {
				console.log("SUCCESS!", response.status, response.text);
				this.updateSucessMessage();
			},
			function (error) {
				console.log("FAILED...", error);
			}
		);
		// Reset States
		// this.setState({
		// 	userName: "",
		// 	userEmail: "",
		// 	userSubject: "",
		// 	userMessage: "",
		// });
	};

	render() {
		if (this.props.info) {
			var name = this.props.info.name;
			var street = this.props.info.address.street;
			var city = this.props.info.address.city;
			var state = this.props.info.address.state;
			var zip = this.props.info.address.zip;
			var phone = this.props.info.phone;
			var email = this.props.info.email;
			var message = this.props.info.contactmessage;
		}

		return (
			<section id="contact">
				<div className="row section-head">
					<div className="two columns header-col">
						<h1>
							<span>Get In Touch.</span>
						</h1>
					</div>

					<div className="ten columns">
						<p className="lead">{message}</p>
					</div>
				</div>

				<div className="row">
					<div className="eight columns">
						<form
							action=""
							method="post"
							id="contactForm"
							className="contact_form_class"
							onSubmit={this.handleSubmit}
							name="contactForm"
						>
							<fieldset>
								<div>
									<label htmlFor="contactName">
										Name <span className="required">*</span>
									</label>
									<input
										type="text"
										value={this.state.userName}
										size="35"
										id="contactName"
										name="contactName"
										onChange={(e) => {
											this.setState({
												userName: e.target.value,
											});
										}}
									/>
								</div>

								<div>
									<label htmlFor="contactEmail">
										Email{" "}
										<span className="required">*</span>
									</label>
									<input
										type="text"
										value={this.state.userEmail}
										size="35"
										id="contactEmail"
										name="contactEmail"
										onChange={(e) => {
											this.setState({
												userEmail: e.target.value,
											});
										}}
									/>
								</div>

								<div>
									<label htmlFor="contactSubject">
										Subject
									</label>
									<input
										type="text"
										value={this.state.userSubject}
										size="35"
										id="contactSubject"
										name="contactSubject"
										onChange={(e) => {
											this.setState({
												userSubject: e.target.value,
											});
										}}
									/>
								</div>

								<div>
									<label htmlFor="contactMessage">
										<span className="required">*</span>
									</label>
									<textarea
										cols="50"
										rows="15"
										id="contactMessage"
										value={this.state.message}
										name="contactMessage"
										onChange={(e) => {
											this.setState({
												userMessage: e.target.value,
											});
										}}
									></textarea>
								</div>
								<div>
									<input
										type="submit"
										className="subButton"
									/>
								</div>

								<div>{this.state.sucessMessage}</div>
							</fieldset>
						</form>
					</div>

					<aside className="four columns footer-widgets">
						<div className="widget widget_contact">
							<h4>Address and Phone</h4>
							<p className="address">
								{name}
								<br />
								{street} <br />
								{city}, {state} {zip}
								<br />
								<span>{phone}</span>
								<br />
								{email}
							</p>
						</div>
					</aside>
				</div>
			</section>
		);
	}
}

export default Contact;
