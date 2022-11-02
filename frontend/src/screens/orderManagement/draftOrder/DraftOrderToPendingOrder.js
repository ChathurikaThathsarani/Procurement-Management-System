import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { draftOrderToPendingOrderAction } from "../../../actions/orderAction";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import { authHeader } from "../../../actions/siteManagerAction";
import MainScreen from "../../../components/MainScreen";
import "./draftOrder.css";

export default function DraftOrderToPendingOrder({ match, history }) {
	// set the states to values
	const [siteName, setSiteName] = useState("");
	const [supplierName, setSupplierName] = useState("");
	const [placedDate, setPlacedDate] = useState("");
	const [requiredDate, setRequiredDate] = useState("");
	const [productName, setProductName] = useState("");
	const [productQty, setProductQty] = useState("");
	const [myArray, setMyArray] = useState([]);

	// get the site manager login state
	const dispatch = useDispatch();
	const siteManager_Login = useSelector((state) => state.siteManager_Login);
	const { siteManagerInfo } = siteManager_Login;

	const draftOrderToPending = useSelector((state) => state.draftOrderToPending);
	const { loading, error } = draftOrderToPending;

	useEffect(() => {
		// get the order by id
		const fetching = async () => {
			const { data } = await axios.get(`/user/manager/order/${match.params.id}`, {
				headers: authHeader(),
			});
			console.log(data);
			setSiteName(data.siteName);
			setSupplierName(data.supplierName);
			setPlacedDate(data.placedDate);
			setRequiredDate(data.requiredDate);
		};

		// get products list according to selected supplier company name
		const fetchingProducts = async () => {
			const { data } = await axios.get(`/user/manager/orders/draft/products/${match.params.id}`, {
				headers: authHeader(),
			});
			setMyArray(data);
			console.log(myArray);
		};

		fetching();
		fetchingProducts();
	}, [match.params.id, myArray]);

	// call the action to convert draft to pending order
	const updateHandler = (e) => {
		e.preventDefault();
		dispatch(draftOrderToPendingOrderAction(match.params.id, productName, productQty));
		if (!productName || !productQty) return;
	};
	if (siteManagerInfo) {
		return (
			<div className="draftOrderToPending">
				<br></br>

				<MainScreen title="Add The Products">
					<br></br>
					<Button
						variant="success"
						style={{
							marginBottom: 6,
							fontSize: 15,
							backgroundColor: "black",
							borderRadius: 0,
							border: "1px solid white",
							height: 40,
							boxShadow: "none",
						}}
						href="/draft-orders"
					>
						{" "}
						Back to draft orders
					</Button>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<Card
						style={{
							marginLeft: 60,
							width: "70%",
							borderWidth: 0,
							padding: 25,
							outline: "none",
							background: "rgba(231, 238, 238, 0.8)",
							borderRadius: 0,
						}}
					>
						<Card.Body>
							<Form onSubmit={updateHandler}>
								{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
								<Form.Group controlId="sitename">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Site Name
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="sitename"
										value={siteName}
										readonly
									/>
								</Form.Group>

								<Form.Group controlId="supplierName">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Supplier Name
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										required
										value={supplierName}
										readOnly
									/>
								</Form.Group>

								<Form.Group controlId="placedDate">
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
										readonly
									/>
								</Form.Group>
								<Form.Group controlId="requiredDate">
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
										readonly
									/>
								</Form.Group>
								<Form.Group controlId="productName">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Product Name
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
										onChange={(e) => setProductName(e.target.value)}
									>
										<option value="Select">Select</option>
										{myArray.map((product) => (
											<option value={product.productName}>{product.productName}</option>
										))}
									</select>
								</Form.Group>
								<Form.Group controlId="productQty">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Product Quantity
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="number"
										value={productQty}
										onChange={(e) => setProductQty(e.target.value)}
										required
									/>
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
