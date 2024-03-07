import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { MainLayout } from './pages/_layout.tsx';
import MenuHeaderComponent from './pages/_menuheader.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <MainLayout>
                    <Stack direction={'column'} spacing={2}>
                        <MenuHeaderComponent />
                        <App />
                    </Stack>
                </MainLayout>
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
);
