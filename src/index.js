import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './layouts/Dashboard/Dashboard.jsx';
import Landing from './layouts/Landing/Landing.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
