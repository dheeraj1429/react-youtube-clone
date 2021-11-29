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

export const setCurrentUser = (data) => {
 return {
  type: ACTION_TYPE.SET_CURRENT_USER,
  payload: data,
 };
};

export const setData = function (data) {
 return {
  type: ACTION_TYPE.SET_DATA,
  payload: data,
 };
};

export const selectedMovi = (data) => {
 return {
  type: ACTION_TYPE.SELECTED_MOVI,
  payload: data,
 };
};
