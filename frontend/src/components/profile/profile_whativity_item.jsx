import React from 'react';

class WhativityItem extends React.Component {

  componentDidMount() {
    this.props.fetchWhativity(this.props.item._id);
  }

  showWhativity(e) {
    e.preventDefault();
  }

  render() {
    const { item, openModal } = this.props;
    const { name, address } = item
  
    return(
      <div className="whativity-item">
        <img src={item.photoUrl} alt={item.name} className="whativity-item-photo"/>
        <div className="whativity-item-info">
          <div className="whativity-item-name">
              {name}
          </div>
          <div className="whativity-item-address">
              {address}
          </div>
        </div>
      </div>
    )
  }
}

export default WhativityItem; 