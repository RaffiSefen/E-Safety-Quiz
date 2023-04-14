import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { QuizContext } from "./Contex/QuizContex"


const RestartQuiz = ()=> {
    const navigate = useNavigate()
    const {userScore,setUserScore} = useContext(QuizContext)

    const handleRestart = ()=> {
        setUserScore(0)
        navigate("/")
    }
return(
    <>
    <button className="btn btn-danger btn-lg mt-5" onClick={handleRestart} >Restart Quiz </button>
    </>
)
}

export default RestartQuiz