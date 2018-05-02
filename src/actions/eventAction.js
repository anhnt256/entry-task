import axios from 'axios';
import { eventConstants } from '../constants/eventConstant';

function event_get_all() {
  return {
    type: eventConstants.EVENT_GET_ALL,
    payload: axios.get(
      'https://jsonblob.com/api/jsonBlob/ec81e90a-4d27-11e8-a9ee-97434e2a75aa'
    )
  };
}

function get_event_detail() {
  return {
    type: eventConstants.EVENT_GET_DETAIL,
    payload: axios.get(
      'https://jsonblob.com/api/jsonBlob/ec81e90a-4d27-11e8-a9ee-97434e2a75aa'
    )
  };
}

export const eventActions = {
  event_get_all,
  get_event_detail
};
