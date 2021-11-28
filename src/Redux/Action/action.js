import { ACTION_TYPE } from '../ActionType/actionType';

export const selectFilterButton = function (data) {
 return {
  type: ACTION_TYPE.SELECT_FILTER_DATA,
  payload: data,
 };
};

export const hideAndShowNavbar = function (data) {
 return {
  type: ACTION_TYPE.HIDE_AND_SHOW_NAV,
  payload: data,
 };
};
