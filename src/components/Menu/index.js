import s from './style.module.css';
import cn from 'classnames'
import {useState} from 'react'

const Menu=()=> {

const [isActive, setActive] = useState(true)

const handleClick = () =>{
    setActive(!isActive)
}

    return (
        <div onClick={handleClick} className={cn(s.menuContainer, {[s.active]:isActive})} >
            <div className={s.overlay} />
                <div className={s.menuItems}>
                    <ul>
                        <li>
                            <a href="#welcome">
                        HOME
                            </a>
                        </li>
                        <li>
                            <a href="#game">
                            GAME
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                            ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                            CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Menu;

