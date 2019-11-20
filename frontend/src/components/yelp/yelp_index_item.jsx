import React from 'react';

const YelpIndexItem = ({ event }) => {
  return (
    <div className="yelp-index-item">
      <div><img src={event.image_url} alt=""/></div>
      <div>{event.name}</div>
      <div>{event.description}</div>
      <div>{event.time_start}</div>
    </div>
  )
}

export default YelpIndexItem;