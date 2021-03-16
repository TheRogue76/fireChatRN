import {InitialStateProps} from '../interfaces';

export const initialState: InitialStateProps = {
  profile: {
    isLoggedIn: false,
    token: '',
    username: '',
    loading: false,
  },
};
