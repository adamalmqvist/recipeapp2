import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {HomeView} from '../view/homeview/HomeView'
import {LoginView} from '../view/loginview/LoginView'
import {PostView} from '../view/postview/PostView'
import RoutingPath from './RoutingPath'
import { SettingsView } from '../view/authenticatedveiws/SettingsView'
import {CreateUserView} from '../view/createuserview/CreateUserView'
import { homedir } from 'os'


export const Routes = (props: { children: React.ReactChild }) => {

    const {children} = props;

    return (
        <BrowserRouter>
           {children}
           <Switch>
              <Route exact path={RoutingPath.homeView} component={HomeView}/>
              <Route exact path={RoutingPath.loginView} component={LoginView}/>
              <Route exact path={RoutingPath.createUserView} component={CreateUserView}/>
              <Route exact path={RoutingPath.postView} component={PostView}/>
              <Route exact path={RoutingPath.settingsVeiw} component={SettingsView}/>
           </Switch>
        </BrowserRouter>
    )
}