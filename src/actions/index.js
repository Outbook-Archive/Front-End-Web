/*
src/actions/index.js
 */

import { CHOOSE_DAY, CHOOSE_TIME, CANCEL, CONFIRM } from './types'


export const chooseDay = (day) => {
  return {
    type: CHOOSE_DAY,
    payload: day
  }
};

export const chooseTime = (time) => {
  return {
    type: CHOOSE_TIME,
    payload: time
  }
};

export const confirm = () => {
  return {
    type: CONFIRM,
    payload: 'You have scheduled your interview'
  }
};