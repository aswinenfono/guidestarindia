import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MaterialDesignContent, SnackbarProvider } from 'notistack'
import "./Assets/css/icons.css";
import "./Assets/css/global.css";
import "./Assets/css/pages.css";
import "./index.scss";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LazyMotion, domMax } from 'framer-motion';
import styled from 'styled-components';


const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#2D7738',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#970C0C',
  },

}));

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LazyMotion features={domMax}>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
          warning: StyledMaterialDesignContent
        }}
      >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SnackbarProvider>
    </QueryClientProvider>
  </LazyMotion>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
