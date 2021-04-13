import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app_body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/chats/:chatsId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;