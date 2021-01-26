import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

// get access to the context
export function useAuth(){
   return useContext(AuthContext)
}

export function AuthProvider({ children }) {
   // state to manage the value
   const [currentUser, setCurrentUser] = useState()
   const [loading, setLoading] = useState(true)
   
   // use firebase to create user
   function signup(email, password){
      return auth.createUserWithEmailAndPassword(email, password)
   }

   // use firebase to sign in
   function login(email, password){
      return auth.signInWithEmailAndPassword(email, password)
   }

   //use firebase to logout
   function logout(){
      return auth.signOut()
   }

   // set the user to the new user through firebase only on mount
   useEffect(()=> {
      const unsubscribe = auth.onAuthStateChanged(user => {
         setCurrentUser(user)
         setLoading(false)
      })
      // unsuscribe from the listener
      return unsubscribe
   }, [])

   
   const value={
      currentUser,
      signup,
      login,
      logout
   }
   return (
      <AuthContext.Provider value={value}>
         {!loading && children}
      </AuthContext.Provider>
   )
}
