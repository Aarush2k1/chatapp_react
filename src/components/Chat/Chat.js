import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router";
import db from "../../firebase";
import { useStateValue } from "../../Provider/StateProvider";
import firebase from "firebase";

function Chat() {
  const [input, setInput] = useState("");
  const { chatsId } = useParams();
  const [{ user }, dispatch] = useStateValue();
  const [chatName, setChatName] = useState("");
  const [msgs, setMsgs] = useState([]);
  useEffect(() => {
    if (chatsId != null) {
      db.collection("chats")
        .doc(chatsId)
        .onSnapshot((snapshot) => setChatName(snapshot.data().name));
      db.collection("chats")
        .doc(chatsId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMsgs(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [chatsId]);
  const sendMsg = (e) => {
    e.preventDefault();
    console.log("You typed>>>>", input);
    db.collection("chats").doc(chatsId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/4.5/api/human/${chatsId}.svg`}
        />
        <div className="chat_headerInfo">
          <h3>{chatName}</h3>
          <p>
            Last seen{" "}
            {new Date(msgs[msgs.length - 1]?.timestamp?.toDate()).toUTCString()}
          </p>
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
        {msgs.map((msg) => (
          <p
            className={`chat_message ${
              msg.name === user.displayName && "chat_reciever"
            }`}
          >
            <span className="chat_name">{msg.name}</span>
            {msg.message}
            <span className="chat_time">
              {new Date(msg.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
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
