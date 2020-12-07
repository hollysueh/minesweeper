import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

//Game Instructions referenced from: https://en.wikipedia.org/wiki/Minesweeper_(video_game) */
function HelpContent() {
  return (
    <div className="helpBorder">
      <Card style={{ width: '40rem'}} className="helpCard">
        <Card.Body className="helpCardBody">
          <Card.Title className="cardTitle">About the Game</Card.Title>
            <Card.Text>Minesweeper is a single-player puzzle video game. The objective is to expose all the open cells on the board without clicking on any hidden "mines".</Card.Text>
          <Card.Title className="cardTitle">Instructions</Card.Title>
            <Card.Text>Click on a cell to expose its value. The cell will either have a "mine", or a number. The number displayed in the cell corresponds to the number of mines neighbouring that cell.</Card.Text>
            <Card.Text>To win the game, click on all the open cells without hitting any mines.</Card.Text>
            <Card.Text>If you hit a "mine", the game will automatically end. To re-start the game, click the "Re-start Game" button at the bottom of the page.</Card.Text>
          <Card.Title className="cardTitle">Tips</Card.Title>
            <Card.Text>Try to use the numbers in the cells to determine where a bomb is.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HelpContent;