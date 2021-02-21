import React, {useRef, useState} from 'react'
import BaseStep from './BaseStep'
import SubmitButton from './SubmitButton'
import UploadButton from './UploadButton'
import ImageStore from '../lib/ImageStore'
import ImagePreviews from './ImagePreviews'

import { Link } from '@reach/router'

export default function StepHome(props) {
  const [images, updateImages] = useState([]);
  function handleFiles(files) {
    let fileImages = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.table(files);
      if (!file.type.startsWith('image/')){ continue } 
      const img = document.createElement("img");
      img.file = file;
      const reader = new FileReader();
      reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      reader.readAsDataURL(file);
      fileImages.push(img);
      const newImages = [...images, img]
      updateImages(newImages);
    }
    console.log(images);
    // updateImages()
  }
  return (
    <div>
      <BaseStep>
  <p> In order to most accurately process your recent claim (#{props.claimNumber}), we ask that you submit photos of the damage you reported. </p>
      <div className="buttons">
        <UploadButton className="mb-2" updateImages={handleFiles}/>
        {images.length > 0 && <Link to='/success'><SubmitButton disabled/></Link>}
        <ImagePreviews images={[1,2,3]} />
      </div>
      </BaseStep>
    </div>
  )
}
