import './App.css';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import HomePage from './HomePage';
import QuizPage from './Components/QuizPage';
import Question2 from './Components/Question2';
import QuizHomePage from './Components/QuizHomePage';
import  QuizProvider  from './Components/Contex/QuizContex';
import Question3 from './Components/Question3';
import Question4 from './Components/Question4';
import Question5 from './Components/Question5';
import TotalScore from './Components/TotalScore';
import ProgressBar from './Components/ProgressBar';

function App() {
  return (
    <QuizProvider>
    <BrowserRouter>
    <div className="App">
      <div className="App-body">
              <Routes>
             <Route path="/" element={<HomePage/>} /> 
             <Route path="/questions" element={<QuizHomePage/>}></Route>
        <Route path="/question1" element={<QuizPage/>} />
        <Route path="/question2" element={<Question2/>} />
        <Route path="/question3" element={<Question3/>} />
        <Route path="/question4" element={<Question4/>} />
        <Route path="/question5" element={<Question5/>} />
        <Route path="/totalscore" element={<TotalScore/>} />
        </Routes>
        </div>
    </div>
    </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
