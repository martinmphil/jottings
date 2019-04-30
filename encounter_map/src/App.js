import React, { useState } from 'react';
import './App.css';
import redSvg from './assets/red_dot.svg'
import orangeSvg from './assets/orange_dot.svg'
import yellowSvg from './assets/yellow_dot.svg'
import blueSvg from './assets/blue_dot.svg'
import purpleSvg from './assets/purple_dot.svg'

function App() {

  let [turn, setTurn] = useState('red')

  let turnOrder = ['red', 'orange', 'yellow', 'blue', 'purple']

  function advanceTurnOrder(hue) {
    let i = turnOrder.indexOf(hue)
    if ( (i + 1) === turnOrder.length) {
      setTurn(turnOrder[0])
    } else {
      setTurn(turnOrder[i + 1])
    }
  }

  function moveDot(hue, x, y) {
    let id = '#' + hue + 'Dot'
    let dot = document.querySelector(id)
    dot.style.position = 'absolute'
    dot.style.left = (x - 20) + 'px'
    dot.style.top = (y - 20) + 'px'
    advanceTurnOrder(hue)
  }

  function handleDotMove(event) {
    if (turn === 'red') {
      moveDot('red', event.clientX, event.clientY)
      // setTurn('blue')
    }
    if (turn === 'orange') {
      moveDot('orange', event.clientX, event.clientY)
    }
    if (turn === 'yellow') {
      moveDot('yellow', event.clientX, event.clientY)
    }
    if (turn === 'blue') {
      moveDot('blue', event.clientX, event.clientY)
    }
    if (turn === 'purple') {
      moveDot('purple', event.clientX, event.clientY)
    }
  }

  return (
    <div className="App" onClick={handleDotMove}>
      <img src={redSvg} id="redDot" className="dot" alt="red dot" />
      <img src={orangeSvg} id="orangeDot" className="dot" alt="blue dot" />
      <img src={yellowSvg} id="yellowDot" className="dot" alt="blue dot" />
      <img src={blueSvg} id="blueDot" className="dot" alt="blue dot" />
      <img src={purpleSvg} id="purpleDot" className="dot" alt="blue dot" />
    </div>
  );
}

export default App;
