import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import RootRouter from './RootRouter';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
    render(
            <React.Fragment>
                <RootRouter />
            </React.Fragment>,
        document.getElementById('root')
    );
};
renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// if (module.hot) {
//     module.hot.accept('RootRouter.js', () => {
//         // eslint-disable-next-line
//         const nextApp = require('RootRouter.js');
//         renderApp(nextApp);
//     });
// }
