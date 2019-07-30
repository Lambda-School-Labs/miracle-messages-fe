import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./reducers";


//*** the below is to setup react-redux store */
// const store = createStore(
//     // name of reducers 
//     rootReducer,
//     applyMiddleware(thunk, logger)
// );
// ReactDOM.render(
//     <Provider store={store}>
//        <App />
//     </Provider>, 
//     document.getElementById('root')
//    );


ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();