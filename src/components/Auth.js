import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import firebaseConfig from "../api/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
