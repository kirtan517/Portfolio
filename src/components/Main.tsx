import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import "./Bio.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Skeleton } from "@mui/material";
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
						default: mode == "dark" ? "rgb(0,0,0)" : "#F1F6B6",
					},
					primary: {
						main: mode == "dark" ? "#0D1B2A" : "#F1F6B6",
					},
					secondary: {
						main: mode == "dark" ? "#1B263B" : "#90A955",
					},
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ActiveTabsContext.Provider value={{ activeTab, setActiveTab }}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<BrowserRouter>
						<div className={mode === "light" ? "Main-Light" : "Main-Dark"}>
							<NavBar>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/experience" element={<Experience mode={mode}/>} />
									<Route path="/projects" element={<Projects  mode = {mode} />} />
								</Routes>
							</NavBar>
						</div>
					</BrowserRouter>
				</ThemeProvider>
			</ActiveTabsContext.Provider>
		</ColorModeContext.Provider>
	);
}
