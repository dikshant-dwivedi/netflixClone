import Firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
//import { seedDatabase } from "../seed"

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CREDS)
const firebase = Firebase.initializeApp(firebaseConfig)

//seedDatabase(firebase)

export { firebase }
