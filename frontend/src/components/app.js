import React from "react";
import { AuthRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import Modal from "./modal/modal";
import NavBarContainer from "./nav/navbar_container";

import SplashPage from "./splash/splash_page.jsx";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";

const App = () => (
    <div id="main-content">
        <Modal />
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
        </Switch>
    </div>
);

export default App;
