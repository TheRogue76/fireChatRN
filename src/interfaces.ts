export interface InitialStateProps {
  profile: Profile;
}
export interface Profile {
  isLoggedIn: boolean;
  username: string;
  token: string;
  loading: boolean;
}
