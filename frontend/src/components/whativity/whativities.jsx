import React from 'react';

class Whativities extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      whativities: []
    }
  }

  componentDidMount(){
    // debugger
    this.props.fetchWhativities();
  }

  componentWillReceiveProps(newState) {
    this.setState({ whativities: newState.whativities });
  }

  render(){
    debugger
    console.log(this.state.whativities)
    return(
      <div>
        <ul className="whativities-list">{this.state.whativities.map(whativity =>
          <li>
            {whativity.name}
            {whativity.address}
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default Whativities;