"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface Props {
	children: React.ReactNode;
}

const queryClient = new QueryClient();

const QueryWrapper = ({ children }: Props) => {
  console.log("QueryWrapper");
	return (
		<QueryClientProvider client={queryClient}>
			{children}
      <ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default QueryWrapper;
