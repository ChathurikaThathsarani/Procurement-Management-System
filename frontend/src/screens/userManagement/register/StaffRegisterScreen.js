import { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";
import { staffRegister } from "../../../actions/staffAction";
import MainScreen from "../../../components/MainScreen";
import "./RegisterScreen.css";

const StaffRegisterScreen = () => {
	const [staffId, setStaffId] = useState("");
	const [name, setName] = useState("");
	const [dob, setDob] = useState("");
	const [nic, setNic] = useState("");
	const [telephone, setTelephone] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [qualifications, setQualifications] = useState("");
	const [experience, setExperience] = useState("");
	const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);
	const [picMessage, setPicMessage] = useState(null);

	const dispatch = useDispatch();
	const staffRegistration = useSelector((state) => state.staffRegistration);
	const { loading, error } = staffRegistration;

	const staff_Login = useSelector((state) => state.staff_Login);
	const { staffInfo } = staff_Login;

	const submitHandler = async (e) => {
		e.preventDefault();

		if (password !== confirmpassword) {
			setMessage("Passwords do not match");
		} else {
			dispatch(
				staffRegister(staffId, name, dob, nic, telephone, address, email, password, pic, qualifications, experience)
			);
		}
	};

	const demoHandler = async (e) => {
		e.preventDefault();

		setStaffId("ST0023");
		setName("Michael Scott");
		setDob("1970-06-12");
		setNic("197085256335");
		setTelephone("0715689562");
		setAddress("Colombo");
		setEmail("michaelscott@gmail.com");
		setQualifications("Bsc in Civil Engineering");
		setExperience("4 yrs");
	};

	const resetHandler = async (e) => {
		e.preventDefault();

		setStaffId("");
		setName("");
		setDob("");
		setNic("");
		setTelephone("");
		setAddress("");
		setEmail("");
		setQualifications("");
		setExperience("");
	};

	const postDetails = (pics) => {
		if (pics === "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg") {
			return setPicMessage("Please Select an Image");
		}
		setPicMessage(null);
		if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {
			const data = new FormData();
			data.append("file", pics);
			data.append("upload_preset", "staffProfile");
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
				<MainScreen title="REGISTER - STAFF">
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
							<Row className="AdminProfileContainer">
								<Col md={6}>
									<Form onSubmit={submitHandler}>
										<Form.Group controlId="staffID">
											<Form.Label>Staff ID</Form.Label>
											<Form.Control
												type="text"
												value={staffId}
												placeholder="Enter Staff ID"
												onChange={(e) => setStaffId(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="staffName">
											<Form.Label>Name</Form.Label>
											<Form.Control
												type="name"
												value={name}
												placeholder="Enter name"
												onChange={(e) => setName(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="staffDob">
											<Form.Label>Date Of Birth</Form.Label>
											<Form.Control type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
										</Form.Group>
										<Form.Group controlId="staffFormBasicNic">
											<Form.Label>NIC Number</Form.Label>
											<Form.Control
												type="text"
												value={nic}
												placeholder="Enter NIC"
												onChange={(e) => setNic(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="staffFormBasicTelephone">
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
										<Form.Group controlId="staffFormBasicAddress">
											<Form.Label>Address</Form.Label>
											<Form.Control
												type="textArea"
												value={address}
												placeholder="Enter Address"
												onChange={(e) => setAddress(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="staffFormBasicEmail">
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
												required
											/>
										</Form.Group>
										<Form.Group controlId="qualifications">
											<Form.Label>Qualifications</Form.Label>
											<Form.Control
												type="text"
												value={qualifications}
												placeholder="Enter Qualifications"
												onChange={(e) => setQualifications(e.target.value)}
												required
											/>
										</Form.Group>
										<Form.Group controlId="experience">
											<Form.Label>Experience</Form.Label>
											<Form.Control
												type="text"
												value={experience}
												placeholder="Enter Experience"
												onChange={(e) => setExperience(e.target.value)}
												required
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
										alt={name}
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

export default StaffRegisterScreen;
