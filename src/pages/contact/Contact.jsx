import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <>
            <div className='contact'>
                <div className="contactTitles">
                    <span className="contactTitleSm">be very welcome to contact us</span>
                    <span className="contactTitleLg">get in touch</span>
                </div>
                {/* <img className="contactImg" src="https://images.unsplash.com/photo-1588450248442-1c8357368dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="contact header picture" /> */}
                <img className="contactImg" src="https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="contact header" />
            </div>
            <div className="container">
                <div className="contactInfo">
                    <h1>APOCALYPSE PAINTBALL</h1>
                    <h3>Office: <span>(778) 778 77788</span></h3>
                    <h3>Email: <span>contact@apocalypse.com</span></h3>
                    <h3>Address: <span>Paseo Sta. Isabel, La Asuncion, 52172 Metepec, Méx., Mexico</span></h3>

                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                        <i className="sidebarIcon fab fa-linkedin"></i>
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                        <i className="sidebarIcon fab fa-pinterest-square"></i>
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                    </div>
                </div>
                <div className="contactMap">
                    <img src="https://resistenciamusical.files.wordpress.com/2011/02/crokis.jpg?w=604" alt="crokis" />
                </div>
            </div>

        </>
    )
}
