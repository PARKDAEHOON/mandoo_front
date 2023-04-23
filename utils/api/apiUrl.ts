export const REFRESH_TOKEN_URI = "v1/member/token/refresh";
export const TEST_URL = "v1/member/token/refresh";
export const MEMBER_LOGIN = "v1/member/login";

export const KAKAO_OAUTH = `${process.env.KAKAO_BASE_URL}/oauth/authorize?client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&response_type=code`;
export const KAKAO_OAUTH_TOKEN = `${process.env.KAKAO_BASE_URL}/oauth/token`;

export const NAVER_OAUTH = `${process.env.NAVER_BASE_URL}/oauth2.0/authorize`;
