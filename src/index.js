import GlobalStyled from './GlobalStyled/index';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TransactionsProvider } from './providers/transactions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TransactionsProvider>
      <GlobalStyled/>
      <App />
    </TransactionsProvider>
  </React.StrictMode>
);