import React from 'react';
import ReactDOM from 'react-dom/client.js';
import App from "./App";
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore()

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
