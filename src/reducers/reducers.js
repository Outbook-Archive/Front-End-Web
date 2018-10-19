/*
src/reducers/reducers
 */

import { FETCH_DATE } from "../actions/types";


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATE:
      return {
        action.payload
      }
    default:
      return state
  }
}