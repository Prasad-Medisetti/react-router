import {
	BrowserRouter as Router,
	Link,
	Redirect,
	Route,
	Switch,
	useLocation,
} from "react-router-dom";

import "../styles.css";
import Header from "./Header";
import Footer from "./Footer";
import SignUpForm from "./SignUpForm";
import Details from "./Details";

const Home = () => {
	return <h2>Home Page</h2>;
};

const About = () => {
	return <h2>About Page</h2>;
};

const Contact = () => {
	return <h2>Contact Page</h2>;
};

const Profile = (props) => {
	console.log(props);
	return (
		<>
			<h2>Profile Page</h2>
			<br />
			<Link className="link" to="/profile/10">
				Edit Profile
			</Link>
		</>
	);
};

const EditProfile = (props) => {
	console.log(props);
	return <p>Editing profile page of user with id {props.match.params.id} </p>;
};

const Dashboard = (props) => {
	const { isLoggedIn } = props;
	console.log("isLoggedIn", isLoggedIn); // undefined
	return (
		<p>
			{isLoggedIn ? "You're logged in. Welcome back!" : "You're not logged in"}
		</p>
	);
};

const NotFound = () => {
	const location = useLocation();

	return (
		<div>
			{/* <Redirect to="/">Login</Redirect> */}
			<h2>
				<code>{location.pathname}</code> Page Not found.
			</h2>
			<br />
			<Link className="link" to="/">
				Go to Home Page
			</Link>
		</div>
	);
};

export default function App() {
	let isLoggedIn = false;

	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Header />
				<main className="main">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route
							path="/dashboard"
							component={(props) => (
								<Dashboard {...props} isLoggedIn={isLoggedIn} />
							)}
						/>
						<Route path="/signup" component={SignUpForm} />
						<Route path="/details" component={Details} />
						<Route exact path="/profile" component={Profile} />
						<Route path="/profile/:id" component={EditProfile} />
						<Route path="*" component={NotFound} />
					</Switch>
				</main>
				<Footer />
			</Router>
		</>
	);
}
