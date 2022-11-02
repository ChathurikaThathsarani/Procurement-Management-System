import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../../actions/productAction";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import { useState } from "react";
import MainScreen from "../../../components/MainScreen";
import { viewProductForSiteManagerAction } from "../../../actions/productAction";
export default function ViewProductToSiteManager() {
	const dispatch = useDispatch();

	//call the action to veiw all supplier material details for site manager
	useEffect(() => {
		dispatch(viewProductForSiteManagerAction());
	}, [dispatch]);

	const siteManager_Login = useSelector((state) => state.siteManager_Login);
	const { siteManagerInfo } = siteManager_Login;

	//view all supplier material details
	const viewProductListForSiteManager = useSelector((state) => state.viewProductListForSiteManager);
	const { loading, product, error } = viewProductListForSiteManager;

	const [search, setSearch] = useState("");
	let searchHandler = (e) => {
		var lowerCase = e.target.value.toLowerCase();
		setSearch(lowerCase);
	};

	const history = useHistory();
	//call the action to get all supplier material details
	useEffect(() => {
		dispatch(listProductAction());
		if (!siteManagerInfo) {
			history.push("/access-denied");
		}
	}, [dispatch, history, siteManagerInfo]);

	if (siteManagerInfo) {
		return (
			<div style={{ backgroundColor: "#f0f0f0" }}>
				<MainScreen title="Supplier Product List">
					<div style={{ minHeight: 700, marginTop: 50 }} className="supplierProduct">
						<div className="search" style={{ marginTop: 50 }}>
							<Form inline>
								<input
									type="text"
									placeholder="Enter Product Name"
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
									<Link to="/site-manager">
										<Button
											variant="success"
											style={{
												marginBottom: 6,
												fontSize: 15,
												backgroundColor: "black",
												borderRadius: 0,
												border: "1px solid white",
											}}
											size="lg"
										>
											Back To dashboard
										</Button>
									</Link>
								</Col>
							</Row>
						</div>

						<br />
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
												width: 280,
												fontSize: 20,
											}}
										>
											Company Name
										</th>

										<th
											style={{
												width: 280,
												fontSize: 20,
											}}
										>
											Product Name
										</th>
										<th
											style={{
												width: 280,
												fontSize: 20,
											}}
										>
											Product Price
										</th>
										<th
											style={{
												width: 280,
												fontSize: 20,
											}}
										>
											Product Description
										</th>
									</tr>
								</thead>

								<tbody>
									{product
										?.reverse()
										.filter((filteredB) => filteredB.productName.includes(search))
										.map((prod) => (
											<tr
												key={prod._id}
												style={{
													boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
												}}
											>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{prod.companyName}
												</td>

												<td
													style={{
														fontSize: 20,
													}}
												>
													{prod.productName}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{prod.productPrice}
												</td>
												<td
													style={{
														fontSize: 20,
													}}
												>
													{prod.productDescription}
												</td>

												<td></td>
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
