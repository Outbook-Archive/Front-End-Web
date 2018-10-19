/*
src/actions/index.js
 */

import { FETCH_DATE } from './types'

export const fetchDate = () => async dispatch => {
  dispatch({
    type: FETCH_DATE,
    payload: res.data
  })
};
