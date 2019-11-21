import { connect } from 'react-redux';
import { fetchUserInfo } from '../../util/user_api_util';

import Friend from './friend';

const mapStateToProps = (state, ownProps) => ({
    user: state.users
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: userId => fetchUserInfo(userId)
});

export default connect(mapStateToProps, mapDispatchToProps)(Friend);