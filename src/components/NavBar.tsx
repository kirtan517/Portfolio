import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./NavBar.css";
import { Grid } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ActiveTabsContext, ColorModeContext } from "./Main";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import type { Tabs } from "./Main";
import { useNavigate } from "react-router-dom";

const menuOptions: Tabs[] = ["Home", "Experience", "Projects"];

interface Props {
	window?: () => Window;
	children: React.ReactElement;
}

function ModeIcon() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				// bgcolor: "background.default",
				color: "text.primary",
			}}
		>
			<IconButton
				sx={{ ml: 1 }}
				onClick={colorMode.toggleColorMode}
				color="inherit"
			>
				{theme.palette.mode === "dark" ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		</Box>
	);
}

function Item(props: BoxProps) {
	const { sx, ...other } = props;
	return (
		<Box
			sx={{
				// bgcolor: (theme) =>
				// 	theme.palette.mode === "dark" ? "#101010" : "#fff",
				color: (theme) =>
					theme.palette.mode === "dark" ? "grey.300" : "grey.800",
				borderColor: (theme) =>
					theme.palette.mode === "dark" ? "grey.800" : "grey.300",
				marginLeft: "6%",
				marginTop: "0px",
				marginBottom: "0px",
				"&:hover": {
					textDecoration: "underline",
					textUnderlineOffset: "5px",
					cursor: "pointer",
				},
				...sx,
			}}
			{...other}
		/>
	);
}

function ElevationScroll(props: Props) {
	const { children, window } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

export default function NavBar(props: Props) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { activeTab, setActiveTab } = useContext(ActiveTabsContext);
	const navigate = useNavigate();

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = (option: Tabs) => {
		setAnchorElUser(null);
		handleActiveTabs(option);
	};

	const handleActiveTabs = (option: Tabs) => {
		if (option == "Home") {
			setActiveTab("Home");
			navigate("/");
		} else if (option == "Experience") {
			setActiveTab("Experience");
			navigate("/experience");
		} else if (option == "Projects") {
			setActiveTab("Projects");
			navigate("/projects");
		}
	};

	useEffect(() => {
		const handleSize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleSize);

		return () => {
			window.removeEventListener("resize", handleSize);
		};
	}, []);

	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar
					sx={{
						/* From https://css.glass */
						background: (theme) =>
							theme.palette.mode === "dark"
								? "rgba(0, 0, 0, 0.35)"
								: "rgba(183, 200, 146, 0.50)",
						boxShadow: (theme) =>
							theme.palette.mode === "dark"
								? "0 4px 30px rgba(0, 0, 0, 0.1)"
								: "0 4px 30px rgba(0, 0, 0, 0.1)",
						backdropFilter: (theme) =>
							theme.palette.mode === "dark" ? "blur(5.8px)" : "blur(4px)",
						WebkitBackdropFilter: (theme) =>
							theme.palette.mode === "dark" ? "blur(5.8px)" : "blur(4px)",
						border: (theme) =>
							theme.palette.mode === "dark"
								? "1px solid rgba(0, 0, 0, 0.42)"
								: "1px solid rgba(255, 255, 255, 0.31)",
					}}
				>
					<Toolbar>
						<Box
							className="NavBarContainer"
							sx={{
								display: "flex",
								// gridTemplateColumns: 'repeat(2, 20fr)',
								gridAutoColumns: "3fr",
								gap: 1,
								direction: "row",
								alignContent: "center",
								justifyContent: "center",
								alignItems: "center",
								justify: "center",
								// background: "white",
								width: "100%",
							}}
						>
							<Box
								sx={{
									width: windowWidth > 1150 ? "39%" : "50%",
									// bgcolor: (theme) =>
									// 	theme.palette.mode === "dark" ? "#101010" : "#fff",
									color: (theme) =>
										theme.palette.mode === "dark" ? "grey.300" : "grey.800",
									borderColor: (theme) =>
										theme.palette.mode === "dark" ? "grey.800" : "grey.300",
									fontWeight: "700",
								}}
							>
								<Typography
									variant="h6"
									component="div"
									className="LogoName"
									sx={{
										fontWeight: "700",
										paddingRight: "20px",
										"&:hover": {
											cursor: "pointer",
										},
									}}
									onClick={() => handleActiveTabs("Home")}
								>
									Kirtan Kanani
								</Typography>
							</Box>
							{windowWidth > 1150 ? (
								<Box
									sx={{
										display: "flex",
										alignContent: "center",
										justifyContent: "center",
										width: "20%",
										margin: "0 0",
									}}
									className="Tabs"
								>
									{menuOptions.map((option, index) => (
										<Item
											order={index}
											sx={{
												fontWeight: activeTab == option ? "700" : "500",
												textDecoration:
													activeTab == option ? "underline" : "none",
												textUnderlineOffset:
													activeTab == option ? "5px" : "0px",
											}}
											onClick={() => handleActiveTabs(option)}
										>
											{option}
										</Item>
									))}
								</Box>
							) : (
								<Box sx={{ flexGrow: 0 }}>
									<Tooltip title="Open settings">
										<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
											<MenuIcon />
										</IconButton>
									</Tooltip>
									<Menu
										sx={{
											mt: "45px",
											"& .MuiPaper-root": {
											},
										}}
										id="menu-appbar"
										anchorEl={anchorElUser}
										anchorOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										keepMounted
										transformOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										open={Boolean(anchorElUser)}
										onClose={() => handleCloseUserMenu(activeTab)}
									>
										{menuOptions.map((option) => (
											<MenuItem
												key={option}
												onClick={() => handleCloseUserMenu(option)}
												sx={{
													"&:hover": {
														textDecoration: "underline",
														textUnderlineOffset: "5px",
														cursor: "pointer",
													},
												}}
											>
												<Typography textAlign="center">{option}</Typography>
											</MenuItem>
										))}
									</Menu>
								</Box>
							)}
							<Box>
								<ModeIcon />
							</Box>
						</Box>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
			<Container>
				<Box sx={{ my: 2 }}>{props.children}</Box>
			</Container>
		</React.Fragment>
	);
}
