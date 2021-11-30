import { ACTION_TYPE } from '../ActionType/actionType';

const initalState = {
 Navbar_Filter_Data: [{ name: 'All' }],
 Selected_Filter_Data: [{ name: 'All' }],
 HideAndShowNavBar: false,
 CurrentUserData: null,
 setData: null,
 selectedMovi: [null],
};

const userReducer = function (state = initalState, action) {
 switch (action.type) {
  case ACTION_TYPE.SELECT_FILTER_DATA:
   return {
    ...state,
    Selected_Filter_Data: [action.payload],
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

  default:
   return state;
 }
};

export default userReducer;
