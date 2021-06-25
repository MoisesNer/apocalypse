import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img className="sidebarImg" src="https://i.pinimg.com/originals/7a/20/40/7a204013292a5a6afbd5b8d3ee34e09c.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique voluptate recusandae perferendis distinctio beatae deserunt, nobis excepturi sapiente est.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">SERVICEs</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">All Included</li>
                    <li className="sidebarListItem">By Hour</li>
                    <li className="sidebarListItem">Private Events</li>
                    <li className="sidebarListItem">Training</li>
                    <li className="sidebarListItem">Food</li>
                    <li className="sidebarListItem">Daycare</li>
                </ul>
            </div>
            <div className="sidebarTitle">
                <span className="sidebarTitle">FOLLOW US</span>
            </div>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-linkedin"></i>
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
        </div>
    )
}
