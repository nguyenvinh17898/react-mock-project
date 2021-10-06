import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import CreateRestaurant from "./pages/admin/AddRestaurant";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import AddRestaurant from "./pages/admin/AddRestaurant";
import Main from "./components/admin/Main";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <AddRestaurant />
        </Route>
        <Route path="/admin/:resId">
          <Main />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
