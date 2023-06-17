/**
 * @fileoverview Sección de ejemplos de tarjetas
 * @version 1.0
 * @author Rut Yela
 * @copyright rut.yela.lopez@gmail.com
 */
import React, { useEffect } from 'react';
import previa1 from '../assets/img/example-cards/previa1.png';
import previa2 from '../assets/img/example-cards/previa2.png';
import previa3 from '../assets/img/example-cards/previa3.png';
import { IoIdCard } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExamplesCards() {

  /**
   * Efectos visuales
  */
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  return (
    <>
      <section className='examples' id='examples'>
        <div className='container-examples'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 50,
              marginTop: 80,
            }}
            data-aos='fade-up'
          >
            <IoIdCard color='#fecc00' size={35} />
            <h2
              style={{
                textAlign: 'center',
                fontSize: '2.5rem',
                fontWeight: '300',
                fontFamily: 'Poppins',
                lineHeight: '1.4',
                color: '#fecc00',
                margin: '0.5rem 0',
              }}
            >
              Design examples
            </h2>
            <p
              style={{
                textAlign: 'center',
                marginTop: '10px',
                fontWeight: '300',
                fontFamily: 'Poppins-light',
                lineHeight: '1.4',
                color: '#555',
                margin: '0 auto',
                width: '100%',
                maxWidth: '40rem',
                padding: '0 20px',
                boxSizing: 'border-box',
                fontSize: '1rem',
              }}
            >
              Create professional business cards with custom QR codes! Our
              business card creation app allows you to easily design elegant and
              modern business cards with contact information and a unique QR code.
              Here are some examples of vCards you can create with our app
            </p>
          </div>
          <div className='card-container'>
            <div className='card-example' data-aos='fade-right'>
              <div className='card-image' style={{ backgroundImage: `url(${previa1})`, marginLeft: -4 }}>
              </div>
            </div>
            <div className='card-example' data-aos='flip-up'>
              <div className='card-image' style={{ backgroundImage: `url(${previa2})` }}>
              </div>
            </div>
            <div className='card-example' data-aos='fade-left'>
              <div className='card-image' style={{ backgroundImage: `url(${previa3})` }}>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExamplesCards;
