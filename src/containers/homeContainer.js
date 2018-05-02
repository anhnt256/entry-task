import { connect } from 'react-redux';
import HomeComponent from '../components/homeComponent';
import { userActions } from '../actions/userAction';

const mapStatetoProps = state => ({
  loggingIn: state.authReducer
});

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch(userActions.login(username, password));
    },
    logout: () => {
      dispatch(userActions.logout());
    }
  };
};

const HomeContainer = connect(mapStatetoProps, mapDispatchToProps)(
  HomeComponent
);

export default HomeContainer;
