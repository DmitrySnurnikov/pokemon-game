import React, { useState } from 'react'
import Menu from '../Menu'
import NavBar from '../NavBar'


const MenuHeader=()=> {

    const [isActive, setActive] = useState(false)
    const handleClickButton = () =>{
        setActive(!isActive);
    }

    return (
        <>
        <Menu onClickButton={handleClickButton} remond={isActive}/>
        <NavBar onClickButton={handleClickButton} remond={isActive} />
        </>
    )
}

export default MenuHeader;
