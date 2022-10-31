import React from "react";
import "./footer.css";
//import logo1 from "./logo.PNG";
import { Row } from "react-bootstrap";

function Footer() {
	return (
		<div className="main-footer">
			<div className="container" style={{ marginLeft: "1%" }}>
				<div className="row">
					{/* Column1 */}
					{/* <div className="col">
            <img src={logo1} alt="" style={{ width: "75%", height: "100%" }} />
          </div> */}
					<div>
						<Row style={{ marginLeft: 500 }}>
							{/* Column2 */}
							<div className="col" style={{ marginTop: "10%" }}>
								<h4>QUICK LINKS</h4>
								<li className="list-unstyled">
									<a href="/">HOME</a>
									<br></br>
									<a href="/aboutus">ABOUT US</a>
									<br></br>
									<a href="/">PROJECTS</a>
									<br></br>
									<a href="/bmi-calculator">JOIN OUR TEAM</a>
								</li>
							</div>
							{/* Column3 */}
							<div className="col" style={{ marginTop: "10%" }}>
								<h4>POPULAR LINKS</h4>
								<li className="list-unstyled">
									<a href="/contactus">CONTACT US</a>
									<br></br>
									<a href="/">JOIN US</a>
									<br></br>
									<a href="/terms-and-conditions">TERMS & CONDITIONS</a>
									<br></br>
									<a href="/">SERVICES</a>
								</li>
							</div>
							{/* Column4 */}
							<div className="col" style={{ marginTop: "10%" }}>
								<h4>CONTACT</h4>
								<ul className="list-unstyled">
									<li>ADDRESS : Eagle Building Contracting, Galle Road, Colombo</li>
									<li>PHONE : 077 7785441</li>
									<li>EMAIL : eaglebuildingcontracting@gmail.com</li>
								</ul>
							</div>
						</Row>
					</div>
				</div>
				<hr />
				<div className="row">
					<p className="col-sm">
						&copy;{new Date().getFullYear()} site by ByteSquad | Eagle Building Contracting | All rights reserved |
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
