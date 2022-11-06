import React,{useState,useEffect} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import InputOptions from './InputOptions'
import Post from './Post'
import { db } from './firebase'
import FlipMove from 'react-flip-move'
import {useSelector} from 'react-redux'
import {selectUser} from './Redux/userSlice'
import firebase from 'firebase/compat/app'
function Feed() {
  const user = useSelector(selectUser);
  const  [posts, setPosts] = useState([]);
   const [input,setInput] = useState('')
  useEffect(()=>{
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot)=>
      setPosts(
        snapshot.docs.map((doc)=>({
         id:doc.id,
         data: doc.data(), 
        }))
      )
    )
  },[])

  const sendPost = (e)=>{
    e.preventDefault();
    db.collection("posts").add({
      name:user.displayName,
      description:user.email,
      message:input,
      photoUrl:user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("")
  }
  return (

    <div className='feed'>
      <div className='feed_inputContainer'>
       <div className='feed_input'>
          <CreateIcon/>
          <form>
            <input  type="text"
              value={input}  onChange={e => setInput(e.target.value)}
            />
             <button type='submit' onClick={sendPost}>Send</button>
          </form>
       </div>
       <div className='feed_inputOptions'>
           <InputOptions Icon={ImageIcon} title='Photo' color="#70B5F9" />
           <InputOptions Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
           <InputOptions Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
           <InputOptions Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E" />
       </div>
      </div>
     <FlipMove><span>  
     {posts.map(({id,data:{name,description,message,photoUrl}})=>
         <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
         />
      )} </span></FlipMove>
      {/* <Post name="Mohammad Sameer" description='This is a test' message='Wow! this worked' /> */}
    </div>
  )
}

export default Feed;
