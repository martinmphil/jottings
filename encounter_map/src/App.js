import React, { useState } from 'react';
import './App.css';
import redSvg from './assets/red_dot.svg'
import blueSvg from './assets/blue_dot.svg'

function App() {

  let [turn, setTurn] = useState('red')

  function handleTap(event) {
    if (turn === 'red') {
      let dot = document.querySelector('#redDot')
      dot.style.position = 'absolute'
      dot.style.left = (event.clientX - 20) + 'px'
      dot.style.top = (event.clientY - 20) + 'px'
      setTurn('blue')
    }
    if (turn === 'blue') {
      let dot = document.querySelector('#blueDot')
      dot.style.position = 'absolute'
      dot.style.left = (event.clientX - 20) + 'px'
      dot.style.top = (event.clientY - 20) + 'px'
      setTurn('red')
    }
  }

  return (
    <div className="App" onClick={handleTap}>
      <img src={redSvg} id="redDot" alt="red dot"/>
      <img src={blueSvg} id="blueDot" alt="blue dot"/>
    </div>
  );
}

export default App;
