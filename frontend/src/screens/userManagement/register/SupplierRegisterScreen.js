import { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import { supplierRegister } from "../../../actions/supplierAction";
import MainScreen from "../../../components/MainScreen";

const SupplierRegisterScreen = () => {
	const [supplierId, setSupplierId] = useState("");
	const [ownerName, setOwnerName] = useState("");
	const [dob, setDob] = useState("");
	const [nic, setNic] = useState("");
	const [gender, setGender] = useState("");
	const [telephone, setTelephone] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [companyAddress, setCompanyAddress] = useState("");
	const [email, setEmail] = useState("");
	const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const [suppliyingMaterials, setSuppliyingMaterials] = useState("");
	const [message, setMessage] = useState("");
	const [picMessage, setPicMessage] = useState(null);

	const dispatch = useDispatch();
	const supplierRegistration = useSelector((state) => state.supplierRegistration);
	const { loading, error } = supplierRegistration;

	const staff_Login = useSelector((state) => state.staff_Login);
	const { staffInfo } = staff_Login;

	const submitHandler = async (e) => {
		e.preventDefault();

		if (password !== confirmpassword) {
			setMessage("Passwords do not match");
		} else {
			dispatch(
				supplierRegister(
					supplierId,
					ownerName,
					dob,
					nic,
					gender,
					telephone,
					companyName,
					companyAddress,
					email,
					password,
					pic,
					suppliyingMaterials
				)
			);
		}
	};

	const demoHandler = async (e) => {
		e.preventDefault();

		setSupplierId("SUP000236");
		setOwnerName("Martha Stuart");
		setDob("1985-12-06");
		setNic("198545656589");
		setGender("Female");
		setTelephone("0776688556");
		setCompanyName("Metro Suppliers");
		setCompanyAddress("Gampaha");
		setEmail("martha@gmail.com");
		setSuppliyingMaterials("Sand");
	};

	const resetHandler = async (e) => {
		e.preventDefault();

		setSupplierId("");
		setOwnerName("");
		setDob("");
		setNic("");
		setGender("");
		setTelephone("");
		setCompanyName("");
		setCompanyAddress("");
		setEmail("");
		setSuppliyingMaterials("");
	};
	const postDetails = (pics) => {
		if (pics === "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg") {
			return setPicMessage("Please Select an Image");
		}
		setPicMessage(null);
		if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {
			const data = new FormData();
			data.append("file", pics);
			data.append("upload_preset", "supplierProfile");
			data.append("cloud_name", "bytesquad202202");
			fetch("https://api.cloudinary.com/v1_1/bytesquad202202/image/upload", {
				method: "post",
				body: data,
			})
				.then((res) => res.json())
				.then((data) => {
					setPic(data.url.toString());
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			return setPicMessage("Please Select an Image");
		}
	};

	if (staffInfo) {
		return (
			<div className="registerBg">
				<br></br>
				<MainScreen title="REGISTER - SUPPLIER">
					<Button
						variant="success"
						style={{
							float: "left",
							marginTop: 5,
							fontSize: 15,
						}}
						href="/staff"
					>
						{" "}
						Back to Dashboard
					</Button>
					<br></br>
					<br></br>
					<br></br>
					<Card
						className="profileCont"
						style={{
							borderRadius: 45,
							borderWidth: 2.0,
							marginTop: 20,
							paddingInline: 10,
							paddingLeft: 25,
							paddingRight: 25,
							background: "rgba(231, 238, 238, 0.8)",
						}}
					>
						<div className="loginContainer">
							<br></br>
							<div>
								{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
								{message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
								{loading && <Loading />}
							</div>
							<br></br>
							<Row className="supplierProfileContainer">
								<Col md={6}>
									<Form onSubmit={submitHandler}>
										<Form.Group controlId="supplierId">
											<Form.Label>Supplier Id</Form.Label>
											<Form.Control
												type="text"
												value={supplierId}
												placeholder="Enter Supplier Id"
												onChange={(e) => setSupplierId(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="supplierName">
											<Form.Label>Name</Form.Label>
											<Form.Control
												type="text"
												value={ownerName}
												placeholder="Enter name"
												onChange={(e) => setOwnerName(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="supplierDob">
											<Form.Label>Date Of Birth</Form.Label>
											<Form.Control type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
										</Form.Group>
										<div className="form-group">
											<label className="supplierGender">Gender</label>
											<select
												className="form-control"
												id="supplierGender"
												value={gender}
												onChange={(e) => setGender(e.target.value)}
												required
											>
												<option>Select Gender</option>
												<option value={gender.Male}>Male</option>
												<option value={gender.Female}>Female</option>
											</select>
										</div>
										<Form.Group controlId="supplierFormBasicNic">
											<Form.Label>NIC Number</Form.Label>
											<Form.Control
												type="text"
												value={nic}
												placeholder="Enter NIC"
												onChange={(e) => setNic(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="supplierFormBasicTelephone">
											<Form.Label>Telephone</Form.Label>
											<Form.Control
												type="text"
												value={telephone}
												placeholder="Enter Telephone Number"
												onChange={(e) => setTelephone(e.target.value)}
												required
												maxLength={10}
											/>
										</Form.Group>
										<Form.Group controlId="supplierFormBasicCompanyName">
											<Form.Label>Company Name</Form.Label>
											<Form.Control
												type="textArea"
												value={companyName}
												placeholder="Enter Address"
												onChange={(e) => setCompanyName(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="supplierFormBasicAddress">
											<Form.Label>Company Address</Form.Label>
											<Form.Control
												type="textArea"
												value={companyAddress}
												placeholder="Enter Address"
												onChange={(e) => setCompanyAddress(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="doctorFormBasicEmail">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												value={email}
												placeholder="Enter Email Address"
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="formBasicPassword">
											<Form.Label>Password</Form.Label>
											<Form.Control
												type="password"
												value={password}
												placeholder="Password"
												onChange={(e) => setPassword(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="confirmPassword">
											<Form.Label>Confirm Password</Form.Label>
											<Form.Control
												type="password"
												value={confirmpassword}
												placeholder="Confirm Password"
												onChange={(e) => setConfirmPassword(e.target.value)}
											/>
										</Form.Group>
										{picMessage && <ErrorMessage variant="danger">{picMessage}</ErrorMessage>}
										<Form.Group controlId="pic">
											<Form.Label>Profile Picture</Form.Label>
											<Form.File
												onChange={(e) => postDetails(e.target.files[0])}
												id="custom-file"
												type="image/png"
												label="Upload Profile Picture"
												custom
											/>
										</Form.Group>
										<Form.Group controlId="supplierFormBasicMaterials">
											<Form.Label>Suppliying Materials</Form.Label>
											<Form.Control
												type="text"
												value={suppliyingMaterials}
												placeholder="Enter Height In Centimeters"
												onChange={(e) => setSuppliyingMaterials(e.target.value)}
												required
											/>
										</Form.Group>
										<Button
											variant="primary"
											type="submit"
											style={{
												fontSize: 15,
												marginTop: 10,
											}}
										>
											Register
										</Button>
										&emsp;
										<Button
											variant="danger"
											onClick={resetHandler}
											style={{
												fontSize: 15,
												marginTop: 10,
											}}
										>
											Reset
										</Button>
										&emsp;
										<Button
											variant="info"
											onClick={demoHandler}
											style={{
												fontSize: 15,
												marginTop: 10,
											}}
										>
											Demo
										</Button>
									</Form>
								</Col>
								<Col
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<img
										src={pic}
										alt={ownerName}
										className="profilePic"
										style={{
											boxShadow: "7px 7px 20px ",
											borderColor: "black",
											borderRadius: 250,
											background: "white",
											width: "300px",
											height: "300px",
										}}
									/>
								</Col>
							</Row>
							<br></br>
						</div>
					</Card>
					<br></br>
				</MainScreen>
				<br></br>
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
};

export default SupplierRegisterScreen;
