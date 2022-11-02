import React from "react";
import "./bootstrap.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomePage = () => {
	return (
		<div>
			<header className="masthead">
				<div className="container">
					<div className="masthead-subheading">Welcome To Eagle Building Contracting!</div>
					<div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
					<Link to="about-us">
						<Button
							size="lg"
							style={{
								width: 250,
								height: 70,
								fontSize: 20,
								borderRadius: 0,
								backgroundColor: "transparent",
								border: "4px solid white",
							}}
						>
							Tell Me More
						</Button>
					</Link>
				</div>
			</header>
			<section className="page-section" id="services">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">Services</h2>
						<h3 className="section-subheading text-muted">Let's take a look at our services.</h3>
					</div>
					<div className="row text-center">
						<div className="col-md-4">
							<span className="fa-stack fa-4x">
								<i className="fas fa-circle fa-stack-2x black-color"></i>
								<i className="fas fa-sharp fa-solid fa-person-digging fa-stack-1x fa-inverse white-color"></i>
							</span>
							<h4 className="my-3">Labor</h4>
							<p className="text-muted">
								Setup your work crews by assigning employees, equipment, rental and materials onto sites.
							</p>
						</div>
						<div className="col-md-4">
							<span className="fa-stack fa-4x">
								<i className="fas fa-circle fa-stack-2x black-color"></i>
								<i className="fas fa-solid fa-screwdriver-wrench fa-stack-1x fa-inverse"></i>
							</span>
							<h4 className="my-3">Equipment</h4>
							<p className="text-muted">
								Various kind of equipments are provided within organization to provide a better service to the client.
							</p>
						</div>
						<div className="col-md-4">
							<span className="fa-stack fa-4x">
								<i className="fas fa-circle fa-stack-2x black-color"></i>
								<i className="fas fa-comments fa-stack-1x fa-inverse"></i>
							</span>
							<h4 className="my-3">Q & A</h4>
							<p className="text-muted">
								Ask your questions related to your dream building and get the answers from our experts.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="page-section " id="workout">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">Our Projects</h2>
						<h3 className="section-subheading text-muted">Look at our successful stories with our precious clients.</h3>
					</div>
					<div className="row">
						<div className="col-lg-4 col-sm-6 mb-4">
							<div className="workout-item">
								<img
									style={{
										height: 200,
										width: 400,
									}}
									className="img-fluid"
									src="https://i.pinimg.com/originals/f0/ec/03/f0ec03bf242b2f5bc5dcdb765451de72.jpg"
									alt="..."
								/>
								<div className="workout-caption"></div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<div className="workout-item">
								<img
									style={{
										height: 200,
										width: 400,
									}}
									className="img-fluid"
									src="http://4.bp.blogspot.com/-B9Ae3AP8kh4/T_MjSazeLXI/AAAAAAAAVg0/PH68wZlzHHQ/w1200-h630-p-k-no-nu/DSC00118.JPG"
									alt="..."
								/>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<div className="workout-item">
								<img
									style={{
										height: 200,
										width: 400,
									}}
									className="img-fluid"
									src="http://photonshouse.com/photo/ba/ba0f0d13834545a0f06bec108b8c13f4.jpg"
									alt="..."
								/>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
							<div className="workout-item">
								<img
									style={{
										height: 200,
										width: 400,
									}}
									className="img-fluid"
									src="https://gkmassoc.com/sites/default/files/2015011795125325.jpg"
									alt="..."
								/>

								<div className="workout-caption"></div>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6">
							<div className="workout-item">
								<img
									style={{
										height: 200,
										width: 400,
									}}
									className="img-fluid"
									src="http://www.ibsflanka.com/images/2000/600/b-construction?h=80d656a6"
									alt="..."
								/>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="workout-item">
								<img
									style={{
										height: 200,
										width: 400,
									}}
									className="img-fluid"
									src="https://lexduco.lk/web/assets/projects/58ee7207c6b91ecfdddc74f8bdda46bb.jpg"
									alt="..."
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
