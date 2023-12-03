import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5GwdY_iXBy_0D3HEXM2f2J8S_NcBdXAM",
    authDomain: "chatgpt-clone-b8320.firebaseapp.com",
    projectId: "chatgpt-clone-b8320",
    storageBucket: "chatgpt-clone-b8320.appspot.com",
    messagingSenderId: "378693954313",
    appId: "1:378693954313:web:d0bc57ec2bc3a8343fc1d8"
  };
  
  // Initialize Firebase
  const app = getApps().length? getApp():initializeApp(firebaseConfig)
  const db=getFirestore(app)
  export {db}