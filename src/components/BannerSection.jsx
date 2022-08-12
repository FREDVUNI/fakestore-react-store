import React from 'react'
import SliderData from '../SliderData'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../App.css'
import {Link} from 'react-router-dom'

const BannerSection = () =>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
        return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
    }
    return (
        <div className="homeSlide">
        <Slider {...settings}>
            {
                SliderData.map((slider,index)=>{
                    return(
                        <div className="box" key={index}>
                            <div className="left">
                                <h1>{slider.title}</h1>
                                <p>{slider.desc}</p>
                                <button className="btn-primary">
                                    <Link to='/products' className="btn-link">
                                        visit collections
                                    </Link>
                                </button>
                            </div>
                            <div className="right">
                                <img src={slider.cover} alt="slider"/>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
        </div>
    )
}

export default BannerSection