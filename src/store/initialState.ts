import {InitialStateProps} from '../interfaces';

export const initialState: InitialStateProps = {
  profile: {
    isLoggedIn: false,
    email: '',
    loading: false,
  },
};
