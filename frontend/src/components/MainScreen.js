import React from "react";
import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

const MainScreen = ({ title, children }) => {
	//see if we are provided with a title or children
	return (
		<div className="mainback">
			<Container>
				<Row>
					<div className="page">
						{title && (
							<>
								<h1 className="heading">{title}</h1>
								<hr style={{ borderWidth: 5 }} />
							</>
						)}
						{children}
					</div>
				</Row>
			</Container>
		</div>
	);
};

export default MainScreen;
