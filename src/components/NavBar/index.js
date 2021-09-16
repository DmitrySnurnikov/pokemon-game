import s from './style.module.css';
import cn from 'classnames'

const NavBar=({onClickButton, remond, bgActive=false})=> {

    return (
        <nav id = {s.navbar}
         className={cn({[s.bgActive]:bgActive
        })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div 
                    onClick={onClickButton} 
                    className={cn(s.menuButton, {[s.active]:remond})}>
                <span />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
