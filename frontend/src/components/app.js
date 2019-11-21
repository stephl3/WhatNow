import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Link } from "react-router-dom";

import Modal from "./modal/modal";
import NavBarContainer from "./nav/navbar_container";
import SplashPage from "./splash/splash_page.jsx";
import HomeContainer from './home/home_container';
import ProfileContainer from "./profile/profile_container";
import YelpIndexContainer from "./yelp/yelp_index_container";
import WhativitiesContainer from "./whativity/whativities_container";
import WhativityShow from "./whativity/whativity_show";


const App = () => (
  <div id="main-content">
    <Modal />
    <NavBarContainer/>
    <HomeContainer />
    <Switch>
      <AuthRoute exact path="/home" component={HomeContainer} />
      <AuthRoute exact path="/" component={SplashPage} />
      <ProtectedRoute exact path='/:userId/profile' component={ProfileContainer} />
      {/* <Link to="/whativities/:id" component={WhativityShow}/> */}
      <Link to="/whativities" component={WhativitiesContainer}/>
    </Switch>
  </div>
);

export default App;
