import React, { useContext, useEffect } from "react";
import { ActiveTabsContext } from "./Main";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, CardActionArea, CardActions, Icon } from "@mui/material";
import FC from "../static/images/contemplative-reptile.jpg";
import "./Project.css"
import GitHubIcon from '@mui/icons-material/GitHub';


interface MediaProps {
	loading?: boolean;
}

interface Props{
  mode: "light" | "dark"; 
}

function MultiActionAreaCard(props : Props) {
	return (
		<Card sx={{ maxWidth: 360 }}>
			<CardActionArea>
				<CardMedia component="img" height="250" image={FC} alt="green iguana" />
				<CardContent className = {props.mode === "dark" ? "CardContent-dark" : "CardContent-light" }>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className = {props.mode === "dark" ? "CardActions-dark" : "CardActions-light" }>
				<Button size="small" style = {
          props.mode === "dark"? 
        {
          background : "#415A77"
        } 
        : 
        {
          background : '#132A13'
        }} >
					Learn More
				</Button>
        <IconButton size="small" >
					<GitHubIcon/>
				</IconButton>
			</CardActions>
		</Card>
	);
}


export default function Projects(props : Props) {
	const { activeTab, setActiveTab } = useContext(ActiveTabsContext);

	useEffect(() => {
		setActiveTab("Projects");
	});
  
  const itemStyle = {
    marginTop: '30px', // Add vertical margin
  };
  

	return (
		<div>
				<Grid container spacing={8}>
					<Grid item xs style={itemStyle}>
						<MultiActionAreaCard  mode = {props.mode}/>
					</Grid>
					<Grid item xs style={itemStyle}>
						<MultiActionAreaCard  mode = {props.mode}/>
					</Grid>
					<Grid item xs style={itemStyle}>
						<MultiActionAreaCard mode = {props.mode} />
					</Grid>
				</Grid>
				<Grid container spacing={8}>
					<Grid item xs style={itemStyle}>
						<MultiActionAreaCard  mode = {props.mode}/>
					</Grid>
					<Grid item xs style={itemStyle}>
						<MultiActionAreaCard mode = {props.mode} />
					</Grid>
					<Grid item xs style={itemStyle}>
						<MultiActionAreaCard  mode = {props.mode}/>
					</Grid>
				</Grid>
		</div>
	);
}
