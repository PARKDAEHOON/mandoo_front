import { Theme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const Typography = (
	theme: Theme,
	borderRadius: number,
	fontFamily: string
): TypographyOptions => ({
	fontFamily,
	h6: {
		fontSize: "1.25rem",
		color: theme.palette.grey[900],
		fontWeight: 500,
	},
	h5: {
		fontSize: "1.5rem",
		color: theme.palette.grey[900],
		fontWeight: 400,
	},
	h4: {
		fontSize: "2.125rem",
		color: theme.palette.grey[900],
		fontWeight: 400,
	},
	h3: {
		fontSize: "3rem",
		color: theme.palette.grey[900],
		fontWeight: 400,
	},
	h2: {
		fontSize: "3.75rem",
		color: theme.palette.grey[900],
		fontWeight: 300,
	},
	h1: {
		fontSize: "6rem",
		color: theme.palette.grey[900],
		fontWeight: 300,
	},
	subtitle1: {
		fontSize: "1rem",
		fontWeight: 400,
		color: theme.palette.grey[900],
	},
	subtitle2: {
		fontSize: "0.875rem",
		fontWeight: 500,
		color: theme.palette.grey[900],
	},
	caption: {
		fontSize: "0.75rem",
		color: theme.palette.grey[900],
		fontWeight: 400,
	},
	body1: {
		fontSize: "1rem",
		fontWeight: 400,
		lineHeight: "1.5em",
		color: theme.palette.grey[900],
	},
	body2: {
		fontSize: "0.875rem",
		fontWeight: 400,
		lineHeight: "1.25em",
		color: theme.palette.grey[900],
	},
	button: {
		textTransform: "none",
		fontSize: "0.875rem",
		fontWeight: 500,
		lineHeight: "1.5em",
	},
	overline: {
		fontSize: "0.75rem",
		color: theme.palette.grey[900],
		fontWeight: 400,
		textTransform: "uppercase",
	},
	customInput: {
		marginTop: 1,
		marginBottom: 1,
		"& > label": {
			top: 23,
			left: 0,
			color: theme.palette.grey[500],
			'&[data-shrink="false"]': {
				top: 5,
			},
		},
		"& > div > input": {
			padding: "30.5px 14px 11.5px !important",
		},
		"& legend": {
			display: "none",
		},
		"& fieldset": {
			top: 0,
		},
	},
	mainContent: {
		backgroundColor:
			theme.palette.mode === "dark"
				? theme.palette.dark[800]
				: theme.palette.primary.light,
		width: "100%",
		minHeight: "calc(100vh - 88px)",
		flexGrow: 1,
		padding: "20px",
		marginTop: "80px",
		marginRight: "20px",
		borderRadius: `${borderRadius}px`,
	},
	menuCaption: {
		fontSize: "0.875rem",
		fontWeight: 500,
		color: theme.palette.grey[900],
		padding: "6px",
		textTransform: "capitalize",
		marginTop: "10px",
	},
	subMenuCaption: {
		fontSize: "0.6875rem",
		fontWeight: 500,
		color: theme.palette.text.secondary,
		textTransform: "capitalize",
	},
	commonAvatar: {
		cursor: "pointer",
		borderRadius: "8px",
	},
	smallAvatar: {
		width: "22px",
		height: "22px",
		fontSize: "1rem",
	},
	mediumAvatar: {
		width: "34px",
		height: "34px",
		fontSize: "1.2rem",
	},
	largeAvatar: {
		width: "44px",
		height: "44px",
		fontSize: "1.5rem",
	},
	fontWeightLight: "300",
	fontWeightRegular: "400",
	fontWeightMedium: "500",
	fontWeightBold: "700",
});

export default Typography;
