import React from 'react'
import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://images.unsplash.com/photo-1522866348293-55be2c6caa1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="" className="singlePostImg" />
                <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Moises Nervis</b></span>
                    <span className="singlePostDate">1hr ago</span>
                </div>
                <p className='singlePostDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsum aut commodi fuga ad cupiditate hic saepe? Consequatur aliquid distinctio explicabo deserunt est repudiandae corrupti. Voluptatum, neque. Hic necessitatibus ducimus labore cumque magnam laudantium dicta ex quae a quaerat quibusdam pariatur odio iusto vel possimus ut quo, odit voluptatum cupiditate, molestias blanditiis, culpa vitae officia repudiandae! Minima, nulla? Inventore voluptatum nemo placeat sunt exercitationem, voluptas accusantium perspiciatis, temporibus iste id, cumque saepe nesciunt illo! Quas perferendis odio aspernatur et earum?</p>
            </div>
        </div>
    )
}
