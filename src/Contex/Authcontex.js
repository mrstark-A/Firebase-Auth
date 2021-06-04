import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import { useHistory } from "react-router-dom";
// create context(1)
const Authcontex = React.createContext();

export function useAuth() {
  return useContext(Authcontex);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }
  // seting the user
  useEffect(() => {
    //  this 👇 method return method when it on or off
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      setLoading(false);
      // history.push('/')
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };
  return (
    <Authcontex.Provider value={value}>
      {!loading && children}
    </Authcontex.Provider>
  );
}
