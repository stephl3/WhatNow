import React from 'react';
import WhativityTabItem from './whativity_tab_item';

const FriendsWhativities = ({ whativities }) => {
  const friendsWhativities = whativities.map((whativity, idx) => {
    return (
      <WhativityTabItem
        key={idx}
        whativity={whativity}
      />
    )
  })

  return (
    <div className="friends-whativities-container">
      <div className="friends-whativities">
        {friendsWhativities}
      </div>
    </div>
  )
};

export default FriendsWhativities;