import Firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
//import { seedDatabase } from "../seed"

const config = {
  apiKey: "AIzaSyAiOWb4r1zuxb50ThrxGiAT0f7L84GxP9A",
  authDomain: "netflix-clone-6dc4d.firebaseapp.com",
  projectId: "netflix-clone-6dc4d",
  storageBucket: "netflix-clone-6dc4d.appspot.com",
  messagingSenderId: "60381374406",
  appId: "1:60381374406:web:81e2c3f15cbc5c678534c7",
}

const firebase = Firebase.initializeApp(config)

//seedDatabase(firebase)

export { firebase }
