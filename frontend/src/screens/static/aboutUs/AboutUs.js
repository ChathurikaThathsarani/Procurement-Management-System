import React from "react";
import { Container, Row } from "react-bootstrap";
import "./AboutUs.css";

export const AboutUs = () => {
	return (
		<div className="abtMain">
			<Container>
				<Row>
					<center>
						<br />
						<div className="abtUs">
							<h2>About Us </h2>
							<hr />
							<p>
							    A well-equipped Building Contracting managed by a well-qualified instructors with experienced engineers.Located in the
								heart of Galle Town. We have recieved positive comments from almost all our customers.it is specially
					            recommended for build houses and buildings.
							</p>
						</div>
						<hr className="abtHr" />
						<hr className="abtHr" style={{ marginTop: "-16.4px" }} />
						<div class="row">
							<div class="col-6 col-sm-5">
								<div className="abtMission" style={{ marginLeft: "10px", marginRight: "-50px" }}>
									<h3>Our Mission </h3>
									<p>
									    Eagle Building Contracting is a procurement management system. Don’t let the word “procurement management” scare you because we’re redefining that term.
										Eagle Building Contracting !, today’s procurement management system, is a place where ambitious, motivated individuals work to reach their
										goals and is an intelligent approach to building houses and buildings. Here, you will become better at whatever it is you
										do. We welcome you to  Eagle Building Contracting. {" "}
									</p>
								</div>
							</div>
							<div class="col-2">
								<div class="abtvl" style={{ marginLeft: "75px" }}></div>
							</div>
							<div class="col-8 col-sm-5">
								<div className="abtVison" style={{ marginRight: "10px", marginLeft: "-100px" }}>
									<h3>Our Vision </h3>
									<p>
									At Eagle Building Contracting!, members who come to build their dream houses conduct programs to get an idea for their dream houses. It is very helpful for people.
                                    We hope to build their houses according to their ideas. As well as we give good products for you at low prices.
                                    people are very happy and more confident in our products.
                                    Come and Achieve your goal easily.
									</p>
									<br></br>
								</div>
							</div>

							<hr className="abtHr" />

							<hr className="abtHr" style={{ marginTop: "-16.4px" }} />
							<br />
							<br />
							<div className="abtOwner">
								<hr className="abtHr" style={{ marginTop: "-16.4px" }} />
								<div class="row" style={{ marginLeft: "150px" }}>
									<div class="col-6 col-sm-3">
										<br></br>
										<br></br>

										<img
											src="https://hairstylecamp.com/wp-content/uploads/hairstyle-for-middle-aged-men.jpg"
											alt="avatar"
											height="160px"
											width="150px"
											style={{ marginLeft: "100px", borderRadius: 90 }}
										></img>
									</div>
									<br></br>

									<div class="col-6 col-sm-6">
										<br></br>
										<h3>Owner</h3>
										<p>
										    As the owner of Eagle Building Contracting!, I would like to say that we have a group of talented, motivated
											and experienced engineers at our company. Take advantage and stop thinking about building the dream
											houses you always wanted and start taking action! Register now!
										</p>
									</div>
								</div>
								<br />
							</div>
						</div>
					</center>
				</Row>
			</Container>
		</div>
	);
};
