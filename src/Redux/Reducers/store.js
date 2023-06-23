import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import rolesReducer from './FetchReducers';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  roles: rolesReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
