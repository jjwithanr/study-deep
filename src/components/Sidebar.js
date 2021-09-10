import React from 'react'
import './components.css'
import { CgCalendarToday } from 'react-icons/cg'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <CgCalendarToday size={40} />
                    <span className="sidebarListItemText">Calendar</span>
                    </li>
                </ul>
            
            </div>
        </div>
    )
}

export default Sidebar
