import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { appStore } from './utils/appStore';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(  
        <Provider store = { appStore }>
             <App />
        </Provider>
        );