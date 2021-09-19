
import { useState, useEffect } from "react";
import Layout from "../../LayoutBlock";
import PokemonsCard from "../../PokemonsCard";
import s from './style.module.css'
import database from "../../../service/firebase";
import POKEMONS from '../../Pokemons'

const GamePage=()=>{
    const [pokemons, setPokemons] =  useState({});
    const handleClick = (id, objID, isActive)=>{
      setPokemons(prevState => {
        return Object.entries(prevState).reduce((acc, item) => {
            const pokemon = {...item[1]};
            if (pokemon.id === id) {
                pokemon.active = !pokemon.active ;
                database.ref('pokemons/'+ objID).update({
                  // ...pokemons[objID],
                  active: !isActive,
                });
            };
            acc[item[0]] = pokemon;
            return acc;
        }, {});
      });
      
    };

    useEffect(()=>{
      database.ref('pokemons').once('value',(snapshot)=>{
        setPokemons(snapshot.val());
      });
    }, [pokemons]);

    const AddNewPokemon = ()=>{
      const data = POKEMONS;
      const newKey = database.ref().child('pokemons').push().key;
      database.ref('pokemons/' + newKey).set(data[0]);

    }
    return(
        <div className={s.root}>

        <button className={s.button} onClick={AddNewPokemon} > ADD NEW POKEMON </button>
        <Layout id="cards" title="Cards" colorBg="#e2e2e2">
        <div className={s.flex}>
          {
            Object.entries(pokemons).map(([key,{name,img,id,type,values,active}]) => 
                <PokemonsCard
                objID={key} 
                key={key} 
                id={id} 
                name={name} 
                img={img} 
                type={type} 
                values={values}
                isActive={active} 

                onClickPokemon={handleClick}/>)
          }
        </div>
      </Layout>

        </div>
    )
}
export default GamePage;