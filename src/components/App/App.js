import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../../reducers';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux'
import {Switch, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";

import Header from '../Header/Header';
import Root from '../Root/Root';
import PostDetail from '../PostDetail/PostDetail';
import Footer from '../Footer/Footer';
import NotFound from '../Errors/NotFound/NotFound';
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const App = () => (
    <div className="App">
        <Header/>
        <hr/>
        <ToastContainer/>
        <Provider store={store}>
            <Switch>
                <Route exact path='/' component={Root}/>
                <Route exact path='/:category' component={Root}/>
                <Route path='/postDetail/:category/:id' component={PostDetail}/>
                <Route path="/*" component={NotFound}/>
            </Switch>
        </Provider>
        <Footer/>
    </div>
);

export default App;