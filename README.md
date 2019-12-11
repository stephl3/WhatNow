# WhatNow

Check out WhatNow [live](http://wut-now.herokuapp.com/#/)!

## Background and Overview

![](splash1.png)

Sometimes, plans fall through, and you find yourself in a state of social limbo. You and your friends decide to go to the state fair only to find that it's just been closed down for money laundering. Everyone’s thinking it and you blurt it out loud, _what now?_

"WhatNow" is an app that makes it easier to find events happening near you. 

* Simple: When you and your friends aren’t sure what to do, it’s scary to go on a limb and put ideas that they may or may not be so excited for. So put your search bar and suggestions away and click on that “What Now” button. 
Our application will display a list of events and once you have a general idea of what’s out there, you can narrow your options by applying filters.

* Social: Friends or no friends, events are usually more fun with more people. So we let our users anonymously indicate their interest.

* Spontaneous: We don’t want users to be bogged down by the sheer mass of options in the next coming days, weeks, and months. We put emphasis on the _now_ and filter events that aren't happening in the very near future. What _now_, not what later.

WhatNow, is a web-based app primarily built on the MERN stack (comprised of `MongoDB`, `Express`, `React`, and `Node`).

![](main1.png)


## Technologies

**MERN Stack**
 - This web app uses the MERN Stack(MongoDB, Express.js, React.js, and Node.js). Using MERN stack gave us the flexibility of using Javascript on both the frontend and backend. 
 - User information and recorded events history is stored in MongoDB allowing Node.js scripts to post and fetch data displaying through the React front-end

**Google Maps API & Yelp API**
 - Allows the app to locate the users location and pinpoint certain activities around them.

**Libraries & Other Technologies**
 - google-maps-react
 - bcrypt
 - passport
 - jsonwebtoken
 - mongoose
 
## Features

**Randomized Events**

Using the google maps and yelp APIs, as well as our internal database, we created a function to be able to randomly select certain events that would be able to be shown to the user after clicking the "What Now" button. Out of a list of 40+ events, the function chooses 9 events without any duplicates.

```
shuffleChoices() {
 let choices = this.assignType();
 let newSpontaneous = [];
 let newPopular = [];
 let newFriends = [];

 while (newSpontaneous.length < 3) {
   let randomChoiceIdx = Math.round(Math.random() * (choices.length - 1));
   let randomChoice = choices[randomChoiceIdx];

   if (!newSpontaneous.includes(randomChoice)) newSpontaneous.push(randomChoice);
 }
 while (newPopular.length < 3) {
   let randomChoiceIdx = Math.round(Math.random() * (choices.length - 1));
   let randomChoice = choices[randomChoiceIdx];

   if (!newPopular.includes(randomChoice) && !newSpontaneous.includes(randomChoice)) newPopular.push(randomChoice);
 }
 while (newFriends.length < 3) {
   let randomChoiceIdx = Math.round(Math.random() * (choices.length - 1));
   let randomChoice = choices[randomChoiceIdx];

   if (!newFriends.includes(randomChoice) && !newPopular.includes(randomChoice) && !newSpontaneous.includes(randomChoice) ) newFriends.push(randomChoice);
 }
 this.setState({
   spontaneous: newSpontaneous,
   popular: newPopular,
   friends: newFriends,
   tabVisible: true,
   modal: true
 })
}
```
**Location of the Event**

With each event or activity that the user can select, they are able to find the location of that event. We integrated the google maps API to be able to show a visual location of varied events to the relative current user location. The user is able to interact with the map and be able to see certain details.

```
<Map
  google={this.props.google}
  zoom={11}
  style={mapStyles}
  initialCenter={{lat: 37.788268, lng: -122.407545} }
>
   <Marker 
    onClick={this.onMarkerClick}
    name={'Current Location'}
    position={{ 
      lat: 37.788268,
      lng: -122.407545
    }} 
  />
  <Marker 
    onClick={this.onMarkerClick}
    name={whativity.name}
    position={{ 
      lat: whativity.latitude, 
      lng: -(whativity.longitude) 
    }} 
  />
  <InfoWindow
    marker={this.state.activeMarker}
    visible={this.state.showingInfoWindow}
    onClose={this.onClose}
  >
    <div className="map-info-window">
      {this.state.selectedPlace.name}
    </div>
  </InfoWindow>
</Map>
 ```
 
## Primary Components

**User Authorization**
User authentication is achieved through the use of `Passport` and `JSON Web Token`. 
When the user logs in, `JSON Web Token` assigns and passes around an encrypted token in requests that helps to identify the logged in user. All requests needing authentication pass through the Passport middleware that checks the provided token and allows the request only if the token is verified

**Random Whativities**

On the click of a button, random activities are fetched through the `Google Maps API` and `Yelp API`. They are shown to the user through 3 categories: spontaneous, friends, and popular whativities.

**Whativity Show Page**

User can view details of selected whativity, including a description and location, which is displayed through `google-maps-react library`.

**Profile**

Users have a profile, which displays their past whativities, future whativities, and friends. Users have the option to follow other users.

## Bonus Features to be made

**Geolocation**
Allows the user to be able to access the map and have the current location be created anywhere.

**Create Events**
The user is able to create and delete events that show up in the randomizer when other users click the button.

**User Interaction**
Users are able to see their "friends" and how many other users are attending a certain event.

**Comments and Event interaction**
Users are able to post on a message board pertaining to an event

### Contributors

------

[Christopher Trinh](https://github.com/chris510) |
[Stephen Lee](https://github.com/stephl3) |
[Lisa Wen](https://github.com/lisaw97) |
[Kevin Suriawijaya](https://github.com/airusk)
