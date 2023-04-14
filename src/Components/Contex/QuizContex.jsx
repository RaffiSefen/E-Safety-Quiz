import { createContext, useState} from "react"
export const QuizContext = createContext()

const QuizProvider = (props) => {
const [userScore,setUserScore] = useState(0)

  const { children } = props
  return (
    <>
      
        <QuizContext.Provider value={{userScore,setUserScore}} >{children}</QuizContext.Provider>
      
    </>
  )
}

export default QuizProvider