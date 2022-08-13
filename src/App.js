import { Route, Router, Switch } from "react-router-dom";
//history
import { createBrowserHistory } from "history";
//page
import GobalStyle from "./gobalStyle/GobalStyle";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Admin from "./page/Admin/Admin";
import AdminForm from "./page/Admin/AdminForm";
import AdminProject from "./page/Admin/AdminProject";
import Manage from "./page/Manage/Manage";
import UserForm from "./component/form/UserForm";
import ManageUserKYC from "./page/Manage/ManageUserKCY";
import ManageUser from "./page/Manage/ManageUser";
import VerifyEmail from "./page/Manage/VerifyEmail";
import Home from "./page/Home/Home";

export let history = createBrowserHistory();

function App() {
  return (
    <GobalStyle>
      <Router history={history}>
        <Switch>

          {(localStorage.getItem('USER_LOGIN') && localStorage.getItem('ACCESS_TOKEN')) ?
            <Admin exact path='/login' Component={AdminProject} /> : <Route exact path='/login' component={Login} />
          }
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/register/:id' component={Register} />
          <Route exact path='/verify/:token' component={VerifyEmail} />

          <Admin exact path='/admin/form' Component={AdminForm} />
          <Admin exact path='/admin/userform' Component={UserForm} />
          <Admin exact path='/admin/users' Component={AdminProject} />

          <Route exact path='/manage' component={Manage} />
          <Manage exact path='/manage/userkyc' Component={ManageUserKYC} />
          <Manage exact path='/manage/user' Component={ManageUser} />

          {(localStorage.getItem('USER_LOGIN') && localStorage.getItem('ACCESS_TOKEN')) ?
            <Admin exact path='' Component={AdminProject} /> :
            <Route exact path='' component={Login} />
          }



        </Switch>
      </Router>
    </GobalStyle>
  )
}

export default App;
