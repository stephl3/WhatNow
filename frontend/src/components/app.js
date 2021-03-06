import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

import Modal from "./modal/modal";
import NavBarContainer from "./nav/navbar_container";

import SplashPage from "./splash/splash_page.jsx";
import SplashPageContainer from './splash/splash_page_container';

import HomeContainer from './home/home_container';
import ProfileContainer from "./profile/profile_container";
import YelpIndexContainer from "./yelp/yelp_index_container";
import WhativitiesContainer from "./whativity/whativities_container";
import WhativityShow from "./whativity/whativity_show";

import DevelopersPage from './developers';


const App = () => (
  <div id="main-content">
    {/* < DevelopersPage /> */}
    <Modal />
    <NavBarContainer/>
    <Switch>
      <Route path="/contact" component={DevelopersPage} />
      <ProtectedRoute path="/home" component={HomeContainer} />
      <ProtectedRoute exact path='/:userId/profile' component={ProfileContainer} />
      <AuthRoute path="/" component={SplashPageContainer} />
    </Switch>
  </div>
);

export default App;
