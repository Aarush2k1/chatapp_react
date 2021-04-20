import React, { useContext, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
// import { useParams } from "react-router";
// import firebase from "firebase";
import { AuthContext } from "../Auth";
// import firebaseConfig from "../../api/firebase";

function Chat() {
  const [input, setInput] = useState("");
  // const { chatsId } = useParams();
  const { user } = useContext(AuthContext);
  console.log(user);
  const sendMsg = (e) => {
    e.preventDefault();
    console.log("You typed>>>>", input);
    // db.collection("chats").doc(chatsId).collection("messages").add({
    //   message: input,
    //   name: user.displayName,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/4.5/api/human/3.svg`} />
        <div className="chat_headerInfo">
          {/* <h3>{chatName}</h3> */}
          <h3>ChaTName</h3>
          <p>
            Last seen{" "}
            {/* {new Date(msgs[msgs.length - 1]?.timestamp?.toDate()).toUTCString()} */}
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
        <div className="chat_message chat_reciever">
          <span className="chat_name">{/* {msg.name} */}Name</span>
          {/* {msg.message} */}msg
          <span className="chat_time">
            {/* {new Date(msg.timestamp?.toDate()).toUTCString()} */}
            Time
          </span>
        </div>
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
