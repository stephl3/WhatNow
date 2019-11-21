// STILL NEED???


// import React, { Component } from 'react';
// import YelpIndexItem from './yelp_index_item';

// export default class YelpIndex extends Component {
//   constructor(props) {
//     super(props);
//     this._getYelpEvents = this._getYelpEvents.bind(this);
//   }

//   componentDidMount() {
//     this.props.fetchYelpEvents()
//   }

//   _getYelpEvents() {
//     return (
//       <div className='yelp-index'>
//         {this.props.events.map(event => (
//           <YelpIndexItem
//             key={event.id}
//             event={event}
//           />
//         ))}
//       </div>
//     )
//   }

//   render() {
//     const { events } = this.props;

//     return (
//       <div className='yelp-index-container'>
//         {this._getYelpEvents()}
//       </div>
//     )
//   }
// }
