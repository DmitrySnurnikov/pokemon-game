import firebase  from 'firebase/compat';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBS4y6lftrcunbq_GUoevaFncAe1YOGmQ0",
  authDomain: "pokemon-game-40ebc.firebaseapp.com",
  databaseURL: "https://pokemon-game-40ebc-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-40ebc",
  storageBucket: "pokemon-game-40ebc.appspot.com",
  messagingSenderId: "715582202920",
  appId: "1:715582202920:web:c76c8e3f928769cc78811d"
};
firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;


