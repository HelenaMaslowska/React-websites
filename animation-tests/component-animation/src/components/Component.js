import React from 'react'
import { Spring } from 'react-spring'
import Component1 from './Component'

export default function Component() {
  return (
    <div className={Component1}>
      <div>
          <h1>Component 1</h1>
          <p>paragraph 1</p>
      </div>
    </div>
  )
}

const somestyle = {
    background: 'steelblue',
    color: 'black',
    padding: '1rem',
    borderRadius: '40px',
}