import { ACTION_TYPE } from '../ActionType/actionType';

const initalState = {
 Navbar_Filter_Data: [
  { name: 'All' },
  { name: 'Music' },
  { name: 'Live' },
  { name: 'Lo-fi' },
  { name: 'New-Age Music' },
  { name: 'Playlist' },
  { name: 'Instrumentals' },
  { name: 'Java Script' },
  { name: 'Bollywood Music' },
  { name: 'The Weekend' },
  { name: 'Animi' },
  { name: 'Cryptocurrency' },
  { name: 'Wordpress' },
  { name: 'Rapping' },
 ],
 Selected_Filter_Data: [{ name: 'All' }],
 HideAndShowNavBar: false,
 CurrentUserData: null,
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

  default:
   return state;
 }
};

export default userReducer;
