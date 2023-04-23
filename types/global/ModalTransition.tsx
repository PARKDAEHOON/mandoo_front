import { Fade, Grow, Slide, SlideProps, Zoom } from "@mui/material";
import { KeyedObject } from "..";

// animation function
export const TransitionSlideLeft = (props: SlideProps) => {
	return <Slide {...props} direction="left" />;
};

export const TransitionSlideUp = (props: SlideProps) => {
	return <Slide {...props} direction="up" />;
};

export const TransitionSlideRight = (props: SlideProps) => {
	return <Slide {...props} direction="right" />;
};

export const TransitionSlideDown = (props: SlideProps) => {
	return <Slide {...props} direction="down" />;
};

// animation options
export const ModalTransition: KeyedObject = {
	SlideLeft: TransitionSlideLeft,
	SlideUp: TransitionSlideUp,
	SlideRight: TransitionSlideRight,
	SlideDown: TransitionSlideDown,
	Grow: Grow,
	Fade: Fade,
	Zoom: Zoom,
};
