import { Link, useHistory } from "react-router-dom";
import { Button, Row, Col, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MainScreen from "../../components/MainScreen";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSiteAction, listsiteAction } from "../../actions/siteAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./siteMangement.css";
import swal from "sweetalert";

export default function SiteList() {
	// get staff login state
	const dispatch = useDispatch();
	const staff_Login = useSelector((state) => state.staff_Login);
	const { staffInfo } = staff_Login;

	// state for site list
	const site_view_list = useSelector((state) => state.site_view_list);
	const { loading, sites, error } = site_view_list;

	// state for site upadate
	const site_Management_Update = useSelector((state) => state.site_Management_Update);
	const { success: successUpdate } = site_Management_Update;

	// state for site delete
	const site_Management_delete = useSelector((state) => state.site_Management_delete);
	const { loading: loadingDelete, error: errorDelete, success: successDelete } = site_Management_delete;
	console.log(sites);

	const [search, setSearch] = useState("");

	// search handler
	const searchHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase();
		setSearch(lowerCase);
	};
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
					dispatch(deleteSiteAction(id));
					swal({
						title: "Success!",
						text: "Deleted Site Successfully",
						icon: "success",
						timer: 2000,
						button: false,
					});
					history.push("/site-management-view");
				}
			})
			.catch((err) => {
				swal({
					title: "Error!",
					text: "Couldn't Delete Site",
					type: "error",
				});
			});
	};
	// render  site list
	const history = useHistory();
	useEffect(() => {
		dispatch(listsiteAction());
	}, [dispatch, staffInfo, successUpdate, successDelete, history]);
	if (staffInfo) {
		return (
			<div className="SiteBackgroundView">
				<MainScreen title="Site List">
					<div style={{ minHeight: 700, marginTop: 50 }} className="">
						<div className="search" style={{ marginTop: 50 }}>
							<Form inline>
								<input
									type="text"
									placeholder="Enter the Site Name"
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
						</div>
						<br></br>
						<div>
							<Row>
								<Col>
									<Link to="/site-management-create">
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
											+ Add New Site
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
												width: 200,
												fontSize: 20,
											}}
										>
											Site ID
										</th>
										<th
											style={{
												width: 200,
												fontSize: 20,
											}}
										>
											Site Name
										</th>
										<th
											style={{
												width: 200,
												fontSize: 20,
											}}
										>
											Site Address
										</th>
										<th
											style={{
												width: 200,
												fontSize: 20,
											}}
										>
											Contact No
										</th>
										<th
											style={{
												width: 200,
												fontSize: 20,
											}}
										>
											Budget
										</th>
										<th
											style={{
												width: 200,
												fontSize: 20,
											}}
										>
											Site Manager
										</th>

										<th
											style={{
												width: 200,
												fontSize: 20,
											}}
										>
											Action
										</th>
									</tr>
								</thead>

								<tbody>
									{sites
										?.reverse()
										.filter((filteredB) => filteredB.siteName.includes(search))
										.map((siteManagements) => (
											<tr
												key={siteManagements._id}
												style={{
													boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
												}}
											>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{siteManagements.siteId}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{siteManagements.siteName}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{siteManagements.siteAddress}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{siteManagements.siteContactNumber}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{siteManagements.budget}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{siteManagements.siteManagerName}
												</td>

												<td>
													<Link to={`/site-management/${siteManagements._id}`}>
														<i class="fa-solid fa-pen-to-square"></i>
													</Link>
													&emsp;
													<span onClick={() => deleteHandler(siteManagements._id)}>
														<i
															class="fa-solid fa-trash"
															onClick={() => deleteHandler(siteManagements._id)}
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

// href={`/site-management/${siteManagements._id}`}
