import { useContext } from "react"
import { QuizContext } from "./Contex/QuizContex"
import RestartQuiz from "./RestartQuiz"

const TotalScore = ()=> {
    const {userScore,setUserScore} = useContext(QuizContext)
      
    console.log(userScore)
return (
    <>
{userScore*20 > 60 ? <h3 className="text-success" >Your final score is {userScore*20}%!</h3>
     :
    <h3 className="text-danger" >Your final score is {userScore*20}%!</h3>
}
<RestartQuiz/>
    </>
)
}

export default TotalScore