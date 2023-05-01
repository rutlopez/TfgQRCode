import React from 'react'
import { FaThumbsUp, FaCogs, FaBriefcase } from 'react-icons/fa';

function Features() {
    return (
        <section className='features' id='features'>
            <div className='container'>
                <div className='heading'>
                    <h1 style={{ paddingTop: 200, paddingBottom: 100 }}>Features</h1>
                </div>
                <div className='content-grids' >
                    <div className='content grid' >
                        <div className='box btn_shadow' >
                            <FaThumbsUp size={20} />
                            <h2>Easy to use</h2>
                        </div>
                        <div className='box btn_shadow'>
                            <FaCogs size={20} />
                            <h2>Customizable</h2>
                        </div>
                        <div className='box btn_shadow'>
                            <FaBriefcase size={20} />
                            <h2>Professional</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features
