import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, useTheme } from "@mui/material";

interface stepInfoProps {
	title: string;
	content: React.ReactNode | string;
}
interface CommonStepperProps {
	steps: stepInfoProps[];
}

export default function CommonStepper({ steps }: CommonStepperProps) {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSave = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Stepper activeStep={activeStep} sx={{ mb: 2 }}>
				{steps.map((step) => {
					const stepProps: { completed?: boolean } = {};
					const labelProps: {
						optional?: React.ReactNode;
					} = {};

					return (
						<Step {...stepProps}>
							<StepLabel {...labelProps}>
								<Typography
									variant="body2"
									sx={{ color: theme.palette.grey[600] }}
								>
									{step.title}
								</Typography>
							</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			<React.Fragment>
				<Box>{steps[activeStep].content}</Box>

				<Stack
					direction="row"
					sx={{ pt: 2 }}
					justifyContent="flex-end"
					width="100%"
					spacing={2}
				>
					<Button onClick={handleSave} variant="contained">
						임시저장
					</Button>
					{activeStep != 0 && (
						<Button onClick={handleBack} variant="outlined">
							이전
						</Button>
					)}

					{activeStep === steps.length - 1 ? (
						<Button onClick={handleSave} variant="contained">
							저장
						</Button>
					) : (
						<Button onClick={handleNext} variant="outlined">
							다음
						</Button>
					)}
				</Stack>
			</React.Fragment>
		</Box>
	);
}
