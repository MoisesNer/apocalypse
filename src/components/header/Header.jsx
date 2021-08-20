import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">BATTLE YOUR FRIENDS!</span>
                <span className="headerTitleLg">BOOK NOW!</span>
            </div>
            <img className="headerImg" src="https://images.unsplash.com/photo-1522499820455-9c821da82b9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
        </div>
    )
}
