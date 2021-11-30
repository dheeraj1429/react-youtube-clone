import { combineReducers } from 'redux';
import userReducer from './userReducer';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const config = {
 key: 'root',
 storage,
 whitelist: ['user'],
};

const rootReducer = combineReducers({
 user: userReducer,
});

export default persistReducer(config, rootReducer);
