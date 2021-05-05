import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header className="header">
				<NavLink className="brand" to="/">
					React Router Demo
				</NavLink>
				<nav className="nav">
					<NavLink className="nav-link" activeClassName="active" exact to="/">
						Home
					</NavLink>
					<NavLink className="nav-link" activeClassName="active" to="/about">
						About
					</NavLink>
					<NavLink className="nav-link" activeClassName="active" to="/contact">
						Contact
					</NavLink>
					<NavLink
						className="nav-link"
						activeClassName="active"
						to="/dashboard"
					>
						Dashboard
					</NavLink>
					<NavLink className="nav-link" activeClassName="active" to="/signup">
						Sign Up
					</NavLink>
					<NavLink className="nav-link" activeClassName="active" to="/profile">
						Profile
					</NavLink>
					<NavLink className="nav-link" activeClassName="active" to="/help">
						404
					</NavLink>
				</nav>
			</header>
		</>
	);
};

export default Header;
