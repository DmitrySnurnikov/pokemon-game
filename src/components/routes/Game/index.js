import { Link    } from "react-router-dom";
import {useState} from 'react'
import POKEMONS from '../../../components/Pokemons'
import Layout from "../../LayoutBlock";
import PokemonsCard from "../../PokemonsCard";

import s from './style.module.css'

const GamePage=({})=>{
    
    const [pokemons,setPokemons] =  useState(POKEMONS);

    const handleOpenPokemons = (id)=>{
        
        setPokemons(POKEMONS.map(item=>{
            if(item.id === id){
                
                item.active = !item.active;
                
            }
            console.log(item.active)
            return item;
            
        }));
    };

    return(
        <div className={s.root}>
            <h1>This is Game Page</h1>
            <Link to="/" className={s.button} >Back To Mine</Link>
            <Layout 
                id="cards" 
                title="Cards" 
                colorBg="#e2e2e2">
                <div className={s.flex}>{
                    POKEMONS.map( item => 
                        <PokemonsCard 
                            key={item.id} 
                            id={item.id} 
                            name={item.name} 
                            img={item.img} 
                            type={item.type} 
                            values={item.values}
                            active={item.actives}
                            onClickPokemon={handleOpenPokemons} 
                        />)};
                </div>
            </Layout>
        </div>
    )
}
export default GamePage;