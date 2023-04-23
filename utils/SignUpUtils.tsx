import * as Yup from "yup";

export const SIGN_UP_CODE = {
	MEM_GB_CD: "01",
	LOGIN_TYPE: "03",
	TOKEN_TYPE: "Bearer",
	CERT_GB_CD: "01",
	GOOGLE_LOGIN_TYPE: "06",
};

export function selectEmailAddr(mailAddr: string) {
	// console.log(mailAddr);
	let findKey = false;
	const mailList = [
		"naver.com",
		"hanmail.net",
		"daum.net",
		"gmail.com",
		"nate.com",
		"hotmail.com",
		"outlook.com",
		"icloud.com",
		"직접입력",
	];
	for (let index in mailList) {
		mailAddr == mailList[index] ? (findKey = true) : null;
	}
	if (!findKey) mailList.push(mailAddr);
	// console.log(mailList);
	return mailList;
}

export function getSchlTypeList() {
	const schlTypeObjList = [
		{ key: "01", value: "고등학교" },
		{ key: "03", value: "대학교" },
		{ key: "04", value: "대학원" },
	];

	return schlTypeObjList;
}

//Date 날짜데이터를 YYYYMMDD String 으로 변환
export function getStringDateByDate(date: Date) {
	if (date) {
		let sYear = date.getFullYear() + "";
		let sMonth = date.getMonth() + 1 + "";
		let sDate = date.getDate() + "";

		sMonth = parseInt(sMonth) > 9 ? sMonth : "0" + sMonth;
		sDate = parseInt(sDate) > 9 ? sDate : "0" + sDate;
		return sYear + sMonth + sDate;
	}
	return "";
}

//Date 날짜데이터를 YYYY-MM-DD String 으로 변환
export function getLongStringDateByDate(date: Date) {
	// console.log(date);
	let sYear = date.getFullYear() + "";
	let sMonth = date.getMonth() + 1 + "";
	let sDate = date.getDate() + "";

	sMonth = parseInt(sMonth) > 9 ? sMonth : "0" + sMonth;
	sDate = parseInt(sDate) > 9 ? sDate : "0" + sDate;
	return sYear + "-" + sMonth + "-" + sDate;
}

//국가코드->국기 아이콘으로 변환
export function countryToFlag(isoCode: string) {
	return typeof String.fromCodePoint !== "undefined"
		? isoCode
				.toUpperCase()
				.replace(/./g, (char) =>
					String.fromCodePoint(char.charCodeAt(0) + 127397)
				)
		: isoCode;
}

//*** validation *
export const VALIDATION_MSG = {
	MEMNM: "한글/영문 입력만 가능합니다.",
	EMAIL: "올바르지 않은 이메일 형식입니다.",
	TEL: "숫자만 입력해 주세요.",
	CERT_NO: "인증번호가 틀렸습니다.",
	CERT_NO_SUCESS: "인증이 완료되었습니다.",
	EXPIRATION: "인증 가능 시간이 지났습니다.",
	TEL_CERT_NO: "올바르지 않은 인증번호입니다.",
};

const onlyTextAndNumberPattern = /^[a-zA-Zㄱ-힣0-9]{1}$/; //영문,한글,숫자만 입력가능
const onlyTextPattern = /^[a-zA-Zㄱ-힣]*$/; // 영문,한글만 입력가능
const onlyEmailFirstPattern = /^[a-zA-Z0-9-_\.]*$/; //영문, 숫자만 가능
const onlyNumberPattern = /^[0-9]*$/; //숫자만 가능
const onlyEmailTextPattern =
	/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[0-9a-zA-Z]*$/i;
const idPattern = /^[a-zA-Z0-9-_\.]*$/; //아이디패턴

const schema = Yup.object().shape({
	memNm: Yup.string().matches(onlyTextPattern, VALIDATION_MSG.MEMNM).max(255),
	email: Yup.string()
		.matches(onlyEmailTextPattern, VALIDATION_MSG.EMAIL)
		.email(VALIDATION_MSG.EMAIL),
	emailFirst: Yup.string()
		.matches(onlyEmailFirstPattern, VALIDATION_MSG.EMAIL)
		.max(255),
	tel: Yup.string()
		.matches(onlyNumberPattern, VALIDATION_MSG.TEL)
		.max(11, "최대11자리까지 입력가능합니다."),
	id: Yup.string()
		.matches(idPattern, "영문 숫자만 가능합니다.")
		.max(50, "최대50자리까지 입력가능합니다."),
	telCertNo: Yup.string()
		.matches(onlyNumberPattern, VALIDATION_MSG.TEL_CERT_NO)
		.max(6, "최대6자리까지 입력가능합니다."),
});

export function checkValidSignUp(validObject: {
	key: string;
	value: string | undefined;
}) {
	let checkObject = {} as any;
	checkObject[validObject.key] = validObject.value;
	// console.log(validObject.key);
	// console.log(validObject.value);
	try {
		schema.validateSync(checkObject);
		let data = {
			error: false,
			errorMsg: " ",
		};
		return data;
	} catch (err: any) {
		// console.log(err.errors);
		let data = {
			error: true,
			errorMsg: err.errors,
		};
		return data;
	}
}
//* validation ***
