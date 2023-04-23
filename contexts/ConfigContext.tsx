import { createContext, ReactNode, useState } from "react";

// project import
import defaultConfig from "config";

// types
import { PaletteMode } from "@mui/material";
import { CustomizationProps } from "types/config";

// initial state
const initialState: CustomizationProps = {
	...defaultConfig,
	container: false,
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
	children: ReactNode;
};

function ConfigProvider({ children }: ConfigProviderProps) {
	const [config, setConfig] = useState(defaultConfig);

	return (
		<ConfigContext.Provider
			value={{
				...config,
			}}
		>
			{children}
		</ConfigContext.Provider>
	);
}

export { ConfigProvider, ConfigContext };
