import React, { useContext } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat/SidebarChat";
// import firebaseConfig from "../../api/firebase";
import { AuthContext } from "../Auth";
import image from "../../images/4.jpg";
import firebaseConfig from "../../api/firebase";

function Sidebar() {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={image} />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Create a Room</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={() => firebaseConfig.auth().signOut()}>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchCont">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {/* {chats.map((chat) => (
          <SidebarChat key={chat.id} id={chat.id} name={chat.data.name} />
        ))} */}
      </div>
    </div>
  );
}

export default Sidebar;
