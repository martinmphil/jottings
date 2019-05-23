import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import App from './App'

let container;

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('renders svg', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  })
  const svg = container.querySelector('svg')
  expect(svg.getAttribute('width')).toEqual('100%')
  expect(svg.getAttribute('xmlns')).toMatch(/svg/)
  expect(svg.getAttribute('id')).toMatch(/mainMap/)
})

it('has active class only on picked dot', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  })
  const agentP = container.querySelector('#purpleAgent')
  const agentY = container.querySelector('#yellowAgent')
  act(() => {
    agentP.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  expect(agentP.getAttribute('class')).toMatch(/agentMarker dotBoundary active/)
  expect(agentY.getAttribute('class')).toMatch(/agentMarker dotBoundary/)
  expect(agentY.getAttribute('class')).not.toMatch(/active/)
})