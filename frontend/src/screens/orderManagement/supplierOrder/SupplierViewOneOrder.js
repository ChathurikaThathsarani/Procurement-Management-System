import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { authHeader } from "../../../actions/supplierAction";
import MainScreen from "../../../components/MainScreen";

export default function SupplierViewOneOrder({ match, history }) {
	// set order to values
	const [orderNo, setOrderNo] = useState("");
	const [siteName, setSiteName] = useState("");
	const [placedDate, setPlacedDate] = useState("");
	const [requiredDate, setRequiredDate] = useState("");
	const [productName, setProductName] = useState("");
	const [productQty, setProductQty] = useState("");
	const [totalCost, setTotalCost] = useState("");
	const [status, setStatus] = useState("");
	const [deleiveryDate, setDeleiveryDate] = useState("");
	const [supplierComment, setSupplierComment] = useState("");

	// get state of supplier login
	const supplier_Login = useSelector((state) => state.supplier_Login);
	const { supplierInfo } = supplier_Login;

	// get one order by id
	useEffect(() => {
		const fetching = async () => {
			const { data } = await axios.get(`/user/supplier/order/${match.params.id}`, {
				headers: authHeader(),
			});
			setOrderNo(data.orderNo);
			setSiteName(data.siteName);
			setPlacedDate(data.placedDate);
			setRequiredDate(data.requiredDate);
			setProductName(data.productName);
			setProductQty(data.productQty);
			setTotalCost(data.totalPrice);
			setStatus(data.status);
			setDeleiveryDate(data.deleiveryDate);
			setSupplierComment(data.supplierComment);
		};

		fetching();
	}, [match.params.id]);

	if (supplierInfo) {
		return (
			<div className="supplierOneOrder">
				<br></br>

				<MainScreen title="Order Details">
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
						href="/supplier-orders"
					>
						{" "}
						Back to orders
					</Button>
					<br></br>
					<br></br>
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
							<Form>
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
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="status"
										value={status}
									/>
								</Form.Group>

								<Form.Group controlId="deleiveryDate">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Delivery Date
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="date"
										value={deleiveryDate}
									/>
								</Form.Group>

								<Form.Group controlId="supplierComment">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Supplier Comment
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="supplierComment"
										value={supplierComment}
									/>
								</Form.Group>
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
