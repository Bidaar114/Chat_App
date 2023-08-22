import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
  const {data} = useContext(ChatContext)
  console.log(data);
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcon'>
          <img style={{width:'24px', color:'white'}}src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/video-24-64.png" alt="" />
          <img style={{width:'24px', color:'white'}}src="https://cdn2.iconfinder.com/data/icons/ui-basic-outline-2/512/UI_Basic_outline-77-64.png" alt="" />
          <img style={{width:'24px', color:'white'}}src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-more-64.png" alt="" />
        </div>
      </div>
      <Messages/>
        <Input/>
      </div>
  )
}

export default Chat