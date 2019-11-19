import React from "react";
import { AuthRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import GoogleMap from './GoogleMaps/google_maps';
import GoogleMapContainer from './GoogleMaps/google_map_container';
import DetailContainer from './details/details_container';
// import SplashPage from "./splash/splash_page";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";

const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        {/* < GoogleMapContainer /> */}
        < DetailContainer />
            {/* <GoogleMap /> */}
            {/* <AuthRoute exact path="/" component={SplashPage} /> */}
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;
