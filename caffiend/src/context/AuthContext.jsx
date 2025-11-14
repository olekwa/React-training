import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState, useEffect, useContext } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const { children } = props;
  const [globalUser, setGlobalUser] = useState(null);
  const [globalData, setGlobalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  
  
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  
  function logout() {
    setGlobalUser(null);
    setGlobalData(null);
    return signOut(auth);
  }
  
  const value = { globalUser, globalData, setGlobalData, isLoading, signup, login, resetPassword, logout };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('CURRENT USER:', user); 
      setGlobalUser(user);
      if(!user) {
        console.log('No Active user');
        return

      }

      try {
        setIsLoading(true)

        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)
      
        let firebaseData = {}
        if (docSnap.exists()) {
          firebaseData = docSnap.data()
          console.log('found user data', firebaseData)
        } else {
      
        }
        setGlobalData(firebaseData)

      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false)
      }
    })
    return unsubscribe;
  }, [])
  
  return (
    <AuthContext.Provider value={value}> 
      {children}
    </AuthContext.Provider>
  )
}