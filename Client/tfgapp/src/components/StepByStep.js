/**
 * @fileoverview creación de tabla de datos y la sección llamada paso a paso  
 * @version 1.0
 * @author Rut Yela
 * @copyright rut.yela.lopez@gmail.com
 */
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
  }, []);

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

  /**
   * Efectos visuales
  */
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
        <div className="pasos-container" data-aos="fade-right">
          {steps.map((paso, index) => (
            <div key={index} className={`paso ${index % 2 === 0 ? 'imagen-izquierda' : 'imagen-derecha'}`}>
              {index % 2 === 0 ? (
                <>
                  <img className="paso-imagen" src={paso.image} alt={`Paso ${index + 1}`} />
                  <div className="paso-contenido">
                    <div className="paso-texto">
                      <h3 className="paso-titulo">{paso.title}</h3>
                      <p className="paso-descripcion">{paso.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="paso-contenido">
                    <div className="paso-texto">
                      <h3 className="paso-titulo">{paso.title}</h3>
                      <p className="paso-descripcion">{paso.description}</p>
                    </div>
                  </div>
                  <img className="paso-imagen" src={paso.image} alt={`Paso ${index + 1}`} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepByStep;