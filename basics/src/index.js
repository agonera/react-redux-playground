import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import App from './components/App';
import reducers from './reducers';


// connect() function connects a React component to a Redux store
// </Provider/> makes the store available to nested components that have been wrapped in the connect() function


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root'));



/*      STORE
        - holds app state
        - allows access to state (getState())
        - allows state to be updated (dispatch(action))
        - ONLY ONE STORE per app
*/