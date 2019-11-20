import React from 'react';
import WhativityTabItem from './whativity_tab_item';

const PopularWhativities = ({ whativities }) => {
  const popularWhativities = whativities.map((whativity, idx) => {
    return (
      <WhativityTabItem
        key={idx}
        whativity={whativity}
      />
    )
  })

  return (
    <div className="popular-whativities-container">
      <div className="popular-whativities">
        {popularWhativities}
      </div>
    </div>
  )
};

export default PopularWhativities;