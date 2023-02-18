import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import StarWars from '../../assets/Star-Wars.png'
import Dishonored from '../../assets/dishonored.jpg'
import battlefield from '../../assets/battlefield.jpg'
import './CarouselBox.scss'
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div>
                <Slider {...settings}>
                    <img className="slider" src={StarWars} alt="StarWars" />
                    <img className="slider" src={Dishonored} alt="StarWars" />
                    <img className="slider" src={battlefield} alt="StarWars" />
                </Slider>
            </div>
        )
    }
}
