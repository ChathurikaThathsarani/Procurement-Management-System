import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDraftOrders, deleteDraftOrderAction } from "../../../actions/orderAction";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import swal from "sweetalert";
import { useState } from "react";
import MainScreen from "../../../components/MainScreen";
export default function DraftOrderList() {
	// get the site manager login state
	const dispatch = useDispatch();
	const siteManager_Login = useSelector((state) => state.siteManager_Login);
	const { siteManagerInfo } = siteManager_Login;

	// get the draft order list
	const draftOrderList = useSelector((state) => state.draftOrderList);
	const { loading, draftOrders, error } = draftOrderList;

	// state for draft order delete
	const draftOrderDelete = useSelector((state) => state.draftOrderDelete);
	const { loading: loadingDelete, error: errorDelete, success: successDelete } = draftOrderDelete;

	// search handler
	const [search, setSearch] = useState("");
	let inputHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase();
		setSearch(lowerCase);
	};

	// delete handler
	const deleteHandler = (id) => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover these details!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
			.then((willDelete) => {
				if (willDelete) {
					dispatch(deleteDraftOrderAction(id));
					swal({
						title: "Success!",
						text: "Deleted Draft Order Successfully",
						icon: "success",
						timer: 2000,
						button: false,
					});
					history.push("/draft-orders");
				}
			})
			.catch((err) => {
				swal({
					title: "Error!",
					text: "Couldn't delete draft order",
					type: "error",
				});
			});
	};

	// render draft order list
	const history = useHistory();
	useEffect(() => {
		dispatch(listDraftOrders());
	}, [dispatch, history, siteManagerInfo, successDelete]);

	if (siteManagerInfo) {
		return (
			<div style={{ backgroundColor: "#f0f0f0" }}>
				<MainScreen title="Draft Order List">
					<div style={{ minHeight: 700, marginTop: 50 }} className="draftOrders">
						<div className="search" style={{ marginTop: 50 }}>
							<Form inline>
								<input
									type="text"
									placeholder="Enter the Supplier Name"
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
						<div>
							<Row>
								<Col>
									<Link to="/create-draft-order">
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
											+ New Draft Order
										</Button>
									</Link>
								</Col>
							</Row>
						</div>

						<br />
						{errorDelete && <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>}
						{loadingDelete && <Loading />}
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
											Site Name
										</th>
										<th
											style={{
												width: 50,
												fontSize: 20,
											}}
										>
											Supplier Name
										</th>
										<th
											style={{
												width: 50,
												fontSize: 20,
											}}
										>
											Placed date
										</th>
										<th
											style={{
												width: 10,
												fontSize: 20,
											}}
										>
											Required Date
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
									{draftOrders
										?.reverse()
										.filter((filteredB) => filteredB.supplierName.includes(search))
										.map((draft) => (
											<tr
												key={draft._id}
												style={{
													boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
												}}
											>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{draft.siteName}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{draft.supplierName}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{draft.placedDate}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{draft.requiredDate}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{draft.status}
												</td>
												<td>
													<Link to={`/draft-order-to-pending/${draft._id}`}>
														<i class="fa-solid fa-pen-to-square"></i>
													</Link>
													&emsp;
													<span onClick={() => deleteHandler(draft._id)}>
														<i
															class="fa-solid fa-trash"
															onClick={() => deleteHandler(draft._id)}
															style={{ cursor: "pointer" }}
														></i>
													</span>
												</td>
											</tr>
										))}
								</tbody>
							</>
						</Table>
						<br></br>
					</div>
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
