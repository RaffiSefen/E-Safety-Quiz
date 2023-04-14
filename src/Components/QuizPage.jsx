import { useState,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { QuizContext } from "./Contex/QuizContex"


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
<div className="progress">
  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"0%"}} ></div>
</div>
        <div className="alert"><p className="text-warning">Your Score is {userScore}</p></div>
    <h3>Question 1: What is Cyber Bullying?</h3>

<button className="btn btn-info btn-lg btn-block mb-2" value="a" onClick={ (e)=> handleUserAnswer(e) }> Bullying Online</button>
<button className="btn btn-info btn-lg btn-block mb-2" value="b" onClick={handleUserAnswer}> Physical Bullying</button>
<button className="btn btn-info btn-lg btn-block" value="c" onClick={handleUserAnswer}> Confronting Bullying</button>


    </div>
)
}

export default QuizPage