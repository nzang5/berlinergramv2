import React from 'react'
import '../../css/post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faRetweet, faShareFromSquare  } from '@fortawesome/free-solid-svg-icons'

function Post({ avatar, displayName, username, text }) {
  
  
  
    return (
        <div className="post">

            <div className="post__avatar">
            <img src={avatar} alt="avatar"/>
            </div>

            <div className="post__body">
                <div className="post__header">

                    <div className="post__headerText">
                        <h3>{displayName} ·</h3>
                        <p>{username}</p>
                    </div>

                    <div className="post__headerDescription">
                        <p>
                        {text}
                        </p>
                    </div>

                    <div className='post__footer'>
                        <div className='post-comment'>
                            <FontAwesomeIcon className='comment' icon={ faComment } />
                            <p>65</p>
                        </div>
                        <div className='post-retweet'>
                            <FontAwesomeIcon icon={ faRetweet } />
                            <p>65</p>
                        </div>
                        <div className='post-liked'>
                            <FontAwesomeIcon icon={ faHeart } />
                            <p>65</p>
                        </div>
                        <div className='post-shared'>
                            <FontAwesomeIcon icon={ faShareFromSquare } />
                            <p>65</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post