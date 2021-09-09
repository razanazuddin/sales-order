import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import SalesOrderList from './components/SalesOrderList.jsx';

const App = () => {
  const customHistory = createBrowserHistory();
   return (
    <div className="container mx-auto">
      <Router history={customHistory}>
        <Switch>
          <Route
            exact
            path={['/', '/sales-order']}
            component={SalesOrderList}
          />
        </Switch>
      </Router>
    </div>
   );
};

export default App;