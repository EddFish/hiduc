import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
        <div className=' body row no-gutters'>
            <App/>
        </div>
    </BrowserRouter>, document.getElementById('root')
);
reportWebVitals();
