import React, {useEffect} from 'react';
import previa1 from '../assets/img/example-cards/previa4.png';
import previa2 from '../assets/img/example-cards/previa5.png';
import previa3 from '../assets/img/example-cards/previa6.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExamplesCards() {

    useEffect(() => {
        AOS.init({
            duration: 2500,
        });
    }, [])

    return (
        <div className="card-container">
            <div className="card-example"  data-aos="fade-right">
                <div className="card-image" style={{ backgroundImage: `url(${previa1})` }}>
                </div>
                <div className="card-info">
                    <h2>Business Card with QR Code</h2>
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
                    <h2>Business Card with QR Code</h2>
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
                    <h2>Business Card with QR Code</h2>
                    <p>Create a unique and professional business card with our app, including a QR code for easy access to your website or contact information.</p>
                    <div className='btn-box' style={{ marginLeft: 14, marginTop: 20 }}>
                        <a href="/card" style={{ height: 40 }} className="btn">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExamplesCards;
