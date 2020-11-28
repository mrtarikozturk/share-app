import { createContext, useState, useEffect } from 'react';
import firebase from '../firebase/firebase.utils';

export const FirebaseAuthContext = createContext();

const AuthContext = (props) => {

    //states
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState();

    //useEffect
    useEffect(() => {
        firebase.firebaseAuth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    }, []);



    return (
        <FirebaseAuthContext.Provider value={{ currentUser }}>
            {props.children}
        </FirebaseAuthContext.Provider>
    )
}

export default AuthContext;
