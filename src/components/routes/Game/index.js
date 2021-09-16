import { useHistory } from "react-router-dom";



const GamePage=({onChangePage})=>{
    
    const history = useHistory();
    const handleClick = ()=>{
        history.push('/')
    }

    return(
        <>
        <h1>This is Game Page</h1>
        <button onClick={handleClick}>
            Back To Mine
        </button>
        </>
    )
}
export default GamePage;