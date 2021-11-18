
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import '../assets/css/main.css'
import Home from "../pages/Home"
import RegistroStep1 from "../pages/RegistroStep1";
import RegistroStep2 from "../pages/RegistroStep2";
import Login from "../pages/Login";

const AnimationItem = ({ children }) => {
    return <div className="animation-item">
        {children}
    </div>
}

export default function Navigation() {
    let location = useLocation();

    return <div className="index">
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
                            
                            <Route path="/login">
                                <AnimationItem>
                                    <Login />
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
}  