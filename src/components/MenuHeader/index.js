import React, { useState } from 'react'
import Menu from '../Menu'
import NavBar from '../NavBar'


const MenuHeader=({bgActive})=> {

    const [isActive, setActive] = useState(false);
    
    const handleClickButton = () =>{
        setActive(prevState => !prevState);
    }

    return (
        <>
        <Menu onClickButton={handleClickButton} remond={isActive}/>
        <NavBar onClickButton={handleClickButton} remond={isActive} bgActive={bgActive}/>
        </>
    )
}

export default MenuHeader;
