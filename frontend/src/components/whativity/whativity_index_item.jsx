import React from 'react'

import YelpIndexItem from './api_items/yelp_index_item';
import GoogleIndexItemContainer from './api_items/google_index_item_container';
import WhatIndexItemContainer from './api_items/what_index_item_container';

const WhativityIndexItem = ({ whativity, api, openModal, itemIdx, selectedTab }) => {
  if (api === 'google') {
    return <GoogleIndexItemContainer openModal={openModal} place={whativity} itemIdx={itemIdx} selectedTab={selectedTab} />
  } else if (api === 'yelp') {
    return <YelpIndexItem openModal={openModal} event={whativity} />
  } else if (api === 'whativity') {
    return <WhatIndexItemContainer openModal={openModal} what={whativity} itemIdx={itemIdx} selectedTab={selectedTab} />
  }
}

export default WhativityIndexItem;