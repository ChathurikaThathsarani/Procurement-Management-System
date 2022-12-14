import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listGoodReceipts } from "../../actions/goodReceiptAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useState } from "react";
import MainScreen from "../../components/MainScreen";

export default function GoodReceiptList() {
	// get staff login state
	const dispatch = useDispatch();
	const staff_Login = useSelector((state) => state.staff_Login);
	const { staffInfo } = staff_Login;

	// get the good receipt list
	const goodReceiptList = useSelector((state) => state.goodReceiptList);
	const { loading, goodReceipts, error } = goodReceiptList;

	// search handler
	const [search, setSearch] = useState("");
	let inputHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase();
		setSearch(lowerCase);
	};

	// render the good receipt list
	const history = useHistory();
	useEffect(() => {
		dispatch(listGoodReceipts());
	}, [dispatch, history, staffInfo]);

	if (staffInfo) {
		return (
			<div style={{ minHeight: 700, backgroundColor: "#f0f0f0" }} className="orders">
				<br></br>
				<MainScreen title="Good Receipt List">
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
						href="/placed-orders"
					>
						{" "}
						+ New Receipt
					</Button>
					<br></br>
					<div className="search" style={{ marginTop: 5 }}>
						<Form inline>
							<input
								type="text"
								placeholder="Enter the Order No"
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
										Product Name
									</th>
									<th
										style={{
											width: 50,
											fontSize: 20,
										}}
									>
										Product Quantity
									</th>
									<th
										style={{
											width: 10,
											fontSize: 20,
										}}
									>
										Delivery Date
									</th>
								</tr>
							</thead>

							<tbody>
								{goodReceipts
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
												{order.productName}
											</td>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.productQuantity}
											</td>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.deliveryDate}
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
