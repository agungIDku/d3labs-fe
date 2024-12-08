"use client";

import { GithubProvider } from "@/app/context/home";

import "./styles.scss";
import useHome from "./useHome";
import Repos from "./components/Repos";

function Home() {
  const { handleSubmit, error, onSubmit, register } = useHome();
  return (
    <div id="home-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <input
            type="text"
            placeholder="Enter username github"
            {...register("username")}
          />
          {error && <p className="error">{error}</p>}
        </div>
        <button type="submit">Search</button>
      </form>
      <Repos />
    </div>
  );
}

function HomeProvider() {
  return (
    <GithubProvider>
      <Home />
    </GithubProvider>
  );
}

export default HomeProvider;
