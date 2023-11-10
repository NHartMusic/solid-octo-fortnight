import { initializeApp } from 'firebase/app'
import {
    collection,
    onSnapshot,
    getFirestore,
    orderBy,
    query
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBV7Oyfx4ZgO2fLk8E9SniNARzEVCUfDW4",
    authDomain: "end-occupation-now.firebaseapp.com",
    projectId: "end-occupation-now",
    storageBucket: "end-occupation-now.appspot.com",
    messagingSenderId: "197992597500",
    appId: "1:197992597500:web:23773fb981dae416ad5479",
    measurementId: "G-EZ2BNWVEFW"
  };

//init app 
initializeApp(firebaseConfig)

//init services
const db = getFirestore()

//collection ref
const colRef = collection(db, 'Total_Spending_2022')
 
//queries 
const q = query(colRef)

//realtime collection data
onSnapshot(q, (snapshot) => {
    let countries = [] 

    snapshot.docs.forEach((doc) => {
        countries.push({ ...doc.data(), id: doc.id })
    })
    console.log(countries)
})

const addCountryForm = document.querySelector('.add')
addCountryForm.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(
        addCountryForm.country_name.value,
        addCountryForm.Military_Spending_Ranking_2022.value
    )
})