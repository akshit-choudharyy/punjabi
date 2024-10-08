
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/Store.jsx'; // Import the Redux store
import router from './router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Wrap the app with the Redux Provider */}
    <RouterProvider router={router} />
  </Provider>
);
