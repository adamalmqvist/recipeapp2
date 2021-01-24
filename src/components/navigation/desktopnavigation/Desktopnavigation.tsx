import './Desktopnavigation.css'
import Logotype from '../../../shared/images/foodlogo.svg'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const Desktopnavigation = () => {
    const history = useHistory()
    return (
        <div className="desktopNavigationContainer">
            <img className="navigationLogotype" alt="Error..." src={Logotype}></img>
            <span onClick={() => history.push(RoutingPath.homeView)}>Home</span>
            <span onClick={() => history.push(RoutingPath.loginView)}>Login</span>
            <span onClick={() => history.push(RoutingPath.postView)}>Post Recipe</span>
        </div>
    )
}
