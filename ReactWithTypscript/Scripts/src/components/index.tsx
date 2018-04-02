import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from './App';
import { BrowserRouter } from 'react-router-dom'
import { initializeIcons } from '@uifabric/icons';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);
initializeIcons();