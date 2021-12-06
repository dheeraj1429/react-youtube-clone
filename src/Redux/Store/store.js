import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../Reducer';
import thunk from 'redux-thunk';

import { persistStore } from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export default store;
