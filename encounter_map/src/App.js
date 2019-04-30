import React, { useState } from 'react';
import './App.css';
import redSvg from './assets/red_dot.svg'
import blueSvg from './assets/blue_dot.svg'

function App() {

  let [turn, setTurn] = useState('red')

  function handleDotActive(event) {
    setTurn(event.target.id)
  }

  function moveDot(hue, x, y) {
    let id = '#' + hue + 'Dot'
    let dot = document.querySelector(id)
    dot.style.position = 'absolute'
    dot.style.left = (x - 20) + 'px'
    dot.style.top = (y - 20) + 'px'
  }

  function handleDotMove(event) {
    if (turn === 'red') {
      moveDot('red', event.clientX, event.clientY)
      // setTurn('blue')
    }
    if (turn === 'blue') {
      moveDot('blue', event.clientX, event.clientY)
      // setTurn('red')
    }
  }

  return (
    <div className="App" onClick={handleDotMove}>
      <img src={redSvg} id="redDot" alt="red dot" onClick={handleDotActive}/>
      <img src={blueSvg} id="blueDot" alt="blue dot" onClick={handleDotActive}/>
    </div>
  );
}

export default App;
