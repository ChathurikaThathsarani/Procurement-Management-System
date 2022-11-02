import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction, productDeleteAction } from "../../../actions/productAction";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import swal from "sweetalert";
import { useState } from "react";
import MainScreen from "../../../components/MainScreen";
export default function ProductList() {
	const dispatch = useDispatch();

	const supplier_Login = useSelector((state) => state.supplier_Login);
	const { supplierInfo } = supplier_Login;

	// get the supplier's product list
    const productList = useSelector((state) => state.productList);
	const { loading, product, error } = productList;

	const productCreate = useSelector((state) => state.productCreate);
	const { success: successCreate } = productCreate;

	const productDelete = useSelector((state) => state.productDelete);
	const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete;

	const [search, setSearch] = useState("");
	let searchHandler = (e) => {
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
					dispatch(productDeleteAction(id));
					swal({
						title: "Success!",
						text: "Deleted Draft Order Successfully",
						icon: "success",
						timer: 2000,
						button: false,
					});
					history.push("/product-list");
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

	const history = useHistory();
	useEffect(() => {
		dispatch(listProductAction());
		if (!supplierInfo) {
			history.push("/access-denied");
		}
	}, [dispatch, history, supplierInfo, successCreate, successDelete]);

	if (supplierInfo) {
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
									<Link to="/product-create">
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
											+ New Products
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
												width: 150,
												fontSize: 20,
											}}
										>
											Product Name
										</th>
										<th
											style={{
												width: 150,
												fontSize: 20,
											}}
										>
											Product Price
										</th>
										<th
											style={{
												width: 150,
												fontSize: 20,
											}}
										>
											Product Description
										</th>
										<th
											style={{
												width: 150,
												fontSize: 20,
											}}
										>
											Action
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

												<td>
													<td>
														<Link to={`/single-product/${prod._id}`}>
															<i class="fa-solid fa-pen-to-square"></i>
														</Link>
														&emsp;
														<span onClick={() => deleteHandler(prod._id)}>
															<i
																class="fa-solid fa-trash"
																style={{ cursor: "pointer" }}
																onClick={() => deleteHandler(prod._id)}
															></i>
														</span>
													</td>
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
