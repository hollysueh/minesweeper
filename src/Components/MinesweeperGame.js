import React, { Component } from 'react';
import '../App.css'
import update from 'react-addons-update';

class MinesweeperLayout extends Component {
  constructor(props) {
    super(props);
    //Initialise states ("Cells" = minesweeper cell values)
      this.state = {
        cells:
          [{id: "1", cellTxt: 0, style: {display: 'none'}}, {id: "2", cellTxt: 0, style: {display: 'none'}}, {id: "3", cellTxt: 0, style: {display: 'none'}}, {id: "4", cellTxt: 0, style: {display: 'none'}}, {id: "5", cellTxt: 0, style: {display: 'none'}},
            {id: "6", cellTxt: 0, style: {display: 'none'}}, {id: "7", cellTxt: 0, style: {display: 'none'}}, {id: "8", cellTxt: 0, style: {display: 'none'}}, {id: "9", cellTxt: 0, style: {display: 'none'}}, {id: "10", cellTxt: 0, style: {display: 'none'}},
            {id: "11", cellTxt: 0, style: {display: 'none'}}, {id: "12", cellTxt: 0, style: {display: 'none'}}, {id: "13", cellTxt: 0, style: {display: 'none'}}, {id: "14", cellTxt: 0, style: {display: 'none'}}, {id: "15", cellTxt: 0, style: {display: 'none'}},
            {id: "16", cellTxt: 0, style: {display: 'none'}}, {id: "17", cellTxt: 0, style: {display: 'none'}}, {id: "18", cellTxt: 0, style: {display: 'none'}}, {id: "19", cellTxt: 0, style: {display: 'none'}}, {id: "20", cellTxt: 0, style: {display: 'none'}},
            {id: "21", cellTxt: 0, style: {display: 'none'}}, {id: "22", cellTxt: 0, style: {display: 'none'}}, {id: "23", cellTxt: 0, style: {display: 'none'}}, {id: "24", cellTxt: 0, style: {display: 'none'}}, {id: "25", cellTxt: 0, style: {display: 'none'}}],
        counter: 1,
        disabled: false
    };
    //Bind functions
    this.componentDidMount = this.componentDidMount.bind(this);
    this.chooseCell = this.chooseCell.bind(this);
  }

  componentDidMount() {
    // Create array of random numbers, to determine which cells will be filled with "bombs"
     let bombArray = [];

     while (bombArray.length < 3) {
      let b = Math.floor(Math.random() * 13) + 7;
      bombArray.push(b);
      }

     //Assign values to cells:
     for (let i = 0; i < this.state.cells.length; i++) {
      for (let j = 0; j < bombArray.length; j++) {
        if (bombArray[j] === this.state.cells[i].id) {
          //Assign 'bomb' to bomb values
            let stateCopy = Object.assign({}, this.state);
            stateCopy.cells[i].cellTxt = '💣';
            this.setState(stateCopy);

          //Add 1 to cell value on left of bomb
          if (this.state.cells[i - 1].cellTxt !== '💣' &&
              this.state.cells[i].id !== 1 &&
              this.state.cells[i].id !== 6 &&
              this.state.cells[i].id !== 11 &&
              this.state.cells[i].id !== 16 &&
              this.state.cells[i].id !== 21
              ) {
            let stateCopy = Object.assign({}, this.state);
            stateCopy.cells[i - 1].cellTxt += 1;
            this.setState(stateCopy);
          }
          //Add 1 to cell value on right of bomb
          if (this.state.cells[i + 1].cellTxt !== '💣' &&
              this.state.cells[i].id !== 5 &&
              this.state.cells[i].id !== 10 &&
              this.state.cells[i].id !== 15 &&
              this.state.cells[i].id !== 20 &&
              this.state.cells[i].id !== 25
              ) {
            let stateCopy = Object.assign({}, this.state);
            stateCopy.cells[i + 1].cellTxt += 1;
            this.setState(stateCopy);
          }
          //Add 1 to cell value on top of bomb
          if (this.state.cells[i - 5].cellTxt !== '💣' &&
              this.state.cells[i].id !== 1 &&
              this.state.cells[i].id !== 2 &&
              this.state.cells[i].id !== 3 &&
              this.state.cells[i].id !== 4 &&
              this.state.cells[i].id !== 5
              ) {
            let stateCopy = Object.assign({}, this.state);
            stateCopy.cells[i - 5].cellTxt += 1;
            this.setState(stateCopy);
          }
          //Add 1 to cell value on bottom of bomb
          if (this.state.cells[i + 5].cellTxt !== '💣' &&
              this.state.cells[i].id !== 21 &&
              this.state.cells[i].id !== 22 &&
              this.state.cells[i].id !== 23 &&
              this.state.cells[i].id !== 24 &&
              this.state.cells[i].id !== 25
              ) {
            let stateCopy = Object.assign({}, this.state);
            stateCopy.cells[i + 5].cellTxt += 1;
            this.setState(stateCopy);
          }
          //Add 1 to cell value on top left of bomb
          if (this.state.cells[i - 6].cellTxt !== '💣' &&
              this.state.cells[i].id !== 1 &&
              this.state.cells[i].id !== 2 &&
              this.state.cells[i].id !== 3 &&
              this.state.cells[i].id !== 4 &&
              this.state.cells[i].id !== 5 &&
              this.state.cells[i].id !== 6 &&
              this.state.cells[i].id !== 11 &&
              this.state.cells[i].id !== 16 &&
              this.state.cells[i].id !== 21
              ) {
            let stateCopy = Object.assign({}, this.state);
            stateCopy.cells[i - 6].cellTxt += 1;
            this.setState(stateCopy);
          }
          //Add 1 to cell value on top right of bomb
          if (this.state.cells[i - 4].cellTxt !== '💣' &&
              this.state.cells[i].id !== 1 &&
              this.state.cells[i].id !== 2 &&
              this.state.cells[i].id !== 3 &&
              this.state.cells[i].id !== 4 &&
              this.state.cells[i].id !== 5 &&
              this.state.cells[i].id !== 10 &&
              this.state.cells[i].id !== 15 &&
              this.state.cells[i].id !== 20 &&
              this.state.cells[i].id !== 25 
              ) {
            let stateCopy = Object.assign({}, this.state);
            stateCopy.cells[i - 4].cellTxt += 1;
            this.setState(stateCopy);
          }
          //Add 1 to cell value on bottom left of bomb
          if (this.state.cells[i + 4].cellTxt !== '💣' &&
              this.state.cells[i].id !== 1 &&
              this.state.cells[i].id !== 6 &&
              this.state.cells[i].id !== 11 &&
              this.state.cells[i].id !== 16 &&
              this.state.cells[i].id !== 21 &&
              this.state.cells[i].id !== 22 &&
              this.state.cells[i].id !== 23 &&
              this.state.cells[i].id !== 24 &&
              this.state.cells[i].id !== 25
              ) {
            let stateCopy = Object.assign({}, this.state);
            stateCopy.cells[i + 4].cellTxt += 1;
            this.setState(stateCopy);
          }
          //Add 1 to cell value on bottom right of bomb
          if (this.state.cells[i + 6].cellTxt !== '💣' &&
              this.state.cells[i].id !== 5 &&
              this.state.cells[i].id !== 10 &&
              this.state.cells[i].id !== 15 &&
              this.state.cells[i].id !== 20 &&
              this.state.cells[i].id !== 21 &&
              this.state.cells[i].id !== 22 &&
              this.state.cells[i].id !== 23 &&
              this.state.cells[i].id !== 24 &&
              this.state.cells[i].id !== 25
              ) {
            let stateCopy = Object.assign({}, this.state);
            stateCopy.cells[i + 6].cellTxt += 1;
            this.setState(stateCopy);
          }
        }
      }
    }
  }

  //When cell clicked:
  chooseCell(e) {
    const cellNo = e.currentTarget.getAttribute("data-value"); //Get cell ID

    //Change cell style to "display: block", so cell value is shown
    this.setState(update(this.state, {
      cells: {
        [cellNo - 1]: {
          style: {
            display: {
              $set: 'block'
            }
          }
        }
      }
    }));

    //If cell is a 'bomb' alert user "game over"
    if (this.state.cells[cellNo -1].cellTxt === '💣') {
      setTimeout(function() {
        alert("Game Over");
        }, 200);
      
      this.setState({disabled: true});
    }
    /* If cell isn't a 'bomb', add 1 to 'counter'. Once 'counter' equals all non-bomb cells, alert user "you won" */
    else {
      this.setState({counter: this.state.counter + 1});
      if (this.state.counter >= 22) {
        setTimeout(function() {
          alert("You Won!");
          }, 200);
        
        this.setState({disabled: true});
      }
    }
  }

  // Render minesweeper grid (5 columns / 5 rows)
  render() {
    const listCells = this.state.cells.map((cell) =>
    <div className="buttonHolder">
      <button className="cellButton" data-value={cell.id} onClick={this.chooseCell} disabled={this.state.disabled}>
        <b className="cellButtonTxt" style={cell.style}>{cell.cellTxt}</b>
      </button>
    </div>
    );
    return (
      <div className="minesweeperTable" >
        <div className="row">
          {listCells[0]}
          {listCells[1]}
          {listCells[2]}
          {listCells[3]}
          {listCells[4]}
        </div>
        <div className="row">
          {listCells[5]}
          {listCells[6]}
          {listCells[7]}
          {listCells[8]}
          {listCells[9]}
        </div>
        <div className="row">
          {listCells[10]}
          {listCells[11]}
          {listCells[12]}
          {listCells[13]}
          {listCells[14]}
        </div>
        <div className="row">
          {listCells[15]}
          {listCells[16]}
          {listCells[17]}
          {listCells[18]}
          {listCells[19]}
        </div>
        <div className="row">
          {listCells[20]}
          {listCells[21]}
          {listCells[22]}
          {listCells[23]}
          {listCells[24]}
        </div>
      </div>
    );
  }
}

export default MinesweeperLayout;

/* REFERENCES:
  bombArray:
    https://www.codegrepper.com/code-examples/typescript/react+array+of+random+numbers)
*/