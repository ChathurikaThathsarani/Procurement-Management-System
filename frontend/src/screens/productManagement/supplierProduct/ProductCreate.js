import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../../../actions/productAction";
import { authHeader } from "../../../actions/supplierAction";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import MainScreen from "../../../components/MainScreen";
import axios from "axios";
import "./supplierProduct.css";

export default function ProductCreate({ history }) {
	const supplier_Login = useSelector((state) => state.supplier_Login);
	const { supplierInfo } = supplier_Login;
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productDescription, setProductDescription] = useState([]);

	//create supplier new material
	useEffect(() => {
		const fetching = async () => {
			const { data } = await axios.get(`user/supplier/product/create`, {
				headers: authHeader(),
			});
			console.log(data);
		};

		fetching();
	});

	const dispatch = useDispatch();

	const productCreate = useSelector((state) => state.productCreate);
	const { loading, error } = productCreate;

	// call the action to create new material
	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(createProductAction(supplierInfo._id, productName, productPrice, productDescription));
		if (!productName || !productPrice || !productDescription) return;
	};

	useEffect(() => {}, []);
	if (supplierInfo) {
		return (
			<div
				className="productCreate"
				style={{
					backgroundColor: "#f0f0f0",
				}}
			>
				<br></br>
				<MainScreen title="Create New Materials">
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
						href="/product-list"
					>
						{" "}
						Back to Product List
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

								<Form.Group controlId="prodname">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Product name
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="text"
										required
										value={productName}
										onChange={(e) => setProductName(e.target.value)}
									/>
								</Form.Group>
								<Form.Group controlId="prodprice">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Product Price
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										type="number"
										required
										value={productPrice}
										onChange={(e) => setProductPrice(e.target.value)}
									/>
								</Form.Group>

								<Form.Group controlId="proddescription">
									<Form.Label
										style={{
											fontSize: 20,
										}}
									>
										Product Description
									</Form.Label>
									<Form.Control
										style={{
											height: 40,
											fontSize: 18,
										}}
										as="textarea"
										required
										value={productDescription}
										onChange={(e) => setProductDescription(e.target.value)}
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
