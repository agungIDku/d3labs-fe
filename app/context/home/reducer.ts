import { GithubState, GithubAction } from "./type";

export const githubReducer = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  switch (action.type) {
    case "SET_REPOS":
      return {
        ...state,
        repos: action.payload,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_IS_NOT_FOUND":
      return {
        ...state,
        isNotFound: action.payload,
      };
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
