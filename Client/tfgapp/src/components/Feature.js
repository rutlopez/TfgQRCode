import React from 'react'
import { BsHexagon } from 'react-icons/bs';

/* Sección de características (features) */
const Feature = (props) => {
  /**
   * Recogemos los datos de la tabla featureList de data.js (son los props)
  */
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