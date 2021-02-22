import React from 'react'
import BaseStep from './BaseStep'
import UploadButton from './UploadButton'
export default function StepSuccess(props) {
  
  return (
    <div className="step-success">
      <BaseStep>
      <p> Thank you for uploading photos! This will greatly help us process your claim (#{props.claimNumber || '11242'}).</p>
      <p>If you'd like to add additional pictures, just click the button below.</p>
      <p>You can add pictures at a later date, as well, by using the link provided to you in the email.</p>
      <div className="buttons">
        <UploadButton isLink={true} className="mb-2"/>
      </div>
      </BaseStep>
    </div>
  )
}
