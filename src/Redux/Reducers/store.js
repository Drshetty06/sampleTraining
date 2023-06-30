import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import rolesReducer from './FetchReducers';
import roleReducer from './roleReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  roles: rolesReducer,
  role: roleReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
