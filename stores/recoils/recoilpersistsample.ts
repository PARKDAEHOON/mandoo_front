import { atom, selector, selectorFamily } from "recoil";
import { recoilPersist } from "recoil-persist";
// recoil-persist

//localstorage에 저장하려는 경우 sessionStorage를 변경하면 된다.
const sessionStorage =
	typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
	key: "nhrsamplekey", //실제 저장될 키
	storage: sessionStorage,
});

export const tokenState = atom({
	key: "tokenState",
	default: "",
	effects_UNSTABLE: [persistAtom],
});

export const countState = atom({
	key: "countState",
	default: 1,
});

export const addCountState = selectorFamily({
	key: "addCountState",
	get:
		(num) =>
		({ get }) => {
			return get(countState) + Number(num);
		},
});
