import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


if((typeof String.prototype.capitalize) === 'undefined'){
    // eslint-disable-next-line
    String.prototype.capitalize = function () {
        return this[0].toUpperCase() + this.substr(1);
    }
}
if((typeof String.prototype.isEmpty) === 'undefined'){
    // eslint-disable-next-line
    String.prototype.isEmpty = function () {
        return this.trim() === '';
    }
}


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
