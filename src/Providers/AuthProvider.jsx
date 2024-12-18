import {
    createContext,
    useEffect,
    useState
} from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider
} from "firebase/auth";
import app from '../Firebase/firebase.init'
import { getAuth } from "firebase/auth";




export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loginUser, setLoginUser] = useState();
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [myDocument, setMydocument] = useState(null)
    const provider = new GoogleAuthProvider();


    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
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
        setUser,
        loginUser,
        setLoginUser,
        googleLogin,
        loading,
        setLoading,
        createNewUser,
        logout,
        login,
        showModal,
        setShowModal,
        myDocument,
        setMydocument,
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            const email = currentUser?.email
            if (email) {
                fetch(`http://localhost:8000/users/${email}`)
                    .then(res => res.json())
                    .then(data => {
                        setUser(data)
                        setLoading(false)
                    })
            }
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