import React from 'react';

class YelpIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.showWhativity = this.showWhativity.bind(this);
  }
  showWhativity(e) {
    e.preventDefault();
    this.props.openModal('whativity');
  }

  render() {
    const { event } = this.props;

    return (
      <button className="yelp-index-item" onClick={this.showWhativity}>
        <div>
          <img src={event.image_url} alt={event.name} className="yelp-item-photo" />
        </div>
        <div className="yelp-item-info">
          <div className="yelp-item-name">{event.name}</div>
          <div className="yelp-item-description">{event.description}</div>
          <div className="yelp-item-time-start">{event.time_start}</div>
        </div>
      </button>
    )
  }
}

export default YelpIndexItem;