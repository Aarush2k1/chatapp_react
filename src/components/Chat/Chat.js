import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router";
import db from "../../firebase";

function Chat() {
  const [input, setInput] = useState("");
  const { chatId } = useParams();
  const [chatName, setChatName] = useState("");
  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .onSnapshot((snapshot) => setChatName(snapshot.data().name));
    }
  }, [chatId]);
  const sendMsg = (e) => {
    e.preventDefault();
    console.log("You typed>>>>", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/4.5/api/human/123.svg`} />
        <div className="chat_headerInfo">
          {/* <h3>{chatName}</h3> */}
          <h3>NAME</h3>
          <p>Last seen {new Date().toUTCString()}</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message chat_reciever">
          <span className="chat_name">name</span>
          This is message
          <span className="chat_time">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          ></input>
          <button onClick={sendMsg} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
