import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {HomeView} from '../view/HomeView'
import {LoginView} from '../view/LoginView'
import {PostView} from '../view/PostView'
import RoutingPath from './RoutingPath'


export const Routes = (props: { children: React.ReactChild }) => {
    const {children} = props;
    return (
        <BrowserRouter>
           {children}
           <Switch>
              <Route exact path={RoutingPath.homeView} component={HomeView}/>
              <Route exact path={RoutingPath.loginView} component={LoginView}/>
              <Route exact path={RoutingPath.postView} component={PostView}/>
           </Switch>
        </BrowserRouter>
    )
}