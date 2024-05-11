import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../Firebase/firebase.config';


export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

    const [user, setuser] = useState(null)
    const [ loading, setloading ] = useState(true)

    // Create New User
    const signup = (email, password) =>{
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }


    // SignIn User
    const signin = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Obserber
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
           
              setuser(user)
              setloading(false)
           
          });
          return () => unsubscribe();
    },[user])

    const allvalue = {
        user,
        loading,
        signup,
        signin
    }
    return (
        <div>
            <AuthContext.Provider value={allvalue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default FirebaseProvider;