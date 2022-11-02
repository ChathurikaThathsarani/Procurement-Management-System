import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createSiteAction } from "../../actions/siteAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import MainScreen from "../../components/MainScreen";
import { authHeader } from "../../actions/staffAction";
import axios from "axios";
import "./siteMangement.css";

export default function CreateSite({ history }) {
	const [siteId, setSiteId] = useState("");
	const [siteName, setSiteName] = useState("");
	const [siteAddress, setSiteAddress] = useState("");
	const [siteContactNumber, setSiteContactNumber] = useState("");
	const [budget, setBudget] = useState("");
	const [siteManager, setSiteManager] = useState("");
	const [myArrayName, setMyArrayName] = useState([]);

	useEffect(() => {
		const fetching = async () => {
			const { data } = await axios.get(`/user/staff/site-managers/get`, {
				headers: authHeader(),
			});
			setMyArrayName(data);
		};

		fetching();
	});

	const dispatch = useDispatch();
	const staff_Login = useSelector((state) => state.staff_Login);
	const { staffInfo } = staff_Login;

	const Site_Management_Create = useSelector((state) => state.Site_Management_Create);
	const { loading, error } = Site_Management_Create;

	const resetHandler = () => {
		setSiteId("");
		setSiteName("");
		setSiteAddress("");
		setSiteContactNumber("");
		setBudget("");
		setSiteManager("");
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("hello");
		dispatch(createSiteAction(siteId, siteName, siteAddress, siteContactNumber, budget, siteManager));

		resetHandler();
		history.push("/site-management-view");
	};
	const demoHandler = async (e) => {
		e.preventDefault();
		setSiteId("ST006");
		setSiteName("Jaffna Redmark construction");
		setSiteAddress("No 16 Palachi road Jaffna");
		setSiteContactNumber("0112346578");
		setBudget("350000");
	};
	useEffect(() => {}, []);
	if (staffInfo) {
		return (
			<div className="SiteBackgroundCreate">
				<MainScreen title="CREATE A SITE">
					<Button
						variant="info"
						style={{
							marginBottom: 6,
							fontSize: 15,
							backgroundColor: "black",
							borderRadius: 0,
							border: "1px solid white",
							boxShadow: "none",
						}}
						size="lg"
						href="/site-management-view"
					>
						Back to Site List
					</Button>
					<br></br>
					<br></br>
					<br></br>
					<Card
						style={{
							margin: 50,
							marginLeft: "10%",
							marginRight: "0%",
							width: "80%",
							borderRadius: 0,
							borderWidth: 2.0,
							marginTop: 20,
							paddingInline: 10,
							background: "rgba(231, 238, 238, 0.9)",
						}}
					>
						<Card.Body>
							<Form onSubmit={submitHandler}>
								{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
								<Form.Group controlId="siteId">
									<Form.Label>Site ID</Form.Label>
									<Form.Control
										type="siteId"
										value={siteId}
										placeholder="Enter the Site ID"
										onChange={(e) => setSiteId(e.target.value)}
										required
									/>
								</Form.Group>
								<Form.Group controlId="Name">
									<Form.Label>Site Name</Form.Label>
									<Form.Control
										value={siteName}
										placeholder="Enter the Site Name"
										onChange={(e) => setSiteName(e.target.value)}
										required
									/>
								</Form.Group>
								<Form.Group controlId="SiteAddress">
									<Form.Label>Site Address</Form.Label>
									<Form.Control
										as="textarea"
										type="SiteAddress"
										value={siteAddress}
										placeholder="Enter the Site Address "
										onChange={(e) => setSiteAddress(e.target.value)}
										required
									/>
								</Form.Group>
								<Form.Group controlId="siteContactNumber">
									<Form.Label>Site Contact Number</Form.Label>
									<Form.Control
										type="text"
										value={siteContactNumber}
										placeholder="Enter the Site Contact Number "
										onChange={(e) => setSiteContactNumber(e.target.value)}
										required
									/>
								</Form.Group>
								<Form.Group controlId="Budget">
									<Form.Label>Budget</Form.Label>
									<Form.Control
										type="budget"
										value={budget}
										placeholder="Enter the Budget"
										onChange={(e) => setBudget(e.target.value)}
										required
									/>
								</Form.Group>
								<Form.Group controlId="siteManager">
									<Form.Label>Site Manager</Form.Label>
									<select
										style={{
											height: "30px",
											width: "100%",
											borderRadius: 5,
											borderColor: "#808080",
											borderWidth: 0.5,
										}}
										onChange={(e) => setSiteManager(e.target.value)}
									>
										<option value="Select">Select</option>
										{myArrayName.map((siteManager) => (
											<option value={siteManager.name}>{siteManager.name}</option>
										))}
									</select>
								</Form.Group>
								<br></br>
								{loading && <Loading size={50} />}
								<Button
									variant="primary"
									type="submit"
									style={{
										fontSize: 15,
										marginTop: 10,
										backgroundColor: "black",
										borderRadius: 0,
										border: "3px solid white",
									}}
								>
									Submit
								</Button>
								&emsp;
								<Button
									variant="danger"
									onClick={resetHandler}
									style={{
										fontSize: 15,
										marginTop: 10,
										backgroundColor: "red",
										borderRadius: 0,
										border: "3px solid white",
									}}
								>
									Reset
								</Button>
								&emsp;
								<Button
									variant="info"
									onClick={demoHandler}
									style={{
										fontSize: 15,
										marginTop: 10,
										backgroundColor: "blue",
										borderRadius: 0,
										border: "3px solid white",
									}}
								>
									Demo
								</Button>
							</Form>
							<br></br>
						</Card.Body>
					</Card>
					<br></br>
					<br></br>
				</MainScreen>
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
}
