import { atom } from "recoil";
import {
	IAlertDialog,
	IConfirmDialog,
	ICustomDialog,
	IEnqueueSnackbar,
	IStackDialogAction,
} from "types/global/modal";
import { recoilPersist } from "recoil-persist";

export interface IBookmarkListState {
	id: string;
	title: string;
	url: string;
}

//localstorage에 저장하려는 경우 sessionStorage를 변경하면 된다.
const sessionStorage =
	typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
	key: "nhrsamplekey", //실제 저장될 키
	// storage: sessionStorage,
});

export const isLoadingState = atom<boolean>({
	key: "isLoadingState",
	default: false,
});

export const drawerOpenState = atom<boolean>({
	key: "drawerOpenState",
	default: false,
	effects_UNSTABLE: [persistAtom],
});

export const bookmarkListState = atom<IBookmarkListState[]>({
	key: "bookmarkListState",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const activeItemState = atom<string>({
	key: "activeItemState",
	default: "",
});

export const selectedItemState = atom<string>({
	key: "selectedItemState",
	default: "default",
});

export const alertDialogState = atom<IAlertDialog>({
	key: "alertDialogState",
	default: {
		open: false,
		message: "",
	},
});

export const confirmDialogState = atom<IConfirmDialog>({
	key: "confirmDialogState",
	default: {
		open: false,
		message: "",
	},
});

export const customDialogState = atom<ICustomDialog>({
	key: "customDialogState",
	default: {
		open: false,
		message: "",
	},
});

export const stackDialogActionState = atom<IStackDialogAction>({
	key: "stackDialogActionState",
	default: {
		push: (
			newDialogList: IAlertDialog[] | IConfirmDialog[] | ICustomDialog[]
		) => {
			return;
		},
		pop: () => {
			return;
		},
		empty: () => {
			return;
		},
	},
});

export const enqueueSnackbarState = atom<IEnqueueSnackbar>({
	key: "enqueueSnackbarState",
	default: {},
});

export const searchId = atom<string[]>({
	key: "searchId",
	default: [],
});

export const selectedId = atom<string>({
	key: "selectedId",
	default: "",
});

export const pwdCertInf = atom<PwdCertInfType>({
	key: "pwdCertInf",
	default: {
		id: "",
		tel: "",
		telCertNo: "",
		pwd: "",
		checkPwd: "",
		cnryNo: "",
	},
});

export interface PwdCertInfType {
	id: string;
	tel: string;
	telCertNo: string;
	pwd: string;
	checkPwd: string;
	cnryNo: string;
}
