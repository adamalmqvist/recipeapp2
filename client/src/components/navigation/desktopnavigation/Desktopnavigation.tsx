import './Desktopnavigation.css'
import Logotype from '../../../shared/images/foodlogo.svg'
import { DesktopNavigationTabs } from './desktopnavigationtabs/DesktopNavigationTabs'

export const Desktopnavigation = () => {
    
    return (
        <div className="desktopNavigationContainer">
            <div className="deskotopNavigationTabs">
            <DesktopNavigationTabs/>
            </div>
        </div>
    )
}
