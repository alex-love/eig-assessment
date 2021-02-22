import React from 'react'
import {Link} from '@reach/router'
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
        <Link to="/"><UploadButton isLink={true} className="mb-2"/></Link>
        
      </div>
      </BaseStep>
    </div>
  )
}
