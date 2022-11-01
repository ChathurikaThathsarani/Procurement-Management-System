import { Button, Card } from "react-bootstrap";
import MainScreen from "../../../components/MainScreen";
import "./LoginSelector.css";

const LoginSelectorPage = () => {
	return (
		<div className="loginSelectBg">
			<br></br>
			<MainScreen title={"Log in Here ..."}>
				<br></br>
				<br></br>
				<br></br>
				<Card
					style={{
						borderRadius: 45,
						borderWidth: 2.0,
						marginTop: 20,
						paddingInline: 10,
						background: "rgba(231, 238, 238, 0.8)",
						marginLeft: "20%",
						marginRight: "20%",
					}}
				>
					<div className="loginSelect">
						<div className="intro-text" style={{ marginTop: 10 }}>
							<br></br>
							<br></br>
							<a href="/siteManager-login">
								<Button
									variant="success"
									size="lg"
									style={{
										width: 350,
										height: 75,
										backgroundColor: "transparent",
										borderRadius: 0,
										border: "5px solid black",
										color: "black",
										boxShadow: "none",
									}}
								>
									Site Manager Login
								</Button>
							</a>
							<br></br>
							<br></br>
							<a href="/supplier-login">
								<Button
									variant="success"
									size="lg"
									style={{
										width: 350,
										height: 75,
										backgroundColor: "transparent",
										borderRadius: 0,
										border: "5px solid black",
										color: "black",
										boxShadow: "none",
									}}
								>
									Suppier Login
								</Button>
							</a>
							<br></br>
							<br></br>
							<a href="/staff-login">
								<Button
									variant="success"
									size="lg"
									style={{
										width: 350,
										height: 75,
										backgroundColor: "transparent",
										borderRadius: 0,
										border: "5px solid black",
										color: "black",
										boxShadow: "none",
									}}
								>
									Staff Login
								</Button>
							</a>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
						</div>
					</div>
				</Card>
			</MainScreen>
		</div>
	);
};

export default LoginSelectorPage;
