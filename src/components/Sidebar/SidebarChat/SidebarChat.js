import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import firebaseConfig from "../../../api/firebase";
import { AuthContext } from "../../Auth";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const { user } = useContext(AuthContext);
  // const db = firebaseConfig.firestore();

  const createChat = () => {
    const chat_name = prompt("Please Enter Name of Chat");
    if (chat_name) {
      //from database
      // db.collection("chats").add({
      //   name: chat_name,
      // });
    }
  };

  return !addNewChat ? (
    // <Link to={`/chats/${id}`}>
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/4.5/api/human/1.svg`} />
      <div className="sidebarChat_info">
        <h2>{user.email}</h2>
        <p>Message</p>
      </div>
    </div>
  ) : (
    // </Link>
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
