import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Featured from "../components/featured/Featured";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";



import MailList from "../components/mailList/MailList";

import PropertyList from "../components/propertyList/PropertyList";

import './Start.css'
const Start = () => {
    return (
        <div className='caro'>
            <h5 align="center"></h5>
            
            <Carousel autoPlay interval="1000" transitionTime="2000" infiniteLoop>
                <div>
                    <img src="https://res.cloudinary.com/dxcwswwof/image/upload/v1670638033/sasha-kaunas-TAgGZWz6Qg8-unsplash_ylzf5g.jpg" alt="" />
                    <Link to='/home'>
                        <p className="legend">London</p>
                    </Link>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dxcwswwof/image/upload/v1670617306/s-well-oj0zeY2Ltk4-unsplash_he0sv1.jpg" alt="" />
                    <Link to='/home'>
                        <p className="legend">Boston</p>
                    </Link>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dxcwswwof/image/upload/v1670617379/cmophoto-net-EmVKKf3wUZQ-unsplash_m33uvh.jpg" alt="" />
                    <Link to='/home'>
                        <p className="legend">Berlin</p>
                    </Link>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dxcwswwof/image/upload/v1670617437/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash_v42kbg.jpg" alt="" />
                    <Link to='/home'>
                        <p className="legend">Madrid</p>
                    </Link>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dxcwswwof/image/upload/v1670617443/edvin-johansson-rlwE8f8anOc-unsplash_hpimzr.jpg" alt="" />
                    <Link to='/home'>
                        <p className="legend">Paris</p>
                    </Link>
                </div>
            </Carousel>
            <div align="center" className='butt'>
                <Link to='/home'>
                    <button className='btn btn-danger' >Start Booking</button>
                </Link>
            </div>
            <div>

                <div className="homeContainer">
                    <Featured />
                    <h1 className="homeTitle">Browse by property type</h1>
                    <PropertyList />
                    <h1 className="homeTitle">Homes guests love</h1>
                    <FeaturedProperties />
                    <MailList />

                </div>
            </div>  


  
        </div>
    )
}

export default Start