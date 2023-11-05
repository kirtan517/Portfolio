import React, { useEffect } from "react";
import { useContext } from "react";
import { ActiveTabsContext } from "./Main";
import {
	Avatar,
	Box,
	Container,
	Divider,
	Grid,
	Typography,
} from "@mui/material";

interface Props{
	"mode" : "light" | "dark";
}

function OneExperienceComponenet(props : Props) {
	return (
		<Container>
			<Grid container sx={{}}>
				<div
					style={{
						padding: "3.5px",
						position: "relative",
						background: props.mode === "light" ? "#132A13": "#415A77",
						transform: "translateY(5px)",
					}}
				>
					<Avatar
						sx={{
							zIndex: "1",
							position: "absolute",
							transform: "translateX(-50%)",
							top: "-1px",
							border: `2px solid ${props.mode === "light" ? "#132A13": "#415A77"}`,
						}}
					>
					</Avatar>
				</div>

				<Grid
					item
					xs={11}
					sx={{
						paddingLeft: "20px",
					}}
				>
					<Typography
						sx={{ bgcolor: props.mode === "light" ? "#B7C892": "#1B263B", borderRadius: 3, p: 2, m: 2 }}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
						natus rerum cum quos molestiae? Soluta eligendi perspiciatis
						laboriosam dolores veritatis officia, fugit repellendus sequi iusto
						eaque ab magnam dolorem odit? Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Eius ipsum aliquam inventore vel
						incidunt quisquam non itaque quibusdam reiciendis asperiores, earum
						beatae sequi numquam! Molestiae, maiores sequi repellendus,
						obcaecati vero explicabo eos id tempora accusamus quod laborum natus
						exercitationem laudantium reprehenderit iure sapiente autem ratione
						iste temporibus illum repellat! Asperiores repellendus inventore
						sunt est iure id, cumque ad ea rerum dolore quaerat repellat totam
						alias aut! Reprehenderit voluptates distinctio nisi alias quo
						reiciendis voluptas, ex, earum accusamus fugiat incidunt sequi
						asperiores corrupti nulla repudiandae nemo? Sed, voluptate. Quia,
						dolore repudiandae consectetur ipsam dolor est? Maxime tempore iure
						pariatur laudantium consectetur.
					</Typography>
				</Grid>

				<Grid xs={12}>
					<div
						style={{
							height: "25px",
							padding: "3.5px",
							// background: "red",
							display: "inline-block",
							position: "relative",
						}}
					>
						<div
							style={{
								background: props.mode === "light" ? "#132A13": "#415A77",
								height: "15px",
								width: "15px",
								position: "absolute",
								transform: "translateX(-50%)",
								borderRadius: "50%",
								top: "-10px",
							}}
						></div>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}

function Experience(props:Props) {
	const { activeTab, setActiveTab } = useContext(ActiveTabsContext);

	useEffect(() => {
		setActiveTab("Experience");
	});

	return (
		<Container
			sx={{ width: { xl: "85%", lg: "85%", md: "85%", sm: "95%", xs: "100%" } }}
		>
			<OneExperienceComponenet mode={props.mode}></OneExperienceComponenet>
			<OneExperienceComponenet mode={props.mode}></OneExperienceComponenet>
			<OneExperienceComponenet mode={props.mode}></OneExperienceComponenet>
			<OneExperienceComponenet mode={props.mode}></OneExperienceComponenet>
		</Container>
	);
}

export default Experience;
