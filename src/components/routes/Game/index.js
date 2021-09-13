const GamePage=()=>{
    const handleClick=({onChangePage})=>{
        onChangePage && onChangePage('app');
        console.log("asfdas", onChangePage)
    }
    return(
        <>
        <div>This is Game Page</div>
        <button onClick={handleClick}>
            Back To Mine
        </button>
        </>
    )
}
export default GamePage;