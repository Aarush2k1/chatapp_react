import React, { useContext } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../api/firebase";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Welcome</h1>
      {/* <Router>
        <Sidebar />
        <Switch>
          <Route path="/chats/:chatID">
            <Chat />
          </Route>
          <Route path="/">
            <Chat />
          </Route>
        </Switch>
      </Router> */}
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Dashboard;
