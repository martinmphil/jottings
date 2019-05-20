import React, { useState, useEffect } from 'react'
import './App.css'
import { ReactComponent as CastleMap } from './assets/castle_map.svg'
import DeltaMarker from './assets/DeltaMarker'
import IMarker from './assets/IletterMarker'
import DaggerMarker from './assets/DaggerMarker'
import ShieldMarker from './assets/ShieldMarker'
import EyeMarker from './assets/EyeMarker'
import AxeMarker from './assets/AxeMarker'
import MaulMarker from './assets/MaulMarker'
import PhaistosianMarker from './assets/PhaistosianMarker'
import PlumedHeadMarker from './assets/PlumedHeadMarker'
import SplitBoughMarker from './assets/SplitBoughMarker'
import LightningMarker from './assets/LightningMarker'
import SwordsMarker from './assets/SwordsMarker'
import ArrowMarker from './assets/ArrowMarker'

function App() {

  const [turn, setTurn] = useState('selectingAgent')

  const [agency, setAgency] = useState('')

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
      e.currentTarget.classList.add('active')
      setTurn('movingAgent')
    }
  }

  function openArea (x,y) {
    let result = true
    const fullAgentList = Array.from( document.querySelectorAll('.agentMarker') )
    const otherAgentList = fullAgentList.filter(j => j.id !== agency)
    otherAgentList.forEach(
      function(el) {
        let a = el.getBoundingClientRect()
        let x1 = a.left + 2
        let x2 = x1 + a.width -2
        let y1 = a.top +2
        let y2 = y1 + a.height -2
        if (x > x1 && x < x2 && y > y1 && y < y2) {
          // alert('Collision')
          result = false
        }
      }
    )
    return result
  }

  function movingAgent(e) {
    if (turn === 'movingAgent' && openArea(e.clientX,e.clientY)) {
      let agent = document.getElementById(agency)
      agent.setAttributeNS(null,"transform",`translate(${e.clientX},${e.clientY})`)
      agent.classList.remove('active')
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

      <circle id="blueAgent" transform="translate(20,20)" onClick={selectAgent} className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="blue" />

      <circle id="orangeAgent" transform="translate(40,40)" onClick={selectAgent} className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="orange" />

      <circle id="purpleAgent" transform="translate(60,60)" onClick={selectAgent} className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="purple" />

      <circle id="redAgent" transform="translate(80,80)" onClick={selectAgent} className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="red" />

      <circle id="yellowAgent" transform="translate(100,100)" onClick={selectAgent} className="agentMarker" cx="0" cy="0" r="10" stroke="black" fill="yellow" />


      <g id="whiteQueenMarker" transform="translate(300,300)" className="agentMarker" onClick={selectAgent}>
        <circle r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="central" fill="white">♕</text>
      </g>

      <DaggerMarker
        id="daggerOnBlack"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,40)"
      />

      <ShieldMarker 
        id="shieldOnBlack"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,65)"
      />

      <SwordsMarker
        id="reticleMarker"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,90)"
      />

      <ArrowMarker
        id="ArrowMarker"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,115)"
      />
      
      <EyeMarker
        id="eyeballOnBlack"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(100,320)"
      />

      <AxeMarker
        id="axeOnBlack"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,140)"
      />
      <MaulMarker
        id="maulOnBlack"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,165)"
      />

      <PhaistosianMarker
        id="phaistosianMarker"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,190)"
      />

      <PlumedHeadMarker
        id="plumedHeadMMarker"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,215)"
      />

      <SplitBoughMarker
        id="splitBowMMarker"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,245)"
      />

      <LightningMarker
        id="lightningMarker"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,270)"
      />

      

    
      

      <DeltaMarker
        id="deltaOnBlack"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(110,395)"
      />

      


    

      <IMarker
        id="charaIOnBlack"
        onClick={selectAgent}
        className="agentMarker"
        transform="translate(10,360)"
      />

      

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
