import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home wrapper">
        <div className="home-container-1"></div>
        <div className="home-container-2">
          <div className="what-now-button"></div>
          <div className="places-details-wrapper"></div>
        </div>
        <div className="home-container-3">
          <div className="google-maps-container"></div>
        </div>
      </div>
    )
  }
}

export default Home;
