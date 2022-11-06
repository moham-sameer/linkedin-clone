import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login'
 import {useDispatch} from 'react-redux'
 import {auth} from './firebase';
import { selectUser,login,logout } from './Redux/userSlice';
import { useSelector } from 'react-redux';
import Widgets from './Widgets'
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid: userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.profilePic,
        }))
      }else{
        dispatch(logout())
      }
    })
  },[dispatch])
  const user = useSelector(selectUser)
  return (
    <div className="App">

     {/* Header */}

     {/* App Body */}
     {!user ? <Login/>:
  
      <div className='App'>

     <Header/>
     
      <div className='app_body'>
          <Sidebar/>
       <Feed/>
       <Widgets/>
      </div>
      </div>
     }
              
     {/* Widget */}

    </div>
  );
}

export default App;
