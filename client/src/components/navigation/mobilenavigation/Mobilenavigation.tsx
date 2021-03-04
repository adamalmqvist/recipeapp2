import './Mobilenavigation.css'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import{ useState } from 'react'
import { BackDrop } from '../../backdrop/BackDrop'

export const Mobilenavigation = () => {
    const [openDrawer, setOpenDrawer ] = useState<boolean>(false)
    return (
        <div>
            <div className="hamburgerContainer">
            <HamburgerButton drawerHandler={setOpenDrawer}/>
            </div>
            <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer}/>
            {!openDrawer || <BackDrop drawerHandler={setOpenDrawer}/>}
        </div>
    )
}
