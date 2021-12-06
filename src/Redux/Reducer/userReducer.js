import { ACTION_TYPE } from '../ActionType/actionType';

const initalState = {
  Navbar_Filter_Data: [{ name: 'All' }],
  Selected_Filter_Data: [{ name: 'All' }],
  HideAndShowNavBar: true,
  CurrentUserData: null,
  setData: null,
  selectedMovi: [null],
  showPopUp: false,
  showSecondPopUp: false,
  mode: false,
  LikeVideos: [],
  UnlikeVideos: [],
  gameDataLoading: true,
  gameData: [],
  gameError: '',
  movies: [],
};

const dataCombine = function (data, setData) {
  const exiting = data.find((el) => el.title === setData.title);

  if (exiting) {
    return data.map((el) =>
      el.title === setData.title
        ? {
            ...el,
          }
        : data
    );
  }

  return [...data, { ...setData }];
};

const userReducer = function (state = initalState, action) {
  switch (action.type) {
    case ACTION_TYPE.SELECT_FILTER_DATA:
      return {
        ...state,
        Selected_Filter_Data: [action.payload],
      };

    case ACTION_TYPE.FETCH_DATA_VIDEOS:
      return {
        ...state,
        movies: action.payload,
      };

    case ACTION_TYPE.HIDE_AND_SHOW_NAV:
      return {
        ...state,
        HideAndShowNavBar: action.payload,
      };

    case ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        CurrentUserData: action.payload,
      };

    case ACTION_TYPE.SET_DATA:
      return {
        ...state,
        setData: [action.payload],
      };

    case ACTION_TYPE.SELECTED_MOVI:
      return {
        ...state,
        selectedMovi: [action.payload],
      };

    case ACTION_TYPE.SET_SEARCH_DATA:
      return {
        ...state,
        Navbar_Filter_Data: [
          ...state.Navbar_Filter_Data,
          {
            name: action.payload,
          },
        ],
      };

    case ACTION_TYPE.SHOW_POPUP:
      return {
        ...state,
        showPopUp: action.payload,
      };

    case ACTION_TYPE.SHOW_SECOND_POPUP:
      return {
        ...state,
        showSecondPopUp: action.payload,
      };

    case ACTION_TYPE.MODE:
      return {
        ...state,
        mode: action.payload,
      };

    case ACTION_TYPE.LIKE_VIDEOS:
      const dataLikeSet = state.UnlikeVideos.filter((el) => el.title !== action.payload.title);
      return {
        ...state,
        LikeVideos: dataCombine(state.LikeVideos, action.payload),
        UnlikeVideos: dataLikeSet,
      };

    case ACTION_TYPE.UNLIKE_VIDEOS:
      const dataDislikeSet = state.LikeVideos.filter((el) => el.title !== action.payload.title);
      return {
        ...state,
        LikeVideos: dataDislikeSet,
        UnlikeVideos: dataCombine(state.UnlikeVideos, action.payload),
      };

    default:
      return state;
  }
};

export default userReducer;
