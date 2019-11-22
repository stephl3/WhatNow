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
    return (
      <div id="hoopla">
        <h1>{whativity.name}</h1>
        <p>Address: {whativity.formatted_address}</p>
        <p>Rating: {whativity.rating}</p>
      </div>
    );
  }
}

export default WhativityShow;