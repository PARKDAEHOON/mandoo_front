import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import router, { useRouter } from "next/router";
import { isEmpty, isNotEmpty, logoutAdmin } from "utils/BaseUtils";
import * as Statics from "utils/Statics";
import * as apiUrl from "utils/api/apiUrl";
import { SetterOrUpdater } from "recoil";

export const api = axios.create({
	baseURL: process.env.API_DOMAIN,
	timeout: 500000,
});

export enum ApiMethod {
	GET,
	DELETE,
	OPTIONS,
	POST,
	PUT,
	PATCH,
}

export async function apiCall(
	url: string,
	method: ApiMethod,
	data: any,
	config: AxiosRequestConfig,
	isLogin: boolean,
	isRecursive: boolean = false,
	setIsLoading?: SetterOrUpdater<boolean>
): Promise<AxiosResponse<any, any>> {
	const atToken = window.localStorage.getItem(
		Statics.STORAGE_KEY_ADMIN.ACCESS_TOKEN
	);
	//토큰이 만료되었고, refreshToken 이 저장되어 있을 때

	if (typeof setIsLoading != "undefined") {
		setIsLoading(true);
	}

	const checkLogout = (isLogin: boolean) => {
		logoutAdmin();
		if (isLogin) {
			router.push(Statics.PAGE_URL.LOGIN_ADMIN); //로그인 페이지
		}
	};

	if (atToken != null && atToken != "" && atToken !== "undefined") {
		//토큰이 있으면 삽입
		api.defaults.headers.common["Authorization"] = "Bearer " + atToken;
	} else {
		delete api.defaults.headers.common["Authorization"];
		checkLogout(isLogin);
	}
	switch (method) {
		case ApiMethod.GET:
			return ErrCodeChk(await api.get(url, config), isRecursive);
		case ApiMethod.DELETE:
			return ErrCodeChk(await api.delete(url, config), isRecursive);
		case ApiMethod.OPTIONS:
			return ErrCodeChk(await api.options(url, config), isRecursive);
		case ApiMethod.POST:
			return ErrCodeChk(await api.post(url, data, config), isRecursive);
		case ApiMethod.PUT:
			return ErrCodeChk(await api.put(url, data, config), isRecursive);
		case ApiMethod.PATCH:
			return ErrCodeChk(await api.patch(url, data, config), isRecursive);
	}

	async function ErrCodeChk(
		response: AxiosResponse<any, any>,
		isRecursive: boolean
	) {
		try {
			if (isEmpty(response.data.code)) {
				return response;
			}

			const resCd: string = response.data.code;

			if (!isRecursive && resCd.toUpperCase() == "T001") {
				const rtToken = window.localStorage.getItem(
					Statics.STORAGE_KEY_ADMIN.REFRESH_TOKEN
				);
				if (isNotEmpty(rtToken)) {
					const reqData = {
						rtData: rtToken,
					};
					let isRefresh = false;
					const returnData = await api
						.post(apiUrl.REFRESH_TOKEN_URI, reqData)
						.then((response) => {
							if (response.data.code == Statics.APIRETURN_CODE.SUCCESS) {
								const atData = response.data.data.atData;
								const rtData = response.data.data.rtData;
								window.localStorage.setItem(
									Statics.STORAGE_KEY_ADMIN.ACCESS_TOKEN,
									atData
								);
								window.localStorage.setItem(
									Statics.STORAGE_KEY_ADMIN.REFRESH_TOKEN,
									rtData
								);
								isRefresh = true;
							} else {
								checkLogout(isLogin);
							}
						})
						.catch(() => {
							checkLogout(isLogin);
						});
					if (isRefresh) {
						return await apiCall(url, method, data, config, isLogin, true);
					}
				} else {
					checkLogout(isLogin);
				}
			} else if (resCd.toUpperCase().startsWith("T")) {
				checkLogout(isLogin);
			}
			return response;
		} finally {
			if (typeof setIsLoading !== "undefined") {
				setIsLoading(false);
			}
		}
	}
}
