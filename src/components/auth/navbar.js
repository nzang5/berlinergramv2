import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram  } from '@fortawesome/free-brands-svg-icons'
import { faRightToBracket, faUserPlus  } from '@fortawesome/free-solid-svg-icons'
import '../../css/navbar.css'

function Navbar() {



  return (
    <div className='navbar'>

        <div>
            <a className='navbar-logo social-media-icons' href='/'>
            <FontAwesomeIcon icon={ faTelegram } />
            <h2>BERLINER GRAM</h2>
            </a>
        </div>
        

        <div className='navbar-options'>

            <a className='navbar--signup' href='/signup'>
                <FontAwesomeIcon icon={ faUserPlus } />
                 SIGN UP
            </a>

            <a className='navbar--login' href='./login'>
                <FontAwesomeIcon icon={ faRightToBracket } />
                LOGIN
            </a>

        </div>

    </div>
  )
}

export default Navbar