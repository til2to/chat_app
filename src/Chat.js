import React from 'react'

import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { AttachFile } from '@material-ui/icons';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar  />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className='chat__message'>
          <span className="chat__name">Nana</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chat__message chat__receiver'>
          <span className="chat__name">Ayemar</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonOutlinedIcon />
        </IconButton>
        <form action="">
          <input type="text" placeholder="Type a message"/>
          <button type="submit">Send</button>
        </form>

        {/* <div className="chat__footerSearch">
          <div className="chat__footerSearchContainer">
            <SearchOutlinedIcon />
            <input type="text" placeholder='Search or start new chat'/>
          </div>
        </div> */}
        <IconButton>
          <MicOutlinedIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Chat