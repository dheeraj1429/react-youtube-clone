import { combineReducers } from 'redux';
import userReducer from './userReducer';

import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
 user: userReducer,
});

const config = {
 key: 'root',
 storage,
};

export default persistReducer(config, rootReducer);
// export default rootReducer;
