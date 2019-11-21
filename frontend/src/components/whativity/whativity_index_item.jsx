import React from 'react'

import YelpIndexItem from './api_items/yelp_index_item';
import GoogleIndexItem from './api_items/google_index_item';

const WhativityIndexItem = ({ whativity, api, openModal }) => {
  if (api === 'google') {
    return <GoogleIndexItem openModal={openModal} place={whativity} />
  } else if (api === 'yelp') {
    return <YelpIndexItem openModal={openModal} event={whativity} />
  }
}

export default WhativityIndexItem;