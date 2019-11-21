import React from 'react';

const YelpIndexItem = ({ event }) => {
  return (
    <div className="yelp-index-item">
      <div>
        <img src={event.image_url} alt={event.name} className="yelp-item-photo"/>
      </div>
      <div className="yelp-item-info">
        <div className="yelp-item-name">{event.name}</div>
        <div className="yelp-item-description">{event.description}</div>
        <div className="yelp-item-time-start">{event.time_start}</div>
      </div>
    </div>
  )
}

export default YelpIndexItem;