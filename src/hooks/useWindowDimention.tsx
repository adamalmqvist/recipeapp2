import { useState, useEffect } from 'react'

const getWindowDimention = () => {
    const {innerWidth: width, innerHeight: height} = window
    return { width, height}
}


export const useWindowDimention = () => {
    const [windowDimention, setWindowDimention] = useState(getWindowDimention)
    const handleResize = () => { setWindowDimention(getWindowDimention) }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowDimention
}