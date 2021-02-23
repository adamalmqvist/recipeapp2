import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import './DesktopNavigationTabs.css'

export const DesktopNavigationTabs = () => {
    const history = useHistory()

    return (
        <ul className="ulTabsWrapper">
            <li className="liTabs" onClick={() => history.push(RoutingPath.homeView)}>Home</li>
            <li className="liTabs" onClick={() => history.push(RoutingPath.postView)}>PostRecipe</li>
        </ul>
    )
}
