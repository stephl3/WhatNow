import React from 'react';

class WhativityShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whativity: {
        address:""
      }
    }
  }

  componentDidMount() {
    this.props.fetchWhativity(this.props.match.params.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({ whativity: newState.whativity });
  }

  render() {
    const whativity = this.state.whativity;

    return (
      <div>
        <h1> Whativity Show Page for {whativity.name} </h1>
        <div className="whativity-item-details">
          {whativity.address}
        </div>
      </div>
    );
  }
}

export default WhativityShow;