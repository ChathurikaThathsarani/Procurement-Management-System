import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createDraftOrderAction } from "../../../actions/orderAction";
import { authHeader } from "../../../actions/siteManagerAction";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import MainScreen from "../../../components/MainScreen";
import axios from "axios";
import "./draftOrder.css";

export default function CreateDraftOrder({ history }) {
	// set the states to values
	const [placedDate, setPlacedDate] = useState("");
	const [requiredDate, setRequiredDate] = useState("");
	const [supplierName, setSupplierName] = useState("");
	const [myArray, setMyArray] = useState([]);

	// get all the supplier companies
	useEffect(() => {
		const fetching = async () => {
			const { data } = await axios.get(`/user/manager/order/draft/suppliers`, {
				headers: authHeader(),
			});
			setMyArray(data);
		};

		fetching();
	});

	// get site manager logun state
	const dispatch = useDispatch();
	const siteManager_Login = useSelector((state) => state.siteManager_Login);
	const { siteManagerInfo } = siteManager_Login;

	// state for draft order create
	const draftOrderCreate = useSelector((state) => state.draftOrderCreate);
	const { loading, error } = draftOrderCreate;

	// call the action to create draft order
	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(createDraftOrderAction(siteManagerInfo._id, placedDate, requiredDate, supplierName));
	};

	useEffect(() => {}, []);
	if (siteManagerInfo) {
		return (
			<div
				className="draftOrderCreate"
				style={{
					backgroundColor: "#f0f0f0",
				}}
			>
				<br></br>
				<MainScreen title="Create Draft Order">
					<br></br>
					<br></br>
					<Button
						variant="success"
						style={{
							marginBottom: 6,
							fontSize: 15,
							backgroundColor: "black",
							borderRadius: 0,
							border: "1px solid white",
							boxShadow: "none",
						}}
						href="/draft-orders"
					>
						{" "}
						Back to Draft Orders
					</Button>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<Card
						style={{
							width: "60%",
							borderWidth: 0,
							outline: "none",
							marginLeft: 100,
							borderRadius: 0,
							background: "rgba(231, 238, 238, 0.8)",
						}}
					>
						<Card.Body>
							<Form onSubmit={submitHandler}>
								{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

								<Form.Group controlId="placeddate">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Placed Date
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="date"
										required
										value={placedDate}
										onChange={(e) => setPlacedDate(e.target.value)}
									/>
								</Form.Group>

								<Form.Group controlId="requireddate">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Required Date
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="date"
										required
										value={requiredDate}
										onChange={(e) => setRequiredDate(e.target.value)}
									/>
								</Form.Group>
								<Form.Group controlId="supplier">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Supplier
									</Form.Label>
									<select
										style={{
											height: "35px",
											width: "100%",
											borderRadius: 5,
											borderColor: "#808080",
											borderWidth: 0.5,
											fontSize: 20,
										}}
										onChange={(e) => setSupplierName(e.target.value)}
									>
										<option value="Select">Select</option>
										{myArray.map((supplier) => (
											<option value={supplier.companyName}>{supplier.companyName}</option>
										))}
									</select>
								</Form.Group>

								{loading && <Loading size={50} />}
								<Button
									style={{
										width: 100,
										height: 40,
										backgroundColor: "black",
										borderRadius: 0,
										border: "3px solid white",
									}}
									type="submit"
									variant="primary"
								>
									Submit
								</Button>
							</Form>
						</Card.Body>
					</Card>
					<br></br>
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
