import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import MainScreen from "../../../components/MainScreen";
import ErrorMessage from "../../../components/ErrorMessage";
import Loading from "../../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { staffLogin } from "../../../actions/staffAction";
const StaffLoginScreen = () => {
	//set initial states
	const [nic, setNic] = useState("");
	const [password, setPassword] = useState("");

	//A hook to access the redux dispatch function.
	const dispatch = useDispatch();

	//get staff login state from store
	const staff_Login = useSelector((state) => state.staff_Login);
	const { loading, error } = staff_Login;

	//submit login details
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(staffLogin(nic, password));
	};

	//render screen of staff login
	return (
		<div className="staffLoginBg">
			<br></br>
			<MainScreen title="LOGIN - PROCUREMENT STAFF">
				<br></br>
				<br></br>
				<Card
					className="profileCont"
					style={{
						marginLeft: "20%",
						marginRight: "10%",
						borderWidth: 5.0,
						borderColor: "black",
						marginTop: 20,
						paddingInline: 35,
						background: "rgba(231, 238, 238, 0.9)",
						width: 600,
						borderRadius: 20,
					}}
				>
					<br></br>
					<br></br>
					<div className="StaffLoginContainer">
						{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
						{loading && <Loading />}
						<Form onSubmit={submitHandler}>
							<Form.Group controlId="formBasicEmail">
								<Form.Label style={{ fontSize: 20 }}>NIC Number</Form.Label>
								<Form.Control
									type="text"
									value={nic}
									placeholder="Enter NIC"
									onChange={(e) => setNic(e.target.value)}
									required
								/>
							</Form.Group>
							<br></br>
							<Form.Group controlId="formBasicPassword">
								<Form.Label style={{ fontSize: 20 }}>Password</Form.Label>
								<Form.Control
									type="password"
									value={password}
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</Form.Group>

							<Button
								variant="primary"
								type="submit"
								className="loginBtn"
								style={{
									fontSize: 15,
									float: "right",
									marginTop: 5,
									backgroundColor: "black",
									borderRadius: 0,
									border: "1px solid white",
									width: 100,
								}}
							>
								Submit
							</Button>
						</Form>
					</div>
					<br></br>
				</Card>
			</MainScreen>
		</div>
	);
};

export default StaffLoginScreen;
