import s from './style.module.css';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'GAME',
        to: '/game',
    },
    {
        title: 'ABOUT',
        to: '/about',
    },
    {
        title: 'CONTACT',
        to: '/contact',
    },
]

const Menu=({remond,onClickButton})=> {
    
    return (
        <div className={cn(s.menuContainer, {
            [s.active]:remond === true,
            [s.deactive]:remond  === false
            })} >
            <div className={s.overlay} />
                <div >
                    <ul>
                        {
                            MENU.map(({title, to}, index)=>(
                                <li key={index} >
                                    <Link to={to} onClick={onClickButton}>
                                        {title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
        </div>
    )
}

export default Menu;

