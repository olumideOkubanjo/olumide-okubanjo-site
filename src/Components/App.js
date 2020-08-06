import React, { Component } from "react";
import $ from "jquery";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resumeInfo: {},
		};
	}

	componentDidMount() {
		this.fetchResumeInfo();
	}

	fetchResumeInfo() {
		$.ajax({
			url: "./resumeData.json",
			dataType: "json",
			cache: false,
			success: function (data) {
				this.setState({ resumeInfo: data });
			}.bind(this),
			error: function (xhr, status, err) {
				console.log(err);
				alert(err);
			},
		});
	}

	render() {
		return (
			<div>
				<Header info={this.state.resumeInfo.main} />
				<About info={this.state.resumeInfo.main} />
				<Resume info={this.state.resumeInfo.resume} />
				<Portfolio info={this.state.resumeInfo.portfolio} />
				<Contact info={this.state.resumeInfo.main} />
				<Footer info={this.state.resumeInfo.main} />
			</div>
		);
	}
}

export default App;
