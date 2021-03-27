import {initialState} from './initialState';
import {reducer as loginReducer} from './actions/login/login';
import {reducer as logoutReducer} from './actions/logout/logout';

const reducers = [loginReducer, logoutReducer];
const rootReducer = (state = initialState, action: any) => {
  let newState;
  switch (action.type) {
    // put gobal reducers here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
};
export default rootReducer;
