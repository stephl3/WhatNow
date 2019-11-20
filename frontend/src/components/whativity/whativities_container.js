import { connect } from 'react-redux';
import { fetchWhativities } from '../../actions/whativity_actions';
import Whativities from './whativities';

const mapStateToProps = (state) => {
  return {
    whativities: state.entities.whativity.all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWhativities: () => dispatch(fetchWhativities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Whativities);