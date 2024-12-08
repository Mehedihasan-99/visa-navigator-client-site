import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.init'
import { getAuth } from "firebase/auth";




export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal ] = useState(false);
    const provider = new GoogleAuthProvider()
    console.log(loading,user)
    console.log('useremail: ' , user?.email)


    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = ( email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const userInfo = {
        user,
        googleLogin,
        loading,
        setLoading,
        setUser,
        createNewUser,
        logout,
        login,
        showModal,
        setShowModal,
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            subscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;