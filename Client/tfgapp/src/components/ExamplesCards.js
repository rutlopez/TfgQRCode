import React, { useEffect } from 'react';
import previa1 from '../assets/img/example-cards/previa1.png';
import previa2 from '../assets/img/example-cards/previa2.png';
import previa3 from '../assets/img/example-cards/previa3.png';
import { IoIdCard } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExamplesCards() {

    useEffect(() => {
        AOS.init({
            duration: 2500,
        });
    }, [])

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 50 }} data-aos="fade-up">
                <IoIdCard color='#fecc00' size={35} />
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '300', fontFamily: 'Poppins', lineHeight: '1.4', color: '#fecc00', margin: '2rem 0' }}>
                    Design examples
                </h2>
                <p style={{
                    textAlign: 'center', marginTop: '10px', fontWeight: '300', fontFamily: 'Poppins-light', lineHeight: '1.4',
                    color: '#555', margin: '0 auto', width: '50%', minWidth: '40rem'
                }}>Create professional business cards with custom QR codes! Our business card creation app allows you to easily design elegant and
                    modern business cards with contact information and a unique QR code. Here are some examples of vCards you can create with our app</p>
            </div>
            <div className="card-container">
                <div className="card-example" data-aos="fade-right">
                    <div className="card-image" style={{ backgroundImage: `url(${previa1})` }}>
                    </div>
                    <div className="card-info">
                        <p>Create a unique and professional business card with our app, including a QR code for easy access to your website or contact information.</p>
                        <div className='btn-box' style={{ marginLeft: 14, marginTop: 20 }}>
                            <a href="/card" style={{ height: 40 }} className="btn">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="card-example" data-aos="flip-up">
                    <div className="card-image" style={{ backgroundImage: `url(${previa2})` }}>
                    </div>
                    <div className="card-info">
                        <p>Create a unique and professional business card with our app, including a QR code for easy access to your website or contact information.</p>
                        <div className='btn-box' style={{ marginLeft: 14, marginTop: 20 }}>
                            <a href="/card" style={{ height: 40 }} className="btn">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="card-example" data-aos="fade-left">
                    <div className="card-image" style={{ backgroundImage: `url(${previa3})` }}>
                    </div>
                    <div className="card-info">
                        <p>Create a unique and professional business card with our app, including a QR code for easy access to your website or contact information.</p>
                        <div className='btn-box' style={{ marginLeft: 14, marginTop: 20 }}>
                            <a href="/card" style={{ height: 40 }} className="btn">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExamplesCards;
