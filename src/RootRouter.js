import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
// import AppFooter from './AppFooter';

const routes = (
    <div>
        <Route path="/" component={App} />
    </div>
);
// <Route path="/custodyHoldings" component={CustodyHoldingsContainer} />
const RootRouter = () => <Router basename="/root">{routes}</Router>;

export default RootRouter;