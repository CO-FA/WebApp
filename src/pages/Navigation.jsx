import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../assets/css/main.css";
import Home from "../pages/Home";
import RegistroStep1 from "../pages/RegistroStep1";
import RegistroStep2 from "../pages/RegistroStep2";
import RegistroStep3 from "../pages/RegistroStep3";
import RegistroStep4 from "../pages/RegistroStep4";
import Login from "../pages/Login";
import OlvidePasswordStep1 from "../pages/OlvidePasswordStep1";
import OlvidePasswordStep2 from "../pages/OlvidePasswordStep2";
import OlvidePasswordStep3 from "../pages/OlvidePasswordStep3";

const AnimationItem = ({ children }) => {
	return <div className="animation-item">{children}</div>;
};

export default function Navigation() {
	let location = useLocation();

	return (
		<div className="index">
			<main role="main" className="container">
				<TransitionGroup>
					<CSSTransition
						key={location.pathname}
						classNames="fade"
						timeout={300}
					>
						<Switch>
							<Route path="/registro">
								<AnimationItem>
									<RegistroStep1 />
								</AnimationItem>
							</Route>
							<Route path="/terminos">
								<AnimationItem>
									<RegistroStep2 />
								</AnimationItem>
							</Route>
							<Route path="/documento">
								<AnimationItem>
									<RegistroStep3 />
								</AnimationItem>
							</Route>
							<Route path="/validatePhone">
								<AnimationItem>
									<RegistroStep4 />
								</AnimationItem>
							</Route>
							<Route path="/login">
								<AnimationItem>
									<Login />
								</AnimationItem>
							</Route>
							<Route path="/forgotPassword">
								<AnimationItem>
									<OlvidePasswordStep1 />
								</AnimationItem>
							</Route>
							<Route path="/emailCode">
								<AnimationItem>
									<OlvidePasswordStep2 />
								</AnimationItem>
							</Route>
							<Route path="/newPassword">
								<AnimationItem>
									<OlvidePasswordStep3 />
								</AnimationItem>
							</Route>

							<Route path="/">
								<AnimationItem>
									<Home />
								</AnimationItem>
							</Route>
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</main>
		</div>
	);
}
