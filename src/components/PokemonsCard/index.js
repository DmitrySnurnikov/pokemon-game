import CardBackSize from './assets/card-back-side.jpg';
import {useState} from 'react'
import s from './style.module.css';
<<<<<<< HEAD
=======
import cn from 'classnames'
>>>>>>> 84e68ad5ab8a8021ccefcb861dab1fac289b198d

const PokemonsCard = ({name,img,id,type,values})=>{
  const [isActive, setActive] = useState(false);
  
  const handleClick =()=>{
    setActive(!isActive);
    
  }
  return(
    <div className={s.root} onClick={handleClick}>
<<<<<<< HEAD
      <div className={`${s.pokemonCard} ${isActive? s.active:''}`}>
        <div className={s.cardFront}>
            <div className={`${s.wrap} ${s.front}`}>
                <div className={`${s.pokemon} ${s[type]}`}>
                    <div className={s.values}>
                        <div className={`${s.count} ${s.top}`}>{values.top}</div>
                        <div className={`${s.count} ${s.right}`}>{values.right}</div>
                        <div className={`${s.count} ${s.bottom}`}>{values.bottom}</div>
                        <div className={`${s.count} ${s.left}`}>{values.left}</div>
=======
      <div className={cn(s.pokemonCard, {[s.active]:isActive})}>
        <div className={s.cardFront}>
            <div className={cn(s.wrap, s.front)}>
                <div className={cn(s.pokemon, s[type])}>
                    <div className={s.values}>
                        <div className={cn(s.count, s.top)}>{values.top}</div>
                        <div className={cn(s.count, s.right)}>{values.right}</div>
                        <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                        <div className={cn(s.count, s.left)}>{values.left}</div>
>>>>>>> 84e68ad5ab8a8021ccefcb861dab1fac289b198d
                    </div>
                    <div className={s.imgContainer}>
                        <img src={img} alt={name} />
                    </div>
                    <div className={s.info}>
                        <span className={s.number}>#{id}</span>
                        <h3 className={s.name}>{name}</h3>
                        <small className={s.type}>Type: <span>{type}</span></small>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.cardBack}>
<<<<<<< HEAD
            <div className={`${s.wrap} ${s.back}`}>
=======
            <div className={cn(s.wrap, s.back)}>
>>>>>>> 84e68ad5ab8a8021ccefcb861dab1fac289b198d
                <img src={CardBackSize} alt="Сard Backed" />
            </div>
        </div>
      </div>
    </div>
  )
}
export default PokemonsCard;