import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { IntlProvider } from 'react-intl';
import RootRouter from './routes/RootRouter';
import configureStore from './store/rootStore';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

const rootstore = configureStore();

const renderApp = () => {
    render(
        <Provider store={rootstore}>
            <React.Fragment>
              <AppContainer>
                <IntlProvider>
                    <RootRouter />
                </IntlProvider>
              </AppContainer>
            </React.Fragment>
        </Provider>,
        document.getElementById('root')
    );
};
renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept('./routes/RootRouter.js', () => {
        // eslint-disable-next-line
        const nextApp = require('./routes/RootRouter.js');
        renderApp(nextApp);
    });
}
