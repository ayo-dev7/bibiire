import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div>
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
                </div>
            </div>
            <div className="blog-content">
                <p className="date">11 JUNE 2022</p>
                <h5 className="title">A beautiful sunday morning renaissance</h5>
                <p className="desc">You're only as good as your last collection. Which is an enormous pressure. I think there is something about...</p>
                <Link to='/blog/:id' className='button'>Read more</Link>
            </div>
        </div>
    )
}

export default BlogCard