import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyBugoteOwV98I6NVuUCqqWqoeFwRWtmg1o",
  authDomain: "eride-8.firebaseapp.com",
  projectId: "eride-8",
  storageBucket: "eride-8.appspot.com",
  messagingSenderId: "673136977693",
  appId: "1:673136977693:web:34ec2f603098f2290463f4",
  measurementId: "G-YBM3NCWJNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
