import React from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import Feature from './Feature';
import { featureList } from './data';
import featureImg from '../assets/img/features/moviles.png'

function Features() {
    return (
        <section className='features' id='features'>
            <div className='container features'>
                <div className='title'>
                    <BsFillBookmarkStarFill color='#fecc00' size={30}></BsFillBookmarkStarFill>
                    <h2>Our Features</h2>
                    <p>Create professional-looking business cards with ease and convenience.
                        Our app features a user-friendly interface that allows you to
                        customize your business card according to your preferences.
                        With our built-in QR code generator, you can easily add a QR code
                        to your card that links to your contact details or website. Say
                        goodbye to traditional paper business cards and hello to digital
                        innovation!</p>
                </div>
                <div className='features-content'>
                    <div className='features-left'>
                        <img src={featureImg} alt='phone-features'></img>
                    </div>
                    <div className='features-right'>
                        {
                            featureList.map((feature) => (
                                <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text} />))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features
