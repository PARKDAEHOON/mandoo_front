import {
	Box,
	Divider,
	Link,
	Modal,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { useState } from "react";

const Footer = () => {
	const theme = useTheme();

	const [alertOpen, setAlertOpen] = useState(false);
	const [serviceOrPrivacy, setServiceOrPrivacy] = useState("");

	const handleAlertOpen = (type: string) => {
		setServiceOrPrivacy(type);
		setAlertOpen(true);
	};

	const handleAlertClose = () => {
		setAlertOpen(false);
	};

	return (
		<>
			{/** 모바일 푸터 */}
			<Box
				sx={{
					height: "fit-content",
					width: "100%",
					position: "relative",
					mt: "20px",
					mb: "20px",
					display: { xs: "block", sm: "none" },
					px: "2%",
				}}
			>
				<Stack direction="column" spacing={2}>
					<Divider />
					<Stack
						direction="column"
						justifyContent="flex-start"
						alignItems="flex-start"
						sx={{ px: "2%" }}
					>
						<Stack
							direction="row"
							justifyContent="flex-start"
							alignItems="center"
							spacing={2}
						>
							<Typography
								variant="h6"
								onClick={() => handleAlertOpen("P")}
								sx={{ cursor: "pointer" }}
							>
								개인정보처리방침
							</Typography>
							&nbsp;&nbsp;&nbsp;&nbsp;|
							<Typography
								variant="h6"
								onClick={() => handleAlertOpen("S")}
								sx={{ cursor: "pointer" }}
							>
								이용약관
							</Typography>
						</Stack>
						<Typography
							variant="caption"
							color={theme.palette.grey[500]}
							sx={{ mt: "2px" }}
						>
							푸터푸터
						</Typography>
					</Stack>
				</Stack>
			</Box>

			{/** PC 푸터 */}
			<Box
				sx={{
					height: "fit-content",
					width: "100%",
					position: "relative",
					mt: "20px",
					mb: "40px",
					display: { xs: "none", sm: "block" },
				}}
			>
				<Stack direction="column" spacing={2}>
					<Divider />
					<Stack
						direction="column"
						justifyContent="flex-start"
						alignItems="flex-start"
						sx={{ px: "2%" }}
					>
						<Stack
							direction="row"
							justifyContent="flex-start"
							alignItems="center"
							spacing={2}
						>
							<Typography
								variant="h5"
								onClick={() => handleAlertOpen("P")}
								sx={{ cursor: "pointer" }}
							>
								개인정보처리방침
							</Typography>
							&nbsp;&nbsp;&nbsp;&nbsp;|
							<Typography
								variant="h5"
								onClick={() => handleAlertOpen("S")}
								sx={{ cursor: "pointer" }}
							>
								이용약관
							</Typography>
						</Stack>
						<Typography
							variant="h6"
							color={theme.palette.grey[500]}
							sx={{ mt: 1 }}
						>
							푸터푸터
						</Typography>
					</Stack>
				</Stack>
			</Box>

			<Modal
				open={alertOpen}
				onClose={handleAlertClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				sx={{ top: 0 }}
			>
				<>
					{/* {serviceOrPrivacy == "P" && (
						<PrivatePolicy handleAlertClose={handleAlertClose} />
					)}
					{serviceOrPrivacy == "S" && (
						<ServicePolicy handleAlertClose={handleAlertClose} />
					)} */}
				</>
			</Modal>
		</>
	);
};

export default Footer;
