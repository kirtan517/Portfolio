import React from "react";
import Home from "./Home";
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experience from "./Experience";
import Projects from "./Projects";

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

export type Tabs = "Home" | "Experience" | "Projects";

interface ActiveTabs {
	activeTab: Tabs;
	setActiveTab: (Tabs: Tabs) => void;
}

export const ActiveTabsContext = React.createContext<ActiveTabs>({
	activeTab: "Home",
	setActiveTab: () => console.log(""),
});

export default function Main() {
	const [mode, setMode] = React.useState<"light" | "dark">("light");
	const [activeTab, setActiveTab] = React.useState<Tabs>("Home");

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
					background: {
						default: mode == "dark" ? " #141010" : "#ddeedf",
					},
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ActiveTabsContext.Provider value={({activeTab, setActiveTab})}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<BrowserRouter>
						<NavBar>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/experience" element={<Experience />} />
								<Route path="/projects" element={<Projects />} />
							</Routes>
						</NavBar>
					</BrowserRouter>
				</ThemeProvider>
			</ActiveTabsContext.Provider>
		</ColorModeContext.Provider>
	);
}
