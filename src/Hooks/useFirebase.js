import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";

 import { useEffect, useState } from "react"
import fireAuthentication from "../Firebase/firebaseAuthentication";
 fireAuthentication();

const useFirebase = () =>{

    const [user,setUser] = useState({});
    const auth = getAuth();
    const googleProvide = new GoogleAuthProvider();
    const googleSignIn = () =>{

        signInWithPopup(auth,googleProvide)
        .then(result =>{
            console.log(result.user)
        })
    }
 useEffect(()=>{
        onAuthStateChanged(auth,user =>{
          if(user){
              setUser(user)
          }
        })
 },[])
      
     return{
         googleSignIn,
         user,

     }
}
export default useFirebase;