// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
// import { link } from 'fs';

class Details extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      photoRef: this.props.place.photos[0].photo_reference,
      photoUrl: ''
    }
    this.renderPhoto = this.renderPhoto.bind(this);
    // this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    this.renderPhoto();
  }

  renderPhoto() {
    this.props.findPlacePhoto(this.props.place.photos[0].photo_reference)
      .then(res => this.setState({
        photoUrl: res.request.responseURL
      }))
      // .then(res => console.log(res))
  }

  render(){
      const { place } = this.props
      // const photoUrl = this.renderPhoto()
    return(
      <div className="places-wrapper">
        <div className="places-container">
             <div className="place-details">
                <div className="place-name">
                  {place.name}
                </div>
                <div className="place-photo">
              <img src={this.state.photoUrl} alt=""/>
                  {/* {this.state.photoUrl} */}
              {/* <img src={this.state.photoUrl} alt=""/> */}
                </div>
                <div className="place-rating">
                  {/* {place.rating} */}
                </div>
                <div className="place-address">
                  {/* {place.formatted_address} */}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Details;