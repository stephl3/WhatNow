import React from "react";
import { AuthRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import Modal from "./modal/modal";
import NavBarContainer from "./nav/navbar_container";
import GoogleMap from './GoogleMaps/google_maps';
import HomeContainer from './home/home_container';
import SplashPage from "./splash/splash_page";
import YelpIndexContainer from "./yelp/yelp_index_container";

const App = () => (
    <div id="main-content">
        <Modal />
        <NavBarContainer />
        <YelpIndexContainer />
        <Switch>
            <AuthRoute exact path="/home" component={HomeContainer} />
            <AuthRoute exact path="/" component={SplashPage} />
        </Switch>
    </div>
);

export default App;
