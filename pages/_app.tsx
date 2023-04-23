import "../../../NHRProject/benefitkia-front/MuiClassNameSetup"; // MuiClassNameSetup 스크립트는 항상 _app.tsx 파일 최상단에 위치해야함 (안그러면 className이 변경되지 않음)
import "../styles/globals.css";
// import Loading from "container/common/Loading";
// import ModalProvider from "container/common/ModalProvider";
// import HeaderMetaTag from "container/common/HeaderMetaTag";
// import GuestLayout from "container/common/Layout/auth/GuestLayout";
// import MainLayout from "container/common/Layout/auth/MainLayout";
// import MinimalLayout from "container/common/Layout/auth/MinimalLayout";
import { ConfigProvider } from "contexts/ConfigContext";
import { AppProps } from "next/app";
import { FC, useState, useEffect } from "react";
import { RecoilRoot } from "recoil";
// import ThemeCustomization from "themes";
import { LayoutType, UserType } from "type/index";
// import CompanyThemeCustomization from "container/common/CompanyThemeCustomization";

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		dashed: true;
	}
}

declare global {
	interface Window {
		naver: any;
	}
}

const Noop: FC<{
	children?: React.ReactNode;
}> = ({ children }) => {
	return <> {children} </>;
};

function MyApp({
	Component,
	pageProps,
}: AppProps & { Component: { Layout: LayoutType; AboveAuthLevel: UserType } }) {
	const [render, setRender] = useState(false);

	useEffect(() => {
		setRender(true);
	}, []);

	let Layout;
	// switch (Component.Layout) {
	// 	case "mainLayout":
	// 		Layout = MainLayout;
	// 		break;
	// 	case "minimalLayout":
	// 		Layout = MinimalLayout;
	// 		break;
	// 	case "guestLayout":
	// 		Layout = GuestLayout;
	// 		break;
	// 	default:
	// 		Layout = Noop;
	// }

	const isAdmin = true;
	return (
		<RecoilRoot>
			<ConfigProvider>
				{/* <ThemeCustomization>
					<Loading />
					<ModalProvider />
					<HeaderMetaTag pageProps={pageProps} /> */}
				{/* <Layout>{render && <Component {...pageProps} />}</Layout> */}
				<Component {...pageProps} />
				{/* </ThemeCustomization> */}
			</ConfigProvider>
		</RecoilRoot>
	);
}

export default MyApp;
