import React from 'react'
import './post.css'

export default function Post() {
    return (
        <div className='post'>
             <img 
             className='postImg'
             src="https://images.unsplash.com/photo-1614063878421-766fd143762e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
             alt="" />
             <div className="postInfo">
                 <div className="postCats">
                     <span className="postCat">Adrenaline</span>
                     <span className="postCat">Lifestyle</span>
                     {/* <span className="postCat">Lifestyle</span> */}
                 </div>
                 <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                 <hr />
                 <span className="postDate">1 hr ago</span>
             </div>
             <p className="postDescription">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi vero nihil eum quia distinctio omnis dignissimos. Blanditiis, ratione. Rerum ab expedita harum cum explicabo temporibus alias dignissimos saepe iste!
             </p>
        </div>
    )
}
