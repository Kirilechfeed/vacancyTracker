import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(QueryClientProvider, { client: queryClient, children: _jsx(StrictMode, { children: _jsx(App, {}) }) }));
