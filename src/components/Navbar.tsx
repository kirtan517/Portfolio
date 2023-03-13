import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import { navLinks } from "../constants";

const Navbar = () => {
	return (
		<nav className="w-full bg-orange-500 flex	items-center top-0 z-20">
			<div className="w-full flex flex-row items-center bg-blue-500 max-w-7xl mx-auto">
				<div className="flex flex-row">
					<Link to="/">
						<Logo className="bg-red-500 mr-3.5" />
					</Link>
					<p className="bg-red-500 text-white text-[16px] w-32 flex items-center">kirtan kanani</p>
				</div>
				<div className="w-full flex flex-row items-center bg-blue-500 max-w-7xl mx-auto">
					<ul className="flex flex-row">
					{navLinks.map((links)=>(
						<li key={links.id} className = "px-10">
							{links.title}
						</li>
					))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
