import { Route, Router, Switch } from "react-router-dom";
//history
import { createBrowserHistory } from "history";
//page
import GobalStyle from "./gobalStyle/GobalStyle";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Admin from "./page/User/UserTemplate";
import AdminProject from "./page/User/UserRenderFolder";
import Manage from "./page/Admin/AdminTemplate";
import UserForm from "./component/form/UserForm";
import VerifyEmail from "./page/Admin/VerifyEmail";
import Home from "./page/Home/Home";
import Form from "./page/User/Form";
import UserRenderFolder from "./page/User/UserRenderFolder";
import AdminTemplate from "./page/Admin/AdminTemplate";
import AdminUserKYC from "./page/Admin/AdminUserKCY";
import AdminUser from "./page/Admin/AdminUser";
import UserTemplate from "./page/User/UserTemplate";
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

          {/* Ecommerce */}
          <Route exact path='/ecommerce' component={EcommerceHomeTemplate} />
          <EcommerceHomeTemplate exact path='/ecommerce/home' Component={HomeEcom} />
          <EcommerceHomeTemplate exact path='/ecommerce/store' Component={Store} />
          <EcommerceHomeTemplate exact path='/ecommerce/sanP2P' Component={P2PTrading} />
          <EcommerceHomeTemplate exact path='/ecommerce/login' Component={LoginEcom} />
          <EcommerceHomeTemplate exact path='/ecommerce/register' Component={RegisterEcom} />
          <EcommerceHomeTemplate exact path='/ecommerce/createby' Component={CreateBy} />
          <EcommerceHomeTemplate exact path='/ecommerce/buycoin' Component={BuyCoin} />
          <EcommerceHomeTemplate exact path='/ecommerce/wallet' Component={Wallet} />

          {(localStorage.getItem('USER_LOGIN') && localStorage.getItem('ACCESS_TOKEN')) ?
            <Admin exact path='/login' Component={AdminProject} /> : <Route exact path='/login' component={Login} />
          }
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/register/:id' component={Register} />
          <Route exact path='/verify' component={VerifyEmail} />
          <Route exact path='/verify/:token' component={VerifyEmail} />

          <Admin exact path='/user' Component={UserTemplate} />
          <Admin exact path='/user/form' Component={Form} />
          <Admin exact path='/user/userInfo' Component={UserForm} />
          <Admin exact path='/user/users' Component={UserRenderFolder} />

          <Route exact path='/admin' component={AdminTemplate} />
          <Manage exact path='/admin/userkyc' Component={AdminUserKYC} />
          <Manage exact path='/admin/user' Component={AdminUser} />

          {(localStorage.getItem('USER_LOGIN') && localStorage.getItem('ACCESS_TOKEN')) ?
            <Admin exact path='' Component={AdminProject} /> :
            <Route exact path='' component={Home} />
          }

        </Switch>
      </Router>
    </GobalStyle>
  )
}

export default App;
