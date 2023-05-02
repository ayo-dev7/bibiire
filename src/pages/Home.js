import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import { services } from '../utils/Data'

const Home = () => {
    return (
        <>
            <Container class1="home-wrapper-1 py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative">
                            <img
                                src="images/main-banner-1.jpg"
                                alt="main banner"
                                className='img-fluid rounded-3'
                            />
                            <div className="main-banner-content position-absolute">
                                <h4>SUPERCHARGED FOR PROS.</h4>
                                <h5>iPad S13+ Pro.</h5>
                                <p>From $999.0 or $41.62/mo.</p>
                                <Link className='button'>BUY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                            <div className="small-banner position-relative">
                                <img
                                    src="images/catbanner-01.jpg"
                                    alt="main banner"
                                    className='img-fluid rounded-3'
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>Best Sale</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.0 <br /> or $41.62/mo.</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img
                                    src="images/catbanner-02.jpg"
                                    alt="main banner"
                                    className='img-fluid rounded-3'
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>New Arrival</h4>
                                    <h5>Buy IPad Air</h5>
                                    <p>From $599.0 or <br /> $49.91/mo. for 12 mo.</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img
                                    src="images/catbanner-03.jpg"
                                    alt="main banner"
                                    className='img-fluid rounded-3'
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>15% Off</h4>
                                    <h5>SmartWatch 7</h5>
                                    <p>Shop the latest band <br /> styles and colors</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img
                                    src="images/catbanner-04.jpg"
                                    alt="main banner"
                                    className='img-fluid rounded-3'
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>Free Engraving</h4>
                                    <h5>AirPods Max</h5>
                                    <p>High-fidelity playback & <br /> ultra-low distribution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {services?.map((i,j) => {
                                return(
                                    <div className='d-flex align-items-center gap-15' key={j}>
                                        <img src={i.image} alt="services" />
                                        <div>
                                            <h6>{i.title}</h6>
                                            <p className='mb-0'>{i.tagline}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="featured-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Featured Collection</h3>
                    </div>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </Container>
            <Container class1="famous-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/watch-3.jpg" className='img-fluid' alt="smart watch" />
                            <div className="famous-card-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399 or $16.62/mo. for 24 mo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/laptop-famous.jpg" className='img-fluid' alt="smart watch" />
                            <div className="famous-card-content position-absolute">
                                <h5 className='text-dark'>Studio Display</h5>
                                <h6 className='text-dark'>600 nits of brightness</h6>
                                <p className='text-dark'>27-inch 5K Retina display</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/iPhone.jpg" className='img-fluid' alt="smart watch" />
                            <div className="famous-card-content position-absolute">
                                <h5 className='text-dark'>Smartphones</h5>
                                <h6 className='text-dark'>Smartphone 13 pro</h6>
                                <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo. for 24 mo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/speaker-famous.jpg" className='img-fluid' alt="smart watch" />
                            <div className="famous-card-content position-absolute">
                                <h5 className='text-dark'>Home Speakers</h5>
                                <h6 className='text-dark'>Room-filling sound</h6>
                                <p className='text-dark'>From $699.00 or $116.58/mo. for 12 mo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="special-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Special Products</h3>
                    </div>
                </div>
                <div className="row">
                    <SpecialProduct/>
                    <SpecialProduct/>
                    <SpecialProduct/>
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
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </Container>
            <Container class1="marquee-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className='d-flex'>
                                <div className='mx-4 w-25'>
                                    <img src="images/brand-01.png" alt="brand" />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src="images/brand-02.png" alt="brand" />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src="images/brand-03.png" alt="brand" />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src="images/brand-04.png" alt="brand" />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src="images/brand-05.png" alt="brand" />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src="images/brand-06.png" alt="brand" />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src="images/brand-07.png" alt="brand" />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src="images/brand-08.png" alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Latest Blogs</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                    <div className="col-3">
                        <BlogCard/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home