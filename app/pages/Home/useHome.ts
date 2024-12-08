/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import dayjs from "dayjs";

import { useGithubContext } from "@/app/context/home";
import useGetRepos from "@/app/services/useGetRepos";
import type { GithubState } from "@/app/context/home/type";

import homeSchema, { HomeSchemaType } from "./schema";

function useHome() {
  const {
    dispatch,
    state: { username },
  } = useGithubContext();

  const { data, isError, isLoading } = useGetRepos(username);

  useEffect(() => {
    console.log("isError", isError);
    if (isError) {
      dispatch({ type: "SET_IS_NOT_FOUND", payload: true });
    } else {
      dispatch({
        type: "SET_REPOS",
        payload: data
          ? data?.map((el: GithubState["repos"][0]) => ({
              name: el.name,
              language: el.language,
              created_at: el.created_at
                ? dayjs(el.created_at).format("DD MMMM YYYY")
                : "-",
            }))
          : [],
      });
    }
  }, [isError, data]);

  useEffect(() => {
    dispatch({ type: "SET_IS_LOADING", payload: isLoading });
  }, [isLoading]);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<HomeSchemaType>({
    resolver: zodResolver(homeSchema),
  });

  const onSubmit: SubmitHandler<HomeSchemaType> = ({ username: payload }) => {
    dispatch({ type: "SET_USERNAME", payload });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    error: errors?.username?.message,
  };
}

export default useHome;
