import React from 'react';
// import '../../stylesheets/whativity_index.scss';

class Whativities extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      whativities: []
    }
  }

  componentDidMount(){
    this.props.fetchWhativities();
  }

  componentWillReceiveProps(newState) {
    this.setState({ whativities: newState.whativities });
  }

  render(){
    return(
      <div>
        <ul className="whativities-list">{this.state.whativities.map(whativity =>
          <li key={whativity._id} className="whativity-item">
            {whativity.name}
            <br/>
            {whativity.address}
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default Whativities;