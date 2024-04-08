import './App.css'
import Menu from './components/Mainmenu';
import QuizApp from './components/QuizzApp';
import Endscreen from './components/Endscreen';
import { useState,useContext } from 'react';
import { Quizzcontext} from './Helpers/Context';
function App(){

const [gstate,setgstate]=useState('menu')
const [score,setscore]=useState(0)
  return (
    <div className="App">
     <h1>Quizz App</h1>
     <Quizzcontext.Provider value={{ gstate, setgstate , score, setscore}}>
      {
        gstate=='menu' && <Menu/>
      }
      {
        gstate=='quiz' && <QuizApp/>
      }
      {
        gstate=='end' && <Endscreen/>
      }
      </Quizzcontext.Provider>
    </div>
  );
}

export default App;
