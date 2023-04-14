import { useState,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { QuizContext } from "./Contex/QuizContex"
import ProgressBar from "./ProgressBar"


const compnentprops ={
    title:'',
    options:[
        '','',''
    ]
}

const QuizPage = ()=> {
const {userScore, setUserScore} = useContext(QuizContext)
    const [userAnswer, setUserAnswer] = useState()
    const navigate = useNavigate();
  
const handleUserAnswer = (e)=> {
    const answer = e.target.value
    console.log(answer)
    if(answer == "a") {
setUserScore(userScore+1)
    } 
    else {
        setUserScore(userScore)
    }
 navigate("/question2")

}

return (
    
    <div className="col-md-6">
        <h3 className="text-info">Question 1/Question 5</h3>
        <ProgressBar currentProgress="0" />

        <div className="alert"><p className="text-warning">Your Score is {userScore}</p></div>
    <h3> What is Cyber Bullying?</h3>

<button className="btn btn-info btn-lg btn-block mb-2" value="a" onClick={ (e)=> handleUserAnswer(e) }> Bullying Online</button>
<button className="btn btn-info btn-lg btn-block mb-2" value="b" onClick={handleUserAnswer}> Physical Bullying</button>
<button className="btn btn-info btn-lg btn-block" value="c" onClick={handleUserAnswer}> Confronting Bullying</button>


    </div>
)
}

export default QuizPage