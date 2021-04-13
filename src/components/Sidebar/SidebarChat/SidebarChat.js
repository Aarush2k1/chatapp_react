import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import db from "../../../firebase";
import "./SidebarChat.css";

function SidebarChat({ id, name, addNewChat }) {
  // const [seed, setSeed] = useState("");
  // useEffect(() => {
  //   setSeed(Math.floor(Math.random() * 500));
  // }, []);

  const createChat = () => {
    const chat_name = prompt("Please Enter Name of Chat");
    if (chat_name) {
      //from database
      db.collection("chats").add({
        name: chat_name,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/chats/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${id}.svg`} />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>Message</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
