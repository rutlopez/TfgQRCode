import React, { useState, useEffect } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
  const faqItems = [
    {
      question: '¿Cómo puedo registrarme en la aplicación?',
      response: 'Para registrarte en nuestra aplicación, ve a la página de inicio y haz clic en el botón "Registrarse". Luego, completa el formulario con tu información personal y sigue las instrucciones para crear tu cuenta.',
    },
    {
      question: '¿Puedo personalizar el diseño de mi tarjeta de visita?',
      response: '¡Por supuesto! Nuestra aplicación te ofrece varias opciones de personalización. Puedes elegir entre diferentes plantillas de diseño y también puedes personalizar los colores, las fuentes y el diseño de tu tarjeta de visita según tus preferencias.',
    },
    {
      question: '¿Cómo puedo descargar mi tarjeta de visita una vez que la haya diseñado?',
      response: 'Una vez que hayas finalizado el diseño de tu tarjeta de visita, puedes descargarla en formato digital haciendo clic en el botón "Descargar" en la vista previa de tu tarjeta. También tienes la opción de imprimir tu tarjeta directamente desde la aplicación.',
    },
    {
      question: '¿Cómo puedo compartir mi tarjeta de visita con otros?',
      response: 'Puedes compartir tu tarjeta de visita de varias formas. Una opción es generar un código QR único para tu tarjeta y compartirlo con otras personas. También puedes enviar tu tarjeta por correo electrónico o compartirla en tus redes sociales.',
    },
    {
      question: '¿Puedo escanear tarjetas de visita de otras personas con esta aplicación?',
      response: 'Nuestra aplicación está diseñada para ayudarte a crear tus propias tarjetas de visita con código QR. Sin embargo, no admite la función de escaneo de tarjetas de visita de otras personas.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleQuestionClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div style={{}} data-aos="fade-up" className="faq-section">
    <AiOutlineQuestionCircle size={35} style={{marginLeft:'50%'}} color='#fecc00' className="faq-icon" />
    <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-items" >
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            <div className="question-container">
              <h3 className="faq-question">{item.question}</h3>
              <button className="expand-button">
                {expandedIndex === index ? '-' : '+'}
              </button>
            </div>
            {expandedIndex === index && (
              <p className="faq-answer">{item.response}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq;
