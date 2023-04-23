import React from "react";
import { Box } from "@mui/material";
import LoadingImg from "/public/assets/image/loading.svg";

function LoadingComponent() {
	return (
		<Box
			style={{
				position: "absolute",
				width: "100vw",
				height: "100vh",
				top: 0,
				left: 0,
				background: "#ffffffb7",
				zIndex: 999,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<LoadingImg />
		</Box>
	);
}

export default LoadingComponent;
