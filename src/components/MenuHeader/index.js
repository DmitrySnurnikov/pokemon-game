import React from 'react'
import Menu from '../Menu'
import NavBar from '../NavBar'

const MenuHeader=()=> {

    // const [isActive, setActive] = useState(false)
    const test = null;
    const handleClickButton = (page) =>{
        console.log("fffff",page)
        // test = page;
    }

    const handleMoveMenu = () =>{

    }

    return (
        <>
        <Menu onMoveMenu={handleMoveMenu} active={test}/>
        <NavBar onClickButton={handleClickButton} />
        </>
    )
}

export default MenuHeader;
