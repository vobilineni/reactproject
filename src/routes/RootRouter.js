import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../components/App';
import Projects from '../containers/Projects';
import AppFooter from '../components/appFooter/AppFooter';
import AppHeader from '../components/appHeader/AppHeader';
import NavigationContainer from '../components/navigation/NavigationContainer';
import Login from "../components/Login";
// import Login from '../components/login/Login';
// import Register from '../components/register/Register';

const routes = (
  <div>
    <Route path="/" component={AppHeader}/>
    <Route path="/" component={App}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/projects" component={Projects}/>
    {/*<Route exact path="/login" component={Login} />*/}
    {/*<Route exact path="/register" component={Register} />*/}
    <Route exact path="/(|searchTransaction)(|home)"
           render={() => (
             <NavigationContainer tabBar="home" selectedTab="searchTransaction">
               <h1>search Transaction</h1>
             </NavigationContainer>
           )}
    />
    <Route exact path="/viewTransaction"
           render={() => (
             <NavigationContainer tabBar="home" selectedTab="viewTransaction">
               <h1>view Transaction</h1>
             </NavigationContainer>
           )}
    />
    <Route exact path="/modifyTransaction"
           render={() => (
             <NavigationContainer tabBar="home" selectedTab="modifyTransaction">
               <h1>modify Transaction</h1>
             </NavigationContainer>
           )}
    />
    <Route exact path="/details"
           render={() => (
             <NavigationContainer tabBar="detail" selectedTab="details" showBackArrow>
               <h1>Details</h1>
             </NavigationContainer>
           )}
    />
    <Route exact path="/history"
           render={() => (
             <NavigationContainer tabBar="detail" selectedTab="history" showBackArrow>
               <h1>History</h1>
             </NavigationContainer>
           )}
    />
    <Route exact path="/messages"
           render={() => (
             <NavigationContainer tabBar="detail" selectedTab="messages" showBackArrow>
               <h1>Messages</h1>
             </NavigationContainer>
           )}
    />
    {/* <Route exact path="/logout" render={() => <div>{logout()}</div>} />*/}
    <AppFooter/>
  </div>
);

const RootRouter = () => <Router basename="/root">{routes}</Router>;

export default RootRouter;