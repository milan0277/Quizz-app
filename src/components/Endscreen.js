import { Quizzcontext } from "../Helpers/Context"
import { useContext } from "react"

function Endscreen(){
    const { score,setscore ,setgstate}=useContext(Quizzcontext)

    const hc=()=>{
        setgstate('menu')
        setscore(0)
    }
    return(
        <>
        <h1>score</h1>
        <p>{score}</p>
        <button onClick={hc}>Play Again</button>
        </>
    )
}
export default Endscreen