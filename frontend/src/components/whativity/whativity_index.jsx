import React from 'react';

import WhativityIndexItem from './whativity_index_item';

class WhativityIndex extends React.Component {

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
    const whativityIndexItems = this.props.whatItems.map((whatItem, idx) => {
      let whativity = whatItem[0];
      let api = whatItem[1];
      return <WhativityIndexItem
              whativity={whativity}
              api={api}
              key={idx}
              openModal={this.props.openModal}
            />
    })

    return (
      <div className="whativity-index-items">
        {whativityIndexItems}
      </div>
    )
  }
}

export default WhativityIndex;