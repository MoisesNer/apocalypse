import React from 'react'
import './about.css'

export default function About() {
    return (
        <>
            <div className='about'>
                <div className="aboutTitles">
                    <span className="aboutTitleSm">Our Mission is Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, tempore.</span>
                    <span className="aboutTitleLg">About Apocalypse Paintball</span>
                </div>
                <img className="aboutImg" src="https://images.unsplash.com/photo-1569242840510-9fe6f0112cee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
            </div>
            <div className='aboutTeam'>
                <span className='aboutTeamTitle'>Meet the team</span>
                <p className='aboutTeamText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique numquam quae sequi ipsam qui sint 
                minus unde quidem explicabo quisquam, consequatur error doloremque eius rem sapiente molestiae quas nisi velit cumque id. Ad 
                dolorum quaerat quo, mollitia voluptate deserunt numquam!</p>
                
                <div className='profileText'>
                    <div className='profileTextPerson'>
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="General Manager" />
                        <h1>Ofelia Labastida</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod deleniti aperiam? Facilis a ab ipsa, nihil pariatur illum fugiat?</p>
                    </div>
                    <div className='profileTextPerson'>
                        <img src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=800" alt="General Manager" />
                        <h1>Ofelia Labastida</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod deleniti aperiam? Facilis a ab ipsa, nihil pariatur illum fugiat?</p>
                    </div>
                    <div className='profileTextPerson'>
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="General Manager" />
                        <h1>Ofelia Labastida</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod deleniti aperiam? Facilis a ab ipsa, nihil pariatur illum fugiat?</p>
                    </div>
                    <div className='profileTextPerson'>
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="General Manager" />
                        <h1>Ofelia Labastida</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod deleniti aperiam? Facilis a ab ipsa, nihil pariatur illum fugiat?</p>
                    </div>
                </div>
            </div>
        </>
    )
}
