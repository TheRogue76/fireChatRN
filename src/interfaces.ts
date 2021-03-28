export interface InitialStateProps {
  profile: Profile;
}
export interface Profile {
  isLoggedIn: boolean;
  email: string;
  loading: boolean;
}

export interface SignUpProps {
  email: string;
  password: string;
}

export interface LoginProps {
  email: string;
  password: string;
}
