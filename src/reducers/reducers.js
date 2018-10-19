/*
src/reducers/reducers
 */

import { FETCH_DATE, CHOOSE_DAY, CHOOSE_TIME, CONFIRM, CANCEL } from "../actions/types";

const defaultDays = [
  {
    day: 'Mon',
    date: 'Oct 19',
    time: '11:00',
    suffix: 'am' },
  {
    day: 'Mon',
    date: 'Oct 19',
    time: '11:00',
    suffix: 'am' },
  {
    day: 'Mon',
    date: 'Oct 19',
    time: '11:00',
    suffix: 'am' },
  {
    day: 'Mon',
    date: 'Oct 19',
    time: '11:00',
    suffix: 'am' }
  ]

export default (state = {days: defaultDays}, action) => {
  switch (action.type) {
    case FETCH_DATE:
      return { ...state, ...action.payload };

    case CHOOSE_DAY:
      // state.day = action.payload.day <~~~~~~~ BAD NO
      // return state;

      return { ...state, day: action.payload.day };

    case CHOOSE_DATE:
      // state.day = action.payload.day <~~~~~~~ BAD NO
      // return state;

      return { ...state, day: action.payload.day };

    default:
      return state
  }
}