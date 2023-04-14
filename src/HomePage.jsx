import { Link } from "react-router-dom"

const HomePage = ()=> {
    return(
        <Link className="btn btn-success" to="/questions">Start Quiz</Link>
    )
    
}

export default HomePage