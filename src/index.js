import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import Header from './components/header/Header';
import Login from './components/login/Login';
import { SESSION_ACTIONS, LOGIN_ACTIONS } from "./actions/types";
import sessionReducer from './reducers/sessionReducer';
import loginSagas from './sagas/loginSagas';
import sessionSagas from './sagas/sessionSagas';


const reducers = combineReducers({
  session: sessionReducer
});

const sagas = function*() {
  yield all([
    loginSagas(),
    sessionSagas()
  ]);
};

module.exports = {
  Header,
  Login,
  SESSION_ACTIONS,
  LOGIN_ACTIONS,
  reducers,
  sagas
};
