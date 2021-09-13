import { useState } from 'react';
import s from './style.module.css';
import cn from 'classnames'

const NavBar=({onClickButton})=> {

    const[isActive, setActive]= useState(false)

    const handleClick = () =>{
        
        setActive(!isActive)
        onClickButton && onClickButton(isActive);
    }
    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
            <a onClick={handleClick} className={cn(s.menuButton, {[s.active]:isActive})}>
            <span />
            </a>
            </div>
        </nav>
    )
}

export default NavBar;
