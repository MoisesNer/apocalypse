import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://i.pinimg.com/originals/7a/20/40/7a204013292a5a6afbd5b8d3ee34e09c.jpg" 
                        alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-street-view"></i>
                        </label>
                        <input type="file" id='fileInput'className='fileInput'/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Apocalypse'/>
                    <label>Email</label>
                    <input type="text" placeholder='your@email.com'/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />

        </div>
    )
}
