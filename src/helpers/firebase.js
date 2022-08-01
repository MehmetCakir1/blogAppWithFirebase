// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


/*---------------------create new user----------------------*/

const auth = getAuth(app);

export const createUser= async(email,password,navigate,displayName)=>{
    try{
        let userCredential=await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser,{
            displayName: displayName
        })

        // toastify
        console.log(userCredential);
        navigate("/")
    }
    catch(error){
        // toastify
        console.log(error);
    }
}
/*---------------------sign in----------------------*/

export const signIn = async(email,password,navigate)=>{
    
    try{
        let userCredential=await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
        console.log(userCredential);
        // toastSuccessNotify("Logged in successfully")
      }catch(error){
        // toastErrorNotify(error.message);
        console.log(error);
      }
}

// to prevent double register
export const userObserver = (setCurrentUser)=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user)
        } else {
            setCurrentUser(false)
        }
      });
}


//to log out
export const logout = ()=>{
    signOut(auth)
    // toastSuccessNotify("Logged out successfully")
}











