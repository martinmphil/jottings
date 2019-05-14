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

it('renders redDot svg image', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  })
  const rd = container.querySelector('#redDot')
  expect(rd).toHaveProperty('src')
  expect(rd.src).toMatch(/.svg/)
})