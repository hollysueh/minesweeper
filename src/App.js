import React, { Component }  from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';

//Import Components
import MinesweeperGame from './Components/MinesweeperGame';
import HelpBtn from './Components/HelpBtn';

class App extends Component {
  constructor(props) {
    super(props);
    this.reStart = this.reStart.bind(this);
  }

  //When "Re-Start Button" clicked re-load page window so game is refreshed
  reStart () {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <h1>A Simple Minesweeper Game</h1>        
          <HelpBtn />
          <MinesweeperGame />
          <p>Click a cell to begin</p><br></br>
          <br></br>
          <button className="restartButton" onClick={this.reStart}>Re-start Game</button>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;