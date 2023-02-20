import React, { Component } from 'react'
import Slider from 'react-slick'
import './CarouselGames.scss'
import btf from '../../assets/btf.png'
import dest from '../../assets/dest.png'
import steep from '../../assets/steep.png'
import forza from '../../assets/forza.png'
import pocemon from '../../assets/pocemon.jpg'
import mario from '../../assets/mario.jpg'

export default class CenterMode extends Component {
    render() {
        const settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 3,
            speed: 500,
        }
        return (
            <div>
                <h1>Exclusive games on XBOX</h1>
                <Slider {...settings}>
                    <div className="card">
                        <img src={btf} alt="btf" className="imghw" />
                        <h3>Call of Duty: WWII</h3>
                        <a href="https://www.xbox.com/en-US?source=lp">
                            <div className="seeDetails">
                                <p className="v-align">See Details</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <img src={dest} alt="dest" className="imghw" />
                        <h3>Destiny 2</h3>
                        <a href="https://www.xbox.com/en-US?source=lp">
                            <div className="seeDetails">
                                <p className="v-align">See Details</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <img src={steep} alt="steep" className="imghw" />
                        <h3>STEEP</h3>
                        <a href="https://www.xbox.com/en-US?source=lp">
                            <div className="seeDetails">
                                <p className="v-align">See Details</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <img src={forza} alt="forza" className="imghw" />
                        <h3>Forza Motorsport 7</h3>
                        <a href="https://www.xbox.com/en-US?source=lp">
                            <div className="seeDetails">
                                <p className="v-align">See Details</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <img src={pocemon} alt="pocemon" className="imghw" />
                        <h3>Pokémon GO</h3>
                        <a href="https://www.xbox.com/en-US?source=lp">
                            <div className="seeDetails">
                                <p className="v-align">See Details</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <img src={mario} alt="mario" className="imghw" />
                        <h3>Mario</h3>
                        <a href="https://www.xbox.com/en-US?source=lp">
                            <div className="seeDetails">
                                <p className="v-align">See Details</p>
                            </div>
                        </a>
                    </div>
                </Slider>
            </div>
        )
    }
}
