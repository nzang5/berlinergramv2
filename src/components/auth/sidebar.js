import React from 'react'
import '../../css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram  } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faUser, faEnvelope, faBell  } from '@fortawesome/free-solid-svg-icons'
import AuthDetails from './authDetails'
// import app from '../../firebase'
// import AuthDetails from './authDetails'

 

function Sidebar() {

    


  return (

    <div className='sidebar'>

<a href='/'><FontAwesomeIcon className="sidebarMainIcon" icon={ faTelegram } /></a>

        <div className='sidebarOptions'>
            <FontAwesomeIcon icon={ faHouse }/>
            <h2>HOME</h2>
        </div>

        <div className='sidebarOptions'>
            <FontAwesomeIcon icon={ faBell }/>
            <h2>NOTIFICATIONS</h2>
        </div>

        <div className='sidebarOptions'>
            <FontAwesomeIcon icon={ faEnvelope }/>
            <h2>MESSAGES</h2>
        </div>

        <div className='sidebarOptions'>
            <FontAwesomeIcon icon={ faUser }/>
            <h2>PROFILE</h2>
        </div>

        
        <AuthDetails />

        {/* <AuthDetails /> */}

        <button className="postBtn">POST</button>
        
        



    
    </div>
  )
}

export default Sidebar