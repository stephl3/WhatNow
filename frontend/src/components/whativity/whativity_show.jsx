import React from 'react';

class WhativityShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchWhativity(id);
  }

  render() {
    debugger
    const {whativity} = this.props;
      if (!whativity) {
        return null;
      }
    const formatted_address  = whativity.formatted_address || whativity.location.display_address.join(", ");
    const imageUrl = whativity.imgUrl || whativity.image_url;
    return (
      <div id="whativity-show-container">
        <div className="show-image-container">
          <img src={imageUrl} alt=""/>
        </div>
        <div className="month-container">
          <h2>Dec</h2>
          <p>28</p>
        </div>
        <h1 className="show-name">{whativity.name}</h1>
        <p>Address: {formatted_address}</p>
        <p>Rating: {whativity.rating}</p>
      </div>
    );
  }
}

export default WhativityShow;