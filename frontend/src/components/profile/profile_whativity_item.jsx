import React from 'react';

const WhativityItem = props => (
  <li className="whativity-item">
    {props.name}
    <br/>
    {props.address}
  </li>
);

export default WhativityItem;