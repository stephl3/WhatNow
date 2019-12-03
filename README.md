# WhatNow

Check out WhatNow [live](http://wut-now.herokuapp.com/#/)!

## Background and Overview

Sometimes, plans fall through, and you find yourself in a state of social limbo. You and your friends decide to go to the state fair only to find that it's just been closed down for money laundering. Everyone’s thinking it and you blurt it out loud, _what now?_

"WhatNow" is an app that makes it easier to find events happening near you. 

* Simple: When you and your friends aren’t sure what to do, it’s scary to go on a limb and put ideas that they may or may not be so excited for. So put your search bar and suggestions away and click on that “What Now” button. 
Our application will display a list of events and once you have a general idea of what’s out there, you can narrow your options by applying filters.

* Social: Friends or no friends, events are usually more fun with more people. So we let our users anonymously indicate their interest.

* Spontaneous: We don’t want users to be bogged down by the sheer mass of options in the next coming days, weeks, and months. We put emphasis on the _now_ and filter events that aren't happening in the very near future. What _now_, not what later.

WhatNow, is a web-based app primarily built on the MERN stack (comprised of `MongoDB`, `Express`, `React`, and `Node`).

## Technologies

**MERN Stack**
 - This web app uses the MERN Stack(MongoDB, Express.js, React.js, and Node.js). Using MERN stack gave us the flexibility of using Javascript on both the frontend and backend. 
 - User information and recorded events history is stored in MongoDB allowing Node.js scripts to post and fetch data displaying through the React front-end

**Google Maps API & Yelp API**
 - Allows the app to locate the users location and pinpoint certain activities around them.

## Primary Components
**Random Whativities**
On the click of a button, random activities are fetched through the Google Maps API shown to the user through 3 categories: spontaneous, friends, and popular whativities.

**Whativity Show Page**
User can view details of selected whativity, including a description and location, which is displayed through Google Maps.

**Profile**
Users have a profile, which displays their past whativities, future whativities, and friends. Users have the option to follow other users.
