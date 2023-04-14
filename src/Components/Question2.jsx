import { useState,useContext } from "react"
import { QuizContext } from "./Contex/QuizContex"
import RestartQuiz from "./RestartQuiz"
import { useNavigate } from "react-router-dom"
import ProgressBar from "./ProgressBar"


const Question2 = ()=> {
    const {userScore, setUserScore} = useContext(QuizContext)
  const navigate = useNavigate()
    const handleUserAnswer = (e)=> {
        const answer = e.target.value
        console.log(answer)
        if(answer == "c") {
    setUserScore(userScore+1)
        } 
        else {
            setUserScore(userScore)
        }
    navigate("/question3")
    
    }
    return (
        <>
      <div className="col-md-6">
      <h3 className="text-info">Question 2/Question 5</h3>
      <ProgressBar currentProgress="40"></ProgressBar>
          <div className="alert"><p className="text-warning">Your Score is {userScore}</p></div>
      <h3 className="text-info"> What is considered personal info??</h3>
  
  <button className="btn btn-info btn-lg btn-block mb-2" value="a" onClick={ (e)=> handleUserAnswer(e) }> Your gender</button>
  <button className="btn btn-info btn-lg btn-block mb-2" value="b" onClick={handleUserAnswer}> Your dog's name</button>
  <button className="btn btn-info btn-lg btn-block" value="c" onClick={handleUserAnswer}> Your address</button>
  
  
      </div>

      <div className="">
      <RestartQuiz></RestartQuiz>
      </div>
        </>
    )
}
export default Question2