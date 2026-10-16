import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDH0zcFL5rR4gk-LtotEkw9_fMeG-S1cXU",
    authDomain: "famsa--wk5-project.firebaseapp.com",
    projectId: "famsa--wk5-project",
    storageBucket: "famsa--wk5-project.firebasestorage.app",
    messagingSenderId: "142574343164",
    appId: "1:142574343164:web:37a763c90c4bffcb001879",
    measurementId: "G-S0QECW3739"
  };







// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };

