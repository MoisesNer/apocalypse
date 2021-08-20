import React, { Component } from 'react'
import { ProjectContext } from '../../context'

import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default class Single extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.match.params.slug);
        this.state = {
            slug: this.props.match.params.slug,
        };
    }
    static contextType = ProjectContext;

    render() {
        const { getProject } = this.context;
        const project = getProject(this.state.slug);

        const { image, alt, cost, field, pax, title, available, description, full } = project

        return (
            <div className='single'>
                <div className="singlePostWrapper">
                    <img src="https://images.unsplash.com/photo-1522866348293-55be2c6caa1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="" className="singlePostImg" />
                    <div className="singlePost">
                        <div className="singleLeft">
                            <h1 className='singlePostTitle'>{title}</h1>
                            <div className="singlePostInfo">
                                <span className="singlePostAuthor">Field: <b>{field}</b></span>
                                <span className="singlePostAuthor">Cost for 3 hours or 500 bullets: <b>{cost}</b></span>
                                <span className="singlePostDate">Number max of players: <b>{pax}</b></span>
                            </div>
                            <p className='singlePostDescription'>{description}</p>
                            <p className='singlePostDescription'>{full}</p>

                            <p className='singlePostDescription'>Available days: <b>{available}</b></p>
                             <div className="single-image">
                                {image.map((item, index) => {
                                    return <img src={item} alt={alt} key={index} />
                                })}
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        )
    }
}
