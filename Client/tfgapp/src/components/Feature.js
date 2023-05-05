import React from 'react'
import { BsHexagon } from 'react-icons/bs';

const Feature = (props) => {

    return (
      <div className='feature'>
        <div className='feature-icon'>
            <BsHexagon color='#fecc00' size={55}/>
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