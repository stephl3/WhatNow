import React from 'react'

const WhativityTabItem = ({ whativity }) => {
  // yelp or google?
  // add open modal function

  return (
    <div className="whativity-tab-item-container">
      <div className="whativity-tab-item">
        {whativity.name}
      </div>
    </div>
  )
};

export default WhativityTabItem;