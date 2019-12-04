import React from 'react';

class ProfileWhativityItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.showWhativity = this.showWhativity.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchWhativity(this.props.key);
  // }

  showWhativity() {
    // debugger
    this.props.receiveWhativity(this.props.item);
    this.props.openModal('user-whativity');
  }

  render() {
    const { item } = this.props;
    const { name, address } = item
    // debugger
    return(
      <div onClick={this.showWhativity} className="whativity-item">
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

export default ProfileWhativityItem; 