

// TO DELETE



import React from 'react'
import redSvg from './assets/red_dot.svg'
// import { ReactComponent as RedSvg } from './assets/red_dot.svg'



function RedDot () {

  function handleTap(event) {
      let dot = document.querySelector('#redDot')
      dot.style.position = 'absolute'
      dot.style.left = (event.clientX - 20) + 'px'
      dot.style.top = (event.clientY - 20) + 'px'
  }

  return (
    <div className="dot" onClick={handleTap}>
      <img src={redSvg} id="redDot" alt="red dot" />
    </div>
  )
}

export default RedDot