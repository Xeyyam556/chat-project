 // Import the functions you need from the SDKs you need
 import { initializeApp} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
 import { getDatabase} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCkfXXT37yS6Wy0yQjuOTRyn0uGvrBOeu0",
   authDomain: "project-32a9a.firebaseapp.com",
   databaseURL: "https://project-32a9a-default-rtdb.firebaseio.com",
   projectId: "project-32a9a",
   storageBucket: "project-32a9a.appspot.com",
   messagingSenderId: "167813512280",
   appId: "1:167813512280:web:478686e0534c6a376d5e2d"
 };

 // Initialize Firebase 
 const app = initializeApp(firebaseConfig);
 const db=getDatabase(app)
 export default db;