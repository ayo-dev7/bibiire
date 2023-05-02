import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from "react-icons/hi"
import blog from "../images/blog-1.jpg";
import Container from "../components/Container"

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Blog"}/>
            <Breadcrumb title="Blog"/>
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blogs" className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs-4'/>
                                Go back to blog
                            </Link>
                            <h3 className="title">
                                A Beautiful Sunday Morning Renaissance
                            </h3>
                            <img src={blog} alt="blog"/>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Iure pariatur numquam harum consectetur,
                                dolor debitis quibusdam exercitationem temporibus
                                blanditiis. Dignissimos placeat sequi ut sint et ex,
                                accusamus minima corporis rem dolores itaque. Et a ducimus
                                esse laudantium dicta illum doloribus facilis quisquam
                                repellat dolores vero impedit temporibus, autem nisi
                                quidem!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog