import React from "react";
import Bio from "./Bio";
import NavBar from "./NavBar";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import {
	useTheme,
	ThemeProvider,
	createTheme,
	experimental_extendTheme,
} from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { CssBaseline } from "@mui/material";

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

export default function Main() {
	const [mode, setMode] = React.useState<"light" | "dark">("light");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					background:{
						default : mode == "dark"?  " #141010" : "#ddeedf",
					}
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NavBar>
					<Bio />
				</NavBar>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
