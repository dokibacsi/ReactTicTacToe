import logo from './logo.svg';
import './App.css';
import Jatekter from './components/Jatekter';
import { TicTacToeLista } from './datas/tictactoeLista';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
          <h3>TicTacToe in React</h3>
      </header>
      <div className="Jatekter">
        <Jatekter lista = {TicTacToeLista}/>
      </div>
    </div>
  );
}

export default App;
