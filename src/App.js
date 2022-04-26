
import './App.css';
import PlayerInfo from './components/PlayerInfo';

import QuaterTimer from './components/QuaterTimer';
import Score from './components/Score';


function App() {
  return (
    <div >
    <QuaterTimer></QuaterTimer>
    <Score></Score>
    <PlayerInfo></PlayerInfo>
    </div>
  );
}

export default App;
