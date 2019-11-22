import { connect } from 'react-redux';
import { receiveWhativityImg, receiveWhativity } from '../../../actions/whativity_actions';
import GoogleIndexItem from './google_index_item';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  receiveWhativityImg: (category, idx, imgUrl) => dispatch(receiveWhativityImg(category, idx, imgUrl)),
  receiveWhativity: whativity => dispatch(receiveWhativity(whativity))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleIndexItem);