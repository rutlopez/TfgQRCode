import React, { useEffect} from 'react';
import heroImg from '../assets/img/hero.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 2000,

        });
    }, [])

    /**
     * Constante que hace que el texto con cursor cambie todo el rato y a las velocidades 
     * establecidas.
     */
    const [text] = useTypewriter({
        words: ["Make it easy for customers to contact you with a custom QR code business card.",
                "Enter your information and we'll generate a QR code image that you can use to print your own professional business cards."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 3000,
    });
    return (
        <section className="hero">
            <div className="hero-content" data-aos="fade-right">
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
            </div>
            <div class="hero-image" data-aos="fade-left">
                <img src={heroImg} alt="Hero" ></img>
            </div>
        </section>
    )
}

export default Hero