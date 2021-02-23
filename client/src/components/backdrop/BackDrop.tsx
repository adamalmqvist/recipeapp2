import './BackDrop.css'

export const BackDrop = (props: {drawerHandler: Function}) => {
    return (
        <div className="backDrop" onClick={() => props.drawerHandler(false)}>
            
        </div>
    )
}
