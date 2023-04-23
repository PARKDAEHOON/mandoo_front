import * as STATICS from "utils/Statics";

export function isEmpty(obj: any) {
	if (obj == "" || obj == "undefined" || obj == undefined || obj == null) {
		return true;
	} else {
		return false;
	}
}

export function isNotEmpty(obj: any) {
	return !isEmpty(obj);
}

export function isLogin() {
	const atToken = window.localStorage.getItem(STATICS.STORAGE_KEY.ACCESS_TOKEN);
	const rtToken = window.localStorage.getItem(
		STATICS.STORAGE_KEY.REFRESH_TOKEN
	);
	// console.log("at : ", atToken);
	// console.log("rt : ", rtToken);
	if (isEmpty(atToken) || isEmpty(rtToken)) {
		return false;
	} else {
		return true;
	}
}

export function logout() {
	window.localStorage.removeItem(STATICS.STORAGE_KEY.ACCESS_TOKEN);
	window.localStorage.removeItem(STATICS.STORAGE_KEY.REFRESH_TOKEN);
}

export function logoutAdmin() {
	window.localStorage.removeItem(STATICS.STORAGE_KEY.ACCESS_TOKEN);
	window.localStorage.removeItem(STATICS.STORAGE_KEY.REFRESH_TOKEN);
}

export function ufn_ASCII(pwd: string, i: number) {
	return pwd.substr(i, i + 1).charCodeAt(0);
}

export function checkValidPwd(pwd: string) {
	let v_num = 0;
	let v_engL = 0;
	let v_engS = 0;
	let v_spe = 0;
	const pattern1 = /\s/g;

	let isValidPasswd = true;

	//1.비밀번호에 포함된 문자,숫자,특수문자구분,한글
	for (let i = 0; i < pwd.length; i++) {
		if (ufn_ASCII(pwd, i) >= 48 && ufn_ASCII(pwd, i) <= 57) {
			v_num = 1;
		} //숫자
		else if (ufn_ASCII(pwd, i) >= 65 && ufn_ASCII(pwd, i) <= 90) {
			v_engL = 1;
		} //영대
		else if (ufn_ASCII(pwd, i) >= 97 && ufn_ASCII(pwd, i) <= 122) {
			v_engS = 1;
		} //영소
		else if (
			(ufn_ASCII(pwd, i) >= 33 && ufn_ASCII(pwd, i) <= 47) ||
			(ufn_ASCII(pwd, i) >= 58 && ufn_ASCII(pwd, i) <= 64) ||
			(ufn_ASCII(pwd, i) >= 91 && ufn_ASCII(pwd, i) <= 96) ||
			(ufn_ASCII(pwd, i) >= 123 && ufn_ASCII(pwd, i) <= 126)
		) {
			v_spe = 1; //특수문자
		}

		if (ufn_ASCII(pwd, i) == 32) {
			isValidPasswd = false;
			return "공백은 비밀번호로 사용하실수 없습니다.";
		}
	}

	//2.비밀번호 자리수 체크 및 자리수별 조합된 경우의 수 체크
	if (pwd.length < 8) {
		isValidPasswd = false;
		return "비밀번호는 8 ~ 30자리 이내로 입력해 주세요.";
	} else if (v_num + v_engL + v_engS + v_spe < 2) {
		isValidPasswd = false;
		return "비밀번호는 영소문자, 영대문자, 숫자, 특수문자의 조합이 2가지 이상으로 구성해야합니다.";
	}

	//조합에 따른 자릿수 체크
	if (v_num + v_engL + v_engS + v_spe == 2 && pwd.length < 10) {
		isValidPasswd = false;
		return "비밀번호는 영소문자, 영대문자, 숫자, 특수문자의 조합이 2가지일 경우 10자리 이상 비밀번호를 사용하여야 합니다.";
	}

	//3.연속된숫자 및 문자 체크 / 연속 중복된 문자,숫자 체크
	for (let i = 0; i < pwd.length; i++) {
		if (
			(ufn_ASCII(pwd, i) - ufn_ASCII(pwd, i - 1) == 1 &&
				ufn_ASCII(pwd, i - 1) - ufn_ASCII(pwd, i - 2) == 1) ||
			(ufn_ASCII(pwd, i) - ufn_ASCII(pwd, i - 1) == -1 &&
				ufn_ASCII(pwd, i - 1) - ufn_ASCII(pwd, i - 2) == -1)
		) {
			if (ufn_ASCII(pwd, i - 1) >= 40 && ufn_ASCII(pwd, i - 1) <= 57) {
				isValidPasswd = false;
				return "연속된 숫자는 비밀번호로 사용하실수 없습니다."; //(예:123 , 321 등)
			} else if (ufn_ASCII(pwd, i - 1) >= 65 && ufn_ASCII(pwd, i - 1) <= 90) {
				isValidPasswd = false;
				return "연속된 영대문자는 비밀번호로 사용하실수 없습니다."; //(예: ABC, CBA등)
			} else if (ufn_ASCII(pwd, i - 1) >= 97 && ufn_ASCII(pwd, i - 1) <= 122) {
				isValidPasswd = false;
				return "연속된 영소문자는 비밀번호로 사용하실수 없습니다."; //(예: abc, cba등)
			}
		} else if (
			ufn_ASCII(pwd, i) - ufn_ASCII(pwd, i - 1) == 0 &&
			ufn_ASCII(pwd, i - 1) - ufn_ASCII(pwd, i - 2) == 0
		) {
			isValidPasswd = false;
			return "동일한 문자,숫자,특수문자는 연속해서 비밀번호로 사용하실수 없습니다.";
		}
	}

	if (isValidPasswd) {
		return "";
	} else {
		return "잘못된 비밀번호입니다.";
	}
}

// 통화 , 제공하는 메소드. ex) 4000 -> 4,000
export function inputPriceFormat(str: string | undefined) {
	if (str === undefined) return "0";
	const comma = (str: string) => {
		str = String(str);
		return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
	};
	const uncomma = (str: string) => {
		str = String(str);
		return str.replace(/[^\d]+/g, "");
	};
	return comma(uncomma(str));
}

export function inputPriceFormatNum(num: number | undefined) {
	if (num === undefined) return 0;
	return inputPriceFormat(num.toString());
}

export function setHpRegExp(hp: string) {
	return hp.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}

export function getUserTypeAsLevel() {
	const userType =
		window.localStorage.getItem(STATICS.STORAGE_KEY_ADMIN.USER_TYPE) || "";
	switch (userType) {
		case "SA":
			return 3;
		case "HO":
			return 2;
		case "GU":
			return 1;
		default:
			return 0;
	}
}

export function setTokenByUserData(atData: string, rtData: string) {
	window.localStorage.setItem(STATICS.STORAGE_KEY.ACCESS_TOKEN, atData);
	window.localStorage.setItem(STATICS.STORAGE_KEY.REFRESH_TOKEN, rtData);
}

export function adjust(color: string, amount: number) {
	return (
		"#" +
		color
			.replace(/#/, "")
			.replace(/../g, (color) =>
				(
					"0" +
					Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
				).substr(-2)
			)
	);
}

export function getRandomUuid() {
	return self.crypto.randomUUID();
}

export function getModalStyle() {
	const top = 50;
	const left = 50;
	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}
