import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import logosmall from '../../assets/logosmall-white2.png'

export default function TopBar() {
    const user = false;

    return (
        <div className="top">
            <div className="topLeft">
                <Link to='/'>
                    <img src={logosmall} alt="paintball APOCALYPSE logo" className='toplogo' />
                </Link>
                {/* <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i> */}
            </div>
            <div className="topCenter">
                <ul className="topList">
                    {/* <li className="topListItem">
                        <Link className='link' to='/'>Home</Link>
                    </li> */}
                    <li className="topListItem">
                        <Link className='link' to='/contact'>Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to='/gallery'>Gallery</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to='/about'>About</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className="topLogo"
                        src="https://i.pinimg.com/originals/7a/20/40/7a204013292a5a6afbd5b8d3ee34e09c.jpg"
                        alt="apocalypse logo"
                    />
                ) : (
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                            <Link className="link" to="/register">Register</Link>
                        </li>
                    </ul>
                )}

                {/* <i className="searchIcon fas fa-search"></i> */}
            </div>
        </div>
    )
}