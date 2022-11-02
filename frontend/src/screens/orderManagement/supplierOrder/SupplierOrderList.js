import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supplierlistOrders } from "../../../actions/orderAction";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import { useState } from "react";
import MainScreen from "../../../components/MainScreen";

export default function SupplierOrderList() {
	const dispatch = useDispatch();

	const supplier_Login = useSelector((state) => state.supplier_Login);
	const { supplierInfo } = supplier_Login;

	// get the orders for a selected supplier
	const supplier_Orders = useSelector((state) => state.supplier_Orders);
	const { loading, supplierOrders, error } = supplier_Orders;

	const [search, setSearch] = useState("");
	let inputHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase();
		setSearch(lowerCase);
	};

	const history = useHistory();
	useEffect(() => {
		dispatch(supplierlistOrders());
	}, [dispatch, history, supplierInfo]);
	if (supplierInfo) {
		return (
			<div style={{ minHeight: 700, backgroundColor: "#f0f0f0" }} className="orders">
				<br></br>
				<MainScreen title="Supplier Order List">
					<br></br>
					<div className="search" style={{ marginTop: 5 }}>
						<Form inline>
							<input
								type="text"
								placeholder="Enter the Order Number"
								onChange={inputHandler}
								style={{
									width: 260,
									height: 40,
									borderRadius: 50,
									padding: "10px",
									paddingLeft: "15px",
									marginLeft: 900,
								}}
							/>
						</Form>
					</div>
					<br></br>
					<br></br>
					{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
					{loading && <Loading />}
					<Table style={{ background: "white" }}>
						<>
							<thead>
								<tr
									style={{
										boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
										height: 60,
									}}
								>
									<th
										style={{
											width: 30,
											fontSize: 20,
										}}
									>
										Order No
									</th>
									<th
										style={{
											width: 50,
											fontSize: 20,
										}}
									>
										Site Name
									</th>
									<th
										style={{
											width: 10,
											fontSize: 20,
										}}
									>
										Product Name
									</th>

									<th
										style={{
											width: 10,
											fontSize: 20,
										}}
									>
										Total Price
									</th>
									<th
										style={{
											width: 10,
											fontSize: 20,
										}}
									>
										Status
									</th>
									<th
										style={{
											width: 10,
											fontSize: 20,
										}}
									>
										Action
									</th>
								</tr>
							</thead>

							<tbody>
								{supplierOrders
									?.reverse()
									.filter((filteredB) => filteredB.orderNo.includes(search))
									.map((order) => (
										<tr
											key={order._id}
											style={{
												boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
											}}
										>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.orderNo}
											</td>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.siteName}
											</td>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.productName}
											</td>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.totalPrice}
											</td>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.status}
											</td>
											<td>
												<Button
													style={{
														fontSize: 12,
														backgroundColor: "red",
														borderRadius: 0,
														border: "3px solid white",
													}}
													href={`/single-supplier-order-edit/${order._id}`}
													disabled={order.status === "Placed" || order.status === "Finished"}
												>
													<i class="fa-solid fa-pen-to-square"></i>
												</Button>
												<Button
													style={{
														fontSize: 12,
														backgroundColor: "black",
														borderRadius: 0,
														border: "3px solid white",
													}}
													href={`/single-supplier-order-view/${order._id}`}
												>
													<i class="fa-solid fa-circle-info"></i>
												</Button>
											</td>
										</tr>
									))}
							</tbody>
						</>
					</Table>
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
