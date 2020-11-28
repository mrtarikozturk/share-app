import firebase from 'firebase/app';
import 'firebase/auth';

// Development Configure
const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Production Configure
const prodConfig = {};

const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

class Firebase {
    constructor() {
        //TODO: add initialize check
        firebase.initializeApp(config);
        this.firebaseAuth = firebase.auth();
        console.log(firebase);
        console.log(this.firebaseAuth);
    }

    // register button
    async register(displayName, email, password) {
        try {
            await this.firebaseAuth.createUserWithEmailAndPassword(email, password);

            this.firebaseAuth.currentUser.updateProfile({
                displayName
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Sign Up with Google
    useGoogleProvider() {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        googleProvider.setCustomParameters({ prompt: "select_account" });
        this.firebaseAuth.signInWithPopup(googleProvider);
    }

    // Log Out/Sign Out
    signOut() {
        this.firebaseAuth.signOut();
    }

    // Sign In/ Log In
    signIn(email, password) {
        this.firebaseAuth.signInWithEmailAndPassword(email, password);
    }

}

export default new Firebase();
