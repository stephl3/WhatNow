import React from 'react';
import YelpIndexItem from '../yelp/yelp_index_item';
import GoogleIndexItem from '../home/place';

class WhativityIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.renderInfo = this.renderInfo.bind(this);
  }

  // renderInfo() {
  //   // debugger
  //   if (this.props.whatItems.length > 0) {
  //     this.props.whatItems.map(whatItem => {
  //       let what = whatItem[0];
  //       let type = whatItem[1];
  //       // debugger
  //       if (type === 'google') {
  //         return (
  //           <div className="google-item-wrapper">
  //             THIS IS A GOOGLE WRAPPER
  //           </div>
  //         )
  //       } else if (type === 'yelp') {
  //         console.log('SUCCESSSSS')
  //         return (
  //           <YelpIndexItem 
  //             event={what}
  //           />
  //         )
  //       }
  //     })
  //   }
  // }

  render() {
    let whativity = this.props.whatItems.map(whatItem => {
      let what = whatItem[0];
      let type = whatItem[1];
      if (type === 'google') {
        return ( 
          <GoogleIndexItem
            place={what}
            key={whatItem.id}
          />
        )
      } else if (type === 'yelp') {
        return (
          <YelpIndexItem
            event={what}
            key={whatItem.id}
          />
        )
      }
    })

    return (
      <div className="yelp-index">
        {whativity}
      </div>
    )
  }
}

export default WhativityIndex;