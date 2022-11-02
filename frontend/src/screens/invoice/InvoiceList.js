import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listInvoice } from "../../actions/invoiceAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useState } from "react";
import MainScreen from "../../components/MainScreen";

export default function InvoiceList() {
	const dispatch = useDispatch();

	const staff_Login = useSelector((state) => state.staff_Login);
	const { staffInfo } = staff_Login;

	// get the invoice list
	const invoiceList = useSelector((state) => state.invoiceList);
	const { loading, invoices, error } = invoiceList;

	const [search, setSearch] = useState("");
	let inputHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase();
		setSearch(lowerCase);
	};

	const history = useHistory();
	useEffect(() => {
		dispatch(listInvoice());
	}, [dispatch, history, staffInfo]);
	if (staffInfo) {
		return (
			<div style={{ minHeight: 700, backgroundColor: "#f0f0f0" }} className="orders">
				<br></br>
				<MainScreen title="Invoice List">
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
						href="/invoice-placed-orders"
					>
						{" "}
						+ New Receipt
					</Button>
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
										Bank
									</th>
									<th
										style={{
											width: 50,
											fontSize: 20,
										}}
									>
										Branch
									</th>
									<th
										style={{
											width: 10,
											fontSize: 20,
										}}
									>
										Acc Number
									</th>
									<th
										style={{
											width: 10,
											fontSize: 20,
										}}
									>
										Amount
									</th>
									<th
										style={{
											width: 10,
											fontSize: 20,
										}}
									>
										Deposit Date
									</th>
								</tr>
							</thead>

							<tbody>
								{invoices
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
												{order.bank}
											</td>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.branch}
											</td>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.accountNumber}
											</td>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.depositAmount}
											</td>
											<td
												style={{
													fontSize: 20,
												}}
											>
												{order.depositDate}
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
