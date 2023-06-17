/**
 * @fileoverview Tabla de datos de la sección de preguntas frecuentes y creación de la 
 * sección de preguntas frecuentes
 * @version 1.0
 * @author Rut Yela
 * @copyright rut.yela.lopez@gmail.com
 */
import React, { useState, useEffect } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
  const faqItems = [
    {
      question: 'Can I customize the design of my business card?',
      response: 'Certainly! Our application offers you various customization options. You can choose from different design templates, and you can also customize the colors and layout of your business card according to your preferences.',
    },
    {
      question: 'How can I download my business card once I have designed it?',
      response: 'Once you have finished designing your business card, you can download it in digital format by clicking the "Download" button in the preview of your card. You also have the option to print your card directly from the application.',
    },
    {
      question: 'How can I share my business card with others?',
      response: 'You can share your business card in multiple ways. One option is to generate a unique QR code for your card and share it with others. You can also send your card via email or share it on your social media channels.',
    },
    {
      question: 'Can I scan other people\'s business cards with this application?',
      response: 'Our application is designed to help you create your own business cards with QR codes. However, it does not support the function of scanning other people\'s business cards.',
    },
  ];

  /**
    * Efectos visuales  
  */
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  /**
   * Constante de estado de la pregunta (abierto o cerrado)
   */
  const [expandedIndex, setExpandedIndex] = useState(null);

  /**
   *Función que de expandir o recoger la pregunta 
   * @param {*} index
   */
  const handleQuestionClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className='faq' id='faq'>
      <div style={{ paddingBottom: 100 }} data-aos="fade-up" className="faq-section">
        <AiOutlineQuestionCircle size={35} style={{ marginLeft: '50%' }} color='#fecc00' className="faq-icon" />
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
    </section>
  )
}

export default Faq;