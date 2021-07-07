import React from 'react'
import "./sidebar.css"
import logobig from '../../assets/logobig.png'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img className="sidebarImg" src={logobig} alt="" />
                <img src="" alt="" />
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
                <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </a>
                <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">
                    <i className="sidebarIcon fab fa-linkedin"></i>
                </a>
                <a href="https://www.pinterest.com/" target='_blank' rel="noreferrer">
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                </a>
                <a href="https://twitter.com/?lang=en" target='_blank' rel="noreferrer">
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </a>
            </div>
        </div>
    )
}
