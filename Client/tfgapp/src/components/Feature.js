/**
 * @fileoverview Crea los textos con sus iconos de las características
 * @version 1.0
 * @author Rut Yela
 * @copyright rut.yela.lopez@gmail.com
 */
import React from 'react'
import { BsHexagon } from 'react-icons/bs';

/**
 *Recogemos los datos de la tabla de data.js
 * @param {*} props
 * @return {*} 
 */
const Feature = (props) => {
  return (
    <div className='feature'>
      <div className='feature-icon'>
        <BsHexagon color='#fecc00' size={55} />
        <div className='inner-icon'>
          {props.icon}
        </div>
      </div>
      <div className='feature-text'>
        <h3>{props.heading}</h3>
        <p className='u-text-small'>
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default Feature;