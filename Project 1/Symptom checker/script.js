import { db } from "./firebase.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import {

    collection,

    addDoc,

    getDocs,

    deleteDoc,

    doc

} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional




if (symptom === "") {// Initialize Firebase
const analytics = getAnalytics(app);

alert("PLease enter a symptom");
 }

try {

await addDoc(

collection(db, "symptoms"),

 {

name: symptom,

createdAt: new Date().toISOString()

 }

 );

symptomInput.value = "";

await getSymptoms();

 } catch (error) {

console.error("Error saving symptom:", error);

 }


window.saveSymptom = saveSymptom;




async function deleteSymptom(id) {

 try {

await deleteDoc(

doc(db, "symptoms", id)

 );

await getSymptoms();

 } catch (error) {

console.error("Error deleting symptom:", error);

 }

}

window.deleteSymptom = deleteSymptom;




getSymptoms();





// LESSON 6: Retrieving and Displaying Data

async function getSymptoms() {
    try {
        const querySnapshot = await getDocs(
            collection(db, "symptoms")
        );

        const symptoms = querySnapshot.docs.map(function(document) {
            return {
                id: document.id,
                symptom: document.data().symptom
            };
        });

        symptomList.innerHTML = symptoms.map(function(item) {
            return "<li>" + item.symptom +
                ' <button onclick="deleteSymptom(\'' +
                item.id + "')\">Delete</button></li>";
        }).join("");

    } catch (error) {
        console.error("Error getting symptoms:", error);
    }
}



// Load saved symptoms when the page opens

getSymptoms();
