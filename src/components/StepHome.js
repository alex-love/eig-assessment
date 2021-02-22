import React, {useEffect, useState} from 'react'
import BaseStep from './BaseStep'
import SubmitButton from './SubmitButton'
import UploadButton from './UploadButton'
import ImagePreviews from './ImagePreviews'

import { Link } from '@reach/router'

export default function StepHome(props) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    console.log('test', images)
  }, [images])
  function handleFiles(files) {
    let tmp = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/')){ continue } 
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target)
        tmp.push({image: e.target.result, key: i, name: file.name})
      }
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        setImages([...images, ...tmp]); 
      }
    }
  }

  return (
    <div class="step-home">
      <BaseStep>
      <p className="ta-left">Hi, [Name]</p>
  <p className="ta-left"> In order to most accurately process your recent claim (#{props.claimNumber}), we ask that you submit photos of the damage you reported. </p>
      <div className="buttons">
        <UploadButton className="mb-2" updateImages={handleFiles}/>
        {images.length > 0 && <Link to='/success'><SubmitButton disabled/></Link>}
        <ImagePreviews images={images} />
      </div>
      </BaseStep>
    </div>
  )
}
