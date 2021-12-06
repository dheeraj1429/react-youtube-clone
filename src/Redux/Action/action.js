import { ACTION_TYPE } from '../ActionType/actionType';

export const fetchVideosData = function () {
  return async function (dispatch) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${Math.trunc(
        Math.random() * 100 + 1
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });

    dispatch({
      type: ACTION_TYPE.FETCH_DATA_VIDEOS,
      payload: response,
    });
  };
};

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

export const setSerchData = function (data) {
  return {
    type: ACTION_TYPE.SET_SEARCH_DATA,
    payload: data,
  };
};

export const showPopup = function (data) {
  return {
    type: ACTION_TYPE.SHOW_POPUP,
    payload: data,
  };
};

export const showSecondPopup = function (data) {
  return {
    type: ACTION_TYPE.SHOW_SECOND_POPUP,
    payload: data,
  };
};

export const changeMode = function (data) {
  return {
    type: ACTION_TYPE.MODE,
    payload: data,
  };
};

export const likeVideos = function (data) {
  return {
    type: ACTION_TYPE.LIKE_VIDEOS,
    payload: data,
  };
};

export const unLike = function (data) {
  return {
    type: ACTION_TYPE.UNLIKE_VIDEOS,
    payload: data,
  };
};

export const addGame = (data) => {
  return {
    type: ACTION_TYPE.ADD_GAMES,
    payload: data,
  };
};
