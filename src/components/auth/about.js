import React from 'react'
import photo from '../../images/berlin-brand.jpg'
import '../../css/about.css'

function About() {
  return (
    <div className='about'>

        <h2>Who Are We?</h2>

        <div className='about-content'>
            <div className='about-text'>
            <br/>
            <p>Berliner Gram gives a chance to bring all <span>Berliners together</span>. Whether it's to find the right crew to party with all night long or to sip coffee at some sketchy Neukolln cafe. </p><br/>
            <p>This app was designed with the sole purpose of displaying the creators <span>React.JS </span> skills,  and will most likely never be shared with the public.</p><br/>
            <p>Enjoy!</p>

            </div>
            <img src={photo} alt='photoimg'></img>
        </div>

    </div>
  )
}

export default About