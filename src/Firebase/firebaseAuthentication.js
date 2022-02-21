import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.Config";

const fireAuthentication = () =>{
    initializeApp(firebaseConfig)
}
export default fireAuthentication;