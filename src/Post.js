import { Avatar } from '@mui/material'
import React,{forwardRef} from 'react'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import InputOptions from './InputOptions'

const Post=forwardRef(({name,description,message,photoUrl},ref)=> {
  return (
    <div ref={ref} className='post'>
       <div className="post_header">
        <Avatar src={photoUrl}>{name[0]} </Avatar>
        <div className='post_info'>
            <h2>{name} </h2>
            <p>{description}</p>
        </div>
       </div>
       <div className='post_body'>
       <p>{message} </p>
        </div>
        <div className='post_buttons'>
            <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" />
            <InputOptions Icon={ChatOutlinedIcon} title="Comment" />
            <InputOptions Icon={ShareOutlinedIcon} title="Share" />
            <InputOptions Icon={SendOutlinedIcon} title="Send" />
        </div>
    </div>
  )
})

export default Post
