/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withInterceptStdout = require("next-intercept-stdout");
const nextConfig = {
	reactStrictMode: false,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
	env: {
		BASE_DOMAIN: process.env.BASE_DOMAIN,
		API_DOMAIN: process.env.API_DOMAIN,
		IMG_DOMAIN: process.env.IMG_DOMAIN,
		GA_TRACKING_ID: process.env.GA_TRACKING_ID,
		KAKAO_SHARE_KEY: process.env.KAKAO_SHARE_KEY,
		KAKAO_LOGIN: process.env.KAKAO_LOGIN,
		KAKAO_REST_API_KEY: process.env.KAKAO_REST_API_KEY,
		KAKAO_REDIRECT_URI: process.env.KAKAO_REDIRECT_URI,
		KAKAO_BASE_URL: process.env.KAKAO_BASE_URL,
		KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
		NAVER_LOGIN: process.env.NAVER_LOGIN,
		NAVER_BASE_URL: process.env.NAVER_BASE_URL,
		NAVER_REDIRECT_URI: process.env.NAVER_REDIRECT_URI,
		NAVER_CLIENT_SECRET: process.env.NAVER_CLIENT_SECRET,
		NAVER_CLIENT_ID: process.env.NAVER_CLIENT_ID,
	},
	swcMinify: true,
	// async redirects() {
	// 	return [
	// 		{
	// 			source: "/",
	// 			destination: "/dashboard",
	// 			permanent: true,
	// 		},
	// 	];
	// },
};

module.exports = withInterceptStdout(nextConfig, (text) =>
	text.includes("Duplicate atom key") ? "" : text
);
