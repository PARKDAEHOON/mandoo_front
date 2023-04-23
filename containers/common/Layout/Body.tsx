import { Box } from "@mui/material";
import { userLayoutMax } from "style/globals";

const bodyStyle = {
	...userLayoutMax,
	minHeight: "400px",
	//padding: "20px 0",
	minWidth: "300px",
};

export default ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<>
			<Box sx={bodyStyle}>바디바디</Box>
		</>
	);
};
