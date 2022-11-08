// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRHcv05xmo7aziwZbZXgH7llpqZjGb_GA",
  authDomain: "service-review-assignment.firebaseapp.com",
  projectId: "service-review-assignment",
  storageBucket: "service-review-assignment.appspot.com",
  messagingSenderId: "548188299286",
  appId: "1:548188299286:web:00a56efe9433364ad59537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;