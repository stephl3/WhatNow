import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Link } from "react-router-dom";
// import NavBarContainer from "./nav/navbar_container";

import GoogleMap from './GoogleMaps/google_maps';
// import SplashPage from "./splash/splash_page";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";

const App = () => (
    <div>
        {/* <NavBarContainer /> */}
            <GoogleMap />
            {/* <AuthRoute exact path="/" component={SplashPage} /> */}
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;
