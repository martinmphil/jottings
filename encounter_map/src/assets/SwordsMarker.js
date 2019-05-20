import React from 'react';
function SwordsMarker(props) {
  return(
  <g
    id={props.id}
    onClick={props.onClick}
    className={props.className}
    transform={props.transform}
  >
    <circle
       r="10"
       cy="0"
       cx="0"
       fill="black" stroke="black"
       strokeWidth="1" />
    <text x="0" y="0" textAnchor="middle" dominantBaseline="central" fill="white">⚔</text>
  </g>
)}

export default SwordsMarker;