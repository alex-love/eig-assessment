import React from 'react'
import BaseButton from './BaseButton'
export default function SubmitButton(props) {
  const styles = {
    backgroundColor: 'red',
    color: 'blue',
  }
  return (
    <div>
      <BaseButton 
        label="Submit"
        style={styles}
      />
    </div>
  )
}
