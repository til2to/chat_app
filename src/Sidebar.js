import React from 'react'

import CommentIcon from "@material-ui/icons/Comment";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from "@material-ui/core"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import "./Sidebar.css"
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className='sidebar'>
			<div className="sidebar__header">
        <Avatar src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
				<div className="sidebar_headerRight">
					<IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <CommentIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
				</div>
			</div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search or start new chat'/>
        </div>
      </div>

      <div className="sidebar__chats">
         <SidebarChat />
         <SidebarChat />
         <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
