import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import App from './App';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <Router>
    <Switch>
      <Route exact path='/'>
        <Redirect to="/landing"/>
      </Route>
      <Route path='/landing'>
        <LandingPage/>
      </Route>
      <Route path='/login'>
        <LoginPage/>
      </Route>
      <Route path='/createaccount'>
        <CreateAccountPage/>
      </Route>
      <Route path='/home'>
        <App />
      </Route>
    
    </Switch>
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
