import React from 'react'
import '../styles/BaseButton.scss'
export default function BaseButton(props) {
  return (
    <button className={`btn btn-${props.color}`}>
      <p>{props.label}</p>
    </button>
  )
}
