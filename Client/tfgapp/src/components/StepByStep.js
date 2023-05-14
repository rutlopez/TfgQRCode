import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import step1 from '../assets/img/stepbystep/step1.png';
import step2 from '../assets/img/stepbystep/step2.png';
import step3 from '../assets/img/stepbystep/step3.png';
import step4 from '../assets/img/stepbystep/step4.png';
import step5 from '../assets/img/stepbystep/step5.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StepByStep = () => {
  useEffect(() => {
    // Lógica o efectos secundarios que requieran 'steps'
  }, []);

  // Array con los pasos del proceso y sus descripciones
  const steps = [
    {
      title: 'Step 1: Fill in your information',
      description: 'Provide your personal and contact information, such as name, phone number, and email address.',
      image: step1,
    },
    {
      title: 'Step 2: Design',
      description: 'Select a design template or create a custom business card using our intuitive design tools.',
      image: step2,
    },
    {
      title: 'Step 3: Customization',
      description: 'Add your personal touch by customizing the card with your preferred colors, fonts, and layout.',
      image: step3,
    },
    {
      title: 'Step 4: Generate QR Code',
      description: 'Generate a unique QR code for your business card, allowing others to scan it and quickly access your contact information.',
      image: step4,
    },
    {
      title: 'Step 5: Preview and Download',
      description: 'Preview your business card and, if satisfied with the result, download it in digital format or print it directly.',
      image: step5,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2700,
    });
  }, []);

  return (
    <section className='stepbystep' id='stepbystep'>
      <div className="proceso-paso-a-paso" style={{ position: 'relative' }} data-aos="fade-up">
        <FaArrowRight color="#fecc00" size={35} />
        <h2 className="titulo-paso-a-paso">Step By Step</h2>
        <div className="pasos-container">
          {steps.map((paso, index) => (
            <div key={index} className="paso" >
              <h3 className="paso-titulo">{paso.title}</h3>
              <p className="paso-descripcion">{paso.description}</p>
              <img className="paso-imagen" src={paso.image} alt={`Paso ${index + 1}`} />
            </div>
          ))}
        </div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1111 544"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            position: 'absolute',
            top: -60,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <title>Path 2</title>
          <desc>Created with Sketch.</desc>
          <g id="path1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="profile-page" transform="translate(-186.000000, -1038.000000)" fill="#F1CE3C">
              <path d="M736.136364,1077.13967 C610.469697,1044.47301 495.636364,1036.30634 391.636364,1052.63967 C287.636364,1068.97301 224.136364,1121.80634 201.136364,1211.13967 C164.136364,1366.80634 194.969697,1480.47301 293.636364,1552.13967 C458.636364,1640.13967 550.136364,1506.63967 826.636364,1487.13967 C978.636364,1485.63967 1104.13636,1497.63967 1178.13636,1508.13967 C1252.13636,1518.63967 1302.63636,1479.63967 1296.13636,1336.13967 C1289.63636,1192.63967 1216.63636,1054.13967 1125.13636,1040.13967 C1033.63636,1026.13967 959.136364,1085.13967 867.636364,1092.63967 C833.30303,1093.30634 789.469697,1088.13967 736.136364,1077.13967 Z" id="Path-2"></path>
            </g>
          </g>
        </svg>

      </div>
    </section>
  );
};

export default StepByStep;
