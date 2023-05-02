import React from 'react'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import Colors from '../components/Colors';
import { Link } from 'react-router-dom';
import {TbGitCompare} from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
import Container from '../components/Container';

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    const props = {width: 400, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};
    const copyToClipboard = (text) => {
        console.log("text", text);
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    }
    return (
        <>
            <Meta title={"Product Name"}/>
            <Breadcrumb title="Product Name"/>
            <Container class1="main-product-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-image d-flex flex-wrap gap-15">
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className='title'>
                                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        activeColor="#ffd700"
                                        value={4}
                                        edit={false}
                                    />
                                    <p className='mb-0 t-review'>( 2 Reviews )</p>
                                </div>
                                <a className='review-btn' href="#review">Write a review</a>
                            </div>
                            <div className="py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='mb-0 product-heading'>Type :</h3>
                                    <p className="mb-0 product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='mb-0 product-heading'>Brand :</h3>
                                    <p className="mb-0 product-data">Havels</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='mb-0 product-heading'>Category :</h3>
                                    <p className="mb-0 product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='mb-0 product-heading'>Tags :</h3>
                                    <p className="mb-0 product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='mb-0 product-heading'>Availability :</h3>
                                    <p className="mb-0 product-data">In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className='mb-0 product-heading'>Size :</h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className='mb-0 product-heading'>Color :</h3>
                                    <Colors/>
                                </div>
                                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                    <h3 className='mb-0 product-heading'>Quantity :</h3>
                                    <div className="">
                                        <input
                                            type="number"
                                            name=""
                                            style={{width: "70px"}}
                                            id=""
                                            min={1}
                                            max={10}
                                            className='form-control'
                                        />
                                    </div>
                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        <button className='button border-0'>ADD TO CART</button>
                                        <button className='button signup'>But it Now</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div><a href=""><TbGitCompare className='fs-5 me-2'/> Add to Compare</a></div>
                                    <div><a href=""><AiOutlineHeart className='fs-5 me-2'/> Add to Wishlist</a></div>
                                </div>
                                <div className="d-flex gap-10 flex-column my-3">
                                    <h3 className='mb-0 product-heading'>Shipping & Returns :</h3>
                                    <p className="mb-0 product-data">
                                        Free shipping and returns available on all orders! <br />
                                        We ship all US domestic orders within <b>5-10 business days!</b>
                                    </p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className='mb-0 product-heading'>Product Link :</h3>
                                    <a href="javascript:void(0);" onClick={() => copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}>
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Hic facere quidem
                                accusantium, est quis tempore ratione
                                vitae. Quia, unde doloribus?
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container id="review" class1="review-wrapper home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3>Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4>Customer Reviews</h4>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={4}
                                            edit={false}
                                        />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                <div>
                                    {
                                        orderedProduct && (
                                            <a className='text-decoration-underline' href="">Write a Review</a>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="review-form py-4">
                                <h4>Write a Review</h4>
                                <form action="" className='d-flex gap-15 flex-column'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={4}
                                            edit={true}
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
                                    <div className='d-flex justify-content-end'>
                                        <button className="button border-0">Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h6 className='mb-0'>ayo-dev7</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={4}
                                            edit={true}
                                        />
                                    </div>
                                    <p className='mt-3'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Sit voluptate corporis,
                                        est debitis dolorum ipsum fugit esse dolores
                                        in eligendi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="popular-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard/>
                </div>
            </Container>
        </>
    )
}

export default SingleProduct