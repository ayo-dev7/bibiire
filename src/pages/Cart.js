import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import watch from "../images/watch.jpg"
import {AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
    return (
        <>
            <Meta title={"Cart"}/>
            <Breadcrumb title="Cart"/>
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex align-items-center justify-content-between">
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className="cart-data py-3 mb-2 d-flex align-items-center justify-content-between">
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className='w-25'>
                                    <img
                                        src={watch}
                                        alt="product"
                                        className='img-fluid'
                                    />
                                </div>
                                <div className='w-75'>
                                    <p>Lorem</p>
                                    <p>Size: Lorem</p>
                                    <p>Color: Lorem</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className='form-control'
                                        min={1}
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className='text-danger fs-5'/>
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className="price">$ 100</h5>
                            </div>
                        </div>
                        <div className="cart-data py-3 mb-2 d-flex align-items-center justify-content-between">
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className='w-25'>
                                    <img
                                        src={watch}
                                        alt="product"
                                        className='img-fluid'
                                    />
                                </div>
                                <div className='w-75'>
                                    <p>Lorem</p>
                                    <p>Size: Lorem</p>
                                    <p>Color: Lorem</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input
                                        type="number"
                                        name=""
                                        id=""
                                        className='form-control'
                                        min={1}
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className='text-danger fs-5'/>
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className="price">$ 100</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/product" className="button">Continue Shopping</Link>
                            <div className='d-flex flex-column align-items-end'>
                                <h4>Sub Total: $ 1000</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to="/checkout" className='button'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart