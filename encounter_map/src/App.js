import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [turn, setTurn] = useState('selectingAgent')

  const [agency, setAgency] = useState('')

  useEffect( () => {
    if (agency !== ''){
      document.getElementById(agency).classList.add('active')
      return () => {
        document.getElementById(agency).classList.remove('active')
      }
    }
  })

  useEffect( () => {
    window.addEventListener('click', movingAgent)
    return () => {
      window.removeEventListener('click', movingAgent)
    }
  })

  function selectAgent(e) {
    if (turn === 'selectingAgent') {
      setAgency(e.currentTarget.id)
      setTurn('movingAgent')
    }
  }

  function movingAgent(e) {
    if (turn === 'movingAgent') {
      let agent = document.getElementById(agency)
      agent.setAttributeNS(null,"cx",e.clientX)
      agent.setAttributeNS(null,"cy",e.clientY)
      setTurn('selectingAgent')
    }
  }

  return (
    <svg
      id="mainMap" width="100%" height="100%"
      xmlns="http://www.w3.org/2000/svg"
      // React converts camel case JSX attr to xmlns:xlink in HTML
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >

      <rect id="backgroundField" x="0" y="0" width="100%" height="100%" fill="green"/>

      <circle id="blueAgent" onClick={selectAgent} transform="translate(20,20)" className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="blue" />

      <circle id="orangeAgent" onClick={selectAgent} transform="translate(40,40)" className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="orange" />

      <g id="groupTest" fill="white" stroke="purple" strokeWidth="5" onClick={selectAgent}>
        <circle cx="140" cy="140" r="25" />
        <circle cx="160" cy="160" r="25" />
      </g>




    </svg>
  )
}

export default App;
