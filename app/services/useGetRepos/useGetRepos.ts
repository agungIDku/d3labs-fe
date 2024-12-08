import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getUserRepos = async (username?: string) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    return { ...response, error: false };
  } catch (error) {
    return { data: [], error: true, message: error };
  }
};

const useGetRepos = (username: string) => {
  const {
    data: response,
    isLoading,
    isFetching,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ["getUserRepos", username],
    queryFn: () => getUserRepos(username),
    refetchOnWindowFocus: false,
    enabled: !!username,
  });

  const data = response?.data;

  console.log(response);

  return {
    data,
    isLoading: isLoading || isFetching || isRefetching,
    refetch,
    isError: response?.error,
  };
};

export default useGetRepos;
