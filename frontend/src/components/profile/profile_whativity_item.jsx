import React from 'react';

const WhativityItem = ({ item }) => {
  // const { name, address } = props.props
  return(
    <div className="whativity-item">
      <img src={item.photoUrl} alt={item.name} className="whativity-item-photo"/>
      <div className="whativitiy-item-info">
        <div className="whativity-item-name">
            {item.name}
        </div>
        <div className="whativity-item-address">
            {item.address}
        </div>
      </div>
    </div>
  )
}

export default WhativityItem; 