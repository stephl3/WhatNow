import React from 'react';

const YelpIndexItem = ({ event }) => {
  return (
    <div>
      <div>{event.title}</div>
      <div>{event.description}</div>
    </div>
  )
}

export default YelpIndexItem;