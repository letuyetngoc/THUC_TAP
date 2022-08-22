import { Route, Router, Switch } from "react-router-dom";
//history
import { createBrowserHistory } from "history";
//page
import GobalStyle from "./gobalStyle/GobalStyle";
import EcommerceHomeTemplate from "./template/Ecommerce/EcommerceHomeTemplate";
import HomeEcom from './page/Ecommerce/Home/HomeEcom'
import Store from './page/Ecommerce/Store/Store'
import LoginEcom from './page/Ecommerce/Login/LoginEcom'
import RegisterEcom from './page/Ecommerce/Register/RegisterEcom'
import P2PTrading from "./page/Ecommerce/P2PTrading/P2PTrading";
import CreateBy from "./page/Ecommerce/P2PTrading/CreateBy";
import BuyCoin from "./page/Ecommerce/P2PTrading/BuyCoin";
import Wallet from "./page/Ecommerce/Wallet/Wallet";
import WidthDraw from "./page/Ecommerce/WithDraw/WidthDraw";

export let history = createBrowserHistory();

function App() {

  return (
    <GobalStyle>
      <Router history={history}>
        <Switch>

        </Switch>
      </Router>
    </GobalStyle>
  )
}

export default App;
