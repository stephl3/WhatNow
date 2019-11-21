import React from 'react';
import { connect } from 'react-redux';

const { PropTypes } = React;
const TIMER = 150; // Milliseconds between moving the next block
const TRANSITION = .3 // Seconds to actually move one block
const DEF_SIZE = 60; // Pixels height/width
const GUTTER = 5; // Spacing in percentage between tiles
const initialState = {

  positions: {
    1: 'alpha',
    2: 'bravo',
    3: 'charlie',
    4: null,
    5: 'delta',
    6: 'echo',
    7: 'foxtrot'
  },
  stateNumber: 0
}

class Loader extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.setNextState = this.setNextState.bind(this);
  }
  componentDidMount() {
    this.setTimer(TIMER);
  }
  setTimer(time) {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(this.setNextState, time);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  clipPathForPosition(position) {
    position = parseInt(position, 10);
    const SIZE = (100 - 2 * GUTTER) / 3;
    const VAR0 = '0% ';
    const VAR1 = (SIZE + GUTTER) + '% ';
    const VAR2 = (2 * SIZE + 2 * GUTTER) + '% ';
    switch (position) {
      case 1: return 'inset(' + VAR1 + VAR2 + VAR1 + VAR0 + ' round 5%)';
      case 2: return 'inset(' + VAR0 + VAR2 + VAR2 + VAR0 + ' round 5%)';
      case 3: return 'inset(' + VAR0 + VAR1 + VAR2 + VAR1 + ' round 5%)';
      case 4: return 'inset(' + VAR1 + VAR1 + VAR1 + VAR1 + ' round 5%)';
      case 5: return 'inset(' + VAR2 + VAR1 + VAR0 + VAR1 + ' round 5%)';
      case 6: return 'inset(' + VAR2 + VAR0 + VAR0 + VAR2 + ' round 5%)';
      case 7: return 'inset(' + VAR1 + VAR0 + VAR1 + VAR2 + ' round 5%)';
      default: break;
    }
  }
  tileIndexToMove() {
    switch (this.state.stateNumber) {
      case 0: return 7;
      case 1: return 6;
      case 2: return 5;
      case 3: return 4;
      case 4: return 3;
      case 5: return 2;
      case 6: return 1;
      case 7: return 4;
      default: break;
    }
  }
  positionForTile(radioCommand) {
    for (var position in this.state.positions) {
      var tile = this.state.positions[position];
      if (tile === radioCommand) {
        return position;
      }
    }
  }
  setNextState() {
    const currentPositions = this.state.positions;
    const emptyIndex = this.positionForTile(null);
    const indexToMove = this.tileIndexToMove();
    const newPositions = Object.assign({}, currentPositions, {
      [indexToMove]: null,
      [emptyIndex]: currentPositions[indexToMove]
    });

    const currentState = this.state.stateNumber;
    const nextState = (currentState === 7) ? 0 : currentState + 1;


    this.setState({ stateNumber: nextState, positions: newPositions });
  }
  renderTiles() {
    return ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot'].map((radioCommand) => {
      const pos = this.positionForTile(radioCommand);
      const styles = {
        transition: (TRANSITION) + 's cubic-bezier(0.86, 0, 0.07, 1)',
        WebkitClipPath: this.clipPathForPosition(pos)
      }
      return <div key={"rect-" + radioCommand} style={styles} className={"rect " + radioCommand} />
    })
  }
  render() {

    const { size, style, center } = this.props;
    const styles = Object.assign({
      width: DEF_SIZE + 'px',
      height: DEF_SIZE + 'px'
    }, style);

    if (size) {
      styles.width = size + 'px';
      styles.height = size + 'px';
    }

    let className = "sw-loader__wrapper loading-modal"
    if (center) {
      className += " sw-loader__wrapper--center";
    }

    return (
      <div style={styles} className={className}>
        <div className="sw-loader__holder">
          {this.renderTiles()}
        </div>
      </div>
    )
  }
}


class LoadingModal extends React.Component {
  render() {
    const data = {
      size: 200
    };

    return (
      <div className="loading-modal-background">
        <Loader {...data} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.ui.loading
})

export default connect(mapStateToProps, null)(LoadingModal);