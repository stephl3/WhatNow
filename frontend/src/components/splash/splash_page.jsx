import React from "react";
import '../../stylesheets/splash_page.scss';

const images = [
  "https://d.newsweek.com/en/full/1502445/san-francisco-salifornia.webp",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
  "https://therealdeal.com/la/wp-content/uploads/2019/04/1200-sanfran.jpg",
  "https://images.pexels.com/photos/1115251/pexels-photo-1115251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://cdn.vox-cdn.com/thumbor/Mkr-FR0qpPpeEoohWw5q-Wal52E=/0x0:4000x4000/1820x1213/filters:focal(1680x1680:2320x2320):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg"
]

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 5000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const { currentImg } = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({ currentImg: newCurrentImg });
  }

  render() {
    
    const {currentImg} = this.state;
    const urlString = `url('${images[currentImg]}')`;

    return (
      <div className="splash-wrapper">
        <div className="splash-background" style={{ backgroundImage: urlString }}></div>
        <div className="whatnow-button">
          <h1>What Now?</h1>
        </div>
      </div>
    );
  }
}

export default SplashPage;
