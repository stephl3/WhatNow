import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import Modal from "./modal/modal";
import NavBarContainer from "./nav/navbar_container";
import SplashPage from "./splash/splash_page.jsx";
import ProfileContainer from "./profile/profile_container";
import HomeContainer from './home/home_container';


const App = () => (
    <div id="main-content">
        <Modal />
        {/* <NavBarContainer /> */}
        <HomeContainer />
        <Switch>
            <AuthRoute path="/" component={SplashPage} />
            {/* <AuthRoute path="/" component={HomeContainer} /> */}
            {/* <ProtectedRoute exact path='/:userId/profile' component={ProfileContainer} /> */}
        </Switch>
    </div>
);

export default App;
