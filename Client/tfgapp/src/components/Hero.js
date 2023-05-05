import React from 'react';
import heroImg from '../assets/img/hero.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { SlMouse } from "react-icons/sl";
function Hero() {
    const [text] = useTypewriter({
        words: ["Make it easy for customers to contact you with a custom QR code business card.", "Enter your information and we'll generate a QR code image that you can use to print your own professional business cards."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 3000,
    });
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Create a QR Code Business Card</h1>
                <p>{text}
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#fecc00'></Cursor>
                </p>
                <div className='btn-box'>
                    <a href="#features" className="btn">Learn More</a>
                    <a href="/card" className="btn">Get Started</a>
                </div>
                <div className='floating-icon'>
                    <a href='#features'>
                        <SlMouse color='#fff' size={25} className='mouse' />
                    </a>
                </div>
            </div>
            <div class="hero-image">
                <img src={heroImg} alt="Hero" ></img>
            </div>


        </section>
    )
}

export default Hero