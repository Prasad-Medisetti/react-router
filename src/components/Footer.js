import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<footer className="footer">
				<Link className="brand" to="/">
					React Router Demo
				</Link>
			</footer>
		</>
	);
};

export default Header;
