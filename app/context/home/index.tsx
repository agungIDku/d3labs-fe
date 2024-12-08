import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { GithubState, GithubContextType } from "./type";
import { githubReducer } from "./reducer";

// Initial State
const initialState: GithubState = {
  repos: [],
  isLoading: false,
  isNotFound: false,
  username: "",
};

const GithubContext = createContext<GithubContextType | undefined>(undefined);

interface GithubProviderProps {
  children: ReactNode;
}

export const GithubProvider: React.FC<GithubProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider value={{ state, dispatch }}>
      {children}
    </GithubContext.Provider>
  );
};

// Custom Hook for Consuming Context
export const useGithubContext = () => {
  const context = useContext(GithubContext);
  if (!context) {
    throw new Error("useGithubContext must be used within a GithubProvider");
  }
  return context;
};
