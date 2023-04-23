import React, { Ref } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
	CardProps,
	CardHeaderProps,
	CardContentProps,
} from "@mui/material";

// project imports
import { KeyedObject } from "types";

// ==============================|| CUSTOM MAIN CARD ||============================== //

export interface MainCardProps extends KeyedObject {
	border?: boolean;
	boxShadow?: boolean;
	children: React.ReactNode | string;
	style?: React.CSSProperties;
	content?: boolean;
	className?: string;
	contentClass?: string;
	contentSX?: CardContentProps["sx"];
	darkTitle?: boolean;
	sx?: CardProps["sx"];
	headerSX?: CardHeaderProps["sx"];
	secondary?: CardHeaderProps["action"];
	shadow?: string;
	elevation?: number;
	title?: React.ReactNode | string;
}

const MainCard = React.forwardRef(
	(
		{
			border = true,
			boxShadow,
			children,
			content = true,
			contentClass = "",
			contentSX = {},
			darkTitle,
			secondary,
			shadow,
			sx = {},
			headerSX = {},
			title,
			...others
		}: MainCardProps,
		ref: Ref<HTMLDivElement>
	) => {
		const theme = useTheme();

		return (
			<Card
				ref={ref}
				{...others}
				sx={{
					border: border ? "1px solid" : "none",
					borderColor:
						theme.palette.mode === "dark"
							? theme.palette.background.default
							: theme.palette.primary[200] + 75,
					boxShadow: boxShadow
						? shadow ||
						  (theme.palette.mode === "dark"
								? "0 2px 14px 0 rgb(33 150 243 / 10%)"
								: "0 2px 14px 0 rgb(32 40 45 / 8%)")
						: "inherit",
					...sx,
				}}
			>
				{/* card header and action */}
				{!darkTitle && title && (
					<CardHeader
						sx={{
							"& .MuiCardHeader-action": { mr: 0 },
							...headerSX,
							padding: 2,
							height: "48px",
						}}
						title={<Typography variant="h6">{title}</Typography>}
						action={secondary}
					/>
				)}
				{darkTitle && title && (
					<CardHeader
						sx={{
							"& .MuiCardHeader-action": { mr: 0 },
							...headerSX,
							height: "48px",
						}}
						title={<Typography variant="h4">{title}</Typography>}
						action={secondary}
					/>
				)}

				{/* content & header divider */}
				{title && <Divider />}

				{/* card content */}
				{content && (
					<CardContent sx={contentSX} className={contentClass}>
						{children}
					</CardContent>
				)}
				{!content && children}
			</Card>
		);
	}
);

export default MainCard;
