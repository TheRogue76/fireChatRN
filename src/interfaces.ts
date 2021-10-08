export interface InitialStateProps {
  profile: Profile;
}
export interface Profile {
  isLoggedIn: boolean;
  email: string;
  loading: boolean;
}

export interface LoginProps {
  email: string;
  password: string;
}
