import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PokemonsCard from "../../../../PokemonsCard";
import s from './style.module.css'
import { FireBaseContext } from "../../../../../context/firebaseContext";
import { PokemonContext } from "../../../../../context/pokemonContext";


const StartPage=()=>{

  const firebase = useContext(FireBaseContext);
  const pokemonsContext = useContext(PokemonContext);
  const history = useHistory();
    const [pokemons, setPokemons] =  useState({});

    const handelActiveSelected = (key)=>{
      const pokemon = {...pokemons[key]}
      pokemonsContext.onSelectedPokemons(key, pokemon);

      setPokemons(prevState=>({
        ...prevState,
        [key]: {
          ...prevState[key],
          selected: !prevState[key].selected,
        }
      }))
      
    };

    useEffect(()=>{
      firebase.getPokemonSoket((pokemons)=>{
        setPokemons(pokemons)
      })
      return () => firebase.offPokemonSoket();
    }, []);

   const handleStartGameClick = ()=>{
    history.push('/game/board');
   } 


    return(
      <>
        <div className={s.buttonWrap}>
        <button onClick={handleStartGameClick}
        disabled={Object.keys(pokemonsContext.pokemons).length<5}> Start Game</button>
        </div>
        <div className={s.flex}>
          {
            Object.entries(pokemons).map(([key,{name,img,id,type,values,selected}]) => 
                <PokemonsCard
                className={s.card}
                key={key} 
                id={id} 
                name={name} 
                img={img} 
                type={type} 
                values={values}
                isActive={true}
                isSelected={selected} 
                onClickPokemon={()=>{
                  if(Object.keys(pokemonsContext.pokemons).length<5 || selected){
                  handelActiveSelected(key)}}}/>)
          }
        </div>

        </>
    )
}
export default StartPage;