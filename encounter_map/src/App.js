import React, { useState, useEffect } from 'react';
import './App.css';
import { ReactComponent as CastleMap } from './assets/castle_map.svg'

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
      // currentTarget for group svg id
      setAgency(e.currentTarget.id)
      setTurn('movingAgent')
    }
  }

  function movingAgent(e) {
    if (turn === 'movingAgent') {
      let agent = document.getElementById(agency)
      agent.setAttributeNS(null,"transform",`translate(${e.clientX},${e.clientY})`)
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

      <CastleMap />

      <circle id="blueAgent" onClick={selectAgent} transform="translate(20,20)" className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="blue" />

      <circle id="orangeAgent" onClick={selectAgent} transform="translate(40,40)" className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="orange" />

      <circle id="purpleAgent" onClick={selectAgent} transform="translate(60,60)" className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="purple" />

      <circle id="redAgent" onClick={selectAgent} transform="translate(80,80)" className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="red" />

      <circle id="yellowAgent" onClick={selectAgent} transform="translate(100,100)" className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="yellow" />

      <g id="groupTest" onClick={selectAgent} transform="translate(40,40)"
        visibility="hidden" fill="white" stroke="purple" strokeWidth="5"
      >
        <circle cx="0" cy="0" r="25" />
        <circle cx="10" cy="10" r="25" />
      </g>




    </svg>
  )
}

export default App;
