import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { setupStore } from './app/store.ts';
import { Provider } from 'react-redux';
import './index.css'

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
