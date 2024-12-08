import { useState } from "react";
import useGetReadme from "@/app/services/useGetReadme";

import { useGithubContext } from "@/app/context/home";

function useRepos() {
  const {
    state: { isLoading, isNotFound, repos, username },
  } = useGithubContext();

  const [repoSelected, setRepoSelected] = useState("");

  const { data, isError } = useGetReadme({ username, repo: repoSelected });

  return {
    isLoading,
    isNotFound,
    repos,
    setRepoSelected,
    data,
    isError,
    repoSelected,
  };
}

export default useRepos;
