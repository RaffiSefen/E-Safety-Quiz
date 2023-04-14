import { useState,useContext } from "react"
import { QuizContext } from "./Contex/QuizContex"
import RestartQuiz from "./RestartQuiz"
import { useNavigate } from "react-router-dom"
import ProgressBar from "./ProgressBar"


const Question4 = ()=> {
    const {userScore, setUserScore} = useContext(QuizContext)
  const navigate = useNavigate()
    const handleUserAnswer = (e)=> {
        const answer = e.target.value
        console.log(answer)
        if(answer == "a") {
    setUserScore(userScore+1)
        } 
        else {
            setUserScore(userScore)
        }
    navigate("/question5")
    
    }
    return (
        <>
      <div className="col-md-6">
      <h3 className="text-info">Question 4/Question 5</h3>
      <ProgressBar currentProgress="80"></ProgressBar>
      
          <div className="alert"><p className="text-warning">Your Score is {userScore}</p></div>
      <h3> Someone is being rude in your livestream, what do you do?</h3>
  
  <button className="btn btn-info btn-lg btn-block mb-2" value="a" onClick={ (e)=> handleUserAnswer(e) }> Block or Ban them from your stream</button>
  <button className="btn btn-info btn-lg btn-block mb-2" value="b" onClick={handleUserAnswer}> Be rude back</button>
  <button className="btn btn-info btn-lg btn-block" value="c" onClick={handleUserAnswer}> Ignore them</button>
  
  
      </div>

      <div className="">
      <RestartQuiz></RestartQuiz>
      </div>
        </>
    )
}
export default Question4