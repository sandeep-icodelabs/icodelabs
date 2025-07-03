"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * CustomQueryProvider Component
 * This component wraps its children with a QueryClientProvider for react-query,
 * providing custom default error handling for queries and mutations.
 *
 * @param {React.ReactNode} children - Components that require access to the QueryClientProvider.
 * @returns {JSX.Element} - A provider component for handling react-query logic.
 */
const CustomQueryProvider = ({ children }) => {
  // Initialize QueryClient with custom default options for queries and mutations
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        /**
         * Custom error handling for all queries
         * If an error is thrown, it displays an alert and handles specific cases for 401 and 403 errors.
         *
         * @param {Object} error - Error object from the query.
         */
        throwOnError: (error) => {
          // Check if the error has a response (from the server)
          if (error?.response) {
            console.error("error", error?.response?.data?.message);
          }
        },
        refetchOnWindowFocus: false,
      },
      mutations: {
        /**
         * Custom error handling for all mutations
         * Similar to query errors, this handles authentication errors and other server errors.
         *
         * @param {Object} error - Error object from the mutation.
         */
        onError: (error) => {
          // Check if the error has a response (from the server)
          if (error?.response) {
            console.error("error", error?.response?.data?.message);
          }
        },
      },
    },
  });

  return (
    /**
     * Provides the QueryClient to its child components, allowing them to use
     * react-query functionality such as useQuery and useMutation with custom error handling.
     */
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default CustomQueryProvider;
