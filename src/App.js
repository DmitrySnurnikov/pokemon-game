import React, { useState } from 'react'
import GamePage from './components/routes/Game';
import HomePage from './components/routes/Home';

const App=()=> {
  const [page, setPage] = useState('app');

  const handleChangePage = (page)=>{
    console.log("main")
    setPage(page)
    console.log("wfe",setPage(page))
  }
 switch(page){
  case "app":
    return <HomePage onChangePage={handleChangePage}/>;
  case "game":
    return <GamePage onChangePage={handleChangePage}/>;
  default:
    return <HomePage /> 
 }
}

export default App;
