import React from "react";
import { Oval } from "react-loader-spinner";

function Loading({ size = 100 }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100%",
			}}
		>
			<Oval color="#00BFFF" height={"100%"} width={"100%"} />
		</div>
	);
}

export default Loading;
