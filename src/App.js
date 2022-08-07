import { Route, Router, Switch } from "react-router-dom";
import Demo from "./page/Demo";
//history
import { createBrowserHistory } from "history";
//page
import Demo1 from "./page/Demo1";
import GobalStyle from "./gobalStyle/GobalStyle";

let history = createBrowserHistory();

function App() {
  return (
    <GobalStyle>
      <Router history={history}>
        <Switch>
          <Route exact path='/demo' component={Demo} />
          <Route exact path='/demo1' component={Demo1} />
          <Route exact path='' component={Demo} />
        </Switch>
      </Router>
    </GobalStyle>
  )
}

export default App;
