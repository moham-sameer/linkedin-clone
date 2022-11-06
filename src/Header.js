import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import {useDispatch} from 'react-redux'
import {auth} from './firebase'
import {logout} from './Redux/userSlice'
function Header() {
  const dispatch = useDispatch()
  const logoutOfApp = ()=>{
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
      <div className='header_left'>
        <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt=''/>
         <div className='header_search'>
              <SearchIcon/>
              <input type="text" placeholder='Search'/>
         </div>
      </div>

      <div className='header_right'>
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} 
          title="MyNetwork"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={true} title='me'
            onClick={logoutOfApp}
          />

          <HeaderOption name="Sameer"/>
      </div>
    </div>
  )
}

export default Header
