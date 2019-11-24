import React from 'react'

import YelpIndexItemContainer from './api_items/yelp_index_item_container';
import GoogleIndexItemContainer from './api_items/google_index_item_container';
import WhatIndexItem from './api_items/what_index_item';

const WhativityIndexItem = ({ whativity, api, openModal, itemIdx, selectedTab }) => {
  if (api === 'google') {
    return <GoogleIndexItemContainer openModal={openModal} place={whativity} itemIdx={itemIdx} selectedTab={selectedTab} />
  } else if (api === 'yelp') {
    return <YelpIndexItemContainer openModal={openModal} event={whativity} itemIdx={itemIdx} selectedTab={selectedTab} />
  } else if (api === 'whativity') {
    return <WhatIndexItem openModal={openModal} what={whativity} />
  }
}

export default WhativityIndexItem;