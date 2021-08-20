import React from 'react'
import "./posts.css"
import{ Link } from 'react-router-dom'

import { withProjectConsumer } from '../../context'


function ApocalypseContainer({context}) {

    const { projects } = context;

    return (
        <div className="posts">
            {projects.map((item, index) =>(
            <div className='post' key={index}>
            <img
                className='postImg'
                src={item.image}
                alt={item.alt} />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Cost: ${item.cost}</span>
                    <span className="postCat">Field: {item.field}</span>
                </div>
                <span className="postTitle">{item.title}.</span>
                <hr />
                <span className="postDate">Pax: {item.pax}</span>
            </div>
            <p className="postDescription"> {item.description}</p>
            <Link className='btnGlobal' to={item.slug}>See Details</Link>
        </div>
            ))}
        </div>
    )
}

export default withProjectConsumer(ApocalypseContainer)