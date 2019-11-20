import React from 'react';
import WhativityTabItem from './whativity_tab_item';

const SpontaneousWhativities = ({ whativities }) => {
  const spontaneousWhativities = whativities.map((whativity, idx) => {
    return (
      <WhativityTabItem
        key={idx}
        whativity={whativity}
      />
    )
  })

  return (
    <div className="spontaneous-whativities-container">
      <div className="spontaneous-whativities">
        {spontaneousWhativities}
      </div>
    </div>
  )
};

export default SpontaneousWhativities;