import React from 'react'
import {Mobilenavigation} from './mobilenavigation/Mobilenavigation'
import {Desktopnavigation} from './desktopnavigation/Desktopnavigation'
import {useWindowDimention} from '../../hooks/useWindowDimention'
import { DesktopNavigationTabs } from './desktopnavigation/desktopnavigationtabs/DesktopNavigationTabs'


export const Navigation = () => {
    const { height, width } = useWindowDimention()
    const displayNavigationDependingOnDevice = () => {
        return (width <= 1000)
        ? <Mobilenavigation/>
        : <Desktopnavigation/>
    }
    
    return (
        <div>
            {displayNavigationDependingOnDevice()}
        </div>
    )
}

