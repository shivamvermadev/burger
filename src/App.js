import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path = "/orders" component = {Orders} ></Route>
            <Route path = "/checkout" component = {Checkout} ></Route>
            <Route path = "/" exact component = {BurgerBuilder} ></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
