import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import Projects from '../containers/Projects';
// import Login from '../components/login/Login';
// import Register from '../components/register/Register';

const routes = (
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/projects" component={Projects} />
        {/*<Route exact path="/login" component={Login} />*/}
        {/*<Route exact path="/register" component={Register} />*/}
    </div>
);

const RootRouter = () => <Router basename="/root">{routes}</Router>;

export default RootRouter;