import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    // concat creates a new array
    // don't mutate the state
    return [action.payload.data].concat(state);
    // return [ action.payload.data, ...state ];
  }
  return state;
}
