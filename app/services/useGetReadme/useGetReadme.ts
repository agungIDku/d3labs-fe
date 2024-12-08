import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Payload {
  username: string;
  repo: string;
}

const getReadme = async ({ username, repo }: Payload) => {
  try {
    const response = await axios.get(
      `https://raw.githubusercontent.com/${username}/${repo}/main/README.md`
    );

    return { ...response, error: false };
  } catch (error) {
    return { data: [], error: true, message: error };
  }
};

const useGetReadme = (payload: Payload) => {
  const {
    data: response,
    isLoading,
    isFetching,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ["getReadme", payload],
    queryFn: () => getReadme(payload),
    refetchOnWindowFocus: false,
    enabled: !!payload.repo && !!payload.username,
  });

  const data = response?.data;

  return {
    data,
    isLoading: isLoading || isFetching || isRefetching,
    refetch,
    isError: response?.error,
  };
};

export default useGetReadme;
