import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { supplierLogout } from "../../../actions/supplierAction";
import "./Dashboard.css";
import MainScreen from "../../../components/MainScreen";

const SupplierDashboard = ({ history }) => {
	const supplier_Login = useSelector((state) => state.supplier_Login);
	const { supplierInfo } = supplier_Login;
	const dispatch = useDispatch();
	const logoutHandler = () => {
		dispatch(supplierLogout());
		history.push("/");
	};

	if (supplierInfo) {
		return (
			<div className="supplierBackground">
				<br></br>
				<MainScreen title={`Welcome Back ${supplierInfo && supplierInfo.ownerName}..`}>
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
									<Link to="/supplier-orders">
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
									<Link to="/product-list">
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
											Product Management
										</Button>
									</Link>
								</div>
								<br></br>
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

export default SupplierDashboard;
