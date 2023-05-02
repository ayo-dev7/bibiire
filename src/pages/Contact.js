import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import {AiOutlineHome,AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall,BiInfoCircle} from "react-icons/bi"
import Container from "../components/Container"

const Contact = () => {
    return (
        <>
            <Meta title={"Contact"}/>
            <Breadcrumb title="Contact"/>
            <Container class1="contact-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5641.555855858896!2d5.234650460027453!3d7.174850223665272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1682870220051!5m2!1sen!2sng" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-12">
                        <div className="contact-inner-wrapper d-flex justify-content-between">
                            <div>
                                <h3 className="contact-title mb-4">Contact</h3>
                                <form action="" className='d-flex gap-15 flex-column'>
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Phone number"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="4"
                                            className='w-100 form-control'
                                            placeholder="Comment"
                                        >
                                        </textarea>
                                    </div>
                                    <div>
                                        <button className="button border-0">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li className='mb-3 d-flex align-items-center gap-15'>
                                            <AiOutlineHome className='fs-5'/>
                                            <address className='mb-0'>Hno: No 24, Femi Fajuru Avenue Akure, Nigeria PinCode: 340223</address>
                                        </li>
                                        <li className='mb-3 d-flex align-items-center gap-15'>
                                            <BiPhoneCall className='fs-5'/>
                                            <a href="tel: +234 8166115482">
                                                +234 8166115482
                                            </a>
                                        </li>
                                        <li className='mb-3 d-flex align-items-center gap-15'>
                                            <AiOutlineMail className='fs-5'/>
                                            <a href="mailto: ayoadebiyi95@gmail.com">
                                                ayoadebiyi95@gmail.com
                                            </a>
                                        </li>
                                        <li className='mb-3 d-flex align-items-center gap-15'>
                                            <BiInfoCircle className='fs-5'/>
                                            <p className="mb-0">Monday - Friday 10AM - 8PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact