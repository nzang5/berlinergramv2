import React from 'react'
import Sidebar from '../components/auth/sidebar'
import Feed from '../components/auth/feed'
import Widgets from '../components/auth/widgets'
import '../App.css'

function Feedpage() {
  return (
    <div className='app'>
        <Sidebar />
        <Feed />
        <Widgets />
    </div>
  )
}

export default Feedpage;