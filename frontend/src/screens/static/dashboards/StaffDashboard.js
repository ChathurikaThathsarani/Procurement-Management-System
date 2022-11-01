import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { staffLogout } from "../../../actions/staffAction";
import "./Dashboard.css";
import MainScreen from "../../../components/MainScreen";

const StaffDashboard = ({ history }) => {
	const staff_Login = useSelector((state) => state.staff_Login);
	const { staffInfo } = staff_Login;
	const dispatch = useDispatch();
	const logoutHandler = () => {
		dispatch(staffLogout());
		history.push("/");
	};

	if (staffInfo) {
		return (
			<div className="staffBackground">
				<br></br>
				<MainScreen title={`Welcome Back ${staffInfo && staffInfo.name}..`}>
					<Button
						variant="danger"
						onClick={logoutHandler}
						className="logoutBtn"
						style={{
							float: "right",
							marginTop: 3,
							fontSize: 15,
							borderRadius: 0,
							width: 100,
						}}
					>
						Logout
					</Button>

					<br></br>
					<br></br>

					<div className="loginContainer">
						<Card
							style={{
								borderRadius: 45,
								borderWidth: 2.0,
								marginTop: 20,
								paddingInline: 10,
								background: "rgba(231, 238, 238, 0.8)",
								marginLeft: "10%",
								marginRight: "10%",
								width: "60%",
							}}
						>
							<div className="intro-text">
								<br></br>
								<br></br>
								<div>
									<Link to="/">
										<Button
											variant="success"
											size="lg"
											className="landingbutton"
											style={{
												width: 350,
												height: 75,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
										>
											Order Management
										</Button>
									</Link>
								</div>
								<br></br>
								<div>
									<Link to="/">
										<Button
											variant="success"
											size="lg"
											className="landingbutton"
											style={{
												width: 350,
												height: 75,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
										>
											Site Management
										</Button>
									</Link>
								</div>
								<br></br>
								<div>
									<Link to="/good-receipts">
										<Button
											variant="success"
											size="lg"
											className="landingbutton"
											style={{
												width: 350,
												height: 75,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
										>
											Good Receipt Management
										</Button>
									</Link>
								</div>
								<br></br>
								<div>
									<Link to="/invoices">
										<Button
											variant="success"
											size="lg"
											className="landingbutton"
											style={{
												width: 350,
												height: 75,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
										>
											Invoice Management
										</Button>
									</Link>
								</div>
								<br></br>
								<div>
									<Link to="/site-manager-register">
										<Button
											variant="success"
											size="lg"
											className="landingbutton"
											style={{
												width: 350,
												height: 75,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
										>
											Site Manager Management
										</Button>
									</Link>
								</div>
								<br />
								<div>
									<Link to="/supplier-register">
										<Button
											variant="success"
											size="lg"
											className="landingbutton"
											style={{
												width: 350,
												height: 75,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
										>
											Supplier Management
										</Button>
									</Link>
								</div>
								<br />
								<div>
									<Link to="/staff-register">
										<Button
											variant="success"
											size="lg"
											className="landingbutton"
											style={{
												width: 350,
												height: 75,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
										>
											Staff Management
										</Button>
									</Link>
								</div>
								<br />

								<div>
									<Link to="/view-products-for-staff">
										<Button
											variant="success"
											size="lg"
											className="landingbutton"
											style={{
												width: 350,
												height: 75,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
												boxShadow: "none",
											}}
										>
											Supplier Products
										</Button>
									</Link>
								</div>
								<br></br>
							</div>
						</Card>
					</div>
				</MainScreen>
				<br></br>
				<br></br>
			</div>
		);
	} else {
		return (
			<div className="denied">
				<MainScreen />
				<br></br>
			</div>
		);
	}
};

export default StaffDashboard;
