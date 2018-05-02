const initialState = {
  events: [],
  loading: false,
  error: null
};

function eventReducer(state = initialState, action) {
  let events;
  switch (action.type) {
    case 'EVENT_GET_ALL_PENDING':
      console.log('EVENT_GET_ALL_PENDING');
      return { ...state, loading: true };
    case 'EVENT_GET_ALL_FULFILLED':
      events = action.payload.data.Items;
      return { ...state, loading: false, events };
    case 'EVENT_GET_ALL_REJECTED':
      console.log('EVENT_GET_ALL_REJECTED');
      return { ...state, loading: false, error: `${action.payload.message}` };
    default:
      return state;
  }
}

export default eventReducer;
