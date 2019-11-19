import { connect } from 'react-redux';

import { fetchYelpEvents } from '../../actions/yelp_actions';
import YelpIndex from './yelp_index';

const mapStateToProps = (state) => ({
  events: state.events
});

const mapDispatchToProps = (dispatch) => ({
  fetchYelpEvents: () => dispatch(fetchYelpEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YelpIndex);