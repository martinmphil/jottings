/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react'
import './App.css'
import { ReactComponent as CastleMap } from './assets/castle_map.svg'

function App() {

  const [turn, setTurn] = useState('selectingAgent')

  const [agency, setAgency] = useState('')

  // establish marker size
  // useEffect( () => {
  //   const nodeList = document.querySelectorAll('.boundaryCircle')
  //   nodeList.forEach(j => j.setAttribute('r', '16'))
  // }, [])

  useEffect( () => {
    window.addEventListener('click', movingAgent)
    return () => {
      window.removeEventListener('click', movingAgent)
    }
  })

  function openArea (x,y,otherAgentList) {
    let result = true
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
    const fullAgentList = Array.from( document.querySelectorAll('.agentMarker') )
    const otherAgentList = fullAgentList.filter(j => j.id !== agency)
    if (turn === 'movingAgent' && openArea(e.clientX,e.clientY,otherAgentList)) {
      let agent = document.getElementById(agency)
      agent.setAttributeNS(null,"transform",`translate(${e.clientX},${e.clientY})`)
      agent.classList.remove('active')
      setTurn('selectingAgent')
    }
  }

  function selectAgent(e) {
    if (turn === 'selectingAgent') {
      // currentTarget for group svg id
      setAgency(e.currentTarget.id)
      e.currentTarget.classList.add('active')
      setTurn('movingAgent')
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

      <circle id="blueAgent" transform="translate(60,20)" onClick={selectAgent}
       className="agentMarker boundaryCircle" r="16" cx="0" cy="0" stroke="black"
       fill="blue"
      />

      <circle id="orangeAgent" transform="translate(100,20)" onClick={selectAgent}
        className="agentMarker boundaryCircle" r="16" cx="0" cy="0" stroke="black"
        fill="orange"
      />

      <circle id="purpleAgent" transform="translate(140,20)" onClick={selectAgent}
        className="agentMarker boundaryCircle" r="16" cx="0" cy="0" stroke="black"
        fill="purple"
      />

      <circle id="redAgent" transform="translate(180,20)" onClick={selectAgent}
        className="agentMarker boundaryCircle" r="16" cx="0" cy="0" stroke="black"
        fill="red"
      />

      <circle id="yellowAgent" transform="translate(220,20)" onClick={selectAgent}
        className="agentMarker boundaryCircle" r="16" cx="0" cy="0" stroke="black"
        fill="yellow"
      />


      <g id="daggerMarker" transform="translate(20,60)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">🗡</text>
      </g>

      <g id="arrowMarker" transform="translate(20,100)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">➸</text>
      </g>

      <g id="swordMarker" transform="translate(20,140)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">⚔</text>
      </g>

      <g id="axeMarker" transform="translate(20,180)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">𐇞</text>
      </g>

      <g id="doubleArrowMarker" transform="translate(20,220)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">↟</text>
      </g>

      <g id="starMarker" transform="translate(20,260)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">★</text>
      </g>

      <g id="phaistosianMarker" transform="translate(20,300)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">𐇐</text>
      </g>

      <g id="pickAxeMarker" transform="translate(20,340)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">⛏</text>
      </g>

      <g id="skullMarker" transform="translate(20,380)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">☠</text>
      </g>


      <g id="sixPipMarker" transform="translate(60,60)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">⚅</text>
      </g>

      <g id="fivePipMarker" transform="translate(60,100)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">⚄</text>
      </g>

      <g id="fourPipMarker" transform="translate(60,140)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">⚃</text>
      </g>

      <g id="threePipMarker" transform="translate(60,180)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">⚂</text>
      </g>

      <g id="twoPipMarker" transform="translate(60,220)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">⚁</text>
      </g>

      <g id="onePipMarker" transform="translate(60,260)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">⚀</text>
      </g>


      <g id="deltaMarker" transform="translate(60,300)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">Δ</text>
      </g>

      <g id="iLetterMarker" transform="translate(60,340)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">I</text>
      </g>

      <g id="flagMarker" transform="translate(60,380)" className="agentMarker" onClick={selectAgent}>
        <circle className="boundaryCircle" r="16" cy="0" cx="0" fill="black" stroke="black" strokeWidth="1" />
        <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="white">🚩</text>
      </g>

    </svg>
  )
}

export default App;
