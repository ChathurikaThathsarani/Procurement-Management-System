import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderToApproveOrderAction } from "../../../actions/orderAction";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import { authHeader } from "../../../actions/siteManagerAction";
import MainScreen from "../../../components/MainScreen";
import "./order.css";

export default function OrderToApprove({ match, history }) {
	// set the states to values
	const [orderNo, setOrderNo] = useState("");
	const [siteName, setSiteName] = useState("");
	const [placedDate, setPlacedDate] = useState("");
	const [requiredDate, setRequiredDate] = useState("");
	const [supplierName, setSupplierName] = useState("");
	const [productName, setProductName] = useState("");
	const [productQty, setProductQty] = useState("");
	const [totalCost, setTotalCost] = useState("");
	const [status, setStatus] = useState([]);

	// get the site manager login state
	const dispatch = useDispatch();
	const siteManager_Login = useSelector((state) => state.siteManager_Login);
	const { siteManagerInfo } = siteManager_Login;

	// state for approve order
	const orderToApprove = useSelector((state) => state.orderToApprove);
	const { loading, error } = orderToApprove;

	// get the order by id
	useEffect(() => {
		const fetching = async () => {
			const { data } = await axios.get(`/user/manager/order/${match.params.id}`, {
				headers: authHeader(),
			});
			setOrderNo(data.orderNo);
			setSiteName(data.siteName);
			setPlacedDate(data.placedDate);
			setRequiredDate(data.requiredDate);
			setSupplierName(data.supplierName);
			setProductName(data.productName);
			setProductQty(data.productQty);
			setTotalCost(data.totalPrice);
			setStatus(data.status);
		};

		fetching();
	}, [match.params.id]);

	// call the action to approve the order
	const updateHandler = (e) => {
		e.preventDefault();
		dispatch(orderToApproveOrderAction(match.params.id, status));
		if (!status) return;
	};
	if (siteManagerInfo) {
		return (
			<div className="orderToApprove">
				<br></br>

				<MainScreen title="Approve The Order">
					<br></br>
					<Button
						variant="success"
						style={{
							marginBottom: 6,
							fontSize: 15,
							backgroundColor: "black",
							border: "1px solid white",
							borderRadius: 0,
							boxShadow: "none",
						}}
						href="/orders"
					>
						{" "}
						Back to orders
					</Button>
					<br></br>
					<br></br>

					<Card
						style={{
							marginLeft: 60,
							width: "80%",
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
								<Form.Group controlId="orderNo">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Order No
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="orderNo"
										value={orderNo}
										readOnly
									/>
								</Form.Group>
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

								<Form.Group controlId="productName">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Product Name
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										value={productName}
										required
										readOnly
									/>
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
										readOnly
										required
									/>
								</Form.Group>
								<Form.Group controlId="totalCost">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Total Cost
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="number"
										value={totalCost}
										readOnly
									/>
								</Form.Group>
								<Form.Group controlId="status">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Status
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
										onChange={(e) => setStatus(e.target.value)}
										value={status}
									>
										<option value="Approved">Approved</option>
										<option value="Pending">Pending</option>
									</select>
								</Form.Group>
								<br></br>

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
