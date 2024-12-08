export interface GithubState {
  repos: {
    name: string;
    language: string;
    created_at: string;
  }[];
  isLoading: boolean;
  isNotFound: boolean;
  username: string;
}

// Define the possible actions for the reducer
export type GithubAction =
  | {
      type: "SET_REPOS";
      payload: GithubState["repos"];
    }
  | { type: "SET_IS_LOADING"; payload: GithubState["isLoading"] }
  | { type: "SET_IS_NOT_FOUND"; payload: GithubState["isNotFound"] }
  | { type: "SET_USERNAME"; payload: GithubState["username"] };

// Define the shape of the context value
export interface GithubContextType {
  state: GithubState;
  dispatch: (action: GithubAction) => void;
}
