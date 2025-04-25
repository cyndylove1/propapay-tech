/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiError, createQueryKey, fetchData } from "@/config/tanstackConfig";
import { UseQueryOptions, QueryKey, useQuery } from "@tanstack/react-query";

const useApiQuery = <TData = unknown, TError = ApiError>(
  endpoint: string,
  params?: Record<string, any>,
  options?: Omit<
    UseQueryOptions<TData, TError, TData, QueryKey>,
    "queryKey" | "queryFn"
  >,
) => {
  const queryKey = createQueryKey(endpoint, params);

  return useQuery<TData, TError, TData, QueryKey>({
    queryKey,
    queryFn: ({ queryKey, signal }) => fetchData<TData>({ queryKey, signal }),
    ...options,
  });
};

export default useApiQuery;
