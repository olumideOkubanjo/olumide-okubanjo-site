import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
	render() {
		if (this.props.info) {
			var description = this.props.info.description;
			var github = this.props.info.github;
			var linkedIn = this.props.info.linkedin;
			var fullName = this.props.info.name;
		}

		return (
			<header id="home">
				{/* You can change the type to "color", "ball", "lines" ,"thick", "circle"
				"cobweb", "polygon" ,"square" , "tadpole" , "fountain" */}
				<ParticlesBg type="cobweb" bg={true} color="#FFFFFF" />
				<nav id="nav-wrap">
					<a
						className="mobile-btn"
						href="#nav-wrap"
						title="Show navigation"
					>
						Show navigation
					</a>
					<a
						className="mobile-btn"
						href="#home"
						title="Hide navigation"
					>
						Hide navigation
					</a>

					<ul id="nav" className="nav">
						<li className="current">
							<a className="smoothscroll" href="#home">
								Home
							</a>
						</li>
						<li>
							<a className="smoothscroll" href="#about">
								About
							</a>
						</li>
						<li>
							<a className="smoothscroll" href="#resume">
								Resume
							</a>
						</li>
						<li>
							<a className="smoothscroll" href="#portfolio">
								Works
							</a>
						</li>
						<li>
							<a className="smoothscroll" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>

				<div className="row banner">
					<div className="banner-text">
						<h1 className="responsive-headline">{fullName}</h1>
						<h3>{description}.</h3>
						<hr />
						<ul className="social">
							<li>
								<a href={linkedIn}>
									<i className="fa fa-linkedin"></i>
								</a>
							</li>
							<li>
								<a href={github}>
									<i className="fa fa-github"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<p className="scrolldown">
					<a className="smoothscroll" href="#about">
						<i className="icon-down-circle"></i>
					</a>
				</p>
			</header>
		);
	}
}

export default Header;
