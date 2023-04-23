import { Breakpoint, DialogProps, SxProps, Theme } from "@mui/material";
import { EnqueueSnackbar } from "notistack";
import React, { Dispatch, SetStateAction } from "react";

export interface IAlertDialog extends DialogProps {
	open: boolean;
	setOpen?: Dispatch<SetStateAction<boolean>>;
	title?: string;
	message: React.ReactNode | string;
	confirmText?: string;
	handleClose?: (...arg: any[]) => any;
	handleConfirm?: (...arg: any[]) => any;
}

export interface IConfirmDialog extends DialogProps {
	open: boolean;
	setOpen?: Dispatch<SetStateAction<boolean>>;
	title?: string;
	message: React.ReactNode | string;
	cancelText?: string;
	confirmText?: string;
	handleClose?: (...arg: any[]) => any;
	handleConfirm?: (...arg: any[]) => any;
}

export interface ICustomDialog extends DialogProps {
	open: boolean;
	setOpen?: Dispatch<SetStateAction<boolean>>;
	size?: Breakpoint | false;
	title?: string;
	message: React.ReactNode | string;
	confirmText?: string;
	confirmDisabled?: boolean;
	handleClose?: (...arg: any[]) => any;
	handleConfirm?: (...arg: any[]) => any;
}

export interface IStackDialogAction {
	push: (
		newDialogList: IAlertDialog[] | IConfirmDialog[] | ICustomDialog[]
	) => void;
	pop: () => void;
	empty: () => void;
}

export interface ISnackbar extends IToastOption {
	snackbarMessage: string;
	snackbarVariant: "default" | "success" | "error" | "warning" | "info";
}

export interface IToastOption {
	snackbarHideIconVariant?: boolean;
	handleClose?: () => void;
	buttonText?: string;
	handleButtonClick?: () => void;
	collapseContents?: React.ReactNode | string;
	sx?: SxProps<Theme>;
}

export interface IEnqueueSnackbar {
	enqueue?: EnqueueSnackbar;
}
