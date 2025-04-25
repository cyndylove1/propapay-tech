/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
  QueryClient, 
  QueryFunctionContext, 
  UseQueryOptions,
  useMutation,
  useQueryClient,
  UseMutationOptions,
  QueryKey
} from '@tanstack/react-query';
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const serverContext = import.meta.env.MODE;

// Type definitions for better type safety
export type ApiResponse<T = any> = {
  data: T;
  message?: string;
  status: number;
  success: boolean;
};

export type ApiError = AxiosError<{
  message: string;
  status: number;
  success: false;
}>;

// Create a new QueryClient with default options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Default options for queries
      queryFn: async ({ queryKey }: QueryFunctionContext) => {
        const { data } = await axios.get(`${queryKey[0]}`);
        return data;
      },
      retry: (count: number, error: any): boolean =>
        !error.response && count < 3 ? true : false,
      refetchOnWindowFocus: serverContext === 'production',
      retryDelay: 5,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
    mutations: {
      // Default options for mutations
      retry: (count: number, error: any): boolean =>
        !error.response && count < 3 ? true : false,
      retryDelay: 5,
      onMutate: async (variables) => {
        console.log('Mutation started with variables:', variables);
        // Optionally implement optimistic updates here
      },
      onError: (error) => {
        console.error('Mutation failed:', error.message);
      },
      onSuccess: (data) => {
        console.log('Mutation succeeded:', data);
      },
    },
  },
});

// Helper function to create query keys
export const createQueryKey = (
  endpoint: string,
  params?: Record<string, any>
): QueryKey => {
  return params ? [endpoint, params] : [endpoint];
};

// Generic fetch function for queries
export const fetchData = async <T>(
  { queryKey, signal }: { queryKey: QueryKey, signal?: AbortSignal }
): Promise<T> => {
  const [endpoint, params] = queryKey as [string, Record<string, any> | undefined];
  
  const config: AxiosRequestConfig = {
    signal,
    params,
  };
  
  const response = await axios.get<ApiResponse<T>>(endpoint, config);
  return response.data.data;
};

// Custom useQuery hook with simplified API(moved to separate hook file)
// export const useApiQuery = <TData = unknown, TError = ApiError>(
//   endpoint: string,
//   params?: Record<string, any>,
//   options?: Omit<UseQueryOptions<TData, TError, TData, QueryKey>, 'queryKey' | 'queryFn'>
// ) => {
//   const queryKey = createQueryKey(endpoint, params);
  
//   return useQuery<TData, TError, TData, QueryKey>({
//     queryKey,
//     queryFn: ({ queryKey, signal }) => fetchData<TData>({ queryKey, signal }),
//     ...options,
//   });
// };

// Generic mutation function
export const mutateData = async <TData, TVariables>(
  { url, method = 'POST', data, config = {} }: 
  { url: string; method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE'; data: TVariables; config?: AxiosRequestConfig }
): Promise<TData> => {
  const response = await axios({
    url,
    method,
    data,
    ...config,
  }) as AxiosResponse<ApiResponse<TData>>;
  
  return response.data.data;
};

// Custom useMutation hook with simplified API
export const useApiMutation = <TData = unknown, TVariables = unknown, TError = ApiError, TContext = unknown>(
  endpoint: string,
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'POST',
  options?: {
    invalidateQueries?: string[];
  } & Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>
) => {
  const queryClient = useQueryClient();
  
  const mutationFn = (data: TVariables) => 
    mutateData<TData, TVariables>({ url: endpoint, method, data });
  
  return useMutation<TData, TError, TVariables, TContext>({
    mutationFn,
    onSuccess: (data, variables, context) => {
      // Invalidate relevant queries if specified
      if (options?.invalidateQueries?.length) {
        options.invalidateQueries.forEach(query => {
          queryClient.invalidateQueries({ queryKey: [query] });
        });
      }
      
      // Call original onSuccess if provided
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    ...options,
  });
};

// Helper function to prefetch data
export const prefetchQuery = async <T>(
  endpoint: string,
  params?: Record<string, any>,
  options?: Omit<UseQueryOptions<T, ApiError, T, QueryKey>, 'queryKey' | 'queryFn'>
) => {
  const queryKey = createQueryKey(endpoint, params);
  
  await queryClient.prefetchQuery<T, ApiError, T, QueryKey>({
    queryKey,
    queryFn: ({ queryKey, signal }) => fetchData<T>({ queryKey, signal }),
    ...options,
  });
};