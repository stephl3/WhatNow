import React from 'react';

const WhativityItem = ({ item }) => {
  // const { name, address } = props.props
  return(
    <li className="whativity-item">
      <div>
        <img src={item.photoUrl} alt=""/>
      </div>
      <div className="whativitiy-item-info">
      <div className="whativity-item-name">
          {item.name}
      </div>
      <div className="whativity-item-address">
          {item.address}
      </div>
      </div>
    </li>
  )
}

export default WhativityItem; 