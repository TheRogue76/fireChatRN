import {initialState} from './initialState';
import {reducer as loginReducer} from './login/login';

const reducers = [loginReducer];
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
