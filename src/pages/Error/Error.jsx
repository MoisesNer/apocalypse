import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {
    return (
        <>
            <div className='error'>
                <div className="errorTitles">
                    <span className="errorTitleSm">The page you're looking for doesn't exist</span>
                    <span className="errorTitleLg">404</span>
                    <Link to='/' className='errorBtn'>Back to Home</Link>
                </div>
                <img className="errorImg" src="https://images.unsplash.com/photo-1588450248442-1c8357368dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="404 header" />
            </div>

        </>
    )
}
