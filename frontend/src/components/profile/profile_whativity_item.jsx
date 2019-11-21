import React from 'react';

const WhativityItem = props => {
  const { name, address } = props.props
  return(
    <li className="whativity-item" key={props._id}>
      {name}
      <p>Placeholder Name</p>
      <br/>
      {address}
      <p>Placeholder Address</p>
    </li>
  )
}

export default WhativityItem;