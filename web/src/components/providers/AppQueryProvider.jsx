import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function AppQueryProvider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
