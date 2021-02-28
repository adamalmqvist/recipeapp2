import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {useEffect, useContext} from 'react'
import {UserContext} from '../shared/provider/UserProvider'
import {HomeView} from '../view/homeview/HomeView'
import {LoginView} from '../view/loginview/LoginView'
import {PostView} from '../view/postview/PostView'
import RoutingPath from './RoutingPath'
import { SettingsView } from '../view/authenticatedveiws/SettingsView'
import { homedir } from 'os'


export const Routes = (props: { children: React.ReactChild }) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const {children} = props;

   const blockRouteIfAuthenticated = (allowedVeiw: React.FC, notAllowedVeiw: React.FC) => {
     return !authenticatedUser ? allowedVeiw : notAllowedVeiw
   }

   const authenticatedRequired = (allowed: React.FC, notAllowed: React.FC) => {
       return authenticatedUser ? allowed : notAllowed;
   }

    useEffect (() => {
        if (localStorage.getItem("user")) {
            setAuthenticatedUser({username: localStorage.getItem("user")})
          }
    }, [])

    return (
        <BrowserRouter>
           {children}
           <Switch>
              <Route exact path={RoutingPath.homeView} component={HomeView}/>
              <Route exact path={RoutingPath.loginView} component={blockRouteIfAuthenticated(LoginView, HomeView)}/>
              <Route exact path={RoutingPath.postView} component={PostView}/>
              <Route exact path={RoutingPath.settingsVeiw} component={authenticatedRequired(SettingsView,LoginView)}/>
           </Switch>
        </BrowserRouter>
    )
}