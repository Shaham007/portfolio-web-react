import React from 'react'
import styles from "../components/main.css";
import Image from '../image/IMG-7533.png';

function Main() {
    return (
        <div className='main'>
            <div className='bg-circles'>
                <div className='circle-1'></div>
                <div className='circle-2'></div>
                <div className='circle-3'></div>
            </div>

            <div className='main-content'>
                <section className='home-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='home-text'>
                            <p>Hello It's</p>
                            <h1>Shaham Mazhar</h1>
                            <h2>Front End Developer</h2>
                                    <a href='#About' className='btn button button--anthe button_1'> <span>More About Me</span> </a>
                                    <a href='#portfolio' className='btn button button--anthe'>  <span>Portfolio</span> </a>
                            </div>
                            <div className='home-img'>
                                    <div className='img-box' style={{ backgroundImage: `url(${Image})` }} ></div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
                
                <div className='home-fotter'>
                    <h2> About Me</h2>
                </div>
                
        </div>
    )
}

export default Main
