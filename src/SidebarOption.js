import React from 'react'
import "./SidebarOption.css"



// when passing props remember that we can pass components as props
// while doing that we need to Keep the first letter of the name capital
function SidebarOption({active ,text,Icon}) {
    return (
        // if an option in the sidebar option is active then 
        // we  are adding a class of SidebarOption--active to that option
        <div className={`sidebarOption ${active && 'SidebarOption--active'}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
