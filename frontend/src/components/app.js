import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import Modal from "./modal/modal";
import NavBarContainer from "./nav/navbar_container";
import {Link} from 'react-router-dom';

import SplashPage from "./splash/splash_page.jsx";
import ProfileContainer from "./profile/profile_container";
import HomeContainer from './home/home_container';
// import SplashPage from "./splash/splash_page";
import YelpIndexContainer from "./yelp/yelp_index_container";
import WhativitiesContainer from "./whativity/whativities_container";
import WhativityShow from "./whativity/whativity_show";

const App = () => (
    <div id="main-content">
        <Modal />
        <NavBarContainer />
        <Switch>
        {/* <YelpIndexContainer /> */}
            {/* <AuthRoute exact path="/home" component={HomeContainer} /> */}
            {/* <AuthRoute exact path="/" component={SplashPage} /> */}
            <ProtectedRoute exact path='/:userId/profile' component={ProfileContainer} />
            {/* <Link to="/whativities/:id" component={WhativityShow}/> */}
            <Link to="/whativities" component={WhativitiesContainer}/>
            <AuthRoute exact path="/" component={SplashPage} />
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
        </Switch>
    </div>
);

export default App;
