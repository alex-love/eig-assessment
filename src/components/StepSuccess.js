import React, {useRef, useState} from 'react'
import {Link} from '@reach/router'
import BaseStep from './BaseStep'
import SubmitButton from './SubmitButton'
import UploadButton from './UploadButton'
import ImageStore from '../lib/ImageStore'
import ImagePreviews from './ImagePreviews'
export default function StepSuccess(props) {
  
  return (
    <div className="step-success">
      <BaseStep>
      <p> Thank you for uploading photos! This will greatly help us process your claim (#{props.claimNumber || '11242'}).</p>
      <p>If you'd like to add additional pictures, just click the button below.</p>
      <p>You can add pictures at a later date, as well, by using the link provided to you in the email.</p>
      </BaseStep>
      <div className="buttons">
        <Link to="/"><UploadButton className="mb-2"/></Link>
        
      </div>
    </div>
  )
}
