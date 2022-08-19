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

export let history = createBrowserHistory();

function App() {
  return (
    <GobalStyle>
      <Router history={history}>
        <Switch>

          <Route exact path='/ecommerce' component={EcommerceHomeTemplate} />
          <EcommerceHomeTemplate exact path='/home' Component={HomeEcom} />
          <EcommerceHomeTemplate exact path='/store' Component={Store} />
          <EcommerceHomeTemplate exact path='/trading' Component={P2PTrading} />
          <EcommerceHomeTemplate exact path='/login' Component={LoginEcom} />
          <EcommerceHomeTemplate exact path='/register' Component={RegisterEcom} />
          <EcommerceHomeTemplate exact path='/createby' Component={CreateBy} />
          <EcommerceHomeTemplate exact path='/buycoin' Component={BuyCoin} />
          <EcommerceHomeTemplate exact path='/wallet' Component={Wallet} />
          <EcommerceHomeTemplate exact path='' Component={HomeEcom} />


        </Switch>
      </Router>
    </GobalStyle>
  )
}

export default App;
