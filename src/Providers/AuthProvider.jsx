import { createContext, useState } from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../Firebase/firebase.init"



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        user,
        loading,
        createUser
    }

    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;