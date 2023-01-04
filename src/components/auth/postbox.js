import React from 'react'
import '../../css/postbox.css'
import avatar from '../../images/ape.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faLocationDot, faFaceSmile, faSquarePollVertical  } from '@fortawesome/free-solid-svg-icons'
import { db } from '../../firebase'

function Postbox() {

    const [ message, setMessage ] = React.useState('')
    

    function sendTweet(event){
        event.preventDefault();

        db.collection('posts').add({
            displayName: 'Demo User',
            username: '@demo_user',
            avatar: avatar,
            text: message
        });

        setMessage('')
        
    }

  return (
    <div className='postBox'>
        <form>
            <div className='postBoxInput'>
                <img src={avatar} alt="profile"/>
                <input
                onChange={event => setMessage(event.target.value)} 
                value={message} 
                placeholder="What's happening?"/>
                
            </div>
            
            <div className='post-functions'>
                <div className='post-functions-options'>
                    <FontAwesomeIcon  icon={ faImage } />
                    <FontAwesomeIcon  icon={ faFaceSmile } />
                    <FontAwesomeIcon  icon={ faLocationDot } />
                    <FontAwesomeIcon  icon={ faSquarePollVertical } />
                </div>

                <button onClick={sendTweet}>POST</button>
            </div>
        </form>
        
    </div>
  )
}

export default Postbox