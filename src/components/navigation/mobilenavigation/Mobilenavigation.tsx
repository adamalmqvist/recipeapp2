import './Mobilenavigation.css'
import Logotype from '../../../shared/images/foodlogo.svg'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import{ useState } from 'react'
import { BackDrop } from '../../backdrop/BackDrop'

export const Mobilenavigation = () => {
    const [openDrawer, setOpenDrawer ] = useState<boolean>(false)
    return (
        <div>
            <HamburgerButton drawerHandler={setOpenDrawer}/>
            <img className="logotype" src={Logotype}></img>
            <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer}/>
            {!openDrawer || <BackDrop drawerHandler={setOpenDrawer}/>}
        </div>
    )
}
