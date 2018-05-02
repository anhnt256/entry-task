import { connect } from 'react-redux';
import EventComponent from '../components/eventComponent';
import { eventActions } from '../actions/eventAction';

const mapStatetoProps = state => ({
  data: state.eventReducer
});

const mapDispatchToProps = dispatch => {
  return {
    getListEvent: () => {
      dispatch(eventActions.event_get_all());
    },
    get_event_detail: id => {
      console.log(id);
    }
  };
};

const EventContainer = connect(mapStatetoProps, mapDispatchToProps)(
  EventComponent
);

export default EventContainer;
