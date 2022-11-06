import { Avatar } from '@mui/material';
import React from 'react'
import {selectUser} from './Redux/userSlice'
import {useSelector} from 'react-redux'
import './Sidebar.css'
function Sidebar() {
   const user = useSelector(selectUser)
  return (
    
     <div className='sidebar'>
        <div className='sidebar_top'>
            <img src='https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000' alt=''/>
            <Avatar className='sidebar_avatar'> {user.email[0]} </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email} </h4>
        </div>
        <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>Who veiwed you</p>
            <p className='sidebar_statNumber'>2,587</p>
        </div>
        <div className='sidebar_stat'>
        <p>View on post</p>
            <p className='sidebar_statNumber'>2,334</p>
        </div>
           
        </div>
        <div className='sidebar_bottom'>
          <p className='sidebar_recents'>Recent</p>
          <div className='sidebar_recent'>
            <p className='sidebar_recentItem'> #webdeveloper </p>
            <p className='sidebar_recentItem'> #softwareengineering </p>
            <p className='sidebar_recentItem'> #appdeveloper </p>
            <p className='sidebar_recentItem'> #dataanalyst </p>
        </div>
        </div>
       </div>
    
  )
}

export default Sidebar
