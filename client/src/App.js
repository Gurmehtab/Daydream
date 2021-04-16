import { Redirect, Route, Switch } from 'react-router-dom';

import AboutUs from "./views/tabs/AboutUs/AboutUs";
import ContactUs from "./views/tabs/ContactUs/ContactUs";
import Contributors from "./views/tabs/Contributors/Contributors";
import Daydream from "./views/tabs/Daydream/Daydream";
import Header from "./components/Header/Header"
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import React from 'react';
import Login from "./views/tabs/Login/Login";
import LoginSuccessful from "./views/tabs/LoginSuccessful/LoginSuccessful"
import LoginFailed from "./views/tabs/LoginFailed/LoginFailed"

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/Contributors" component={Contributors} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/Daydream" component={Daydream} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/LoginFailed" component={LoginFailed} />
        <Route exact path="/LoginSuccessful" component={LoginSuccessful} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
