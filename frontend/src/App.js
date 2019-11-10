import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Switch } from 'react-router-dom';

import NavBarContainer from './components/nav/navbar_container';
import MainPage from './components/main/main_page';
import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';
import ItemsContainer from './components/items/items_container'
import CreateItemContainer from './components/items/createItemContainer'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/items" component={ItemsContainer} />
      <ProtectedRoute exact path="/items/create" component={CreateItemContainer} />
    </Switch>
  </div>
);

export default App;