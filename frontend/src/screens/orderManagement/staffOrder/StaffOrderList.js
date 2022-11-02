import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderStaffAction } from "../../../actions/orderAction";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import { useState } from "react";
import MainScreen from "../../../components/MainScreen";

export default function StaffOrderList() {
	const dispatch = useDispatch();

	const staff_Login = useSelector((state) => state.staff_Login);
	const { staffInfo } = staff_Login;

	const order_List_Staff = useSelector((state) => state.order_List_Staff);
	const { loading, orders, error } = order_List_Staff;

	console.log(orders);
	const [search, setSearch] = useState("");
	let searchHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase();
		setSearch(lowerCase);
	};

	const history = useHistory();
	useEffect(() => {
		dispatch(getOrderStaffAction());
	}, [dispatch, history, staffInfo]);
	if (staffInfo) {
		return (
			<div style={{ minHeight: 700, backgroundColor: "#f0f0f0" }} className="orders">
				<br></br>
				<MainScreen title="Order List View By Staff">
					<br></br>
					<div className="search" style={{ marginTop: 5 }}>
						<Form inline>
							<input
								type="text"
								placeholder="Enter Order No Or Status"
								onChange={searchHandler}
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

						<Link to="/staff">
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
								size="lg"
							>
								Back to dashboard
							</Button>
						</Link>
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
										Site
									</th>
									<th
										style={{
											width: 50,
											fontSize: 20,
										}}
									>
										Supplier
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
								{orders
									?.reverse()
									.filter(
										(filteredB) =>
											filteredB.status.toLowerCase().includes(search.toLowerCase()) ||
											filteredB.orderNo.includes(search)
									)
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
												{order.supplierName}
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
													href={`/proudct-to-approve-staff/${order._id}`}
												>
													<i class="fa-solid fa-pen-to-square"></i>
												</Button>
												&emsp;
												<span>
													<Button
														style={{
															fontSize: 12,
															backgroundColor: "black",
															borderRadius: 0,
															border: "3px solid white",
														}}
														href={`/product-staff/${order._id}`}
													>
														<i class="fa-solid fa-circle-info"></i>
													</Button>
												</span>
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
