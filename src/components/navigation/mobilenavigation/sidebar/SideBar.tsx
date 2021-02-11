import './SideBar.css'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'

export const SideBar = (props: {drawerIsOpen: boolean, drawerHandler: Function }) => {
    const history = useHistory()
    return (
        <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            <div onClick={() => props.drawerHandler(false)} id="mdiv">
            <div className="mdiv">
            <div className="md"></div>
            </div>
            </div>
            <ul className="ulTabsContainer">
            <li className="listTabs" onClick={() => history.push(RoutingPath.homeView)}>Home</li>
            <li className="listTabs" onClick={() => history.push(RoutingPath.postView)}>PostRecipe</li>
            </ul>
            </div>
            

    )
}
