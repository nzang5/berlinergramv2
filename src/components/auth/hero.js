import React, { useState } from 'react'
import photo from '../../images/berlin-skyline.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye  } from '@fortawesome/free-solid-svg-icons'
import '../../css/hero.css'


function Hero() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsModalOpen(!isModalOpen);
  }


  return (
    <div className='container'>
    <p className='hero-stars'>✮✮✮✮✮</p>
    <div className='hero'>
        
        

        <img className='hero-img' src={photo} alt="berlin-skyline"></img>
            
        <div className='hero-text'>
            <h1><br/>A place where <span>ideas</span> grow. </h1>

            <button className='demoBtn' onClick={handleClick}>
              <FontAwesomeIcon icon={ faEye } />
              DEMO
            </button>

            {isModalOpen && (
        <div className='modal'>
          <p>Thanks for visiting the site!<br/>
              Here are some login details to test it out!<br/><br/>
              Email: demo-user@gmail.com <br/><br/>
              Password: password1234  

          </p>
          

          <button onClick={handleClick}>Close</button>
        </div>
      )}
            
        </div>

        

    </div>
    <p className='hero-stars'>✮✮✮✮✮</p>
    </div>
  )
}

export default Hero