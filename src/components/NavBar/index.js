import { useState } from 'react';
import s from './style.module.css';
import cn from 'classnames'

const NavBar=({onClickButton, remond})=> {

    const handleClick = () =>{
        
        onClickButton && onClickButton();
    }
    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
            <a onClick={handleClick} className={cn(s.menuButton, {[s.active]:remond})}>
            <span />
            </a>
            </div>
        </nav>
    )
}

export default NavBar;
