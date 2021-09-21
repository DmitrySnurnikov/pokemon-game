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

class FireBase{
  constructor(){
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb)=>{
    this.database.ref('pokemons').on('value', (snapshot)=>{
    cb(snapshot.val())
  })
  }

  offPokemonSoket = ()=>{
    this.database.ref('pokemons').off()
  }

  getPokemonsOnce = async ()=>{
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }
  postPokemon = (key, pokemon) =>{
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }
  addPokemon = (data) =>{
    const newKey = this.database.ref().child('pokemons').push().key;
      this.database.ref('pokemons/' + newKey).set(data);
  }
}

export default FireBase;


