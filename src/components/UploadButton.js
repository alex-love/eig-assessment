import React from 'react'
import BaseButton from './BaseButton'
import {Link} from '@reach/router'
import '../styles/UploadButton.scss';
export default function UploadButton(props) {
  const {isLink} = props;
  const handleImageUpload = event => {
    const files = event.target.files
    props.updateImages(files);
  }

  return (
    <div>
      
       <div className="upload-wrap">
      {isLink ? <Link to="/"><BaseButton 
        label="Upload Photos"
        color="blue"
      /></Link> : <div> <BaseButton 
      label="Upload Photos"
      color="blue"
    />
    <input onChange={handleImageUpload} type="file" id="fileUpload" accept="image/x-png,image/gif,image/jpeg" multiple /> </div>
    }
    </div>
    </div>
  )
}



