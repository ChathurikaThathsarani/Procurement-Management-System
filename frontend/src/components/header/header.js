import React from "react";
import "./navbar.css";
//import image1 from "./logo.PNG";
import { Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header({ setSearch }) {
	const siteManager_Login = useSelector((state) => state.siteManager_Login);
	const { siteManagerInfo } = siteManager_Login;

	const supplier_Login = useSelector((state) => state.supplier_Login);
	const { supplierInfo } = supplier_Login;

	const staff_Login = useSelector((state) => state.staff_Login);
	const { staffInfo } = staff_Login;

	return (
		<div className="Navbar">
			{/* <div className="leftSide">
        <img src={image1} alt="" />
      </div> */}
			<div className="rightSide">
				<div className="links">
					<ButtonGroup className="mb-2" size="lg" style={{ width: "100%", marginTop: "2%" }}>
						<Button variant="" style={{ color: "white", fontSize: "20px", marginLeft: "35px" }} href="/">
							HOME
						</Button>

						<Button variant="" style={{ color: "white", fontSize: "20px", marginLeft: "35px" }} href="/">
							ABOUT US
						</Button>

						<Button variant="" style={{ color: "white", fontSize: "20px", marginLeft: "35px" }} href="/">
							Terms And Conditions
						</Button>

						<Button variant="" style={{ color: "white", fontSize: "20px", marginLeft: "35px" }} href="/contactus">
							CONTACT US
						</Button>
					</ButtonGroup>
				</div>

				{siteManagerInfo || staffInfo || supplierInfo ? (
					<></>
				) : (
					<Link to="/login-select">
						<Button
							style={{
								padding: "8px",
								fontSize: "15px",
								fontFamily: `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
									Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
								width: "150px",
								backgroundColor: "transparent",
								borderRadius: 0,
								border: "1px solid white",
								color: "white",
								fontWeight: 700,
							}}
							variant="primary"
							className="logoutBtn"
						>
							Login
						</Button>
					</Link>
				)}
				{supplierInfo ? (
					<Link to="/supplier">
						<Button
							style={{
								padding: "8px",
								fontSize: "15px",
								fontFamily: `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
									Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
								width: "150px",
								backgroundColor: "transparent",
								borderRadius: 0,
								border: "1px solid white",
								color: "white",
								fontWeight: 700,
							}}
							className="logoutBtn"
						>
							Dashboard
						</Button>
					</Link>
				) : (
					<></>
				)}
				{siteManagerInfo ? (
					<Link to="/site-manager">
						<Button
							style={{
								padding: "8px",
								fontSize: "15px",
								fontFamily: `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
									Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
								width: "150px",
								backgroundColor: "transparent",
								borderRadius: 0,
								border: "1px solid white",
								color: "white",
								fontWeight: 700,
							}}
							variant="primary"
							className="logoutBtn"
						>
							Dashboard
						</Button>
					</Link>
				) : (
					<></>
				)}
				{staffInfo ? (
					<Link to="/staff">
						<Button
							style={{
								padding: "8px",
								fontSize: "15px",
								fontFamily: `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
									Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
								width: "150px",
								backgroundColor: "transparent",
								borderRadius: 0,
								border: "1px solid white",
								color: "white",
								fontWeight: 700,
							}}
							variant="primary"
							className="logoutBtn"
						>
							Dashboard
						</Button>
					</Link>
				) : (
					<></>
				)}
			</div>
			<br />
		</div>
	);
}

export default Header;
