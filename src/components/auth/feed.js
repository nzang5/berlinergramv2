import React from 'react'
import '../../css/feed.css'
import PostBox from './postbox'
import Post from './post'
//  import photon from '../images/nash.jpg'
import { db } from '../../firebase' 


function Feed() {

   const [posts, setPosts ] = React.useState([])

   React.useEffect(function(){
       db.collection('posts').onSnapshot(snapshot =>(
           setPosts(snapshot.docs.map(doc => doc.data() ).reverse())
       ))
   }, [])


  return (
    <div className='feed'>
       {/* header */}
       <div className='feed-header'>
           <h2 >HOME</h2>
       </div>
       

       {/* tweetbox */}
       <PostBox />


       {/* post */}
       {posts.map((post) => (
         <Post
           key={post.text}
           displayName={post.displayName}
           username={post.username}
           text={post.text}
           avatar={post.avatar}
         />
       )).reverse()}
       

    </div>
  )
}

export default Feed