import React, { createContext, useContext, useEffect, useState } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'



const Chat = () => {

  const {data} = useContext(ChatContext)


 const [open, setOpen] = useState(false)
 
 const [sm, setSm] = useState(false)

  const isSmScreen = window.innerWidth < 480;

  useEffect (()=>{
    if(isSmScreen){
      setSm(true)
    }
  },[isSmScreen])

 const mobile = document.getElementById('sidebar')
 
 const veiwSidebar =()=>{
   mobile.classList.toggle('sidebar');
  setOpen(true);
 
  }
  return (
    <div className='chat'>
      <div className='chatInfo'>

       {sm && 
      
      <>
      {!open ?
      <img onClick={veiwSidebar} style={{width:'15px', color:'white'}}
      src="https://cdn-icons-png.flaticon.com/128/3917/3917762.png" alt="" />
      :
      <img onClick={veiwSidebar}  style={{width:'15px', color:'white'}}
      src="https://cdn-icons-png.flaticon.com/128/3917/3917759.png" alt="" />
       }
      </>

       }
        

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