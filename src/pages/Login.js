import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import Container from "../components/Container"
import CustomInput from '../components/CustomInput'

const Login = () => {
    return (
        <>
            <Meta title={"Login"}/>
            <Breadcrumb title="Login"/>
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <div>
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                    <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                                        <button className='button border-0'>Login</button>
                                        <Link to="/signup" className='button signup'>Sign Up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login