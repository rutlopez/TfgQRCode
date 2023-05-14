import React from 'react';

const Promotion = () => {
  return (
    <div
      className='promotion-container'
      style={{
        backgroundColor: '#fecc00',
        padding: '20px',
        height: 300,
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: -100,
        marginTop: 200,
      }}
    >
      <div className='wave-background'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
        >
          <path
            fill='rgb(254, 204, 0)'
            fillOpacity='1'
            d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div>
      <h2
        style={{
          color: 'white',
          fontFamily: 'Poppins',
          marginTop: -70,
        }}
      >
        ¡Crea tus vCards con QR Codes!
      </h2>
      <p style={{ color: 'white', fontFamily: 'Poppins-light', marginTop: 30, marginBottom: 30 }}
      >
        Genera fácilmente tus propias vCards con códigos QR.
      </p>
      <a href='/card' className='promotion-link' style={{ marginBottom: -100 }}>
        Crear Tarjeta en la Web
      </a>
    </div>
  );
};

export default Promotion;
